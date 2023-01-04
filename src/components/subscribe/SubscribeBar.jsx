import "./SubscribeBar.css"

const SubscribeBar = () => {
    return (<div className="subscribeWrapper">
        <div className="subscribe_left">
            <p className="bold">Subscribe to our newsletter</p>
            <p className="regular">A monthly digest of the new WOODIES products, hot offers, and resources.</p>
        </div>
        <div className="subscribe_right">
            <input type="email" placeholder="Your Email Address" />
            <button>Subscribe</button>
        </div>
    </div>);
}

export default SubscribeBar;