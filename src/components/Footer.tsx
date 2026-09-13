
import Logo from "../assets/logo-text.png";
import "./footer.css";

function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="footer-content">
        <div className="footer-about" id="about">
         <img src={Logo} alt="" />
          <p>
            Build smarter and create your ideal development
            stack with the tools you love.
          </p>

          <div className="social-links">
            <a href="https://github.com/" target="_blank" rel="noreferrer">GitHub</a>
            <a href="https://twitter.com/" target="_blank" rel="noreferrer">Twitter</a>
            <a href="https://linkedin.com/" target="_blank" rel="noreferrer">LinkedIn</a>
          </div>
        </div>

        <div className="footer-column">
          <h3>Product</h3>
          <a href="#technologies">Technologies</a>
          <a href="#projects">Projects</a>
          <a href="#technologies">Features</a>
        </div>

        <div className="footer-column">
          <h3>Company</h3>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
          <a href="#home">Careers</a>
        </div>

        <div className="footer-column">
          <h3>Legal</h3>
          <a href="#home">Privacy</a>
          <a href="#home">Terms</a>
          <a href="#home">Cookies</a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 Dev Stack Builder. All rights reserved.</p>
        <div>
          <a href="#home">Privacy</a>
          <a href="#home">Terms</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
