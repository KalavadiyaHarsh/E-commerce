import React, { useState } from 'react';
import Rating from '@mui/material/Rating';
import { Button } from '@mui/material';
import QtyBox from '../components/QtyBox';
import { IoCartOutline } from "react-icons/io5";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoGitCompareOutline } from "react-icons/io5";


const ProductDetailsComponent = () => {

      const [productActionIndex, setProductActionIndex] = useState(null)
    
    return (
        <>

            <h1 className='text-[24px] font-[600] mb-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, soluta?</h1>
            <div className='flex items-center gap-3 text-[13px]'>
                <span className='text-gray-400'>Brands : <span className='font-[500] text-black opacity-75 '>RARE RABBIT</span></span>
                <Rating name="size-small" defaultValue={4} size="small" readOnly />
                <span className='text-[13px] cursor-pointer'>Reviw (5)</span>
            </div>

            <div className='flex items-center gap-4 mt-4'>
                <span className='oldPrice line-through text-gray-500 text-[18px] font-[500]'>$58.00</span>
                <span className='price text-primary text-[18px] font-[600]'>$58.00</span>
                <span className='text-[14px]'> Available in Stock: <span className='text-green-600 text-[14px] font-bold'>147 Item</span></span>
            </div>

            <p className='mt-3 pr-10 mb-5'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates autem voluptatum, recusandae totam inventore ab sed facere ullam explicabo velit, adipisci veniam. Alias quos tempore ut quo repellat id mollitia consequuntur! Atque doloribus harum dolorem, temporibus beatae sequi at quisquam repudiandae eos, facere enim sunt, quam vitae ducimus est culpa!</p>

            <div className="flex items-center gap-3">
                <span className="text-[16px]">Size:</span>
                <div className="flex items-center gap-1 actions">
                    <Button
                        className={`${productActionIndex === 0 ? '!bg-primary !text-white' : ''}`}
                        onClick={() => setProductActionIndex(0)}
                    >
                        S
                    </Button>
                    <Button
                        className={`${productActionIndex === 1 ? '!bg-primary !text-white' : ''}`}
                        onClick={() => setProductActionIndex(1)}
                    >
                        M
                    </Button>
                    <Button
                        className={`${productActionIndex === 2 ? '!bg-primary !text-white' : ''}`}
                        onClick={() => setProductActionIndex(2)}
                    >
                        L
                    </Button>
                    <Button
                        className={`${productActionIndex === 3 ? '!bg-primary !text-white' : ''}`}
                        onClick={() => setProductActionIndex(3)}
                    >
                        XL
                    </Button>
                </div>
            </div>

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
    );
}

export default ProductDetailsComponent;
