import React, { useState } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Rating from '@mui/material/Rating';
import UploadBox from '../components/UploadBox';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { IoClose } from "react-icons/io5";
import { Button } from '@mui/material';
import { FaCloudUploadAlt } from "react-icons/fa";


const AddProduct = () => {

    const [productCat, setProductCat] = useState('');
    const [productSubCat, setProductSubCat] = useState('');
    const [productFeatured, setProductFeatured] = useState('');
    const [productRam, setProductRam] = useState('');
    const [productWeight, setProductWeight] = useState('');
    const [productSize, setProductSize] = useState('');

    const handleChangeProductCat = (event) => {
        setProductCat(event.target.value);
    };

    const handleChangeProductSubCat = (event) => {
        setProductSubCat(event.target.value);
    };

    const handleChangeProductFeatured = (event) => {
        setProductFeatured(event.target.value);
    };

    const handleChangeProductRam = (event) => {
        setProductRam(event.target.value);
    };

    const handleChangeProductWeight = (event) => {
        setProductWeight(event.target.value);
    };

    const handleChangeProductSize = (event) => {
        setProductSize(event.target.value);
    };

    return (
        <section className='p-5 bg-[#f1f1f1] text-black'>
            {/* 
            <div className="p-6 bg-gray-50 min-h-screen">
                <h1 className="text-2xl font-bold mb-6">Create product</h1>
            </div> */}

            <form className='form py-3 p-8' >
                <div className='scroll max-h-[70vh] overflow-y-scroll pr-3'>
                    <div className='grid grid-cols-1 mb-3'>
                        <div className='col'>
                            <h3 className='text-[14px] font-[500] mb-1'>Product Name</h3>
                            <input type="text" className='w-full h-[40px] border border-[rgba(0,0,0,0.2)] p-3 text-sm' />
                        </div>
                    </div>

                    <div className='grid grid-cols-1 mb-3'>
                        <div className='col'>
                            <h3 className='text-[14px] font-[500] mb-1'>Product Description</h3>
                            <textarea type="text" className='w-full h-[140px] border border-[rgba(0,0,0,0.2)] p-3 text-sm' />
                        </div>
                    </div>

                    <div className='grid grid-cols-4 mb-3 gap-4'>
                        <div className='col'>
                            <h3 className='text-[14px] font-[500] mb-1'>Product Category</h3>
                            <Select
                                labelId="demo-simple-select-label"
                                id="productCatDrop"
                                className='w-full'
                                value={productCat}
                                label="Category"
                                onChange={handleChangeProductCat}
                                size='small'
                            >
                                <MenuItem value={5}>None</MenuItem>
                                <MenuItem value={10}>Fashion</MenuItem>
                                <MenuItem value={20}>Beauty</MenuItem>
                                <MenuItem value={30}>Wellness</MenuItem>
                            </Select>
                        </div>

                        <div className='col'>
                            <h3 className='text-[14px] font-[500] mb-1'>Sub Category</h3>
                            <Select
                                labelId="demo-simple-select-label"
                                id="productCatSubDrop"
                                className='w-full'
                                value={productSubCat}
                                label="Category"
                                onChange={handleChangeProductSubCat}
                                size='small'
                            >
                                <MenuItem value={5}>None</MenuItem>
                                <MenuItem value={10}>Men</MenuItem>
                                <MenuItem value={20}>Women</MenuItem>
                                <MenuItem value={30}>Kids</MenuItem>
                            </Select>
                        </div>

                        <div className='col'>
                            <h3 className='text-[14px] font-[500] mb-1'>Product Price</h3>
                            <input type="number" className='w-full h-[40px] border border-[rgba(0,0,0,0.2)] p-3 ' />
                        </div>

                        <div className='col'>
                            <h3 className='text-[14px] font-[500] mb-1'>Product Old Price</h3>
                            <input type="number" className='w-full h-[40px] border border-[rgba(0,0,0,0.2)] p-3 ' />
                        </div>

                    </div>

                    <div className='grid grid-cols-4 mb-3 gap-4'>
                        <div className='col'>
                            <h3 className='text-[14px] font-[500] mb-1'>Is Featured?</h3>
                            <Select
                                labelId="demo-simple-select-label"
                                id="productCatDrop"
                                className='w-full'
                                value={productFeatured}
                                label="Category"
                                onChange={handleChangeProductFeatured}
                                size='small'
                            >
                                <MenuItem value={5}>None</MenuItem>
                                <MenuItem value={10}>True</MenuItem>
                                <MenuItem value={20}>False</MenuItem>

                            </Select>
                        </div>


                        <div className='col'>
                            <h3 className='text-[14px] font-[500] mb-1'>Product Stock</h3>
                            <input type="number" className='w-full h-[40px] border border-[rgba(0,0,0,0.2)] p-3 ' />
                        </div>

                        <div className='col'>
                            <h3 className='text-[14px] font-[500] mb-1'>Brand</h3>
                            <input type="text" className='w-full h-[40px] border border-[rgba(0,0,0,0.2)] p-3 text-sm' />
                        </div>

                        <div className='col'>
                            <h3 className='text-[14px] font-[500] mb-1'>Discount</h3>
                            <input type="number" className='w-full h-[40px] border border-[rgba(0,0,0,0.2)] p-3 ' />
                        </div>

                    </div>

                    <div className='grid grid-cols-4 mb-3 gap-4'>
                        <div className='col'>
                            <h3 className='text-[14px] font-[500] mb-1'>Product RAMS</h3>
                            <Select
                                labelId="demo-simple-select-label"
                                id="productCatDrop"
                                className='w-full'
                                value={productRam}
                                label="Category"
                                onChange={handleChangeProductRam}
                                size='small'
                            >
                                <MenuItem value={4}>None</MenuItem>
                                <MenuItem value={5}>4GB</MenuItem>
                                <MenuItem value={10}>6GB</MenuItem>
                                <MenuItem value={20}>8GB</MenuItem>
                                <MenuItem value={30}>10GB</MenuItem>
                            </Select>
                        </div>

                        <div className='col'>
                            <h3 className='text-[14px] font-[500] mb-1'>Product Weight</h3>
                            <Select
                                labelId="demo-simple-select-label"
                                id="productCatSubDrop"
                                className='w-full'
                                value={productWeight}
                                label="Category"
                                onChange={handleChangeProductWeight}
                                size='small'
                            >
                                <MenuItem value={5}>None</MenuItem>
                                <MenuItem value={10}>1KG</MenuItem>
                                <MenuItem value={20}>3KG</MenuItem>
                                <MenuItem value={30}>5KG</MenuItem>
                            </Select>
                        </div>

                        <div className='col'>
                            <h3 className='text-[14px] font-[500] mb-1'>Product Size</h3>
                            <Select
                                labelId="demo-simple-select-label"
                                id="productCatSubDrop"
                                className='w-full'
                                value={productSize}
                                label="Category"
                                onChange={handleChangeProductSize}
                                size='small'
                            >
                                <MenuItem value={5}>None</MenuItem>
                                <MenuItem value={10}>S</MenuItem>
                                <MenuItem value={20}>M</MenuItem>
                                <MenuItem value={30}>L</MenuItem>
                                <MenuItem value={40}>XL</MenuItem>
                                <MenuItem value={50}>XLL</MenuItem>
                            </Select>
                        </div>

                        <div className='col'>
                            <h3 className='text-[14px] font-[500] mb-1'>Product Rating</h3>
                            <Rating name="half-rating" defaultValue={2} precision={0.5} readOnly />
                        </div>

                    </div>


                    <div className='col w-full p-5 px-0'>
                        <h3 className='font-[700] text-[18px] mb-2'>Media & Images</h3>

                        <div className='grid grid-cols-7 gap-4'>
                            <div className='uploadBoxWrapper relative'>
                                <span className='absolute -top-[10px] -right-[10px] text-[16px] w-[20px] h-[20px] bg-red-700 overflow-hidden  rounded-full cursor-pointer z-50 flex items-center justify-center text-white'><IoClose /></span>
                                <div className='uploadBox  relative rounded-md overflow-hidden border border-dashed border-[rgba(0,0,0,0.3)] h-[150px] w-[100%] bg-gray-100 cursor-pointer hover:bg-gray-200 flex flex-col items-center justify-center'>
                                    <LazyLoadImage
                                        alt={"image"}
                                        className='w-full h-full object-cover'
                                        effect="blur"
                                        wrapperProps={{
                                            // If you need to, you can tweak the effect transition using the wrapper style.
                                            style: { transitionDelay: "1s" },
                                        }}
                                        src='https://ecme-react.themenate.net/img/products/product-1.jpg' // use normal <img> attributes as props
                                    />
                                </div>
                            </div>

                            <div className='uploadBoxWrapper relative'>
                                <span className='absolute -top-[10px] -right-[10px] text-[16px] w-[20px] h-[20px] bg-red-700 overflow-hidden  rounded-full cursor-pointer z-50 flex items-center justify-center text-white'><IoClose /></span>
                                <div className='uploadBox  relative rounded-md overflow-hidden border border-dashed border-[rgba(0,0,0,0.3)] h-[150px] w-[100%] bg-gray-100 cursor-pointer hover:bg-gray-200 flex flex-col items-center justify-center'>
                                    <LazyLoadImage
                                        alt={"image"}
                                        className='w-full h-full object-cover'
                                        effect="blur"
                                        wrapperProps={{
                                            // If you need to, you can tweak the effect transition using the wrapper style.
                                            style: { transitionDelay: "1s" },
                                        }}
                                        src='https://ecme-react.themenate.net/img/products/product-1.jpg' // use normal <img> attributes as props
                                    />
                                </div>
                            </div>

                            <div className='uploadBoxWrapper relative'>
                                <span className='absolute -top-[10px] -right-[10px] text-[16px] w-[20px] h-[20px] bg-red-700 overflow-hidden  rounded-full cursor-pointer z-50 flex items-center justify-center text-white'><IoClose /></span>
                                <div className='uploadBox  relative rounded-md overflow-hidden border border-dashed border-[rgba(0,0,0,0.3)] h-[150px] w-[100%] bg-gray-100 cursor-pointer hover:bg-gray-200 flex flex-col items-center justify-center'>
                                    <LazyLoadImage
                                        alt={"image"}
                                        className='w-full h-full object-cover'
                                        effect="blur"
                                        wrapperProps={{
                                            // If you need to, you can tweak the effect transition using the wrapper style.
                                            style: { transitionDelay: "1s" },
                                        }}
                                        src='https://ecme-react.themenate.net/img/products/product-1.jpg' // use normal <img> attributes as props
                                    />
                                </div>
                            </div>

                            <div className='uploadBoxWrapper relative'>
                                <span className='absolute -top-[10px] -right-[10px] text-[16px] w-[20px] h-[20px] bg-red-700 overflow-hidden  rounded-full cursor-pointer z-50 flex items-center justify-center text-white'><IoClose /></span>
                                <div className='uploadBox  relative rounded-md overflow-hidden border border-dashed border-[rgba(0,0,0,0.3)] h-[150px] w-[100%] bg-gray-100 cursor-pointer hover:bg-gray-200 flex flex-col items-center justify-center'>
                                    <LazyLoadImage
                                        alt={"image"}
                                        className='w-full h-full object-cover'
                                        effect="blur"
                                        wrapperProps={{
                                            // If you need to, you can tweak the effect transition using the wrapper style.
                                            style: { transitionDelay: "1s" },
                                        }}
                                        src='https://ecme-react.themenate.net/img/products/product-1.jpg' // use normal <img> attributes as props
                                    />
                                </div>
                            </div>

                            <div className='uploadBoxWrapper relative'>
                                <span className='absolute -top-[10px] -right-[10px] text-[16px] w-[20px] h-[20px] bg-red-700 overflow-hidden  rounded-full cursor-pointer z-50 flex items-center justify-center text-white'><IoClose /></span>
                                <div className='uploadBox  relative rounded-md overflow-hidden border border-dashed border-[rgba(0,0,0,0.3)] h-[150px] w-[100%] bg-gray-100 cursor-pointer hover:bg-gray-200 flex flex-col items-center justify-center'>
                                    <LazyLoadImage
                                        alt={"image"}
                                        className='w-full h-full object-cover'
                                        effect="blur"
                                        wrapperProps={{
                                            // If you need to, you can tweak the effect transition using the wrapper style.
                                            style: { transitionDelay: "1s" },
                                        }}
                                        src='https://ecme-react.themenate.net/img/products/product-1.jpg' // use normal <img> attributes as props
                                    />
                                </div>
                            </div>

                            <div className='uploadBoxWrapper relative'>
                                <span className='absolute -top-[10px] -right-[10px] text-[16px] w-[20px] h-[20px] bg-red-700 overflow-hidden  rounded-full cursor-pointer z-50 flex items-center justify-center text-white'><IoClose /></span>
                                <div className='uploadBox  relative rounded-md overflow-hidden border border-dashed border-[rgba(0,0,0,0.3)] h-[150px] w-[100%] bg-gray-100 cursor-pointer hover:bg-gray-200 flex flex-col items-center justify-center'>
                                    <LazyLoadImage
                                        alt={"image"}
                                        className='w-full h-full object-cover'
                                        effect="blur"
                                        wrapperProps={{
                                            // If you need to, you can tweak the effect transition using the wrapper style.
                                            style: { transitionDelay: "1s" },
                                        }}
                                        src='https://ecme-react.themenate.net/img/products/product-1.jpg' // use normal <img> attributes as props
                                    />
                                </div>
                            </div>
                            <UploadBox multiple={true} />
                        </div>
                    </div>

                </div>
                <br />
                    <Button type='submit' className='btn-blue w-full flex gap-2 items-center justify-center'><FaCloudUploadAlt className='text-[25px]'/>Publish and View</Button>
            </form>


        </section>
    );
};

export default AddProduct;
