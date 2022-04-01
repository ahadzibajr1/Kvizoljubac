import { Link } from "react-router-dom"

const NavBar = () => {
  return (
    <div className="navbar">
        <ul className="navbar-list">
            <li><Link to="/play/science" className="link">Play</Link></li>
            <li><Link to="/create" className="link">Create</Link></li>
            <li><Link to="/myquizzes" className="link">My Quizzes</Link></li>
            <li><Link to="/leaderboard" className="link">Leaderboard</Link></li>
        </ul>
    </div>
  )
}

export default NavBar