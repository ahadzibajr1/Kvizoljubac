//Imports from react
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState,useEffect,useRef } from 'react';


//Imports from AWS
import { API, graphqlOperation, Auth, Storage} from 'aws-amplify'
import { withAuthenticator } from '@aws-amplify/ui-react';
import { listQuizzes as ListQuizzes, listPlayedQuizzes as ListPlayedQuizzes, getUser} from './graphql/queries'
import * as queries from './graphql/queries'
import * as mutations from './graphql/mutations'
import '@aws-amplify/ui-react/styles.css';
import { AmplifyProvider } from '@aws-amplify/ui-react'

//Imported components
import Header from './components/Header/Header'
import Play from './components/Play/Play'
import MyQuizzes  from './components/MyQuizzes/MyQuizzes';
import DeleteQuiz from './components/MyQuizzes/DeleteQuiz';
import Create from './components/Create/Create';
import Leaderboard from './components/Leaderboard/Leaderboard';
import QuizPlayMode from './components/PlayMode/QuizPlayMode';



function App({ signOut, user }) {
  const [score,setScore] = useState()
  const [myQuizzes,updateMyQuizzes] = useState([])
  const componentMounted = useRef(true);


  useEffect(async ()=> {
    let userInfo = await Auth.currentUserInfo()
     const id = userInfo.attributes.sub
     const user = await API.graphql(graphqlOperation(getUser, { id: id}))
     setScore(user.data.getUser.score)
     let fetched = await fetchQuizzes('my')

     if (componentMounted.current){ 
       updateMyQuizzes(fetched)
     }
     
     return () => { 
           componentMounted.current = false; 
     }
     
  },[user])

  async function fetchQuizzes(type) {
    
    switch(type) {
      case 'other':
        
      const quizData = await API.graphql(graphqlOperation(ListQuizzes, {
        filter: {
            authorId: {
              ne: user.attributes.sub
            }
          }}))
      const quizzes = quizData.data.listQuizzes.items
      await Promise.all(quizzes.map(async quiz => {
            if (quiz.image) {
              const image = await Storage.get(quiz.image);
              quiz.image = image;
            }
            return quiz;
            }))
      
      return quizData.data.listQuizzes.items
      
      
      case 'my':
        const myQuizData = await API.graphql(graphqlOperation(ListQuizzes, {
          filter: {
              authorId: {
                eq: user.attributes.sub
              }
          }}))
          const myQuizzes = myQuizData.data.listQuizzes.items
          await Promise.all(myQuizzes.map(async quiz => {
            if (quiz.image) {
              const image = await Storage.get(quiz.image);
              quiz.image = image;
            }
            return quiz;
            }))
          return myQuizData.data.listQuizzes.items
      
      
      default:
        return []
    }
    
  }
  
  async function createQuiz(quiz,questions) {
     quiz.authorId = user.attributes.sub
     let newQuiz = await API.graphql({ query: mutations.createQuiz, variables: {input: quiz}});
 
     for (let i=0; i<questions.length; i++){
       let q = questions[i]
       let question = {title: q.title, 
         correctAnswer: q.correctAnswer, 
         firstIncorrectAnswer: q.firstIncorrectAnswer,
         secondIncorrectAnswer: q.secondIncorrectAnswer,
         quizQuestionsId: newQuiz.data.createQuiz.id}
         await API.graphql({ query: mutations.createQuestion, variables: {input: question}});
     }

     if (quiz.image) {
      const image = await Storage.get(quiz.image);
      newQuiz.data.createQuiz.image = image;
    }
     updateMyQuizzes([...myQuizzes,newQuiz.data.createQuiz])
   }

   async function deleteQuiz(id) {
    await API.graphql({ query: mutations.deleteQuiz, variables: {input: {id: id}}})
   }

   async function getQuiz(quizid) {
    const quizData = await API.graphql({ query: queries.getQuiz, variables: { id: quizid }})
    
    if (quizData.data.getQuiz.image) {
        const image = await Storage.get(quizData.data.getQuiz.image);
        quizData.data.getQuiz.image = image;
      }
    
    return quizData
   }

   async function getPlayedQuizzes(id) {
     return await API.graphql(graphqlOperation(ListPlayedQuizzes, {
      filter: {
          userId: {
            eq: user.attributes.sub
          },
          quizID: {
            eq: id
          }
        }}))
   }

   async function createPlayedQuiz(quizid, points) {
      setScore(score + points)
      await Promise.all([API.graphql({ query: mutations.createPlayedQuizzes, variables: {input: {userId: user.attributes.sub, quizID: quizid, points: points}}}),
      API.graphql({query: mutations.updateUser, variables: {input: {id: user.attributes.sub, score: score+points}}})])
    }

   async function updatePlayedQuiz(playedQuiz, points) {
     if(points <= playedQuiz.points)
        return
    
      let newScore = score - playedQuiz.points + points
      setScore(newScore)
      await Promise.all([API.graphql({query: mutations.updatePlayedQuizzes,variables: {input: {id: playedQuiz.id, points: points}}}),
         API.graphql({query: mutations.updateUser, variables: {input: {id: user.attributes.sub, score: newScore}}})])
   }
 
  return (
    <AmplifyProvider>
        <Router>
          <div className="App">

            <Header score={score} user={user} signOut={signOut}/>
            <Routes>
            <Route path="/" element={<Play  fetchQuizzes={fetchQuizzes} />}/>
            <Route path='/play/science' element={<Play  fetchQuizzes={fetchQuizzes} />} />
            <Route path='/play/history' element={<Play  fetchQuizzes={fetchQuizzes}/>} />
            <Route path='/play/geography' element={<Play  fetchQuizzes={fetchQuizzes}/>} />
            <Route path='/play/film' element={<Play  fetchQuizzes={fetchQuizzes}/>} />
            <Route path='/play/music' element={<Play  fetchQuizzes={fetchQuizzes}/>} />
            <Route path='/play/sport' element={<Play  fetchQuizzes={fetchQuizzes}/>} />
            <Route path='/play/other' element={<Play  fetchQuizzes={fetchQuizzes}/>} />
            <Route path='/myquizzes' element={<MyQuizzes myQuizzes={myQuizzes}/>} />
            <Route path="/delete/:id" element={<DeleteQuiz deleteQuiz={deleteQuiz} updateMyQuizzes={updateMyQuizzes} myQuizzes={myQuizzes}/>}/>
            <Route path="/create" element={<Create createQuiz={createQuiz}/>}/>
            <Route path="/leaderboard" element={<Leaderboard/>}/>
            <Route path="/play/:id" element={<QuizPlayMode getQuiz={getQuiz} getPlayedQuiz={getPlayedQuizzes} createPlayedQuiz={createPlayedQuiz} updatePlayedQuiz={updatePlayedQuiz}/>}/>
            </Routes>
          </div>
        </Router>
        </AmplifyProvider>
    
  );
}

export default withAuthenticator(App);

