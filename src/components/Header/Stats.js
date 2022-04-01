import {API, graphqlOperation } from 'aws-amplify'
import {getUser} from '../../graphql/queries'
import { useEffect,useState } from 'react'
import { LogoutOutlined } from '@ant-design/icons';
import { Auth } from '@aws-amplify/auth';



const Stats = ({user, signOut,score}) => {
   
 
    
  return (
    <div className='stats'>
    <h2>Hi, {user.username}!</h2>
    <h4>Score: {score}</h4>
    <LogoutOutlined onClick={signOut} className="logOutIcon"/>
    </div>
  )
}

export default Stats