import { useState, useEffect} from 'react'
import { Link, useLocation } from 'react-router-dom'


const Play = ({fetchQuizzes}) => {
    const [quizzes,updateQuizzes] = useState([])
    const location = useLocation()
     

    useEffect(async ()=> {
            let fetched = []
            switch(location.pathname) {
                case '/play/science':
                    fetched = await fetchQuizzes('science')
                    updateQuizzes(fetched)
                    console.log(fetched)
                break
                case '/play/history':
                    fetched = await fetchQuizzes('history')
                    updateQuizzes(fetched)
                    console.log(fetched)
                break
                case '/play/geography':
                    fetched = await fetchQuizzes('geography')
                    updateQuizzes(fetched)
                    console.log(fetched)
                break
                case '/play/film':
                    fetched = await fetchQuizzes('film')
                    updateQuizzes(fetched)
                    console.log(fetched)
                break
                case '/play/music':
                    fetched = await fetchQuizzes('music')
                    updateQuizzes(fetched)
                    console.log(fetched)
                break
                case '/play/sport':
                    fetched = await fetchQuizzes('sport')
                    updateQuizzes(fetched)
                    console.log(fetched)
                break
                case '/play/other':
                    fetched = await fetchQuizzes('other')
                    updateQuizzes(fetched)
                    console.log(fetched)
                break
            
            }
        }
    , [location])

  return (
    <div className="quiz-container">
        <div className="quiz-categories">
            <ul>
                <li>
                    <Link to='/play/science' className={`link-category ${location.pathname === '/play/science' ? "active" : ""}`}>
                    Science
                    </Link>
                </li>
                <li>
                    <Link to='/play/history' className={`link-category ${location.pathname === '/play/history' ? "active" : ""}`}>
                    History
                    </Link>
                </li>
                <li>
                    <Link to='/play/geography' className={`link-category ${location.pathname === '/play/geography' ? "active" : ""}`}>
                        Geography
                    </Link>
                </li>
                <li>
                    <Link to='/play/film' className={`link-category ${location.pathname === '/play/film' ? "active" : ""}`}>
                        Film
                    </Link>
                </li>
                <li>
                    <Link to='/play/music' className={`link-category ${location.pathname === '/play/music' ? "active" : ""}`}>
                        Music
                    </Link>
                </li>
                <li>
                    <Link to='/play/sport' className={`link-category ${location.pathname === '/play/sport' ? "active" : ""}`}>
                        Sport
                    </Link>
                </li>
                <li>
                    <Link to='/play/other' className={`link-category ${location.pathname === '/play/other' ? "active" : ""}`}>
                        Other
                    </Link>
                </li>
            </ul>
        </div>
        <div >
            {quizzes.map((q,index)=> (
                <h1  key={index}>{q.title}</h1>
            ))}

            
        </div>
        
    </div>
  )
}

export default Play