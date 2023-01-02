import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";
import "./BurgerIcon.css"


const BurgerIcon = ({ menuOpen }) => {

    if (menuOpen) {
        return <IoCloseSharp />
    } else {
        return <GiHamburgerMenu />
    }

}


export default BurgerIcon;