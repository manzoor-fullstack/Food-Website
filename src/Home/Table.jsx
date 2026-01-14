import React from 'react'
import Baner from '../components/Baner'
import Header from '../components/Header'
import Baner2 from '../components/Baner2'
import Footer from '../components/Footer'


function Table() {
  return (
    <>
    <Header />
    <Baner2
    contact="Book a Table"
        menu="Table"
    />
      <section className='table_section' id='table'>
            <div className="container">
                <div className="row">
                    <Baner
                        title="Book A Table"
                        desc="Book Your"
                        span="Stay With Us"
                    />
                </div>

                <div className="row form_row">
                    <div className="col-lg-4" data-aos="zoom-in">
                        <img src="images/reservation.jpg" className='img-fluid' alt="image" />
                    </div>
                    <div className="col-lg-8" data-aos="fade-left">
                        <form className='table_form' action="">
                            <div className="row mt-5 mt-lg-0">
                                <div className="col-lg-4 col-md-6">
                                    <div class="mb-3">
                                        <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Full Name" />
                                    </div>

                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div class="mb-3">
                                        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Your Email" />
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div class="mb-3">
                                        <input type="phone" class="form-control" id="exampleFormControlInput1" placeholder="Your Phone" />
                                    </div>
                                </div>
                            </div>

                            <div className="row mt-4">
                                <div className="col-lg-4 col-md-6">
                                    <div class="mb-3">
                                        <input type='date' class="form-control" id="exampleFormControlInput1" placeholder="" />
                                    </div>

                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div class="mb-3">
                                        <input type="time" class="form-control" id="exampleFormControlInput1" placeholder="Select Time" />
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div class="mb-3">
                                        <input type="number" class="form-control" id="exampleFormControlInput1" placeholder="# of people" />
                                    </div>
                                </div>
                            </div>
                            <div class="mb-3 mt-4">
                            
                                <textarea class="form-control" id="exampleFormControlTextarea1" rows="8" placeholder='Message'></textarea>
                            </div>
                            <div className='d-flex justify-content-center mt-4'>
                            <button type='submit' className='submit'>Book a Table</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
        <Footer />
    </>
  )
}

export default Table;
