import { API, graphqlOperation } from "aws-amplify"
import {listUsers as ListUsers} from '../../graphql/queries'

import { useState, useEffect } from "react"
import { StarFilled } from "@ant-design/icons"

function Leaderboard() {
    const [state,setState] = useState([])
    
    

    async function fetchData () {
        let users = await API.graphql(graphqlOperation(ListUsers))
        users = users.data.listUsers.items
        users.sort((x,y)=>  y.score-x.score)
        setState(users)    
      }

    useEffect(()=> {
       fetchData()
    },[])

   


  return (
    <>
    {state.length===0 ? <div className="no-quizzes">Loading...</div> :
      <div className="leaderboard">
        <table>
          <thead>
            <tr>
              <th>Rank</th>
              <th>User</th>
              <th>Score</th>
            </tr>
          </thead>
          <tbody>
            {state.map((u,i)=> {
              return <tr key={i}>
                      <td>
                        <StarFilled className={`${i+1 > 3 ? "hide" : ""} ${i+1 == 1 ? "gold" : ""} ${i+1 == 2 ? "silver" : ""} ${i+1 == 3 ? "bronze" : ""}`}/>
                        {i+1}</td>
                      <td>{u.username}</td>
                      <td>{u.score}</td>
                    </tr>
            })}
          </tbody>
        </table>
    </div>}
    </>
  )
}

export default Leaderboard