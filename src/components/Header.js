import { Link } from 'react-router-dom'

import NavBar from './NavBar'

const Header = () => {
  return (
    <div>
        <div className="top-header">
            <Link to="/" className="cursive" id="logo"><span id="kvizo">Kvizo</span><span id="ljubac">ljubac</span></Link>
        </div>
        <NavBar/>
    </div>
  )
}

export default Header