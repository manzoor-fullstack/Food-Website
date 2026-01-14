import React from 'react'
import Baner from '../components/Baner';
import '../style/section6Style.css';
import ThreeImgSlider from '../components/ThreeImgSlider';
import SliderTestimumial from '../components/SliderTestimumial';

function Section6() {
    return (
        <>
        <section className='section_testi'>
            <div className="container">
                <Baner
                    title="TESTIMONIALS"
                    desc="What Are They"
                    span="Saying About Us"
                />
                <div className="row" data-aos="fade-down">
                    <div className="col-lg-10 mx-auto ">

                       <SliderTestimumial/>
                    </div>
                </div>
            </div>
           
        </section>

        <section className='cool'>
                    <ThreeImgSlider />
                    
        </section>
        </>
    )
}

export default Section6
