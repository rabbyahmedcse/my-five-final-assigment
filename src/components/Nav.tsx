 
 import logo from '../assets/logo-text.png'
 import './nav.css'
 const Nav = () => {
    
    return (
     <nav className='navbar'>
       <div className="nav-container">
       
            <button className='menu-but'>
            ☰
            </button>
        
        <img className='logo' src={logo} alt="" />
        <div className="nav-menu">
        <a href="#home">Home</a>
          <a href="#tecno">Technologies</a>
          <a href="#projects">Projects</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="nav-buttons">
          <a href="#" className="sign-in">Sign In</a>
          <button className="sign-up">Sign Up</button>
        </div>
      
       </div>
     </nav>
    );
 };
 
 export default Nav;