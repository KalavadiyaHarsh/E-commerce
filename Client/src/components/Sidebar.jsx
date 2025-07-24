import React, { useState } from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Collapse } from 'react-collapse';
import { FaArrowDown } from "react-icons/fa";
import { Button } from '@mui/material';
import { FaArrowUp } from "react-icons/fa";
import RangeSlider from 'react-range-slider-input';
import 'react-range-slider-input/dist/style.css';
import Rating from '@mui/material/Rating';



const Sidebar = () => {

    const [isOpenCategoryFilter, setIsOpenCategoryFilter] = useState(true)
    const [isOpenAvailFilter, setIsOpenAvailFilter] = useState(true)
    const [isOpenSizeFilter, setIsOpenSizeFilter] = useState(true)



    return (
        <aside className='sidebar py-3'>
            <div className='box'>
                <h3 className='mb-3 text-[16px] font-[500] flex items-center pr-5'>Shop by Category
                    <Button className='!w-[30px] !h-[30px] !min-w-[30px] !rounded-full !ml-auto  !text-black' onClick={() => setIsOpenCategoryFilter(!isOpenCategoryFilter)}>
                        {
                            isOpenCategoryFilter === true ? <FaArrowUp /> : <FaArrowDown />
                        }
                    </Button>
                </h3>
                <Collapse isOpened={isOpenCategoryFilter}>

                    <div className='scroll px-3 relative -left-[10px]'>
                        <FormControlLabel control={<Checkbox disableRipple />} label="Fashion" className='w-full' />
                        <FormControlLabel control={<Checkbox disableRipple />} label="Electronics" className='w-full' />
                        <FormControlLabel control={<Checkbox disableRipple />} label="Bag" className='w-full' />
                        <FormControlLabel control={<Checkbox disableRipple />} label="Footwear" className='w-full' />
                        <FormControlLabel control={<Checkbox disableRipple />} label="Groceries" className='w-full' />
                        <FormControlLabel control={<Checkbox disableRipple />} label="Beauty" className='w-full' />
                        <FormControlLabel control={<Checkbox disableRipple />} label="Wellness" className='w-full' />
                        <FormControlLabel control={<Checkbox disableRipple />} label="Jewellery" className='w-full' />
                    </div>
                </Collapse>
            </div>

            <div className='box pt-3'>
                <h3 className='mb-3 text-[16px] font-[500] flex items-center pr-5'>Availability
                    <Button className='!w-[30px] !h-[30px] !min-w-[30px] !rounded-full !ml-auto  !text-black' onClick={() => setIsOpenAvailFilter(!isOpenAvailFilter)}>
                        {
                            isOpenAvailFilter === true ? <FaArrowUp /> : <FaArrowDown />
                        }
                    </Button>
                </h3>
                <Collapse isOpened={isOpenAvailFilter}>

                    <div className='scroll px-3 relative -left-[10px]'>
                        <FormControlLabel control={<Checkbox disableRipple />} label="Available (17)" className='w-full' />
                        <FormControlLabel control={<Checkbox disableRipple />} label="In stock (10)" className='w-full' />
                        <FormControlLabel control={<Checkbox disableRipple />} label="Not Available (17)" className='w-full' />

                    </div>
                </Collapse>
            </div>

            <div className='box pt-3'>
                <h3 className='mb-3 text-[16px] font-[500] flex items-center pr-5'>Size
                    <Button className='!w-[30px] !h-[30px] !min-w-[30px] !rounded-full !ml-auto  !text-black' onClick={() => setIsOpenSizeFilter(!isOpenSizeFilter)}>
                        {
                            isOpenSizeFilter === true ? <FaArrowUp /> : <FaArrowDown />
                        }
                    </Button>
                </h3>
                <Collapse isOpened={isOpenSizeFilter}>

                    <div className='scroll px-3 relative -left-[10px]'>
                        <FormControlLabel control={<Checkbox disableRipple />} label="Small (6)" className='w-full' />
                        <FormControlLabel control={<Checkbox disableRipple />} label="Medium (5)" className='w-full' />
                        <FormControlLabel control={<Checkbox disableRipple />} label="Large (7)" className='w-full' />
                        <FormControlLabel control={<Checkbox disableRipple />} label="XL (1)" className='w-full' />
                        <FormControlLabel control={<Checkbox disableRipple />} label="XLL (3)" className='w-full' />

                    </div>
                </Collapse>
            </div>

            <div className='box pt-3'>
                <h3 className='mb-3 text-[16px] font-[500] flex items-center pr-5'>
                    Filter By Price
                </h3>

                <RangeSlider />
                <div className='flex pt-4 pb-2 priceRange'>
                    <span className='text-[13px]'>
                        From: <strong className='text-dark'>Rs: {100}</strong>
                    </span>
                    <span className='ml-auto text-[13px]'>
                        From: <strong className='text-dark'>Rs: {5000}</strong>
                    </span>

                </div>
            </div>

            <div className='box pt-3'>
                <h3 className='mb-3 text-[16px] font-[500] flex items-center pr-5'>
                    Filter By Rating
                </h3>

                <div className='w-full'>
                    <Rating name="size-small" defaultValue={5} size="small" readOnly />
                </div>
                <div className='w-full'>
                    <Rating name="size-small" defaultValue={4} size="small" readOnly />
                </div>
                <div className='w-full'>
                    <Rating name="size-small" defaultValue={3} size="small" readOnly />
                </div>
                <div className='w-full'>
                    <Rating name="size-small" defaultValue={2} size="small" readOnly />
                </div>
                <div className='w-full'>
                    <Rating name="size-small" defaultValue={1} size="small" readOnly />
                </div>
            </div>

        </aside>
    );
}

export default Sidebar;
