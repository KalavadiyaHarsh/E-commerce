import React, { useContext, useState } from 'react';
import { Button } from '@mui/material';
import { FaCloudUploadAlt } from 'react-icons/fa';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { MyContext } from '../App';
import CircularProgress from '@mui/material/CircularProgress';
import { postData } from '../utils/api';
import { useNavigate } from 'react-router-dom';

const AddSubCategory = () => {

    const context = useContext(MyContext);
    const history = useNavigate();

    const [productSubCat, setProductSubCat] = useState('');
    const [productSubCat2, setProductSubCat2] = useState('');
    const [isLoading, setIsLoading] = useState(false)
    const [isLoading2, setIsLoading2] = useState(false);

    const [formFields, setFormFields] = useState({
        name: "",
        parentCatName: null,
        parentId: null
    })

    const [formFields2, setFormFields2] = useState({
        name: "",
        parentCatName: null,
        parentId: null
    })

    const handleChangeProductSubCat = (event) => {
        setProductSubCat(event.target.value);
        formFields.parentId = event.target.value;
    };

    const handleChangeProductSubCat2 = (event) => {
        setProductSubCat2(event.target.value);
        formFields2.parentId = event.target.value;
    };

    const selecteCatFun = (catName)=>{
        formFields.parentCatName = catName;
    }

    const selecteCatFun2 = (catName)=>{
        formFields2.parentCatName = catName;
    }

    const onChangeInput = (e) => {
        const { name, value } = e.target;
        setFormFields(() => {
            return {
                ...formFields,
                [name]: value
            }
        })
    }

    const onChangeInput2 = (e) => {
        const { name, value } = e.target;
        setFormFields2(() => {
            return {
                ...formFields2,
                [name]: value
            }
        })
    }
    

    const handleSubmit = (e) => {
        e.preventDefault();

        setIsLoading(true);

        if (formFields.name.trim() === "") {
            context.openAlertBox("error", "Please enter category name!");
            setIsLoading(false);
            return;
        }

        if (productSubCat === "") {
            context.openAlertBox("error", "Please select parent category");
            setIsLoading(false);
            return;
        }
        postData("/api/category/create", formFields).then((res) => {
            if (res?.error !== true) {
                setTimeout(() => {
                    setIsLoading(false);
                    context.setIsOpenFullScreenPanle({
                        open: false
                    });

                    window.location.reload();  // ✅ Reload the page to show new category
                }, 1500)   
                context.openAlertBox("success", res?.message);
                history("/subcategory/list");     

            } else {
                context.openAlertBox("error", res?.message);
                setIsLoading(false);
            }
        })
    }

     const handleSubmit2 = (e) => {
        e.preventDefault();

        setIsLoading2(true);

        if (formFields2.name.trim() === "") {
            context.openAlertBox("error", "Please enter category name!");
            setIsLoading2(false);
            return;
        }

        if (productSubCat2 === "") {
            context.openAlertBox("error", "Please select parent category");
            setIsLoading2(false);
            return;
        }
        postData("/api/category/create", formFields2).then((res) => {
            if (res?.error !== true) {
                setTimeout(() => {
                    setIsLoading2(false);
                    context.setIsOpenFullScreenPanle({
                        open: false
                    });
                    
                    window.location.reload();  // ✅ Reload the page to show new category
                }, 1500)        
                context.openAlertBox("success", res?.message);
                history("/subcategory/list");

            } else {
                context.openAlertBox("error", res?.message);
                setIsLoading2(false);
            }
        })
    }


    return (
        <section className='p-5 bg-[#f1f1f1] text-black grid grid-cols-2'>
            <form className='form py-3 p-8' onSubmit={handleSubmit} >

                <h4 className='font-[600]'>Add Sub Category</h4>
                <div className='scroll max-h-[70vh] overflow-y-scroll pr-3 pt-4'>

                    <div className='grid grid-cols-2 mb-3 gap-5'>
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
                                {
                                    context?.catData?.length !== 0 && context?.catData?.map((item, index) => {
                                        return (
                                            <MenuItem key={index} onClick={()=> selecteCatFun(item?.name)} value={item?._id}>{item?.name}</MenuItem>
                                        )
                                    }) 
                                }
                                
                            </Select>
                        </div>

                        <div className='col'>
                            <h3 className='text-[14px] font-[500] mb-1'>Sub Category Name</h3>
                            <input type="text" name='name' value={formFields.name} onChange={onChangeInput} className='w-full h-[40px] border border-[rgba(0,0,0,0.2)] p-3 text-sm' />
                        </div>
                    </div>
                    <br />


                </div>
                <br />
                <br />

                <div className='w-[300px]'>

                    <Button type='submit' className='btn-blue w-full flex gap-2 items-center justify-center'>
                        {
                            isLoading === true ? <CircularProgress color="inherit" /> :
                                <>
                                    <FaCloudUploadAlt className='text-[25px]' />Publish and View
                                </>
                        }
                    </Button>

                </div>
            </form>


            <form className='form py-3 p-8' onSubmit={handleSubmit2} >
                <h4 className='font-[600]'>Add third Lavel Category</h4>
                <div className='scroll max-h-[70vh] overflow-y-scroll pr-3 pt-4'>
                    <div className='grid grid-cols-2 mb-3 gap-5'>
                        <div className='col '>
                            <h3 className='text-[14px] font-[500] mb-1'>Sub Category</h3>
                            <Select
                                labelId="demo-simple-select-label"
                                id="productCatSubDrop"
                                className='w-full'
                                value={productSubCat2}
                                label="Category"
                                onChange={handleChangeProductSubCat2}
                                size='small'
                            >
                                {
                                    context?.catData?.length !== 0 && context?.catData?.map((item, index) => {
                        
                                        return (
                                            item?.children?.length !== 0 && item?.children?.map((child, childIndex) =>{
                                                return (
                                                    <MenuItem key={childIndex} onClick={()=> selecteCatFun2(child?.name)} value={child?._id}>{child?.name}</MenuItem>
                                                )
                                            })
                                            
                                        )
                                    }) 
                                }
                                
                            </Select>
                        </div>

                        <div className='col'>
                            <h3 className='text-[14px] font-[500] mb-1'>Sub Category Name</h3>
                            <input type="text" name='name' value={formFields2.name} onChange={onChangeInput2} className='w-full h-[40px] border border-[rgba(0,0,0,0.2)] p-3 text-sm' />
                        </div>
                    </div>
                    <br />


                </div>
                <br />
                <br />

                <div className='w-[300px]'>

                    <Button type='submit' className='btn-blue w-full flex gap-2 items-center justify-center'>
                        {
                            isLoading2 === true ? <CircularProgress color="inherit" /> :
                                <>
                                    <FaCloudUploadAlt className='text-[25px]' />Publish and View
                                </>
                        }
                    </Button>

                </div>
            </form>
        </section>
    );
}

export default AddSubCategory;
