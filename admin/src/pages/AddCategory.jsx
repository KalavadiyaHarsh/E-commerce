import React, { useState } from 'react';

import UploadBox from '../components/UploadBox';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { IoClose } from "react-icons/io5";
import { Button } from '@mui/material';
import { FaCloudUploadAlt } from 'react-icons/fa';
import { deleteImages } from '../utils/api';


const AddCategory = () => {

    const [formFields, setFormFields] = useState({
        name: "",
        images: []
    })

    const [previews, setPreviews] = useState([]);


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
        setFormFields(() => {
            return {
                ...previews,
                [name]: newImage
            }
        })

    };

    const removeImg = (image, index) => {
        deleteImages(`/api/category/deleteImage?img=${image}`)
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.error(err);
            });
    };


    return (
        <section className='p-5 bg-[#f1f1f1] text-black'>
            <form className='form py-3 p-8' >
                <div className='scroll max-h-[70vh] overflow-y-scroll pr-3 pt-4'>

                    <div className='grid grid-cols-1 mb-3'>
                        <div className='col w-[25%]'>
                            <h3 className='text-[14px] font-[500] mb-1'>Category Name</h3>
                            <input type="text" name='' className='w-full h-[40px] border border-[rgba(0,0,0,0.2)] p-3 text-sm' onChange={onChangeInput} />
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
                                            <LazyLoadImage
                                                alt={"image"}
                                                className='w-full h-full object-cover'
                                                effect="blur"
                                                wrapperProps={{
                                                    // If you need to, you can tweak the effect transition using the wrapper style.
                                                    style: { transitionDelay: "1s" },
                                                }}
                                                src={image} // use normal <img> attributes as props
                                            />
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
                    <Button type='submit' className='btn-blue w-full flex gap-2 items-center justify-center'><FaCloudUploadAlt className='text-[25px]' />Publish and View</Button>

                </div>
            </form>
        </section>
    );
}

export default AddCategory;
