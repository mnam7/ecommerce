import './navBar.css'
import CartWidget from '../../common/CartWidget.js'
import {FaSearch} from 'react-icons/fa';
import { Link } from 'react-router-dom';


const NavComponent =() => {
    return(
       
        <div className="container-navbar">
          <nav className="nav">
           <div className="logo">
              <Link to="/"><p className="logo-text">E-ticketing</p></Link>
           </div>
           <ul className="menu">
            <li>
              {/*<a className="nav-link" href="#fsdf">Conciertos</a>*/}
              <Link to="/category/clothing">Clothing</Link>
            </li>
            <li>
              {/*<a className="nav-link" href="#dsf">Teatros</a>*/}
              <Link to="/category/jewelery">Jewelery</Link>
            </li>
            <li>
              {/*<a className="nav-link" href="#sdsd">Deportes</a>*/}
              <Link to="/category/electronics">Electronics</Link>      
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