import { CloseCircleOutlined} from "@ant-design/icons"

const Question = ({question,remove}) => {
  return (
    <div className="question-card">
        <h1>{question.title}</h1>
        <h2 className="correct-answer">Correct Answer: {question.correctAnswer}</h2>
        <h2 className="incorrect-answer">Incorrect Answers:</h2>
        <h4 className="incorrect-answer"> {question.firstIncorrectAnswer}</h4>
        <h4 className="incorrect-answer"> {question.secondIncorrectAnswer}</h4>
        <CloseCircleOutlined className="close" onClick={()=>remove(question.id)}/>
    </div>
  )
}

export default Question