import Question from "./Question"

import { useState } from "react"
import { useNavigate } from "react-router-dom";

import { Storage } from "aws-amplify";


const QuestionInfo = ({prevStep,questions,setQuestions,createQuiz,state,imageFile}) => {
    const navigate = useNavigate();
    var initialState = {
        id: 0,
        title: "", 
        correctAnswer:"",
        firstIncorrectAnswer:"",
        secondIncorrectAnswer:""}
    const[currentQuestion, setCurrentQuestion] = useState(initialState)

    function addQuestion() {
        let error = document.getElementById('error-msg-fields')
        if(currentQuestion.title.trim().length === 0 || 
        currentQuestion.correctAnswer.trim().length === 0 ||
        currentQuestion.firstIncorrectAnswer.trim().length === 0 || 
        currentQuestion.secondIncorrectAnswer.trim().length === 0) {
            error.classList.remove('hide')
            return
        }

        if(!error.classList.contains('hide'))
            error.classList.add('hide')

        const newQuestions = [...questions,currentQuestion]
        setQuestions(newQuestions)
        setCurrentQuestion({...initialState, id: currentQuestion.id + 1})
    }

    const onChange = event => {
        const { name, value } = event.target;
        setCurrentQuestion({ ...currentQuestion, [name]: value });
    }

    function remove(id) {
        let newQuestions = questions.filter(q => q.id != id)
        setQuestions(newQuestions)
    }

    async function confirm() {
        let error = document.getElementById('error-message')
        if(questions.length < 3) {
            error.classList.remove('hide')
            return
        } 
        
        if(!error.classList.contains('hide'))
            error.classList.add('hide')
        
        let quiz = {title: state.title, 
                category: state.category,
                difficulty: state.difficulty, 
                authorId: "",
                image: state.image ==""? null : state.image }

        if(imageFile)
            await Storage.put(imageFile.name,imageFile)

        createQuiz(quiz,questions).then(
            navigate("/myquizzes")
        )
    }

  return (
      <div className="question-info-form">
        
        <div className="added-questions">
            <li><p id="error-message" className="hide">You must create at least 3 questions!</p></li>
          {questions.map((q,i)=> {
              return (
                <li key ={i} >
                    <Question question={q} remove={remove}/>
                </li>)
          })}
        </div>

        <div className="question-form">
            <label>Question</label>
            <input type="text" placeholder="Enter a question" name="title" onChange={onChange} 
            value={currentQuestion.title} maxLength="50"></input>

            <label>Correct Answer</label>
            <input type="text" placeholder="Enter the correct answer" name="correctAnswer" onChange={onChange}
            value={currentQuestion.correctAnswer}
            maxLength="50"></input>

            <label>Incorrect Answers</label>
            <input type="text" placeholder="Enter an incorrect answer" name="firstIncorrectAnswer" onChange={onChange}
            value={currentQuestion.firstIncorrectAnswer} maxLength="50"></input>
            <input type="text" placeholder="Enter an incorrect answer" name="secondIncorrectAnswer" onChange={onChange}
            value={currentQuestion.secondIncorrectAnswer} maxLength="50"></input>

            <button onClick={addQuestion} className={` ${questions.length == 20 ? "hide-button" : ""}`} id="add-question-btn">Add</button>
            <p id="error-msg-fields" className="hide">All fields are required!</p>
      
            <div className="button-bar">
                <button onClick={prevStep} id="back-btn">Back</button>
                <button onClick={confirm}>Confirm</button>
            </div>
        </div>
      </div>
    

  )
}

export default QuestionInfo