import React, { useEffect, useState, useRef  } from 'react';
import { NavLink } from 'react-router-dom';

function SectionBaner() {

    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(0);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const entry = entries[0];
                if (entry.isIntersecting) {
                    const interval = setInterval(() => {
                        setCount(prevCount => {
                            if (prevCount < 50) {
                                return prevCount + 1;
                            } else {
                                clearInterval(interval);
                                return prevCount;
                            }
                        });
                    }, 20);

                    const interval2 = setInterval(() => {
                        setCount2(prevCount => {
                            if (prevCount < 15) {
                                return prevCount + 1;
                            } else {
                                clearInterval(interval2);
                                return prevCount;
                            }
                        });
                    }, 20);
                }
            },
            {
                threshold: 1, // 50% of the section should be visible to start counting
            }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);


  return (
    <>
         <section className='section_second'>
                <div className="container">
                    <div className="row py-5 ">
                        <div className="col-lg-6">
                            <div className="row gy-4 align-items-end">
                                <div className='img_1 col-6' >
                                    <img src="images/aboutt-2.jpg" className='img-' width="100%" height="350" alt="" data-aos="zoom-in"/>
                                </div>
                                <div className='img_1 col-6'>
                                    <img src="images/about-2.jpg" width="100%" height="250px" alt="" data-aos="zoom-in"/>
                                </div>


                                <div className='img_2 col-6 align-self-baseline'>
                                    <img src="images/about-3.jpg" className='img-' width="100%" height="250px" alt="" data-aos="zoom-in"/>
                                </div>
                                <div className='img_2 col-6'>
                                    <img src="images/about-4.jpg" width="100%" className='' height="350px" alt="" data-aos="zoom-in"/>
                                </div>
                            </div>

                        </div>
                        <div className="col-lg-6 about_text" data-aos="fade-left">
                            {/* <h4 className=''>About Us</h4> */}
                            <h2 className='welcome'>Welcome to Reston</h2>
                            <p>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos erat ipsum et lorem et sit, sed stet lorem sit.</p>
                            <p>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
                            <div className='d-flex explain justify-content-between mb-4' ref={sectionRef}>
                                <div className='experience d-flex justify-content-center align-items-center'>
                                    <h2>{count2}</h2>
                                    <div className='px-4'>
                                        <h5>Years of</h5>
                                        <h4>Experience</h4>
                                    </div>
                                </div>
                                <div className='experience d-flex d-flex justify-content-center align-items-center'>
                                    <h2>{count}</h2>
                                    <div className='px-4'>
                                        <h5>Popular</h5>
                                        <h4>MASTER CHEFS</h4>
                                    </div>
                                </div>
                            </div>
                            <NavLink to="/" className="read_about">
                                Read More
                            </NavLink>
                        </div>
                    </div>
                </div>
            </section>
    </>
  )
}

export default SectionBaner;
