import React from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar(props) {
    const location = useLocation();
    return (
        <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-dark">
            {/* <a className="navbar-brand" href="#">Navbar</a> */}
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>
                        Home
                    </Link>

                    {/* <a
                        href="#home"
                        onClick={() => props.handlePageChange("Home")}
                        className={props.currentPage === "Home" ? "nav-link active" : "nav-link"}
                    >
                        Home
                    </a> */}
                    <Link
                        to="/about"
                        className={location.pathname === "/about" ? "nav-link active" : "nav-link"}
                    >
                        About
                    </Link>

                    {/* <a
                        href="#about"
                        onClick={() => props.handlePageChange("About")}
                        className={props.currentPage === "About" ? "nav-link active" : "nav-link"}
                    >
                        About
                    </a> */}
                    <Link
                        to="/contact"
                        className={location.pathname === "/contact" ? "nav-link active" : "nav-link"}
                    >
                        Contact
                    </Link>

                    {/* <a
                        href="#contact"
                        onClick={() => props.handlePageChange("Contact")}
                        className={props.currentPage === "Contact" ? "nav-link active" : "nav-link"}
                    >
                        Contact
                    </a> */}
                    <Link
                        to="/projects"
                        className={location.pathname === "/projects" ? "nav-link active" : "nav-link"}
                    >
                        Projects
                    </Link>

                    {/* <a
                        href="#projects"
                        onClick={() => props.handlePageChange("Projects")}
                        className={props.currentPage === "Projects" ? "nav-link active" : "nav-link"}
                    >
                        Projects
                    </a> */}
                </div>
            </div>
        </nav>
    )
}

export default Navbar;