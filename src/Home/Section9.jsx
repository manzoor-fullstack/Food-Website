import React from 'react';
import '../style/section9Style.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';
import Baner from '../components/Baner';

const swp = {
  backgroundPosition : "center",
  backgroundSize: "cover",
  width: '300px',
  height: '300px'
}

function Section9() {



  return (
    <section className='gallery_section'>
      <div className="container">
        <div className="row">
          <Baner
            title="Gallery"
            desc="Check"
            span="Our Gallery"
          />
        </div>
      </div>

      <Swiper
        slidesPerView={'auto'}
        effect={'coverflow'}
        centeredSlides={true}
        spaceBetween={10}
        grabCursor={true}
        loop={true}
        autoplay={{
          delay: 2500
        }}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{
          el: '.swiper-pagination',
          clickable: true,
        }}
        modules={[Pagination, EffectCoverflow, Autoplay]}
        className="mySwiper" data-aos="fade-down"
      >
        <SwiperSlide style={swp}>
          <img src="images/gallery-1.jpg" className='img' alt="gallery image" />
        </SwiperSlide>
        <SwiperSlide style={swp}>
          <img src="images/gallery-2.jpg" className='img' alt="gallery image" />
        </SwiperSlide>
        <SwiperSlide style={swp}>
          <img src="images/gallery-3.jpg" className='img' alt="gallery image" />

        </SwiperSlide>
        <SwiperSlide style={swp}>
          <img src="images/gallery-4.jpg" className='img' alt="gallery image" />

        </SwiperSlide>
        <SwiperSlide style={swp}>
          <img src="images/gallery-5.jpg" className='img' alt="gallery image" />

        </SwiperSlide>
        <SwiperSlide style={swp}>
          <img src="images/gallery-6.jpg" className='img' alt="gallery image" />

        </SwiperSlide>
        <SwiperSlide style={swp}>
          <img src="images/gallery-7.jpg" className='img' alt="gallery image" />

        </SwiperSlide>
        <SwiperSlide style={swp}>
          <img src="images/gallery-8.jpg" className='img' alt="gallery image" />

        </SwiperSlide>
        <div className="swiper-pagination"></div>
      </Swiper>
    </section>
  )
}

export default Section9;
