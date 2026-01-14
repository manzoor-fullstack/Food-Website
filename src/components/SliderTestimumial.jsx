import React from 'react'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Pagination, Autoplay, EffectFade } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/effect-fade';
import Testdata from '../Home/Testdat';

function SliderTestimumial() {
    return (
        <>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                autoplay={{
                    delay: 2000
                }}
                loop={true}
                speed={500}
                fadeEffect={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination, Autoplay]}
                className="mySwiper"
            >
            
            {
                Testdata.map((value) =>{
                    return(
                        <SwiperSlide key={value.id}>
                    <div className="sliderr row justify-content-center align-items-center" >
                        <div className="sliderr_text col-xl-9">
                            <div className='line'>
                            <blockquote className='blockquote'>
                                {value.para}
                            </blockquote>
                            <div className='name_stars'>
                                <h5>{value.name}</h5>
                                <p className='title'>{value.title}</p>
                                <p>{value.rating}</p>
                            </div>
                            </div>
                        </div>
                        <div className="sliderr_img col-xl-3 text-center text-xl-start">
                            <img src={value.image} width="100px" height="100px" className='circle' alt="" />
                        </div>
                    </div>
                </SwiperSlide>
                )
                })
            }
                
            </Swiper>
        </>
    )
}

export default SliderTestimumial
