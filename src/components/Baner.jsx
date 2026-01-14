import React from 'react'

function Baner({title, desc, span}) {
    return (
        <div className="row about justify-content-center text-center" data-aos="fade-up">
            <h6>{title}</h6>
            <h3>{desc}<span className='us'> {span}</span></h3>
        </div>
    )
}

export default Baner
