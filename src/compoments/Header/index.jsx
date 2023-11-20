import logoheader from  '../../assets/logoheader.png'
import { NavLink, Link } from 'react-router-dom'

function Header() {
    return (
      <header>
        <Link to="/">
          <img src={logoheader} alt="Logo du site" />
        </Link>
        <nav>
          <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>Accueil</NavLink>
          <NavLink to="/Propos" className={({ isActive }) => isActive ? "active linkpropos" : "linkpropos"}>A Propos</NavLink>
      </nav>
      </header>
    )
  }
  
  export default Header