
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

      </div>
    </footer>
  );
}

export default Footer;
