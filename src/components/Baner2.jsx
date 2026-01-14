import React from 'react'
import { NavLink } from 'react-router-dom';
import Header from './Header';

function Baner2({menu, contact}) {
    return (
        <>
            <Header />
            <div className="container">
                <div className="row">
                    <div className="col service_section">
                        <div className="row us over justify-content-center align-items-center text-center" data-aos='zoom-out'>
                            <div>
                                <h2>{contact}</h2>
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb justify-content-center">
                                        <li className="breadcrumb-item">
                                            <NavLink to="/">Home</NavLink>
                                        </li>
                                                                               
                                        <li className="breadcrumb-item" aria-current="page">
                                            <NavLink to="">{menu}</NavLink>
                                        </li>
                                        
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </>
    )
}

export default Baner2;
