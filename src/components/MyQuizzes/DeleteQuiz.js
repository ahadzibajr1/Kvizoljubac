import { useEffect } from "react";
import { useParams, useNavigate} from "react-router-dom";


const DeleteQuiz = ({deleteQuiz,updateMyQuizzes,myQuizzes}) => {
    const { id } = useParams();
    const navigate = useNavigate();
    
    useEffect(async ()=> {
        await deleteQuiz(id)
        updateMyQuizzes(myQuizzes.filter(q => q.id!==id))
        navigate('/myquizzes')
    },[])

  return (
    <div className="no-quizzes">Please wait a moment...</div>

  )
}

export default DeleteQuiz