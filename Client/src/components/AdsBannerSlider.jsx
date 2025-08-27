import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';


import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation } from 'swiper/modules';
import BannerBox from './BannerBox';

const AdsBannerSlider = (props) => {
    return (
        <div className='py-3 w-full'>
            
            <Swiper
                slidesPerView={props.items}
                spaceBetween={10}
                navigation={true}
                modules={[Navigation]}
                className="smlBtn !rounded-sm w-full h-full "
            >
                {
                    props?.data?.length !== 0 && props?.data?.map((item, index) => {
                        return (
                            <SwiperSlide>
                                <BannerBox info="left" item={item} img={item?.images[0]} link={"/"} />
                            </SwiperSlide>
                        )
                    })  
                }


            </Swiper>
        </div>
    );
}

export default AdsBannerSlider;
