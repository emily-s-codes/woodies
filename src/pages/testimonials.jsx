import Footer from "../components/footer/Footer";
import "./testimonials.css"
import den from "../assets/img/den.png"
import diningroom from "../assets/img/diningroom.png"
import previousArrow from "../assets/img/previous.png"
import nextArrow from "../assets/img/next.png"
import carousel_indicator from "../assets/img/carousel_indicator.png"
import yellowReview from "../assets/img/yellowReview.png"
import data from "../components/reviews/reviews.json"
import { useState } from "react";
import review from "../assets/img/review.png"

const TestimonialsPage = () => {
    const [currentIndex, setCurrentIndex] = useState(0)

    const next = () => {
        setCurrentIndex((currentIndex + 1) % data.length)
    }

    const previous = () => {
        setCurrentIndex((currentIndex - 1 + data.length) % data.length)
    }

    return (<>
        <main className="testimonialsMain">
            <section className="testimonialsImages">
                <img src={den} alt="den" />
                <img src={diningroom} alt="diningroom" />
            </section>
            <section className="testimonialsCarousel">
                <section className="carouselNav">
                    <img src={review} alt="review" />                </section>
                <div className="arrowsDiv">
                    <img src={previousArrow} alt="previous" onClick={previous} className="previous" />
                    <img src={nextArrow} alt="next" onClick={next} className="next" />
                </div>
                <div className="carouselIndicatorDiv dots">
                    <img src={yellowReview} alt="" />
                    <img src={carousel_indicator} alt="" />
                    <img src={carousel_indicator} alt="" />
                    <img src={carousel_indicator} alt="" />
                </div>
            </section>
        </main>
        <Footer />
    </>);
}

export default TestimonialsPage;