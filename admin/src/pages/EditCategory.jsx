import React, { useContext, useEffect, useState } from 'react';

import UploadBox from '../components/UploadBox';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { IoClose } from "react-icons/io5";
import { Button } from '@mui/material';
import { FaCloudUploadAlt } from 'react-icons/fa';
import { deleteImages, editData, fetchDataFromApi, postData } from '../utils/api';
import { MyContext } from '../App';
import CircularProgress from '@mui/material/CircularProgress';


const EditCategory = () => {

    const context = useContext(MyContext);


    const [isLoading, setIsLoading] = useState(false)
    const [formFields, setFormFields] = useState({
        name: "",
        images: []
    })

    const [previews, setPreviews] = useState([]);

    // useEffect(() => {
    //     const id = context?.isOpenFullScreenPanle?.id;

    //     fetchDataFromApi(`/api/category/${id}`, formFields).then((res) => {
    //         console.log(res?.category?.name)
    //         formFields.name = res?.category?.name;
    //         setPreviews(res?.category?.images)
    //     })
    // }, [1000]);

    useEffect(() => {
        const id = context?.isOpenFullScreenPanle?.id;
        if (id) {
            fetchDataFromApi(`/api/category/${id}`).then((res) => {
                setFormFields({
                    name: res?.category?.name || "",
                   // images: res?.category?.images || []
                });
                setPreviews(res?.category?.images || []);
            });
        }
    }, [context?.isOpenFullScreenPanle?.id]);



    const onChangeInput = (e) => {
        const { name, value } = e.target;
        setFormFields(() => {
            return {
                ...formFields,
                [name]: value
            }
        })
    }

    const setPreviewsFun = (newImage) => {
        setPreviews((prev) => [...prev, newImage]);
         formFields.images = newImage;
       
    };

    const removeImg = (image, index) => {
        var imageArr = [];
        imageArr = previews;
        deleteImages(`/api/category/deleteImage?img=${image}`).then((res) => {
            imageArr.splice(index, 1);
            setPreviews([]);
            setTimeout(() => {
                setPreviews(imageArr);
                formFields.images = imageArr;
              
            }, 100);
        })

    };

    const handleSubmit = (e) => {
        e.preventDefault();

        setIsLoading(true);

        if (formFields.name.trim() === "") {
            context.openAlertBox("error", "Please enter category name!");
            setIsLoading(false);
            return;
        }

        if (previews?.length === 0) {
            context.openAlertBox("error", "Please select category image");
            setIsLoading(false);
            return;
        }
        editData(`/api/category/${context?.isOpenFullScreenPanle?.id}`, formFields).then((res) => {
            if (res?.error !== true) {
                setTimeout(() => {
                    setIsLoading(false);
                    context.openAlertBox("success", res?.message);
                    context.setIsOpenFullScreenPanle({
                        open: false
                    });

                     window.location.reload();  // ✅ Reload the page to show new category
                }, 1500)

            } else {
                context.openAlertBox("error", res?.message);
                setIsLoading(false);
            }
        })
    }


    return (
        <section className='p-5 bg-[#f1f1f1] text-black'>
            <form className='form py-3 p-8' onSubmit={handleSubmit}>
                <div className='scroll max-h-[70vh] overflow-y-scroll pr-3 pt-4'>

                    <div className='grid grid-cols-1 mb-3'>
                        <div className='col w-[25%]'>
                            <h3 className='text-[14px] font-[500] mb-1'>Category Name</h3>
                            <input type="text" name='name' value={formFields.name} className='w-full h-[40px] border border-[rgba(0,0,0,0.2)] p-3 text-sm' onChange={onChangeInput} />
                        </div>
                    </div>
                    <br />

                    <h3 className='text-[18px] font-[500] mb-1 text-black'>Category Image</h3>
                    <br />

                    <div className='grid grid-cols-7 gap-4 '>

                        {
                            previews?.length !== 0 && previews?.map((image, index) => {
                                return (
                                    <div className='uploadBoxWrapper relative' key={index}>
                                        <span className='absolute -top-[10px] -right-[10px] text-[16px] w-[20px] h-[20px] bg-red-700 overflow-hidden  rounded-full cursor-pointer z-50 flex items-center justify-center text-white' onClick={() => removeImg(image, index)}><IoClose /></span>

                                        <div className='uploadBox  relative rounded-md overflow-hidden border border-dashed border-[rgba(0,0,0,0.3)] h-[150px] w-[100%] bg-gray-100 cursor-pointer hover:bg-gray-200 flex flex-col items-center justify-center'>
                                            <img src={image} className='w-full' alt="" />
                                        </div>
                                    </div>
                                )
                            })
                        }



                        <UploadBox multiple={true} name="images" url="/api/category/uploadImages" setPreviewsFun={setPreviewsFun} />
                    </div>
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
        </section>
    );
}

export default EditCategory;
