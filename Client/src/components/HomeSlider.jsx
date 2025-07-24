import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation , Autoplay } from 'swiper/modules';

const HomeSlider = () => {
  return (
    <div className='homeSlider py-8'>
      <div className='container'>
        <Swiper
          spaceBetween={10}
          navigation={true}
          loop={true}
          modules={[Navigation , Autoplay]}
          autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
          className="sliderHome "
        >
          <SwiperSlide>
            <div className='item rounded-[19px] overflow-hidden'>
              <img src="https://images-static.nykaa.com/uploads/062c9b7d-902c-464a-9b71-c45c690ff34a.gif" alt="" className='w-full object-cover' />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className='item rounded-[19px] overflow-hidden'>
              <img src="https://images-static.nykaa.com/uploads/062c9b7d-902c-464a-9b71-c45c690ff34a.gif" alt="" className='w-full object-cover' />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className='item rounded-[19px] overflow-hidden'>
              <img src="https://images-static.nykaa.com/uploads/062c9b7d-902c-464a-9b71-c45c690ff34a.gif" alt="" className='w-full object-cover' />
            </div>
          </SwiperSlide>

        </Swiper>

      </div>
    </div>
  );
}

export default HomeSlider;
