import React from 'react'
import '../style/section1Style.css';
import { NavLink } from 'react-router-dom';
import SlowMotionVideoIcon from '@mui/icons-material/SlowMotionVideo';

function Section1() {
  return (
    <section className='hero_setion'>
        <div className="container">
            <div className="row justify-content-center align-items-center">
                <div className="col-lg-5 order-2 order-lg-1 hero_left" data-aos="fade-up">
                    <h1>Enjoy Your Healthy <br /> Delicious Food</h1>
                    <h5>We are team of talented designers making websites with Bootstrap</h5>

                    <div className='hero_btn d-flex align-items-center '>
                        <div>
                            <NavLink to="" className='table_btn'>Book a Table</NavLink>
                        </div>
                        <div className='video ms-4'>
                        <a href="" className='watch'><SlowMotionVideoIcon className='video_icon'/> Watch Video</a>
                        </div>
                    </div>
                </div>
                <div className="col-2 order-lg-2"></div>
                <div className="col-lg-5 order-1 order-lg-2 hero_img" >
                    <img src="images/hero-img.png" className='img-fluid' alt="image" data-aos="zoom-in"/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Section1
