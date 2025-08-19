import React, { useEffect, useState } from 'react';
import InnerImageZoom from 'react-inner-image-zoom';
import 'react-inner-image-zoom/lib/styles.min.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { useParams } from 'react-router-dom';
import { fetchDataFromApi } from '../utils/api';
import Rating from '@mui/material/Rating';
import CircularProgress from '@mui/material/CircularProgress';


import { MdBrandingWatermark } from "react-icons/md";
import { BiSolidCategoryAlt } from "react-icons/bi";
import { SiFramework } from "react-icons/si";
import { RiCustomSize } from "react-icons/ri";
import { VscPreview } from "react-icons/vsc";
import { MdOutlinePublishedWithChanges } from "react-icons/md";
import { MdGeneratingTokens } from "react-icons/md";
import { FaWeightHanging } from "react-icons/fa";



const ProductDetails = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [activeImage, setActiveImage] = useState(null);

    useEffect(() => {
        fetchDataFromApi(`/api/product/${id}`).then((res) => {
            if (res?.error === false) {
                setTimeout(() => {
                    setProduct(res?.product);
                }, 1500);


                // set first image as default active
                if (res?.product?.images?.length > 0) {
                    setActiveImage(res.product.images[0]);
                }
            }
        });
    }, [id]);

    return (
        <div className="productDetailsPage pb-5">
            <div className="flex items-center justify-between pl-3">
                <h2 className="text-[19px] font-[600]">Product Details</h2>
            </div>

            <br />

            {
                product?._id !== "" && product?._id !== undefined && product?._id !== null ?
                    <>
                        {product?.images.length !== 0 &&
                            <>
                                <div className="productDetails flex h-[400px]">
                                    <div className="w-[40%]">
                                        <div className="flex gap-2 h-[400px]">
                                            {/* Thumbnail Swiper */}
                                            <div className="slider w-[25%] h-full overflow-y-auto">
                                                <Swiper
                                                    direction={"vertical"}
                                                    slidesPerView={4}
                                                    spaceBetween={10}
                                                    navigation={true}
                                                    modules={[Navigation]}
                                                    className="zoomProductSliderThumbs h-full"
                                                >
                                                    {product?.images?.map((img, index) => (
                                                        <SwiperSlide key={index}>
                                                            <div
                                                                className="item rounded-md overflow-hidden cursor-pointer group border-[1px] border-gray-200 hover:border-primary transition-all"
                                                                onClick={() => setActiveImage(img)} // update active image
                                                            >
                                                                <img
                                                                    src={img}
                                                                    alt={`thumb-${index}`}
                                                                    className="h-24 w-24  transition-all group-hover:scale-105"
                                                                />
                                                            </div>
                                                        </SwiperSlide>
                                                    ))}
                                                </Swiper>
                                            </div>

                                            {/* Zoom Area */}
                                            <div className="zoomContainer w-[75%] h-[400px] flex items-center justify-center rounded-md bg-white object-cover">
                                                {activeImage && (
                                                    <InnerImageZoom
                                                        src={activeImage}
                                                        zoomSrc={activeImage}
                                                        zoomType="hover"
                                                        zoomScale={1}
                                                        className=" h-full w-auto object-cover"
                                                    />
                                                )}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="w-[60%] pl-8">
                                        <h1 className='text-[22px] font-[500] capitalize mb-2'>{product?.name}</h1>

                                        <div className='text-[14px] text-gray-600'>
                                            <div className="flex items-center w-full py-1">
                                                <span className='w-[25%] font-[500] flex items-center gap-1'><MdBrandingWatermark className='opacity-65' /> Brand :</span>
                                                <span>{product?.brand}</span>
                                            </div>

                                            <div className="flex items-center w-full py-1">
                                                <span className='w-[25%] font-[500] flex items-center gap-1'><BiSolidCategoryAlt className='opacity-65' /> Category :</span>
                                                <span>{product?.catName}</span>
                                            </div>

                                            {
                                                product?.productRam?.length !== 0 &&
                                                <>
                                                    <div className="flex items-center w-full py-1">
                                                        <span className='w-[25%] font-[500] flex items-center gap-1'><SiFramework className='opacity-65' /> Ram :</span>
                                                        {
                                                            product?.productRam?.map((ram, index) => (
                                                                <span key={index} className='mr-2 inline-block px-1 shadow-sm bg-[#fff]'>{ram}</span>
                                                            ))
                                                        }

                                                    </div>
                                                </>
                                            }

                                            {
                                                product?.size?.length !== 0 &&
                                                <>
                                                    <div className="flex items-center w-full py-1">
                                                        <span className='w-[25%] font-[500] flex items-center gap-1'><RiCustomSize className='opacity-65' /> Size :</span>
                                                        {
                                                            product?.size?.map((size, index) => (
                                                                <span key={index} className='mr-2 inline-block px-1 shadow-sm bg-[#fff]'>{size}</span>
                                                            ))
                                                        }

                                                    </div>
                                                </>
                                            }

                                            {
                                                product?.productWeight?.length !== 0 &&
                                                <>
                                                    <div className="flex items-center w-full py-1">
                                                        <span className='w-[25%] font-[500] flex items-center gap-1'><FaWeightHanging className='opacity-65' /> Weight :</span>
                                                        {
                                                            product?.productWeight?.map((Weight, index) => (
                                                                <span key={index} className='mr-2 inline-block px-1 shadow-sm bg-[#fff]'>{Weight} gram</span>
                                                            ))
                                                        }

                                                    </div>
                                                </>
                                            }

                                            <div className="flex items-center w-full py-1">
                                                <span className='w-[25%] font-[500] flex items-center gap-1'><MdGeneratingTokens className='opacity-65' /> Rating :</span>
                                                <span>{product?.rating}</span>
                                            </div>

                                            <div className="flex items-center w-full py-1">
                                                <span className='w-[25%] font-[500] flex items-center gap-1'><VscPreview className='opacity-65' /> Reviews :</span>
                                                <span>({product?.reviews?.length > 0 ? product?.reviews?.length : 0}) Reviews</span>
                                            </div>

                                            <div className="flex items-center w-full py-1">
                                                <span className='w-[25%] font-[500] flex items-center gap-1'><MdOutlinePublishedWithChanges className='opacity-65' /> Published :</span>
                                                <span>{product?.createdAt.split("T")[0]}</span>
                                            </div>
                                        </div>

                                        <br />

                                        <div>
                                            <h2 className='text-[19px] font-[500]'>Product Description :</h2>
                                            <p className='text-[14px] text-gray-600'>{product?.description}</p>
                                        </div>

                                    </div>
                                </div>

                                <br />

                                <h2 className='text-[19px] font-[500]'>Customer Reviews</h2>

                                <div className='reviewsWrap mt-3'>
                                    <div className='reviews w-full h-full p-4 mb-3 bg-white rounded-sm shadow-md flex items-center justify-between'>
                                        <div className='flex items-center gap-4 '>
                                            <div className='img w-[75px] h-[75px] rounded-full overflow-hidden border border-gray-700'>
                                                <img src="https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW5kaWFufGVufDB8fDB8fHww" alt="" className='w-full h-full hover:scale-105 object-cover ' />
                                            </div>

                                            <div className='info w-[80%]'>
                                                <div className='flex items-center justify-between'>
                                                    <h4 className='font-[500] text-[16px]'>John Doe</h4>
                                                    <Rating name="read-only" value={product?.rating} readOnly />
                                                </div>
                                                <span className='text-[13px] '>2025-08-14</span>
                                                <p className='text-[14px] text-gray-600 mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe hic soluta ut ducimus magni repellendus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus fugiat suscipit, deserunt nulla eaque debitis adipisci laborum mollitia dolor?</p>
                                            </div>
                                        </div>


                                    </div>

                                    <div className='reviews w-full h-full p-4 mb-3 bg-white rounded-sm shadow-md flex items-center justify-between'>
                                        <div className='flex items-center gap-4 '>
                                            <div className='img w-[75px] h-[75px] rounded-full overflow-hidden border border-gray-700'>
                                                <img src="https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW5kaWFufGVufDB8fDB8fHww" alt="" className='w-full h-full hover:scale-105 object-cover ' />
                                            </div>

                                            <div className='info w-[80%]'>
                                                <div className='flex items-center justify-between'>
                                                    <h4 className='font-[500] text-[16px]'>John Doe</h4>
                                                    <Rating name="read-only" value={product?.rating} readOnly />
                                                </div>
                                                <span className='text-[13px] '>2025-08-14</span>
                                                <p className='text-[14px] text-gray-600 mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe hic soluta ut ducimus magni repellendus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus fugiat suscipit, deserunt nulla eaque debitis adipisci laborum mollitia dolor?</p>
                                            </div>
                                        </div>


                                    </div>

                                    <div className='reviews w-full h-full p-4 mb-3 bg-white rounded-sm shadow-md flex items-center justify-between'>
                                        <div className='flex items-center gap-4 '>
                                            <div className='img w-[75px] h-[75px] rounded-full overflow-hidden border border-gray-700'>
                                                <img src="https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW5kaWFufGVufDB8fDB8fHww" alt="" className='w-full h-full hover:scale-105 object-cover ' />
                                            </div>

                                            <div className='info w-[80%]'>
                                                <div className='flex items-center justify-between'>
                                                    <h4 className='font-[500] text-[16px]'>John Doe</h4>
                                                    <Rating name="read-only" value={product?.rating} readOnly />
                                                </div>
                                                <span className='text-[13px] '>2025-08-14</span>
                                                <p className='text-[14px] text-gray-600 mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe hic soluta ut ducimus magni repellendus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus fugiat suscipit, deserunt nulla eaque debitis adipisci laborum mollitia dolor?</p>
                                            </div>
                                        </div>


                                    </div>

                                    <div className='reviews w-full h-full p-4 mb-3 bg-white rounded-sm shadow-md flex items-center justify-between'>
                                        <div className='flex items-center gap-4 '>
                                            <div className='img w-[75px] h-[75px] rounded-full overflow-hidden border border-gray-700'>
                                                <img src="https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW5kaWFufGVufDB8fDB8fHww" alt="" className='w-full h-full hover:scale-105 object-cover ' />
                                            </div>

                                            <div className='info w-[80%]'>
                                                <div className='flex items-center justify-between'>
                                                    <h4 className='font-[500] text-[16px]'>John Doe</h4>
                                                    <Rating name="read-only" value={product?.rating} readOnly />
                                                </div>
                                                <span className='text-[13px] '>2025-08-14</span>
                                                <p className='text-[14px] text-gray-600 mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe hic soluta ut ducimus magni repellendus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus fugiat suscipit, deserunt nulla eaque debitis adipisci laborum mollitia dolor?</p>
                                            </div>
                                        </div>


                                    </div>


                                </div>

                            </>
                        }
                    </>

                    :
                    <div className='flex items-center justify-center h-96'><CircularProgress color="inherit" /></div>

            }


        </div>
    );
};

export default ProductDetails;
