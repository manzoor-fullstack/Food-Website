import React, {useState} from 'react'
import { NavLink } from 'react-router-dom';
import '../style/HeaderStyle.css';
function Header() {

    const[nav, setNav] = useState(false);
  
    // Scroll Navbar
    const changeValueOnScroll = () =>{
      const scrollValue = document?.documentElement?.scrollTop;
      scrollValue > 100 ? setNav(true) : setNav(false);
    }
  
    window.addEventListener("scroll", changeValueOnScroll);
  
    return (
      <>
      <header>
        <nav className={`${nav === true ? "sticky": ""} navbar navbar-expand-lg fixed-top`} >
          <div className="container">
            <NavLink className="navbar-brand logo" to='/'>
             <img src="images/logo.png" alt="logo" />
            </NavLink>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-between" id="navbarSupportedContent">
              <ul className="navbar-nav text-center m-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink className="nav-link ancker" aria-current="page" to="/">Home</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link ancker" to="/about">About</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link ancker" to="/service">Services</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link ancker" to="/menu">Our Menu</NavLink>
                </li>
                {/* <li className="nav-item">
                  <NavLink className="nav-link" to="/">Blog</NavLink>
                </li> */}
                <li className="nav-item">
                  <NavLink className="nav-link ancker" to="/contact">Contact</NavLink>
                </li>
                
  
              </ul>
              <div>
                  <NavLink className=" menu_btn" to="/book_table">
                    Book Now
                  </NavLink>
                
              </div>
  
            </div>
          </div>
        </nav>
        </header>
      </>
    )
  }

export default Header;
