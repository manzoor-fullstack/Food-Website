import React,{useState, useEffect} from 'react'
import '../style/footerStyle.css';
import { NavLink } from 'react-router-dom';

function Footer() {
    const[isVisible, setIsVisible] = useState(false);

    const scrollTop = () =>{
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      };

      const listenToScroll = () =>{
        const heighthidden = 250;
        const windowScroll = document.body.scrollTop || document.documentElement.scrollTop;
    
        windowScroll > heighthidden ? setIsVisible(true) : setIsVisible();
      };
    
      useEffect(() =>{
        window.addEventListener("scroll", listenToScroll);
      });


    return (
        <>
        <footer>
            <div className="container">
                <div className="row mb-5">
                    <div className="col-lg-3 col-md-6 main_col justify-content-center justify-content-md-start d-flex">
                        <i className="fa-solid fa-location-dot"></i>
                        <div className='sub_footer'>
                            <h5>Address</h5>
                            <p>A108 Adam Street</p>
                            <p>New York, NY 535022</p>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6 main_col justify-content-center justify-content-md-start d-flex">
                        <i className="fa-solid fa-phone"></i>
                        <div className='sub_footer'>
                            <h5>Contact</h5>
                            <p><strong>Phone:</strong> +1 5589 55488 55</p>
                            <p><strong>Email:</strong> info@example.com</p>
                        </div>
                    </div>

                    <div className="col-lg-3 mt-4 mt-lg-0 col-md-6 main_col justify-content-center justify-content-md-start d-flex">
                    <i className="fa-regular fa-clock"></i>
                        <div className='sub_footer'>
                            <h5>Opening Hours</h5>
                            <p><strong>Mon-Sat:</strong> 11AM - 23PM</p>
                            <p><strong>Sunday:</strong> Closed</p>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6 mt-4 mt-lg-0 main_col align-items-center align-items-md-start justify-content-md-start d-flex flex-column sub_footer pad">
                        <h5>Follow Us</h5>
                        <div className='sub_footer'>
                        <NavLink to='' className='social'>
                        <i className="fa-brands fa-twitter m-0"></i>
                        </NavLink>
                        <NavLink to='' className='social'>
                        <i className="fa-brands fa-facebook m-0"></i>
                        </NavLink>
                        <NavLink to='' className='social'>
                        <i className="fa-brands fa-instagram m-0"></i>
                        </NavLink>
                        <NavLink to='' className='social'>
                        <i className="fa-brands fa-linkedin m-0"></i>
                        </NavLink>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="row mt-4 justify-content-center">
                    <div className="col copy_right text-center">
                        <h6>© Copyright Jam All Rights Reserved</h6>
                        <p>Designed by <span className='made'>BootstrapMade</span></p>
                    </div>
                </div>
            </div>
        </footer>
        {
            isVisible && (<div className='scroll_top' onClick={scrollTop}>
      <i class="fa-solid fa-arrow-up"></i>
      </div>)
        }
        
        </>
    )
}

export default Footer;
