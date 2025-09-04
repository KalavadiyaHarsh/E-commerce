// import React, { useState } from 'react';
// import InnerImageZoom from 'react-inner-image-zoom';
// import 'react-inner-image-zoom/lib/styles.min.css';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import { Navigation } from 'swiper/modules'
// const ProductZoom = () => {

//   const [slideIndex, setSlideIndex] = useState(0)
//   const zoomSliderBig = useRef();
//   const zoomSliderSml = useRef();

//   const goto = (index)=> {
//     setSlideIndex(index);

//   }


//   return (
//     <>
//       <div className='flex gap-3 '>

//         <div className='slider w-[25%]'>
//           <Swiper
//             ref={zoomSliderSml}
//             direction={'vertical'}
//             slidesPerView={4}
//             spaceBetween={10}
//             navigation={true}
//             modules={[Navigation]}
//             className="zoomProductSliderThumbs h-[490px] overflow-hidden"
//           >
//             <SwiperSlide>
//               <div className='item rounded-md overflow-hidden cursor-pointer group border-[1px] border-red-400' onClick={()=> GoTools(0)}>
//                 <img src="https://demos.codezeel.com/prestashop/PRS21/PRS210502/35-large_default/brown-bear-printed-sweater.jpg" alt="" className='h-36 w-36 object-cover transition-all group-hover:scale-105' />
//               </div>
//             </SwiperSlide>

//             <SwiperSlide>
//               <div className='item rounded-md overflow-hidden cursor-pointer group border-[1px] border-red-400' onClick={()=> GoTools(1)}>
//                 <img src="https://demos.codezeel.com/prestashop/PRS21/PRS210502/32-home_default/brown-bear-printed-sweater.jpg" alt="" className='h-36 w-36 object-cover transition-all group-hover:scale-105' />
//               </div>
//             </SwiperSlide>

//             <SwiperSlide>
//               <div className='item rounded-md overflow-hidden cursor-pointer group border-[1px] border-red-400' onClick={()=> GoTools(2)}>
//                 <img src="https://demos.codezeel.com/prestashop/PRS21/PRS210502/30-home_default/brown-bear-printed-sweater.jpg" alt="" className='h-36 w-36 object-cover transition-all group-hover:scale-105' />
//               </div>
//             </SwiperSlide>

//             <SwiperSlide>
//               <div className='item rounded-md overflow-hidden cursor-pointer group border-[1px] border-red-400' onClick={()=> GoTools(3)}>
//                 <img src="https://demos.codezeel.com/prestashop/PRS21/PRS210502/31-home_default/brown-bear-printed-sweater.jpg" alt="" className='h-36 w-36 object-cover transition-all group-hover:scale-105' />
//               </div>
//             </SwiperSlide>

//             <SwiperSlide>
//               <div className='item rounded-md overflow-hidden cursor-pointer group border-[1px] border-red-400' onClick={()=> GoTools(4)}>
//                 <img src="https://demos.codezeel.com/prestashop/PRS21/PRS210502/33-home_default/brown-bear-printed-sweater.jpg" alt="" className='h-36 w-36 object-cover transition-all group-hover:scale-105' />
//               </div>
//             </SwiperSlide>

//             <SwiperSlide>
//               <div className='item rounded-md overflow-hidden cursor-pointer group border-[1px] border-red-400' onClick={()=> GoTools(5)}>
//                 <img src="https://demos.codezeel.com/prestashop/PRS21/PRS210502/34-home_default/brown-bear-printed-sweater.jpg" alt="" className='h-36 w-36 object-cover transition-all group-hover:scale-105' />
//               </div>
//             </SwiperSlide>

//             <SwiperSlide>
//               <div className='item rounded-md overflow-hidden cursor-pointer group border-[1px] border-red-400' onClick={()=> GoTools(6)}>
//                 <img src="https://demos.codezeel.com/prestashop/PRS21/PRS210502/35-large_default/brown-bear-printed-sweater.jpg" alt="" className='h-36 w-36 object-cover transition-all group-hover:scale-105' />
//               </div>
//             </SwiperSlide>

//           </Swiper>
//         </div>

//         <div className='zoomContainer w-[75%] h-[490px] overflow-hidden'>
//           <div className="h-full w-full">
//             <Swiper
//               ref={zoomSliderBig}
//               slidesPerView={1}
//               spaceBetween={0}
//               navigation={false}    
//               className=" h-[490px] overflow-hidden"
//             >
//               <SwiperSlide>
//                 <InnerImageZoom
//                   src="https://demos.codezeel.com/prestashop/PRS21/PRS210502/35-large_default/brown-bear-printed-sweater.jpg"
//                   zoomSrc="https://demos.codezeel.com/prestashop/PRS21/PRS210502/35-large_default/brown-bear-printed-sweater.jpg"
//                   className="w-full h-full object-contain"
//                   zoomType='hover'
//                   zoomScale={1}
//                 />
//               </SwiperSlide>

