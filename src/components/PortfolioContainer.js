import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Jumbotron from "./Jumbotron";
import Navbar from "./Navbar";
import Footer from "./Footer"
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

class Portfolio extends Component {
    state = {
        currentPage: "Home"
    };

    render() {
        return (
            <Router>
                <div>
                    <main>
                    
                        <Jumbotron />
                        <Navbar
                            currentPage={this.state.currentPage}
                        />
                        <Route exact path="/" component={Home} />
                        <Route exact path="/about" component={About} />
                        <Route exact path="/projects" component={Projects} />
                        <Route path="/contact" component= {Contact} />
                    </main>
                    <Footer />
                </div>
            </Router>

        );
    }
}

export default Portfolio;
