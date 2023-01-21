import "./BurgerMenu.css"
import { Link, NavLink } from "react-router-dom";
import React from "react";
import { GiHamburgerMenu } from "react-icons/gi"
import { IoCloseSharp } from "react-icons/io5"
import logo from "../../assets/img/Logo.png"

const BurgerMenu = ({ burgerMenu, setBurgerMenu }) => {


    const showBurgerMenu = () => setBurgerMenu(!burgerMenu);

    return (<div className="smMenuWrapper">
        <div className="burgerWrapper">
            <Link to="/"><img src={logo} alt="woodies" /></Link>
            <Link to="#" className="burger">
                <GiHamburgerMenu onClick={showBurgerMenu} />
            </Link>
        </div>
        <nav className={burgerMenu ? `burger-menu active` : `burger-menu`}>
            <div className="xWrapper">
                <Link to="/"><img src={logo} alt="woodies" /></Link>
                <NavLink to="#" className='menu-X'
                    onClick={showBurgerMenu}>
                    <IoCloseSharp />
                </NavLink>
            </div>
            <NavLink to='/' onClick={showBurgerMenu} className='nav-text'>Home</NavLink>
            <NavLink to="/about" onClick={showBurgerMenu} className='nav-text'>About</NavLink>
            <NavLink to="/how" onClick={showBurgerMenu} className='nav-text'>How it Works</NavLink>
            <NavLink to="/categories" onClick={showBurgerMenu} className='nav-text'>Categories</NavLink>
            <NavLink to="/testimonials" onClick={showBurgerMenu} className='nav-text'>Testimonials</NavLink>
            <NavLink to="/tbd" onClick={showBurgerMenu} className='nav-text sign-up'>SIGN UP</NavLink>
        </nav>
    </div>);
}

export default BurgerMenu;