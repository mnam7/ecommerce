import './navBar.css'
import CartWidget from '../CartWidget.js'
import {FaSearch} from 'react-icons/fa';


const NavComponent =() => {
    return(
       
        <div className="container-navbar">
          <nav className="nav">
           <div className="logo">
              <p className="logo-text">E-ticketing</p>
           </div>
           <ul className="menu">
            <li>
              <a className="nav-link" href="#fsdf">Conciertos</a>
            </li>
            <li>
              <a className="nav-link" href="#dsf">Teatros</a>
            </li>
            <li>
              <a className="nav-link" href="#sdsd">Deportes</a>
            </li>
           </ul>
           <div className="searchbar">
            <input placeholder='Buscar' />
            <FaSearch id='search-icon'/>
           </div>
           <CartWidget/>
           
           
          </nav>
        </div>
       
    )
}

export default NavComponent