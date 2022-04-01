//Imported components
import {  useNavigate } from "react-router-dom"
import { QuizCardCollection } from "../../ui-components"

const MyQuizzes = ({myQuizzes}) => {
  const navigate = useNavigate()
  function deleteQuiz(e) {
    e.preventDefault()
    let id = e.target.id
    navigate('/delete/' + id)
  }
   

  return (
    <div className="quiz-container my-quizzes">
        {myQuizzes.length === 0 ? <div className="no-quizzes">No quizzes to show</div> :
        <QuizCardCollection className="my-quiz-collection"
        items={myQuizzes}
        overrideItems={({ item, index }) => ({
            defaultImage: '/defaultQuiz.png',
            btnLabel: 'Delete',
            overrides: {
              'Button': {onClick: deleteQuiz, id: item.id}
            }
          })}
        />
        }
    </div>
  )
}

export default MyQuizzes