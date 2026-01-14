import React from 'react'

function Scard({index, image, title, descpt}) {
    return (
        <div className="col-lg-3 col-sm-6" data-aos="fade-up" key={index}>
            <div className="cart_content">
                <div className="">
                    <img src={image} width="150px" height='180px' className='rounded' alt="image" />
                    {/* <img src="images/services/service-2.jpg" width="100%" height='180px' alt="" /> */}
                </div>
                <h2>{title}</h2>
                <p>{descpt}</p>
            </div>
        </div>
    )
}

export default Scard;
