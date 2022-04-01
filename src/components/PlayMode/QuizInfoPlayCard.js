

const QuizInfoPlayCard = ({quiz,playedQuiz,playQuiz}) => {
  return (
    <div className="quiz-info-card">
        <img src={quiz.image ? quiz.image : '/defaultQuiz.png'}></img>
        <div>
          <h1>{quiz.title}</h1>
          <h3>Category: {quiz.category}</h3>
          <h3>Difficulty level: {quiz.difficulty}</h3>
          <h3>Number of questions: {quiz.questions.items.length}</h3>
          <h3 id="current-score">Current score: {playedQuiz==null ? 0 :playedQuiz.points}</h3>
          <button onClick={playQuiz}>Start</button>
        </div>
    </div>
  )
}

export default QuizInfoPlayCard