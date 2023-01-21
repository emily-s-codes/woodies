import "./Intro.css"
import logo from "../../assets/img/woodies-logo-dark.png"

const Intro = ({ pageH1, pageH2 }) => {
    return (
        <section className="introSection">
            <div className="lineDiv">
                <section className="introSectionLeft">
                    <img src={logo} alt="woodies" />
                    <h2>{pageH2}</h2>
                </section>
                <h1>{pageH1}</h1>
            </div>
        </section>);
}

export default Intro;