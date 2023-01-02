import "./Footer.css"
import logo from "../../assets/img/Logo.png"
import { Link } from "react-router-dom";

const Footer = () => {
    const Tel = ({ phone, children }) => {
        return <a href={`tel:${phone}`}>{children}</a>
    }

    const Email = ({ email, children }) => {
        return <a href={`mailto:${email}`}>{children}</a>
    }

    return (
        <footer>
            <div className="border"></div>
            <section>
                <Link to={"/"}><img src={logo} alt="woodies" /></Link>
                <ul className="ul1">
                    <li>
                        <Tel phone="0123456789">
                            (012)34567890
                        </Tel>
                    </li>
                    <li>
                        <Email email="email@email.com">
                            email@email.com
                        </Email>
                    </li>
                    <li>
                        <a href="https://goo.gl/maps/mZsCGCdjPzXEf8Ga8" rel="noopener noreferrer" target="_blank">Jakarta, Indonesia</a>
                    </li>
                </ul>
                <h2 className="h2_2">Product</h2>
                <ul className="ul2">
                    <li><Link to="/tbd">Furnitures</Link></li>
                    <li><Link to="/tbd">Packages</Link></li>
                    <li><Link to="/tbd">Services</Link></li>
                </ul>
                <h2 className="h2_3">Resources</h2>
                <ul className="ul3">
                    <li><Link to="/tbd">Blog</Link></li>
                    <li><Link to="/tbd">FAQs</Link></li>
                    <li><Link to="/tbd">Contact Us</Link></li>
                </ul>
                <h2 className="h2_4">Company</h2>
                <ul className="ul4">
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/tbd">Jobs</Link></li>
                    <li><Link to="/tbd">Our Team</Link></li>
                </ul>
                <h2 className="h2_5">Follow Us</h2>
                <ul className="ul5">
                    <li><Link to="/tbd">Facebook</Link></li>
                    <li><Link to="/tbd">Instagram</Link></li>
                    <li><Link to="/tbd">Twitter</Link></li>
                </ul>
            </section>
            <article>
                <p>© 2022 ECS</p>
            </article>
        </footer >);
}

export default Footer;