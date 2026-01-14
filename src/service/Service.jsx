import React from 'react';
import '../style/ServiceStyle.css';
import Sdata from './Sdata';
import Footer from '../components/Footer';
import Baner2 from '../components/Baner2';
import Header from '../components/Header';

function Service() {
    return (
        <>
            <Header />
            <Baner2
                contact="Services"
                menu="Services"
            />
            <section className='our_services'>
                <div className="container">
                    <div className="row text-center gy-4 gy-lg-0 team_row" data-aos="fade-up">
                        <h5 className='team'>Our Services</h5>
                        <h2 className='mb-5'>Explore Our Services</h2>

                    </div>
                    <div className="row gy-4">
                        {
                            Sdata.map((value, index) => {
                                return (
                                    <div className="col-lg-3 col-sm-6" data-aos="fade-up" key={index}>
                                        <div className="cart_content">
                                            <div className="text-center">
                                                <img src={value.image} width="180px" height='180px' className='rounded' alt="image" />
                                                {/* <img src="images/services/service-2.jpg" width="100%" height='180px' alt="" /> */}
                                            </div>
                                            <h4>{value.title}</h4>
                                            <p>{value.descpt}</p>
                                            <div className="d-flex justify-content-between">
                                                <p id='price'><span id='dollar'>$</span>{value.price}</p>
                                                <p><span id='star'><i class="fa-solid fa-star"></i></span> {value.rating}</p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default Service;
