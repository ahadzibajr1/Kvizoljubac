import { Link } from 'react-router-dom'

import NavBar from './NavBar'
import Stats from './Stats'

const Header = ({user, signOut}) => {
  return (
    <div>
        <div className="top-header">
            <Link to="/" className="cursive" id="logo"><span id="kvizo">Kvizo</span><span id="ljubac">ljubac</span></Link>
            <Stats user={user} signOut={signOut}></Stats>
        </div>
        <NavBar/>
    </div>
  )
}

export default Header