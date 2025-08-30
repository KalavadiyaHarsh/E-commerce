import React, { useContext, useEffect, useState } from 'react';
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
import { MyContext } from '../App';
import { useLocation } from 'react-router-dom';
import { postData } from '../utils/api';



const Sidebar = (props) => {
    const context = useContext(MyContext);

    const location = useLocation();

    const [isOpenCategoryFilter, setIsOpenCategoryFilter] = useState(true)
    const [isOpenAvailFilter, setIsOpenAvailFilter] = useState(true)
    const [isOpenSizeFilter, setIsOpenSizeFilter] = useState(true)

    const [filters, setFilters] = useState({
        catId: [],
        subCatId: [],
        thirdsubCatId: [],
        minPrice: '',
        maxPrice: '',
        rating: '',
        page: 1,
        limit: 8
    })

    const [price, setPrice] = useState([0, 60000]);

    const handleCheckboxChange = (field, value) => {

        const currentValues = filters[field] || []
        const updatedValues = currentValues?.includes(value) ? currentValues.filter((item) => item !== value) : [...currentValues, value];

        setFilters((prev) => ({
            ...prev,
            [field]: updatedValues
        }))

        if (field === "catId") {
            setFilters((prev) => ({
                ...prev,
                subCatId: [],
                thirdsubCatId: []
            }))
        }

    }




    useEffect(() => {

        const url = window.location.href;
        const queryParameters = new URLSearchParams(location.search);

        if (url.includes("catId")) {
            const categoryId = queryParameters.get("catId");
            const catArr = [];
            catArr.push(categoryId);
            filters.catId = catArr;
            filters.subCatId = [];
            filters.thirdsubCatId = [];
            filters.rating = [];
        }

        if (url.includes("subCatId")) {
            const subcategoryId = queryParameters.get("subCatId");
            const subcatArr = [];
            subcatArr.push(subcategoryId);
            filters.subCatId = subcatArr;
            filters.catId = [];
            filters.thirdsubCatId = [];
            filters.rating = [];
        }

        if (url.includes("thirdsubCatId")) {
            const thirdsubcategoryId = queryParameters.get("thirdsubCatId");
            const thirdsubcatArr = [];
            thirdsubcatArr.push(thirdsubcategoryId);
            filters.thirdsubCatId = thirdsubcatArr;
            filters.catId = [];
            filters.subCatId = [];
            filters.rating = [];
        }

        filters.page = 1;

    }, [location])

     const filterData = () => {
            props.setIsLoading(true);
            postData(`/api/product/filters`, filters).then((res) => {
                props.setProductData(res);
                props.setIsLoading(false);
                props.setTotalPages(res?.totalPages)
                
               // window.scrollTo(0, 0);
            })
        }

    useEffect(() => {
        filters.page = props.page;
        filterData();

    }, [filters, props.page])

    useEffect(() => {
        setFilters((prev) => ({
            ...prev,
            minPrice: price[0],
            maxPrice: price[1]
        }))
    }, []);

    useEffect(() => {
    if (filters) {
        filterData();   // fresh filters bhejne
    }
}, []);



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
                        {
                            context?.catData.length !== 0 && context?.catData?.map((item, index) => {
                                return (
                                    <FormControlLabel key={index} value={item?._id} control={<Checkbox disableRipple />} checked={filters?.catId?.includes(item?._id)} label={item?.name} onChange={() => handleCheckboxChange('catId', item?._id)} className='w-full' />
                                )
                            })
                        }

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

                <RangeSlider
                    value={price}
                    onInput={setPrice}
                    min={100}
                    max={60000}
                    step={5}
                />
                <div className='flex pt-4 pb-2 priceRange'>
                    <span className='text-[13px]'>
                        From: <strong className='text-dark'>Rs: {price[0]}</strong>
                    </span>
                    <span className='ml-auto text-[13px]'>
                        From: <strong className='text-dark'>Rs: {price[1]}</strong>
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
