import React from 'react'
import Baner from '../components/Baner'


import Chefcard from '../components/Chefcard';
import Chefdata from './Chefdata';

function Section7() {
    return (
        <section className='chef_section'>
            <div className="container">
                <div className="row">
                    <Baner
                        title="chefs"
                        desc="Our"
                        span="Proffesional Chefs"
                    />
                </div>

                <div className="row cart_row gy-5">
                    <Chefcard 
                    
                    />
                </div>
            </div>
        </section>
    )
}

export default Section7
