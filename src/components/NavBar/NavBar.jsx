import { CartWidget } from "../CartWidget/CartWidget"
import Logo from "./logo_aggro.png"
import "./NavBar.css"
import {Link, NavLink} from 'react-router-dom';

export const NavBar = () => {
    return (
        <nav className="navbar_menu">    
            <div className="navbar_logo">
                <img src={ Logo } alt="Aggro Store" width={100}/>
            </div>
            <Link to={'/'} className="link">Home</Link>
            <Link to={'category/sellado'} className="link">Sellado</Link>
            <Link to={'category/singles'} className="link">Singles</Link>
            <Link to={'category/accesorios'} className="link">Accesorios</Link>
            <div className="navbar_cart"><CartWidget/></div>
        </nav>

    )
}

export default NavBar;