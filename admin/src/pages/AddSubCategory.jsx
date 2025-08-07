import React, { useState } from 'react';
import { Button } from '@mui/material';
import { FaCloudUploadAlt } from 'react-icons/fa';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

const AddSubCategory = () => {

    const [productSubCat, setProductSubCat] = useState('');

    const handleChangeProductSubCat = (event) => {
        setProductSubCat(event.target.value);
    };

    return (
        <section className='p-5 bg-[#f1f1f1] text-black'>
            <form className='form py-3 p-8' >
                <div className='scroll max-h-[70vh] overflow-y-scroll pr-3 pt-4'>

                    <div className='grid grid-cols-4 mb-3 gap-5'>
                        <div className='col '>
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
                            <h3 className='text-[14px] font-[500] mb-1'>Product Name</h3>
                            <input type="text" className='w-full h-[40px] border border-[rgba(0,0,0,0.2)] p-3 text-sm' />
                        </div>
                    </div>
                    <br />


                </div>
                <br />
                <br />

                <div className='w-[300px]'>
                    <Button type='submit' className='btn-blue w-full flex gap-2 items-center justify-center'><FaCloudUploadAlt className='text-[25px]' />Publish and View</Button>

                </div>
            </form>
        </section>
    );
}

export default AddSubCategory;
