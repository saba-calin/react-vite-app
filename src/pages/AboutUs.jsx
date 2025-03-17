import {Fragment} from "react";
import {Link, NavLink} from "react-router-dom";

const AboutUs = () => {
    return (
        <Fragment>
            {/*<nav>*/}
            {/*    <NavLink to={"/"}>Home</NavLink>*/}
            {/*    <NavLink to={"/about-us"} className={({isActive}) => isActive ? "link-red" : "link-black"}>About Us</NavLink>*/}
            {/*</nav>*/}
            <h1>About Us</h1>
            <p>
                Our company was founded in 2010, with a mission to provide a seamless video streaming service for our customers.
                We believe that watching movies and television shows online should be a hassle-free experience, and we strive to
                achieve this through our user-friendly platform and top-quality content. Our team is dedicated to curating the
                best movies and TV shows for our viewers to enjoy. We prioritize our customers' satisfaction and are
                continuously improving our service, so your feedback is crucial to us. Thank you for choosing us as your go-to
                video streaming service.
            </p>
        </Fragment>
    );
}

export default AboutUs;
