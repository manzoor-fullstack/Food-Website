import React from 'react'
import { NavLink } from 'react-router-dom';
import '../style/section7Style.css';
import Chefdata from '../Home/Chefdata';

function Chefcard() {
    return (
        <>
            {
                Chefdata.map((value, index) =>{
                    return(
                        <div className="col-lg-4" data-aos="fade-up">
                <div className="card cart2 text-center">
                    <div className='cart_img'>
                        <img src={value.image} className="card-img-top" alt="chef image" />

                        <div className="social_icon">
                            <NavLink to=''>
                                {value.tiwitter}
                            </NavLink>
                            <NavLink to=''>
                                {value.facebook}
                            </NavLink>
                            <NavLink to=''>
                                {value.instagram}
                            </NavLink>
                            <NavLink to="">
                                {value.linkdin}
                            </NavLink>
                        </div>
                        <div class="custom-shape-divider-bottom-1722504566">
                            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                                <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="shape-fill"></path>
                            </svg>
                        </div>
                    </div>

                    <div className="card-body">
                        <h5 className="card-title">{value.name}</h5>
                        <h6>{value.title}</h6>
                        <p className="card-text">{value.para}</p>
                        <div class="custom-shape-divider-bottom-1722503745">

                        </div>
                    </div>
                </div>
            </div>
                    )
                })
            }
        </>
    )
}

export default Chefcard
