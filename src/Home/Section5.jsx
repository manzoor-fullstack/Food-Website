import React, {useState} from 'react'
import Baner from '../components/Baner'
import '../style/section5Style.css';
import { NavLink } from 'react-router-dom'
import MenuData from './Menudata';

function Section5() {

    const[data, setData] = useState(MenuData);

    const findItems = (item) =>{
        const newItems = MenuData.filter(currentElem =>item === currentElem.category);
        setData(newItems);
    }

    const clearAll = () =>{
        setData(MenuData);
    }

    return (
        <section className='menu_section'>
            <div className="container">
                <div className="row">
                    <Baner
                        title="OUR MENU"
                        desc="Check Our"
                        span="Yummy Menu"
                    />
                </div>
                <div className="row butt gy-4 text-center justify-content-center" data-aos="fade-down">
                    <div className="col-lg-1 col-md-3">
                        <NavLink to='' className='menu_button' onClick={() => clearAll()}>
                            Starters
                        </NavLink>
                    </div>
                    <div className="col-lg-1 col-md-3" >
                        <NavLink to='' className='menu_button' onClick={() => findItems("breakfast")}>
                            Breakfast
                        </NavLink>
                    </div>
                    <div className="col-lg-1 col-md-3">
                        <NavLink to='' className='menu_button' onClick={() => findItems("lunch")}>

                            Lunch
                        </NavLink>
                    </div>
                    <div className="col-lg-1 col-md-3">
                        <NavLink to='' className='menu_button' onClick={() => findItems("dinner")}>
                            Dinner
                        </NavLink>
                    </div>
                </div>

                <div className="row menu" data-aos="fade-up">
                    <h6>MENU</h6>
                    <h3>Starters</h3>
                </div>

                <div className="row gy-4 align-items-center text-center">
                    {
                        data.map((value) => {
                            return (
                                <div className="col-lg-4 items" key={value.id} data-aos="fade-up">
                                    <img src={value.img} className='img-fluid' alt="" />
                                    <h4>{value.title}</h4>
                                    <p>{value.para}</p>
                                    <h5>{value.price}</h5>
                                </div>
                            )
                        })
                    }

                </div>
            </div>
        </section>
    )
}

export default Section5
