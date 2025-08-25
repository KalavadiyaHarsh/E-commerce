import React, { useState } from 'react';
import Rating from '@mui/material/Rating';
import { Button } from '@mui/material';
import QtyBox from '../components/QtyBox';
import { IoCartOutline } from "react-icons/io5";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoGitCompareOutline } from "react-icons/io5";


const ProductDetailsComponent = (props) => {

    const [selectedSizeIndex, setSelectedSizeIndex] = useState(null);
    const [selectedRamIndex, setSelectedRamIndex] = useState(null);
    const [selectedWeightIndex, setSelectedWeightIndex] = useState(null);


    return (
        <>
            {
                props?.data?.length !== 0 &&

                <>

                    <h1 className='text-[24px] font-[600] mb-2'>{props?.data?.name}</h1>
                    <div className='flex items-center gap-3 text-[13px]'>
                        <span className='text-gray-400'>Brands : <span className='font-[500] text-black opacity-75 '>{props?.data?.brand}</span></span>
                        <Rating name="size-small" defaultValue={props?.data?.rating} size="small" readOnly precision={0.5} />
                        <span className='text-[13px] cursor-pointer'>Reviw ({props?.data?.rating})</span>
                    </div>

                    <div className='flex items-center gap-4 mt-4'>
                        <span className='oldPrice line-through text-gray-500 text-[18px] font-[500]'>&#x20b9;{props?.data?.oldPrice}</span>
                        <span className='price text-primary text-[18px] font-[600]'>&#x20b9;{props?.data?.price}</span>
                        <span className='text-[14px]'>
                            Available in Stock:{" "}
                            <span className={`text-[14px] font-bold ${props?.data?.countInStock > 0 ? 'text-green-600' : 'text-red-600'}`}>
                                {props?.data?.countInStock > 0 ? `${props?.data?.countInStock} Items` : "Out of Stock"}
                            </span>
                        </span>
                    </div>

                    <p className='mt-3 pr-10 mb-5'>{props?.data?.description}</p>

                    {/* Size options */}
                    {props?.data?.size?.length > 0 && (
                        <div className="flex items-center gap-3">
                            <span className="text-[16px]">Size:</span>
                            <div className="flex items-center gap-1 actions">
                                {props.data.size.map((size, i) => (
                                    <Button
                                        key={i}
                                        className={`${selectedSizeIndex === i ? '!bg-primary !text-white' : ''}`}
                                        onClick={() => setSelectedSizeIndex(i)}
                                    >
                                        {size}
                                    </Button>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* RAM options */}
                    {props?.data?.productRam?.length > 0 && (
                        <div className="flex items-center gap-3 mt-2">
                            <span className="text-[16px]">RAM:</span>
                            <div className="flex items-center gap-1 actions">
                                {props.data.productRam.map((ram, i) => (
                                    <Button
                                        key={i}
                                        className={`${selectedRamIndex === i ? '!bg-primary !text-white' : ''}`}
                                        onClick={() => setSelectedRamIndex(i)}
                                    >
                                        {ram}
                                    </Button>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Weight options */}
                    {props?.data?.productWeight?.length > 0 && (
                        <div className="flex items-center gap-3 mt-2">
                            <span className="text-[16px]">Weight:</span>
                            <div className="flex items-center gap-1 actions">
                                {props.data.productWeight.map((weight, i) => (
                                    <Button
                                        key={i}
                                        className={`${selectedWeightIndex === i ? '!bg-primary !text-white' : ''}`}
                                        onClick={() => setSelectedWeightIndex(i)}
                                    >
                                        {weight} g
                                    </Button>
                                ))}
                            </div>
                        </div>
                    )}


                    <p className="text-[14px] mt-4 mb-2">
                        Free Shipping (Est. Delivery Time 2-3 Days)
                    </p>

                    <div className="flex items-center gap-4">
                        <div className="qtyBoxWrapper w-[70px]">
                            <QtyBox />
                        </div>

                        <Button className='btn !bg-primary !text-white w-44 !gap-3'><IoCartOutline className='text-[22px]' />Add to Cart</Button>

                    </div>

                    <div className='flex items-center gap-10 mt-6'>
                        <span className='flex items-center gap-2 text-[15px] link cursor-pointer font-[500]'><IoMdHeartEmpty className='text-[21px]' />Add to Wishlist</span>
                        <span className='flex items-center gap-2 text-[15px] link cursor-pointer font-[500]'><IoGitCompareOutline className='text-[21px]' />Add to Compare</span>
                    </div>

                </>

            }
        </>


    );
}

export default ProductDetailsComponent;
