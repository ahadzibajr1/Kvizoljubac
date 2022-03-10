import {API, graphqlOperation } from 'aws-amplify'
import { useEffect,useState } from 'react'
import { getUser as GetUser } from '../graphql/queries'


const Stats = ({user, signOut}) => {
   const [score,setScore] = useState()
   /*useEffect(async ()=> 
   {  let score = await API.graphql(graphqlOperation(GetUser(user.id))).data.getUser.score
        setScore(score)}
   ,[])*/
    
  return (
    <>
    <h1>Hi, {user.username}</h1>
    <h4>Points: {score}</h4>
    </>
  )
}

export default Stats