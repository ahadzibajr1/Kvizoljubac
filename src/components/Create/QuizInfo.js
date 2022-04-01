
const QuizInfo = ({nextStep,state, onChange}) => {
    function continueClick() {
        let error = document.getElementById('error-message-title')
        if(state.title.trim().length == 0) {
            error.classList.remove('hide')
            return
        }
            
        if(!error.classList.contains('hide'))
            error.classList.add('hide')

        nextStep()

    }
  return (
      
    <div className="quiz-info-form">
        <div id="quiz-title">
            <label htmlFor="title">Quiz name</label>
            <input type="text" name="title" id="title" maxLength="35" onChange={onChange} value={state.title}></input>
            <p id="error-message-title" className="hide">Quiz name is required!</p>
        </div>

        <div id="category-difficulty">
        <label htmlFor="category">Choose a category:</label>
        <label htmlFor="difficulty">Choose difficulty level:</label>

            <select name="category" id="category" onChange={onChange} value={state.category}>
                <option>Science</option>
                <option>History</option>
                <option>Geography</option>
                <option>Film</option>
                <option>Music</option>
                <option>Sport</option>
                <option>Other</option>
            </select>

        
            <select name="difficulty" id="difficulty" onChange={onChange} value={state.difficulty}>
                <option>Easy</option>
                <option>Medium</option>
                <option>Hard</option>
            </select>
        </div>

        <div id="image-picker" onChange={onChange} value={state.image}>
            <label htmlFor="image">Upload an image:</label>
            <input type="file" name="image"></input>
        </div>

        <button onClick={continueClick}>Continue</button>
    </div>
    
  )
}

export default QuizInfo