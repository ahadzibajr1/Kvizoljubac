import { useEffect } from "react"
import { Navigate, useNavigate} from "react-router-dom"
import QuizPlayMode from "./QuizPlayMode"


const QuizResult = ({score, handleResult,id}) => {
  const navigate = useNavigate()
  
  function replay() {
      
      //restartQuiz(score.points)
      window.location.href = window.location.href;
  }

    useEffect(()=> {
        handleResult()
    },[])
  return (
    <div className="quiz-result">
        <div>
          <h1>Congratulations!</h1>
          <h1>Your score is: {score.points}</h1>
          <button onClick={replay}>Replay</button>
        </div>
    </div>
  )
}

export default QuizResult