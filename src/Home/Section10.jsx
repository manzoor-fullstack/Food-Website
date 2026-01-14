import React from 'react'
import '../style/section10Style.css';
import Baner from '../components/Baner';
import Contactdata from './Contactdata';

function Section10() {
    return (
        <section className='contact_section'>
            <div className="container">
                <div className="row">
                    <Baner
                        title="Contact"
                        desc="Need Help?"
                        span="Contact Us"
                    />
                </div>
                <div className="row" data-aos="zoom-in">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56146.74625520181!2d70.26280292776093!3d28.41407730059799!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39375c713b45db39%3A0x28af23c1672a0170!2sRahim%20Yar%20Khan%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1722576613156!5m2!1sen!2s" width="600" height="450" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <div className="row mt-5  gy-4" data-aos="fade-right">
                    {
                        Contactdata.map((value, index) => {
                            return (

                                <div className="col-lg-6 " key={index}>
                                    <div className="d-flex align-items-center address">
                                        <div className='icn'>
                                            {value.icon}
                                        </div>
                                        <div>
                                            <h3>{value.title}</h3>
                                            <p>{value.para}</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }

                </div>
                <div className="row my-4" data-aos="fade-up">
                    <form action="" id='contact_form'>
                        <div className="row">
                            <div className="col-md-6">
                                <div class="mb-3">
                                    <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Your Name" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div class="mb-3">
                                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Your Email" />
                                </div>
                            </div>
                            <div class="mb-3">
                                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Subject" />
                            </div>
                            <div class="mb-3">
                                <textarea class="form-control" id="exampleFormControlTextarea1" rows="5"></textarea>
                            </div>
                        </div>
                           <div className='text-center'>
                           <button className='table_btn msg_btn'>Send Message</button>
                           </div>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Section10
