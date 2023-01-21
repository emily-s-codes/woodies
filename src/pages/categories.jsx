import Footer from "../components/footer/Footer";
import "./categories.css"
import table from "../assets/img/Tisch.png"
import chair from "../assets/img/Stuhl.png"
import bowls from "../assets/img/Schuesseln.png"
import shelf from "../assets/img/bookshelf.png"
import radio from "../assets/img/radio.png"

const CategoriesPage = ({ burgerMenu }) => {
    return (<div>
        <main className={burgerMenu ? "catMain noScrollbar" : "catMain"}>
            <img src={table} alt="table" />
            <img src={chair} alt="chair" />
            <img src={bowls} alt="bowls" />
            <img src={shelf} alt="shelf" />
            <img src={radio} alt="radio" />
        </main>
        <Footer />
    </div>);
}

export default CategoriesPage;