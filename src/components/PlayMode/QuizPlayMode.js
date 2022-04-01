import { useParams } from "react-router-dom"
import { useEffect, useState } from "react";

import QuizInfoPlayCard from "./QuizInfoPlayCard";
import QuestionPlayCard from "./QuestionPlayCard"
import QuizResult from "./QuizResult";


const QuizPlayMode = ({getQuiz,getPlayedQuiz,createPlayedQuiz, updatePlayedQuiz}) => {
  const { id } = useParams();
  const [step,setStep] = useState(0)
  const [score,setScore] = useState({pointsPerQuestion: 0, points: 0})
  const [loaded,setLoaded] = useState(false)
  const [quiz,updateQuiz] = useState({})
  const [playedQuiz,setPlayedQuiz] = useState(null)
  const [questions,updateQuestions] = useState([])

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array
    }
  
  
  useEffect( async ()=> {
      
    Promise.all([ getQuiz(id),getPlayedQuiz(id)]).then(values => {
        updateQuiz(values[0].data.getQuiz)
        
        switch(values[0].data.getQuiz.difficulty) {
            case('Easy'):
                setScore({...score, pointsPerQuestion: 5})
            break
            case('Medium'):
                setScore({...score, pointsPerQuestion: 10})
            break
            case('Hard'):
                setScore({...score, pointsPerQuestion: 20})
            break
        }
        
        if(values[1].data.listPlayedQuizzes.items.length != 0) {
            setPlayedQuiz(values[1].data.listPlayedQuizzes.items[0])
            
        }

        let questions = []

        values[0].data.getQuiz.questions.items.forEach((q)=> {
            let answers = shuffleArray([{answer: q.correctAnswer, correct: true},
                {answer: q.firstIncorrectAnswer, correct: false},
                {answer: q.secondIncorrectAnswer, correct: false}])

            questions.push({title: q.title, answers: answers})
        })
        
        updateQuestions(questions)
        setLoaded(true)
      });
    
    },[])

    //useEffect(()=> {setLoaded(true)}, [questions])

    function playQuiz() {
        setStep(1)
    }

    function handleAnswer(value) {
        if(value=="true") {
            
            setScore(score => ({...score, points: score.points + score.pointsPerQuestion}))
            
        }
        nextQuestion()

    }

    function handleResult() {
        if(playedQuiz==null) {
            createPlayedQuiz(quiz.id, score.points)
        } else {
            updatePlayedQuiz(playedQuiz,score.points)
        }
    }

    

    function nextQuestion() {
        
        if(step+1 <= quiz.questions.items.length) {
            setStep(step+1)
        }
        else {
            setStep(100)
            handleResult()
        }
    }

    function endQuiz(timer) {
        clearTimeout(timer)
        setStep(100)
    }
    
 
    switch(step) {
        case (0):
            return loaded && <QuizInfoPlayCard quiz={quiz} playedQuiz={playedQuiz} playQuiz={playQuiz}/>
        break
        case(100):
            return <QuizResult quiz={quiz} score={score} id={id} handleResult={handleResult} />
        default:
            return <QuestionPlayCard numberOfQuestions={quiz.questions.items.length} question={questions[step-1]} handleAnswer={handleAnswer} endQuiz={endQuiz}/>

    }
    
  
}

export default QuizPlayMode