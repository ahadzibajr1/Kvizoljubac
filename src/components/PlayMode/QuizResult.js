import { useEffect } from "react"
import { useNavigate} from "react-router-dom"
import QuizPlayMode from "./QuizPlayMode"


const QuizResult = ({score, handleResult}) => {
  
  
  function replay() {
      window.location.reload()
      //restartQuiz(score.points)
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