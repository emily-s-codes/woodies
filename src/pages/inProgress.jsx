import { useNavigate } from "react-router-dom";
import Footer from "../components/footer/Footer";
import "./inProgress.css"

const PageInProgress = () => {
    const navigate = useNavigate()
    return (<>
        <main className="inProgressMain">
            <h1 className="inProgressH1">SORRY! this page is still in progress</h1>
            <button onClick={() => navigate(-1)}>Go Back</button>
        </main>
        <Footer />
    </>);
}

export default PageInProgress;