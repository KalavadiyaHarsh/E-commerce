import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';


const HomeCatSlider = () => {
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
          <SwiperSlide>
            <Link to="/" className='w-full h-full block'>
              <div className='item p-3 bg-white rounded-sm flex items-center justify-center flex-col'>
                <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className='h-36 w-36 object-cover transition-all' />
                <h3 className='text-[15px] font-[500] mt-3'>Shoes</h3>
              </div>
            </Link>
          </SwiperSlide>

          <SwiperSlide>
            <Link to="/" className='w-full h-full block'>
              <div className='item p-3 bg-white rounded-sm flex items-center justify-center flex-col'>
                <img src="https://images.unsplash.com/photo-1634798245965-03669c757183?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className='h-36 w-36 object-cover transition-all' />
                <h3 className='text-[15px] font-[500] mt-3'>Chair</h3>
              </div>
            </Link>
          </SwiperSlide>

          <SwiperSlide>
            <Link to="/" className='w-full h-full block'>
              <div className='item p-3 bg-white rounded-sm flex items-center justify-center flex-col'>
                <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className='h-36 w-36 object-cover transition-all' />
                <h3 className='text-[15px] font-[500] mt-3'>Shoes</h3>
              </div>
            </Link>
          </SwiperSlide>

          <SwiperSlide>
            <Link to="/" className='w-full h-full block'>
              <div className='item p-3 bg-white rounded-sm flex items-center justify-center flex-col'>
                <img src="https://images.unsplash.com/photo-1634798245965-03669c757183?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className='h-36 w-36 object-cover transition-all' />
                <h3 className='text-[15px] font-[500] mt-3'>Chair</h3>
              </div>
            </Link>
          </SwiperSlide>

          <SwiperSlide>
            <Link to="/" className='w-full h-full block'>
              <div className='item p-3 bg-white rounded-sm flex items-center justify-center flex-col'>
                <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className='h-36 w-36 object-cover transition-all' />
                <h3 className='text-[15px] font-[500] mt-3'>Shoes</h3>
              </div>
            </Link>
          </SwiperSlide>

          <SwiperSlide>
            <Link to="/" className='w-full h-full block'>
              <div className='item p-3 bg-white rounded-sm flex items-center justify-center flex-col'>
                <img src="https://images.unsplash.com/photo-1634798245965-03669c757183?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className='h-36 w-36 object-cover transition-all' />
                <h3 className='text-[15px] font-[500] mt-3'>Chair</h3>
              </div>
            </Link>
          </SwiperSlide>

          <SwiperSlide>
            <Link to="/" className='w-full h-full block'>
              <div className='item p-3 bg-white rounded-sm flex items-center justify-center flex-col'>
                <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className='h-36 w-36 object-cover transition-all' />
                <h3 className='text-[15px] font-[500] mt-3'>Shoes</h3>
              </div>
            </Link>
          </SwiperSlide>

          <SwiperSlide>
            <Link to="/" className='w-full h-full block'>
              <div className='item p-3 bg-white rounded-sm flex items-center justify-center flex-col'>
                <img src="https://images.unsplash.com/photo-1634798245965-03669c757183?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className='h-36 w-36 object-cover transition-all' />
                <h3 className='text-[15px] font-[500] mt-3'>Chair</h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/" className='w-full h-full block'>
              <div className='item p-3 bg-white rounded-sm flex items-center justify-center flex-col'>
                <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className='h-36 w-36 object-cover transition-all' />
                <h3 className='text-[15px] font-[500] mt-3'>Shoes</h3>
              </div>
            </Link>
          </SwiperSlide>

          <SwiperSlide>
            <Link to="/" className='w-full h-full block'>
              <div className='item p-3 bg-white rounded-sm flex items-center justify-center flex-col'>
                <img src="https://images.unsplash.com/photo-1634798245965-03669c757183?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className='h-36 w-36 object-cover transition-all' />
                <h3 className='text-[15px] font-[500] mt-3'>Chair</h3>
              </div>
            </Link>
          </SwiperSlide>
        </Swiper>

      </div>

    </div>
  );
}

export default HomeCatSlider;
