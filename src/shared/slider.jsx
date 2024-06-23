import React, { useContext } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import ProductCard from './productCard';
import DataContext from '../context/DataContext';
import { useNavigate } from 'react-router-dom';


function Slider() {

    const { bestProducts } = useContext(DataContext)
    const navigate = useNavigate()

    return (
        <Swiper
            slidesPerView={4}
            style={{
                margin: '0 auto',
            }}
            modules={[Autoplay]}
            breakpoints={{
                140: {
                    slidesPerView: 1,
                    spaceBetween: 40,

                },
                300: {
                    slidesPerView: 1,
                    spaceBetween: 150,

                },
                600: {
                    slidesPerView: 2,
                    spaceBetween: 100,

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

            {bestProducts.map((product) => (

                <SwiperSlide key={product.id}>
                    <ProductCard
                        keyid={product.id}
                        name={product.name}
                        category_name={product.Category.name}
                        src={product.img_url}
                        offer={product.offert}
                        price={product.price}
                        realPrice={product.real_price}
                        onClick={()=>navigate(`/products/${product.id}`)}

                    />
                </SwiperSlide>
            ))}




        </Swiper>
    )
}

export default Slider