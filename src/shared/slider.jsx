import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import ProductCard from './productCard';


function Slider() {
  return (
    <Swiper
        slidesPerView={4}
        className='mySwipper'
        modules={[Autoplay]}
        breakpoints={{
            140: {
                slidesPerView: 1,
            
            },
            500: {
                slidesPerView: 2,
                spaceBetween: 40,

            },
            1280: {
                slidesPerView: 2,
                spaceBetween: 40,

            },
            1450: {
                slidesPerView: 4,
                spaceBetween: 100,
            },
        }}
        loop={true}
        autoplay={{
            delay: 3000,
            disableOnInteraction: false,
        }}
    >
        <SwiperSlide>
            <ProductCard/>
        </SwiperSlide>
        <SwiperSlide>
            <ProductCard/>
        </SwiperSlide>
        <SwiperSlide>
            <ProductCard/>
        </SwiperSlide>
        <SwiperSlide>
            <ProductCard/>
        </SwiperSlide>
        <SwiperSlide>
            <ProductCard/>
        </SwiperSlide>
        <SwiperSlide>
            <ProductCard/>
        </SwiperSlide>



    </Swiper>
  )
}

export default Slider