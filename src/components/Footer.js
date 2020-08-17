import React from "react";
import "./footer.css";

function Footer() {
    return (
        <footer className="footer">
        <em>Copyright &copy; 2020, Kathryn Teall. All Rights Reserved  </em>
        <strong className="footer-dots"> · </strong>
        <a href="mailto:katgrace0808@gmail.com?subject=Portfolio" class="fas fa-envelope-open-text" alt="email"> </a>
        <strong className="footer-dots"> · </strong>
        <a href="https://www.linkedin.com/in/kathrynteall79688825" class="fab fa-linkedin"> </a>
        <strong className="footer-dots"> · </strong>
        <a href="https://github.com/katgrace0808" class="fab fa-github"> </a>
        <strong className="footer-dots"> · </strong>
        <a href="assets/Kathryn-Teall-Resume.pdf" className="footer-resume"> Resume </a>
        <strong className="footer-dots"> · </strong>
        <a href="tel:+12062454562" className="footer-phone"> Phone: (206) 245-4562 </a>
      </footer>  
    )
}

export default Footer;