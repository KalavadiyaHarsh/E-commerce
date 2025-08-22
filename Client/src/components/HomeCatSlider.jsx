import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';


const HomeCatSlider = (props) => {
  return (
    <div className='homeCatSlider py-8 pt-3'>
      <div className='container'>
        <Swiper
          slidesPerView={6}
          spaceBetween={10}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
        >
          {
            props?.data?.length !== 0 && props?.data?.map((item, index) => {
              return (
                <SwiperSlide key={index}>
                  <Link to="/" className='w-full h-full block'>
                    <div className='item p-3 bg-white rounded-sm flex items-center justify-center flex-col'>
                      <img src={item?.images[0]} alt="" className='h-28  w-28 object-cover transition-all' />
                      <h3 className='text-[15px] font-[500] mt-3'>{item?.name}</h3>
                    </div>
                  </Link>
                </SwiperSlide>
              )
            })
          }
          
        </Swiper>

      </div>

    </div>
  );
}

export default HomeCatSlider;
