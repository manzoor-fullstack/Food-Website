import React from 'react'
import {NavLink} from 'react-router-dom';
import '../style/section3Style.css';
import SignalWifi4BarIcon from '@mui/icons-material/SignalWifi4Bar';

function Section3() {
  return (
    <section className='cart_section'>
        <div className="container">
            <div className="row gy-4">
                <div className="col-lg-4" data-aos="fade-up">
                    <div className="cart">
                        <h2>Why Choose Yummy</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit Asperiores dolores sed et. Tenetur quia eos. Autem tempore quibusdam vel necessitatibus optio ad corporis.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                        <div className='text-center'>
                            <NavLink to="" className="read">
                                Read More
                            </NavLink>
                        </div>
                    </div>
                </div>
                <div className="col-lg-8">
                    <div className="row gy-4">
                        <div className="col-lg-4 text-center" data-aos="fade-down" data-aos-delay="400">
                            <div className='cart_icon cart1 d-flex justify-content-center align-items-center flex-column'>
                            <i class="fa-solid fa-signal"></i>
                                <h2>Corporis voluptates officia eiusmod</h2>
                                <p>Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip</p>
                            </div>
                        </div>
                        <div className="col-lg-4 text-center" data-aos="fade-up" data-aos-delay="600">
                            <div className='cart_icon cart1 d-flex justify-content-center align-items-center flex-column'>
                            <i class="fa-solid fa-gem"></i>
                                <h2>Corporis voluptates officia eiusmod</h2>
                                <p>Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip</p>
                            </div>
                        </div>
                        <div className="col-lg-4 text-center" data-aos="fade-left" data-aos-delay="800">
                            <div className='cart_icon cart1 d-flex justify-content-center align-items-center flex-column'>
                            <i class="fa-solid fa-burger"></i>
                                <h2>Corporis voluptates officia eiusmod</h2>
                                <p>Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip</p>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Section3
