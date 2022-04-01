import {useState} from "react"
 
import QuizInfo from "./QuizInfo"
import QuestionInfo from "./QuestionInfo"


const Create = ({createQuiz}) => {
  const[state, setState] = useState({
    step: 1,
    title: "",
    difficulty: "Easy",
    category: "Science",
    image: ""
  })

  const [imageFile, setImageFile] = useState(null)

  const[questions,setQuestions] = useState([])

  function nextStep() {
    setState(prevState => ({
      ...prevState,
      step: state.step+1
   }));
  }
  
  function prevStep() {
    setState(prevState => ({
      ...prevState,
      step: state.step-1
   }));
  }
  
  const onChange = event => {
    const { name, value } = event.target;
    setState({ ...state, [name]: value });
    if(event.target.files) {
      setState({ ...state, image: event.target.files[0].name})
      setImageFile(event.target.files[0])
    }
      
   
  };
  
  
  

 switch(state.step) {
   case (1):
    return <QuizInfo
      nextStep={nextStep}
      state={state}
      onChange={onChange}
    />
   case (2):
     return <QuestionInfo
      prevStep={prevStep}
      questions={questions}
      setQuestions={setQuestions}
      createQuiz={createQuiz}
      state={state}
      imageFile={imageFile}
     />
    
 }
}

export default Create