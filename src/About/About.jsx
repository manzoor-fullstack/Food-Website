import React from 'react'
import '../style/AboutStyle.css';

import Tdata from './Tdata';
import Baner from '../components/Baner';
import Team from '../components/Team';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Baner2 from '../components/Baner2';
import SectionBaner from '../components/SectionBaner';

function About() {
    return (
        <>
        <Header />
        <Baner2 
            contact="About us"
            menu="About"
        />
            <div className="container">
            <Baner 
                title="About Us"
                desc="learn more"
                span="About us"

                />
            </div>
            <SectionBaner />

            <section className='our_team'>
                <div className="container">
                    <div className="row text-center gy-4 gy-lg-0 team_row">
                        <h5 className='team'>Our Team</h5>
                        <h2 className='mb-5'>Our Master Chefs</h2>
                        {
                            Tdata.map((cardData, index) => {
                                return (
                                    <Team
                                        key={index}
                                        img={cardData.img}
                                        name={cardData.name}
                                        desg={cardData.desigination}
                                    />
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

export default About;
