import Footer from "../components/footer/Footer";
import "./about.css"
import topSectionImg from "../assets/img/About.png"
import bottomSectionImg from "../assets/img/spoons.png"

const AboutPage = ({ burgerMenu }) => {
    return (<div>
        <main className={burgerMenu ? "aboutMain noScrollbar" : "aboutMain"}>
            <section className="aboutTopSection">
                <img src={topSectionImg} alt="" />
                <div className="aboutTopSectionP">
                    <p className="bold">WOODIES <span>is the</span> home of modern wooden furniture</p>
                    <p>the answer to your need for furniture with shapes, sizes and colors.</p>
                </div>
            </section>
            <section className="aboutBottomSection">
                <div className="aboutBottomSectionP">
                    <p className="bold"><span>Customized furniture</span> made just for you
                    </p>
                    <p>Easily adjust furniture to the shape and size of your dwelling or business.</p>
                </div>
                <img src={bottomSectionImg} alt="spoons" />
            </section>
        </main>
        <Footer />
    </div>);
}

export default AboutPage;