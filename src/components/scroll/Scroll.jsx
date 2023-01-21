import "./Scroll.css"
import { useState } from "react";
import { FaArrowCircleUp } from 'react-icons/fa';

const Scroll = () => {
    const [visible, setVisible] = useState(false)

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 150) {
            setVisible(true)
        }
        else if (scrolled <= 150) {
            setVisible(false)
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    window.addEventListener('scroll', toggleVisible);
    return (<div className="scrollButtonWrapper">
        <FaArrowCircleUp onClick={scrollToTop}
            style={{ display: visible ? 'inline' : 'none' }} />
    </div>);
}

export default Scroll;