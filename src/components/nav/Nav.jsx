import "./Nav.css"
import logo from "../../assets/img/Logo.png"
import { NavLink, Link } from "react-router-dom";


const NavBar = () => {
    return (<nav className="navBar">
        <a href="/"><img src={logo} alt="woodies" /></a>
        <div>
            <ul className="navUL">
                <li><NavLink to='/' className={({ isActive }) => (isActive ? 'active' : '')}>Home</NavLink></li>
                <li><NavLink to='/about' className={({ isActive }) => (isActive ? 'active' : '')}>About Us</NavLink></li>
                <li><NavLink to='/how' className={({ isActive }) => (isActive ? 'active' : '')}>How it Works</NavLink></li>
                <li><NavLink to='/categories' className={({ isActive }) => (isActive ? 'active' : '')}>Categories</NavLink></li>
                <li><NavLink to='/testimonials' className={({ isActive }) => (isActive ? 'active' : '')}>Testimonials</NavLink></li>
                <li><Link to='/tbd'>SIGN UP</Link></li>
            </ul>
        </div>
    </nav >);
}

export default NavBar;