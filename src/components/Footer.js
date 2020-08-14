import React from "react";
import "./footer.css";

function Footer() {
    return (
        <footer className="footer">
        <em>Copyright &copy; 2020, Kathryn Teall. All Rights Reserved  </em>
        <strong class="footer-dots">·</strong>
        <a href="mailto:katgrace0808@gmail.com?subject=Portfolio" class="footer-email"> Email </a>
        <strong class="footer-dots">·</strong>
        <a href="assets/Kathryn-Teall-Resume.pdf" class="footer-resume"> Resume </a>
        <strong class="footer-dots">·</strong>
        <a href="https://www.linkedin.com/in/kathrynteall79688825" class="footer-links"> LinkedIn </a>
        <strong class="footer-dots">·</strong>
        <a href="https://github.com/katgrace0808" class="footer-links"> Github </a>
        <strong class="footer-dots">·</strong>
        <a class="footer-phone"> Phone: (206) 245-4562 </a>
        {/* <strong class="footer-dots">·</strong> */}
      </footer>  
    )
}

export default Footer;