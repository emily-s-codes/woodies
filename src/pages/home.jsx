import BurgerMenu from "../components/burger/BurgerMenu";
import NavBar from "../components/nav/Nav";
import home from "../assets/img/Home.png"
import "./home.css"
import { Link } from "react-router-dom";

const Home = ({ burgerMenu, setBurgerMenu }) => {
    return (
        <div className="homeWrapper">
            <div className="homeNavWrapper">
                <NavBar />
                <BurgerMenu burgerMenu={burgerMenu} setBurgerMenu={setBurgerMenu} />
                <main className="homeMain">
                    <section className="homeLeft">
                        <h2 className="bold"><span>Are you looking for</span> wooden furniture <span>for your flat or office?</span></h2>
                        <p className="bold">You've come to the Right Place</p>
                        <Link to={"/tbd"}><button>Explore Furniture</button></Link>
                    </section>
                    <img src={home} alt="table" />
                </main>
            </div>
        </div>

    );
}

export default Home;