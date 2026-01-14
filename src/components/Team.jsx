import React from 'react'
import { NavLink } from 'react-router-dom'


function Team({ img, name, desg }) {
    return (
        <>
            <div className="col-lg-3 col-md-6 chef" data-aos="fade-up" >
            <div className="cord-container">
                <div className="card team_card" >
                    <div>
                        <img src={img} className="card-img-top card_img " alt="..." />
                    </div>
                    <div className="card-body">
                        <h5 className="card-title mt-3">{name}</h5>
                        <p className="card-text">{desg}</p>
                        <div className='sociall_icons'>
                            <NavLink to="/">
                                <i className="fa-brands fa-facebook "></i>
                            </NavLink>
                            <NavLink to="/">
                                <i className="fa-brands fa-twitter "></i>
                            </NavLink>
                            <NavLink to="/">
                                <i className="fa-brands fa-square-instagram "></i>
                            </NavLink>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </>
    )
}

export default Team
