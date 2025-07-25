import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';


import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation } from 'swiper/modules';
import ProductItem from './ProductItem';
const ProductsSlider = (props) => {
    return (
        <div className='productSlider py-5 overflow-x-auto'>
            <Swiper
                slidesPerView={'auto'}
                spaceBetween={10}
                navigation={true}
                modules={[Navigation]}
                className="mySwiper"
            >

                <SwiperSlide className="!w-[250px]">
                    <ProductItem />
                </SwiperSlide >
                <SwiperSlide className="!w-[250px]">
                    <ProductItem />
                </SwiperSlide>
                <SwiperSlide className="!w-[250px]">
                    <ProductItem />
                </SwiperSlide>
                <SwiperSlide className="!w-[250px]">
                    <ProductItem />
                </SwiperSlide>
                <SwiperSlide className="!w-[250px]">
                    <ProductItem />
                </SwiperSlide>
                <SwiperSlide className="!w-[250px]">
                    <ProductItem />
                </SwiperSlide>
                <SwiperSlide className="!w-[250px]">
                    <ProductItem />
                </SwiperSlide>
            </Swiper>

        </div>
    );
}

export default ProductsSlider;
