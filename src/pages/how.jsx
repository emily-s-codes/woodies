import Footer from "../components/footer/Footer";
import "./how.css"
import step1 from "../assets/img/step1.png"
import step2 from "../assets/img/step2.png"
import step3 from "../assets/img/step3.png"
import step4 from "../assets/img/step4.png"
import { Link } from "react-router-dom";

const HowPage = () => {
    return (<div>
        <main className="howMain">
            <section className="howGrid">
                <img src={step1} alt="step one: choose design" />
                <img src={step2} alt="step two: area measuring" />
                <img src={step3} alt="step three: budgeting" />
                <img src={step4} alt="step four: production" />
            </section>
            <Link to={"/tbd"}><button className="personalizeButton">Personalize Now</button></Link>
        </main>
        <Footer />
    </div>);
}

export default HowPage;