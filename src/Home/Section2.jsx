import React from 'react'
import '../style/section2Style.css';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Baner from '../components/Baner';

function Section2() {
  return (
    <section className='about_setion'>
        <div className="container">
            <Baner 
                title = "about us"
                desc = "Learn More"
                span = "About Us"
            />

            <div className="row">
                <div className="col-lg-6" data-aos="fade-right">
                    <img src="images/about.jpg" className='img-fluid' alt="about" />
                    <div className="book">
                    <h3>Book a Table</h3>
                    <h5>+1 5589 55488 55</h5>
                </div>
                </div>
                
                <div className="col-lg-1 col-0 px-0"></div>
                <div className="col-lg-5 mt-4 mt-lg-0 about_right" data-aos="fade-left">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <ul className='list-unstyled d-flex'>
                    <div className='check'>
                    <CheckCircleIcon className='check_btn' />
                    <CheckCircleIcon className='check_btn'/>
                    <CheckCircleIcon className='check_btn'/>
                    </div>
                    <div>

                        <li>Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                        <li>Duis aute irure dolor in reprehenderit in voluptate velit.</li>
                        <li>Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.</li>
                    </div>
                    </ul>
                    <p>Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident</p>

                    <div className='about_video'>
                        <img src="images/about-2.jpg" className='img-fluid' alt="video image" />
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Section2
