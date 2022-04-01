import { useRef,useEffect } from "react"

const Answers = ({answers,onClick}) => {

  return answers.map((a,i)=> <button key={i} onClick={onClick} value={a.correct}
  id={Math.random()} className='answer-btn answer-btn-color'>{a.answer}</button>)
  
}

export default Answers