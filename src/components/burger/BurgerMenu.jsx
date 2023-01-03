import "./BurgerMenu.css"
import { Link, NavLink } from "react-router-dom";
import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi"
import { IoCloseSharp } from "react-icons/io5"

const BurgerMenu = () => {
    const [burgerMenu, setBurgerMenu] = useState(false);

    const showBurgerMenu = () => setBurgerMenu(!burgerMenu);

    return (<>
        <div className="burgerWrapper">
            <Link to="#" className="burger">
                <GiHamburgerMenu onClick={showBurgerMenu} />
            </Link>
        </div>
        <nav className={burgerMenu ? `burger-menu active` : `burger-menu`}>
            <NavLink to="#" className='menu-X'
                onClick={showBurgerMenu}>
                <IoCloseSharp />
            </NavLink>
            <NavLink to='/' onClick={showBurgerMenu} className='nav-text'>Home</NavLink>
            <NavLink to="/about" onClick={showBurgerMenu} className='nav-text'>About</NavLink>
            <NavLink to="/how" onClick={showBurgerMenu} className='nav-text'>How it Works</NavLink>
            <NavLink to="/categories" onClick={showBurgerMenu} className='nav-text'>Categories</NavLink>
            <NavLink to="/testimonials" onClick={showBurgerMenu} className='nav-text'>Testimonials</NavLink>
            <NavLink to="/tbd" onClick={showBurgerMenu} className='nav-text'>SIGN UP</NavLink>
        </nav>
    </>);
}

export default BurgerMenu;