import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';
import '../style/threeImgSlider.css';

function ThreeImgSlider() {
  return (
    <>
    <Swiper
      slidesPerView={3}
      spaceBetween={10}
      breakpoints={{
                // when window width is >= 0px
                0: {
                    slidesPerView: 1,
                    spaceBetween: 10
                },
                // when window width is >= 768px
                768: {
                    slidesPerView: 1,
                    spaceBetween: 10
                },
                992: {
                    slidesPerView: 3,
                    spaceBetween: 10
                }
            }}
      autoplay={{
        delay: 2500
      }}
      loop={true}
      speed={1000}
      pagination={{
        el: '.swiper-pagination',
        clickable: true,
      }}
      modules={[Pagination,Autoplay]}
      className="mySwiper"
    >
      <SwiperSlide>
      <div className="threeImg1  text-white d-flex flex-column justify-content-end">
            <h5>Custom Parties</h5>
            <h4><span className='price'>$499</span></h4>
            <p className='para'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta beatae perspiciatis vitae similique. Similique, sed?</p>
          </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="threeImg2 text-white d-flex flex-column justify-content-end">
            <h5>Custom Things</h5>
            <h4><span className='price'>$599</span></h4>
            <p className='para'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta beatae perspiciatis vitae similique. Similique, sed?</p>
          </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="threeImg3  text-white d-flex flex-column justify-content-end">
            <h5>Custom Three</h5>
            <h4><span className='price'>$699</span></h4>
            <p className='para'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta beatae perspiciatis vitae similique. Similique, sed?</p>
          </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="threeImg1  text-white d-flex flex-column justify-content-end">
            <h5>Custom Parties</h5>
            <h4><span className='price'>$499</span></h4>
            <p className='para'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta beatae perspiciatis vitae similique. Similique, sed?</p>
          </div>
      </SwiperSlide>
      
          <div className="swiper-pagination"></div>
    </Swiper>
  </>
  )
}

export default ThreeImgSlider
