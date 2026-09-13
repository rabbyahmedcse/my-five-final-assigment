import img from '../assets/banner-stack.png'
import './home.css'
const Home = () => {
    return (
        <section className="hero" id="home">
        <div className="hero-text">
          
        <h1>
    Build Your Ideal
    <br />
    <span className="gradient-text">Development Stack</span>
  </h1>
  
          <p className="hero-description">
            Discover the right technologies for your next project.
            Explore modern tools and create a stack that matches
            your development goals.
          </p>
  
          <div className="hero-buttons">
            <a href="#technologies" className="main-button">
              Explore Technologies →
            </a>
            <a href="#about" className="learn-button">
              Learn More
            </a>
          </div>
        </div>
  
        <div className="hero-image">
          <div className="circle"></div>
          <img src={img} alt="Development stack" />
        </div>
      </section>
    );
};

export default Home;