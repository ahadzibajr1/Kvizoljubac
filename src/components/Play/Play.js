//Imports from react
import { useState, useEffect} from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'



//Imported components
import { QuizCardCollection }  from '../../ui-components'


const Play = ({fetchQuizzes}) => {
    const [playRoute, updatePlayRoute] = useState(true)
    const [quizzes,updateQuizzes] = useState([])
    const [currentQuizzes,updateCurrentQuizzes] = useState([])
    const location = useLocation()
    const navigate = useNavigate()

    //on route change, update current quizzes by category or update playRoute if new path is not Play
    useEffect(()=> {
            switch(location.pathname) {
                case '/play/science':
                    updateCurrentQuizzes(quizzes.filter((q)=> q.category === 'Science'))
                    if (!playRoute) {
                        console.log("update route")
                        updatePlayRoute(true)
                    }
                break
                case '/play/history':
                    updateCurrentQuizzes(quizzes.filter((q)=> q.category === 'History'))
                    if (!playRoute)
                        updatePlayRoute(true)
                break
                case '/play/geography':
                    updateCurrentQuizzes(quizzes.filter((q)=> q.category === 'Geography'))
                    if (!playRoute)
                        updatePlayRoute(true)
                break
                case '/play/film':
                    updateCurrentQuizzes(quizzes.filter((q)=> q.category === 'Film'))
                    if (!playRoute)
                        updatePlayRoute(true)
                break
                case '/play/music':
                    updateCurrentQuizzes(quizzes.filter((q)=> q.category === 'Music'))
                    if (!playRoute)
                        updatePlayRoute(true)
                break
                case '/play/sport':
                    updateCurrentQuizzes(quizzes.filter((q)=> q.category === 'Sport'))
                    if (!playRoute)
                        updatePlayRoute(true)
                break
                case '/play/other':
                    updateCurrentQuizzes(quizzes.filter((q)=> q.category === 'Other'))
                    if (!playRoute)
                        updatePlayRoute(true)
                break
                case '/':
                    updateCurrentQuizzes(quizzes.filter((q)=> q.category === 'Science'))
                    if (!playRoute)
                        updatePlayRoute(true)
                break
                default:
                    updatePlayRoute(false)
            }
        }
    , [location,playRoute,quizzes])

    //on change of playRoute, fetch quizzes from database
    useEffect(async ()=> {
        let fetched =await fetchQuizzes('other')
        updateQuizzes(fetched)
        let loc = location.pathname.split('/')
        
        if (loc[loc.length-1].length == 0) {
            updateCurrentQuizzes(fetched.filter((q)=> q.category == 'Science'))
        } else {
            updateCurrentQuizzes(fetched.filter((q)=> q.category.toLowerCase() == loc[loc.length-1]))
        }
        
        
    }, [playRoute])

    function playQuiz(e) {
        e.preventDefault()
        let id = e.target.id
        navigate('/play/' + id)
    }
    

  return (
    <div className="quiz-container">
        <div className="quiz-categories">
            <ul>
                <li className={` ${location.pathname === '/play/science' ? "active" : location.pathname === '/' ? "active" : ""}`}>
                    <Link to='/play/science' className={`link-category ${location.pathname === '/play/science' ? "active" : location.pathname === '/' ? "active" : ""}`}
                        id ='science-btn' > 
                    Science
                    </Link>
                </li>
                <li className={` ${location.pathname === '/play/history' ? "active" : ""}`}>
                    <Link to='/play/history' className={`link-category ${location.pathname === '/play/history' ? "active" : ""}`}
                        id='history-btn'>
                    History
                    </Link>
                </li>
                <li className={` ${location.pathname === '/play/geography' ? "active" : ""}`}>
                    <Link to='/play/geography' className={`link-category ${location.pathname === '/play/geography' ? "active" : ""}`}
                        id='geography-btn'>
                        Geography
                    </Link>
                </li>
                <li className={` ${location.pathname === '/play/film' ? "active" : ""}`}>
                    <Link to='/play/film' className={`link-category ${location.pathname === '/play/film' ? "active" : ""}`}
                        id='film-btn'>
                        Film
                    </Link>
                </li>
                <li className={` ${location.pathname === '/play/music' ? "active" : ""}`}>
                    <Link to='/play/music' className={`link-category ${location.pathname === '/play/music' ? "active" : ""}`}
                        id='music-btn'>
                        Music
                    </Link>
                </li>
                <li className={` ${location.pathname === '/play/sport' ? "active" : ""}`}>
                    <Link to='/play/sport' className={`link-category ${location.pathname === '/play/sport' ? "active" : ""}`}
                        id='sport-btn'>
                        Sport
                    </Link>
                </li>
                <li className={` ${location.pathname === '/play/other' ? "active" : ""}`}>
                    <Link to='/play/other' className={`link-category ${location.pathname === '/play/other' ? "active" : ""}`}
                        id='other-btn'>
                        Other
                    </Link>
                </li>
            </ul>
        </div>
        {currentQuizzes.length == 0 ? <div className='no-quizzes'>No quizzes to show</div> :
        <div className='quiz-grid-container'>
            <QuizCardCollection items={currentQuizzes} 
            overrideItems={({ item, index }) => ({
                defaultImage: '/defaultQuiz.png',
                padding: '0px',
                btnLabel: 'Play',
                overrides: {
                    'Button': {onClick: playQuiz, id: item.id}
                }
              })}/>     
        </div>   
        }
    </div>
  )
}

export default Play