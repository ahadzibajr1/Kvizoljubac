import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect, useReducer } from 'react';


import { API, graphqlOperation, Amplify, Auth } from 'aws-amplify'
import { withAuthenticator } from '@aws-amplify/ui-react';
import { listQuizzes as ListQuizzes, listUsers as ListUsers } from './graphql/queries'
import '@aws-amplify/ui-react/styles.css';

import Header from './components/Header'
import Play from './components/Play'



function App({ signOut, user }) {

  

  async function fetchQuizzes(type) {
    
    switch (type) {
      case 'science':
         const scienceData = await API.graphql(graphqlOperation(ListQuizzes, {
                          filter: {
                              category: {
                                  eq: "Science"
                              }
                          }}))
          const scienceQuizzes = scienceData.data.listQuizzes.items
          return scienceQuizzes
      break
      case 'geography':
         const geoData = await API.graphql(graphqlOperation(ListQuizzes, {
          filter: {
              category: {
                  eq: "Geography"
              }
          }}))
          const geoQuizzes = geoData.data.listQuizzes.items
          return geoQuizzes
      break
      case 'history':
        const historyData = await API.graphql(graphqlOperation(ListQuizzes, {
          filter: {
              category: {
                  eq: "History"
              }
          }}))
          const historyQuizzes = historyData.data.listQuizzes.items
          return historyQuizzes
      break
      case 'film':
        const filmData = await API.graphql(graphqlOperation(ListQuizzes, {
          filter: {
              category: {
                  eq: "Film"
              }
          }}))
          const filmQuizzes = filmData.data.listQuizzes.items
          return filmQuizzes
      break
      case 'music':
        const musicData = await API.graphql(graphqlOperation(ListQuizzes, {
          filter: {
              category: {
                  eq: "Music"
              }
          }}))
          const musicQuizzes = musicData.data.listQuizzes.items
          return musicQuizzes
      break
      case 'sport': 
      const sportData = await API.graphql(graphqlOperation(ListQuizzes, {
        filter: {
            category: {
                eq: "Sport"
            }
        }}))
        const sportQuizzes = sportData.data.listQuizzes.items
        return sportQuizzes
      break
      case 'other':
        const otherData = await API.graphql(graphqlOperation(ListQuizzes, {
          filter: {
              category: {
                  eq: "Other"
              }
          }}))
          const otherQuizzes = otherData.data.listQuizzes.items
          return otherQuizzes
      break
      default:
         return []
  
    }
    
  }
  
  useEffect(async ()=> {
    const korisnici = await API.graphql(graphqlOperation(ListUsers))
    console.log(korisnici.data.listUsers.items)
    
  }, [] )
   
  
  return (
        <Router>
          <div className="App">
            <button onClick={signOut}>Sign out</button>
            <Header user={user} signOut={signOut}/>
            <Routes>
            <Route path="/" exact render = {(props)=>(
                <></>
              )}
            />
            <Route path='/play/science' element={<Play  fetchQuizzes={fetchQuizzes}/>} />
            <Route path='/play/history' element={<Play  fetchQuizzes={fetchQuizzes}/>} />
            <Route path='/play/geography' element={<Play  fetchQuizzes={fetchQuizzes}/>} />
            <Route path='/play/film' element={<Play  fetchQuizzes={fetchQuizzes}/>} />
            <Route path='/play/music' element={<Play  fetchQuizzes={fetchQuizzes}/>} />
            <Route path='/play/sport' element={<Play  fetchQuizzes={fetchQuizzes}/>} />
            <Route path='/play/other' element={<Play  fetchQuizzes={fetchQuizzes}/>} />
            </Routes>
          </div>
        </Router>
      
    
  );
}

export default withAuthenticator(App);

