import "./BurgerMenu.css"
import { stack as Menu } from 'react-burger-menu'
import { NavLink } from "react-router-dom";
import React, { useState } from "react";
// import { GiHamburgerMenu } from "react-icons/gi"
// import { IoCloseSharp } from "react-icons/io5"
import BurgerIcon from "../burgerIcon/BurgerIcon";
import { bool, func } from 'prop-types';

const BurgerMenu = () => {
    const [menuOpen, setMenuOpen] = useState(false)
    const [icon, setIcon] = useState(true)
    const [open, setOpen] = useState(false)

    const closeMenu = () => {
        setMenuOpen(!menuOpen)
        setIcon(!icon)
    }
    BurgerIcon.propTypes = {
        open: bool.isRequired,
        setOpen: func.isRequired,
    }
    return (
        <Menu
            right
            width={'100%'}
            onClose={closeMenu}
            closeMenu={closeMenu}
            overlayClassName={"myOverlay"}
            customBurgerIcon={<BurgerIcon menuOpen={menuOpen} onClick={() => setMenuOpen(!menuOpen)} />}
            customCrossIcon={false}
        >
            <NavLink to='/' onClick={() => closeMenu()}>Home</NavLink>
            <NavLink to="/about" onClick={() => closeMenu()}>About</NavLink>
            <NavLink to="/how" onClick={() => closeMenu()}>How it Works</NavLink>
            <NavLink to="/categories" onClick={() => closeMenu()}>Categories</NavLink>
            <NavLink to="/testimonials" onClick={() => closeMenu()}>Testimonials</NavLink>
            <NavLink to="/tbd" onClick={() => closeMenu()}>SIGN UP</NavLink>
        </Menu >

    );
}

export default BurgerMenu;