//               <SwiperSlide>
//                 <InnerImageZoom
//                   src="https://demos.codezeel.com/prestashop/PRS21/PRS210502/32-home_default/brown-bear-printed-sweater.jpg" 
//                   zoomSrc="https://demos.codezeel.com/prestashop/PRS21/PRS210502/32-home_default/brown-bear-printed-sweater.jpg"
//                   className="w-full h-full object-contain"
//                   zoomType='hover'
//                   zoomScale={1}
//                 />
//               </SwiperSlide>

//               <SwiperSlide>
//                 <InnerImageZoom
//                   src="https://demos.codezeel.com/prestashop/PRS21/PRS210502/30-home_default/brown-bear-printed-sweater.jpg"
//                   zoomSrc="https://demos.codezeel.com/prestashop/PRS21/PRS210502/35-large_default/brown-bear-printed-sweater.jpg"
//                   className="w-full h-full object-contain"
//                   zoomType='hover'
//                   zoomScale={1}
//                 />
//               </SwiperSlide>

//               <SwiperSlide>
//                 <InnerImageZoom
//                   src="https://demos.codezeel.com/prestashop/PRS21/PRS210502/31-home_default/brown-bear-printed-sweater.jpg"
//                   zoomSrc="https://demos.codezeel.com/prestashop/PRS21/PRS210502/35-large_default/brown-bear-printed-sweater.jpg"
//                   className="w-full h-full object-contain"
//                   zoomType='hover'
//                   zoomScale={1}
//                 />
//               </SwiperSlide>

//               <SwiperSlide>
//                 <InnerImageZoom
//                   src="https://demos.codezeel.com/prestashop/PRS21/PRS210502/35-large_default/brown-bear-printed-sweater.jpg"
//                   zoomSrc="https://demos.codezeel.com/prestashop/PRS21/PRS210502/35-large_default/brown-bear-printed-sweater.jpg"
//                   className="w-full h-full object-contain"
//                   zoomType='hover'
//                   zoomScale={1}
//                 />
//               </SwiperSlide>

//               <SwiperSlide>
//                 <InnerImageZoom
//                   src="https://demos.codezeel.com/prestashop/PRS21/PRS210502/34-home_default/brown-bear-printed-sweater.jpg"
//                   zoomSrc="https://demos.codezeel.com/prestashop/PRS21/PRS210502/35-large_default/brown-bear-printed-sweater.jpg"
//                   className="w-full h-full object-contain"
//                   zoomType='hover'
//                   zoomScale={1}
//                 />
//               </SwiperSlide>



//             </Swiper>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default ProductZoom;



import React, { useEffect, useState } from 'react';
import InnerImageZoom from 'react-inner-image-zoom';
import 'react-inner-image-zoom/lib/styles.min.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

const ProductZoom = (props) => {
 
  // 🟢 Step 2: useState for active image
  const [activeImage, setActiveImage] = useState(null);

  useEffect(() => {
    // set first image as default active
    if (props?.images?.length > 0) {
      setActiveImage(props.images[0]);
    }
  }, [props?.images]);

  return (
    <>
      {
        props?.images?.length !== 0 && <>
          <div className='flex gap-3 h-[500px]'>
            {/* Thumbnail Swiper */}
            <div className='slider w-[25%] h-full'>
              <Swiper
                direction={'vertical'}
                slidesPerView={4}
                spaceBetween={10}
                navigation={true}
                modules={[Navigation]}
                className="zoomProductSliderThumbs h-full"
              >
                {props?.images?.map((img, index) => (
                  <SwiperSlide key={index}>
                    <div
                      className='item rounded-md overflow-hidden cursor-pointer group border-[1px] border-red-400'
                      onClick={() => setActiveImage(img)} // 🟡 Step 3: Update active image
                    >
                      <img
                        src={img}
                        alt={`thumb-${index}`}
                        className='h-28 w-28 object-cover transition-all group-hover:scale-105'
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            {/* Zoom Area */}
            <div className='zoomContainer w-[75%] h-full overflow-hidden flex items-center justify-center rounded-md'>
              <div className='w-full h-full'>
                <InnerImageZoom
                  src={activeImage} // 🟢 Active image used here
                  zoomSrc={activeImage}
                  zoomType="hover"
                  zoomScale={1}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
        </>
      }
    </>

  );
};

export default ProductZoom;
