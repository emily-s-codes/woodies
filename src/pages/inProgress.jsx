import Footer from "../components/footer/Footer";
import SubscribeBar from "../components/subscribe/Subscribe";

const PageInProgress = () => {
    return (
        <div>
            <main>
                <h1 className="inProgressH1">SORRY! this page is still in progress</h1>
            </main>
            <SubscribeBar />
            <Footer />
        </div>);
}

export default PageInProgress;