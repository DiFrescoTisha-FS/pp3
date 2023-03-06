import { NavLink } from 'react-router-dom'
import Logo from '../images/logo.png'

const Header = () => {
  return (
    <div>
    <nav className="fixed top-0 z-50 w-full bg-[#1DB954] flex flex-col justify-start">
        <NavLink>
            <img src={Logo} alt="Spotify logo" className="w-14" />
        </NavLink>        
    </nav>
    </div>
  )
}

export default Header