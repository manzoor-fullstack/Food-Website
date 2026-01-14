import React from 'react'

function Card({id, title, icon, para}) {
    return (
        <div className="col-3 cart1 text-center d-flex justify-content-center align-items-center" key={id}>
            <div className='cart_icon'>
                {icon}
                <h2>{title}</h2>
                <p>{para}</p>
            </div>
        </div>
    )
}

export default Card

