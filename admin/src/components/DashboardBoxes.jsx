import { Swiper, SwiperSlide } from 'swiper/react';
import { GoGift } from "react-icons/go";
import { IoStatsChartSharp } from "react-icons/io5";
import { IoPieChartOutline } from "react-icons/io5";
import { CiBank } from "react-icons/ci";
import { FaProductHunt } from "react-icons/fa6";

import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation } from 'swiper/modules';


const DashboardBoxes = () => {
    return (
        <>
            <Swiper
                slidesPerView={4}
                spaceBetween={10}
                navigation={true}
                modules={[Navigation]}
                className="dashboardBoxesSlider" 
            >
                <SwiperSlide>
                    <div className='box bg-white p-5 cursor-pointer hover:bg-[#f5f5f5] rounded-md border border-[rgba(0,0,0,0.1)] flex items-center gap-4'>
                        <GoGift className='text-[40px] text-[#3872fa]'/>
                        <div className='info w-[70%]    '>
                            <h3>New Orders</h3>
                            <b>1,390</b>
                        </div>
                        <IoStatsChartSharp className='text-[50px] text-[#3872fa]'/>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className='box bg-white p-5 cursor-pointer hover:bg-[#f5f5f5] rounded-md border border-[rgba(0,0,0,0.1)] flex items-center gap-4'>
                        <IoPieChartOutline className='text-[45px] text-[#10ed31] '/>
                        <div className='info w-[70%]    '>
                            <h3>Sales</h3>
                            <b>$57,890</b>
                        </div>
                        <IoStatsChartSharp className='text-[50px] text-[#10ed31]'/>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className='box bg-white p-5  cursor-pointer hover:bg-[#f5f5f5] rounded-md border border-[rgba(0,0,0,0.1)] flex items-center gap-4'>
                        <CiBank className='text-[50px] text-[#7928ca]'/>
                        <div className='info w-[70%]    '>
                            <h3>Revenue</h3>
                            <b>$11,390</b>
                        </div>
                        <IoStatsChartSharp className='text-[50px] text-[#7928ca]'/>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className='box bg-white p-5  cursor-pointer hover:bg-[#f5f5f5] rounded-md border border-[rgba(0,0,0,0.1)] flex items-center gap-4'>
                        <CiBank className='text-[50px] text-[#7928ca]'/>
                        <div className='info w-[70%]    '>
                            <h3>Revenue</h3>
                            <b>$11,390</b>
                        </div>
                        <IoStatsChartSharp className='text-[50px] text-[#7928ca]'/>
                    </div>
                </SwiperSlide>
                
            </Swiper>
        </>
    )
}

export default DashboardBoxes
