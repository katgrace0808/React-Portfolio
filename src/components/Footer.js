import React from "react";
import "./footer.css";

function Footer() {
    return (
        <footer className="footer">
        <em>Copyright &copy; 2020, Kathryn Teall. All Rights Reserved  </em>
        <strong className="footer-dots">·</strong>
        <a href="mailto:katgrace0808@gmail.com?subject=Portfolio" className="footer-email"> Email </a>
        <strong className="footer-dots">·</strong>
        <a href="assets/Kathryn-Teall-Resume.pdf" className="footer-resume"> Resume </a>
        <strong className="footer-dots">·</strong>
        <a href="https://www.linkedin.com/in/kathrynteall79688825" className="footer-links"> LinkedIn </a>
        <strong className="footer-dots">·</strong>
        <a href="https://github.com/katgrace0808" className="footer-links"> Github </a>
        <strong className="footer-dots">·</strong>
        <a href="tel:+12062454562" className="footer-phone"> Phone: (206) 245-4562 </a>
        {/* <strong className="footer-dots">·</strong> */}
      </footer>  
    )
}

export default Footer;