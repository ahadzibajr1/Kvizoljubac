import { sectionFooterSecondaryContent } from "aws-amplify";
import { useEffect,useState,useRef } from "react";

import Answers from "./Answers";



const QuestionPlayCard = ({numberOfQuestions,question,handleAnswer,endQuiz}) => {
  const timer = useRef(null)
  const [seconds,setSeconds] = useState(numberOfQuestions*5)
 
  
  useEffect(()=> {
    console.log('start')
      timer.current = setTimeout(()=> endQuiz(timer),numberOfQuestions*5000)
    return () => {clearTimeout(timer)}
  },[])

 

  useEffect(()=> {
    var interval = null
    interval = setInterval(()=> setSeconds(seconds-1),1000)

    return () => clearInterval(interval)
  },[seconds])

  
  function onClick(e) {
    let clickedAnswer = e.target
    let id = clickedAnswer.id
    let btn = document.getElementById(id)
    if(clickedAnswer.value == "true"){
        btn.classList.remove('answer-btn-color')
        btn.classList.add('correct')
    }
    else {
        btn.classList.remove('answer-btn-color')
        btn.classList.add('incorrect') 
    }
    
      setTimeout(()=>{
      btn.classList.remove('correct'); 
      btn.classList.remove('incorrect');
      btn.classList.add('answer-btn-color')
      handleAnswer(clickedAnswer.value)
      },150)
      
  }

  return (
    <div className="question-component">
         <div className="question-card">
                  <span className="time-indicator">{seconds}s</span> 
                  <h1>{question.title}</h1>
                  <Answers answers={question.answers} onClick={onClick}/>
          </div>
    </div>
    
  )
}

export default QuestionPlayCard