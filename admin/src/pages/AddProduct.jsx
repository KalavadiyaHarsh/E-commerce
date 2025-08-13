import React, { useContext, useState } from 'react';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Rating from '@mui/material/Rating';
import UploadBox from '../components/UploadBox';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { IoClose } from "react-icons/io5";
import { Button } from '@mui/material';
import { FaCloudUploadAlt } from "react-icons/fa";
import { MyContext } from '../App';
import { deleteImages } from '../utils/api';

// const ITEM_HEIGHT = 48;
// const ITEM_PADDING_TOP = 8;

// const MenuProps = {
//   PaperProps: {
//     style: {
//       maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
//       width: 250,
//     },
//   },
// };


const AddProduct = () => {

    const context = useContext(MyContext);

    const [previews, setPreviews] = useState([]);


    const [productCat, setProductCat] = useState('');
    const [productSubCat, setProductSubCat] = useState('');
    const [thirdsubCat, setThirdsubCat] = useState('');
    const [productFeatured, setProductFeatured] = useState('');
    const [productRam, setProductRam] = useState([]);
    const [productWeight, setProductWeight] = useState([]);
    const [productSize, setProductSize] = useState([]);

    const [formFields, setFormFields] = useState({
        name: "",
        description: "",
        images: [],
        brand: "",
        price: "",
        oldPrice: "",
        catName: "",
        catId: "",
        subCatId: "",
        subCat: "",
        thirdsubCat: "",
        thirdsubCatId: "",
        countInStock: "",
        rating: "",
        isFeatured: false,
        discount: "",
        productRam: [],
        size: [],
        productWeight: [],
    })

    const handleChangeProductCat = (event) => {
        setProductCat(event.target.value);
        formFields.catId = event.target.value;
    };

    const selectCatByName = (catName) => {
        formFields.catName = catName;
    }

    const handleChangeProductSubCat = (event) => {
        setProductSubCat(event.target.value);
        formFields.subCatId = event.target.value;

    };

    const selectSubCatByName = (subCatName) => {
        formFields.subCat = subCatName;
    }

    const handleChangeThirdSubCat = (event) => {
        setThirdsubCat(event.target.value);
        formFields.thirdsubCatId = event.target.value;
    };

    const selectThirdSubCatByName = (thirdSubCatName) => {
        formFields.thirdsubCat = thirdSubCatName;
    }


    const handleChangeProductFeatured = (event) => {
        setProductFeatured(event.target.value);
        formFields.isFeatured = event.target.value;
    };

    const handleChangeProductRam = (event) => {
        const {
            target: { value },
        } = event;

        setProductRam(typeof value === "string" ? value.split(",") : value);

        //On autofill we get a stringified value.
        formFields.productRam = value;

    };

    const handleChangeProductWeight = (event) => {
        // setProductWeight(event.target.value);
        const {
            target: { value },
        } = event;

        setProductWeight(typeof value === "string" ? value.split(",") : value);

        //On autofill we get a stringified value.
        formFields.productWeight = value;
    };

    const handleChangeProductSize = (event) => {

        const {
            target: { value },
        } = event;
        setProductSize(typeof value === "string" ? value.split(",") : value);
        //On autofill we get a stringified value.
        formFields.size = value;
    };

    const onChangeRating = (e) => {
        setFormFields(() => (
            {
                ...formFields,
                rating: e.target.value
            }

        ))
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



    //for image upload
    //  const setPreviewsFun = (newImage) => {
    //         setPreviews((prev) => [...prev, newImage]);
    //         formFields.images = newImage;
    //     };
    const setPreviewsFun = (newImages) => {
        setPreviews((prev) => [...prev, ...newImages]); // merge arrays
        formFields.images = [...(formFields.images || []), ...newImages]; // append to form field
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

        console.log(formFields)
    }

    return (
        <section className='p-5 bg-[#f1f1f1] text-black'>
            {/* 
            <div className="p-6 bg-gray-50 min-h-screen">
                <h1 className="text-2xl font-bold mb-6">Create product</h1>
            </div> */}

            <form className='form py-3 p-8' onSubmit={handleSubmit}>
                <div className='scroll max-h-[70vh] overflow-y-scroll pr-3'>
                    <div className='grid grid-cols-1 mb-3'>
                        <div className='col'>
                            <h3 className='text-[14px] font-[500] mb-1'>Product Name</h3>
                            <input type="text" className='w-full h-[40px] border border-[rgba(0,0,0,0.2)] p-3 text-sm' name='name' value={formFields.name} onChange={onChangeInput} />
                        </div>
                    </div>

                    <div className='grid grid-cols-1 mb-3'>
                        <div className='col'>
                            <h3 className='text-[14px] font-[500] mb-1'>Product Description</h3>
                            <textarea type="text" className='w-full h-[140px] border border-[rgba(0,0,0,0.2)] p-3 text-sm' name="description"
                                value={formFields.description}
                                onChange={onChangeInput} />
                        </div>
                    </div>

                    <div className='grid grid-cols-4 mb-3 gap-4'>
                        <div className='col'>
                            <h3 className='text-[14px] font-[500] mb-1'>Product Category</h3>
                            {
                                context?.catData?.length !== 0 && <Select
                                    labelId="demo-simple-select-label"
                                    id="productCatDrop"
                                    className='w-full'
                                    value={productCat}
                                    label="Category"
                                    onChange={handleChangeProductCat}
                                    size='small'
                                >
                                    {
                                        context?.catData?.map((cat, index) => {
                                            return (
                                                <MenuItem key={index} value={cat?._id} onClick={() => selectCatByName(cat?.name)}>{cat?.name}</MenuItem>
                                            )
                                        }

                                        )
                                    }

                                </Select>
                            }

                        </div>

                        <div className='col'>
                            <h3 className='text-[14px] font-[500] mb-1'>Sub Category</h3>
                            {
                                context?.catData?.length !== 0 && <Select
                                    labelId="demo-simple-select-label"
                                    id="productCatSubDrop"
                                    className='w-full'
                                    value={productSubCat}
                                    label="Category"
                                    onChange={handleChangeProductSubCat}
                                    size='small'
                                >
                                    {
                                        context?.catData?.map((cat, index) => {
                                            return (
                                                cat?.children?.length !== 0 && cat?.children?.map((subCat, subIndex) => {
                                                    return (
                                                        <MenuItem key={subIndex} value={subCat?._id} onClick={() => selectSubCatByName(subCat?.name)}>{subCat?.name}</MenuItem>
                                                    )
                                                })
                                            )
                                        }

                                        )
                                    }

                                </Select>
                            }

                        </div>

                        <div className='col'>
                            <h3 className='text-[14px] font-[500] mb-1'>Third Lavel Category</h3>
                            {
                                context?.catData?.length !== 0 && <Select
                                    labelId="demo-simple-select-label"
                                    id="productCatSubDrop"
                                    className='w-full'
                                    value={thirdsubCat}
                                    label="Category"
                                    onChange={handleChangeThirdSubCat}
                                    size='small'
                                >
                                    {
                                        context?.catData?.map((cat, index) => {
                                            return (
                                                cat?.children?.length !== 0 && cat?.children?.map((subCat, subIndex) => {
                                                    return (
                                                        subCat?.children?.length !== 0 && subCat?.children?.map((thirdSubCat, thirdSubIndex) => {
                                                            return (
                                                                <MenuItem key={thirdSubIndex} value={thirdSubCat?._id} onClick={() => selectThirdSubCatByName(thirdSubCat?.name)}>{thirdSubCat?.name}</MenuItem>
                                                            )
                                                        })
                                                    )
                                                })
                                            )
                                        }

                                        )
                                    }

                                </Select>
                            }

                        </div>

                        <div className='col'>
                            <h3 className='text-[14px] font-[500] mb-1'>Product Price</h3>
                            <input type="number" className='w-full h-[40px] border border-[rgba(0,0,0,0.2)] p-3 ' name="price"
                                value={formFields.price}
                                onChange={onChangeInput} />
                        </div>

                        <div className='col'>
                            <h3 className='text-[14px] font-[500] mb-1'>Product Old Price</h3>
                            <input type="number" className='w-full h-[40px] border border-[rgba(0,0,0,0.2)] p-3 ' name="oldPrice"
                                value={formFields.oldPrice}
                                onChange={onChangeInput} />
                        </div>

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
                                <MenuItem value={true}>True</MenuItem>
                                <MenuItem value={false}>False</MenuItem>

                            </Select>
                        </div>

                        <div className='col'>
                            <h3 className='text-[14px] font-[500] mb-1'>Product Stock</h3>
                            <input type="number" className='w-full h-[40px] border border-[rgba(0,0,0,0.2)] p-3 ' name="countInStock"
                                value={formFields.countInStock}
                                onChange={onChangeInput} />
                        </div>

                        <div className='col'>
                            <h3 className='text-[14px] font-[500] mb-1'>Brand</h3>
                            <input type="text" className='w-full h-[40px] border border-[rgba(0,0,0,0.2)] p-3 text-sm' name="brand"
                                value={formFields.brand}
                                onChange={onChangeInput} />
                        </div>

                    </div>

                    <div className='grid grid-cols-4 mb-3 gap-4'>

                        <div className='col'>
                            <h3 className='text-[14px] font-[500] mb-1'>Discount</h3>
                            <input type="number" className='w-full h-[40px] border border-[rgba(0,0,0,0.2)] p-3 ' name="discount"
                                value={formFields.discount}
                                onChange={onChangeInput} />
                        </div>

                        <div className='col'>
                            <h3 className='text-[14px] font-[500] mb-1'>Product RAMS</h3>
                            <Select
                                multiple
                                labelId="demo-simple-select-label"
                                id="productCatDrop"
                                className='w-full'
                                value={productRam}
                                label="Category"
                                onChange={handleChangeProductRam}
                                size='small'
                            >
                                <MenuItem value={'2GB'}>2GB</MenuItem>
                                <MenuItem value={'4GB'}>4GB</MenuItem>
                                <MenuItem value={'6GB'}>6GB</MenuItem>
                                <MenuItem value={'8GB'}>8GB</MenuItem>
                                <MenuItem value={'10GB'}>10GB</MenuItem>
                            </Select>
                        </div>

                        <div className='col'>
                            <h3 className='text-[14px] font-[500] mb-1'>Product Weight</h3>
                            <Select
                                multiple
                                labelId="demo-simple-select-label"
                                id="productCatSubDrop"
                                className='w-full'
                                value={productWeight}
                                label="Category"
                                onChange={handleChangeProductWeight}
                                size='small'
                            >
                                <MenuItem value={10}>1KG</MenuItem>
                                <MenuItem value={20}>3KG</MenuItem>
                                <MenuItem value={30}>5KG</MenuItem>
                            </Select>
                        </div>

                        <div className='col'>
                            <h3 className='text-[14px] font-[500] mb-1'>Product Size</h3>
                            <Select
                                multiple
                                labelId="demo-simple-select-label"
                                id="productCatSubDrop"
                                className='w-full'
                                value={productSize}
                                label="Category"
                                onChange={handleChangeProductSize}
                                size='small'
                            >
                                <MenuItem value={10}>S</MenuItem>
                                <MenuItem value={20}>M</MenuItem>
                                <MenuItem value={30}>L</MenuItem>
                                <MenuItem value={40}>XL</MenuItem>
                                <MenuItem value={50}>XLL</MenuItem>
                            </Select>
                        </div>

                    </div>

                    <div className='grid grid-cols-4 mb-3 gap-4'>


                        <div className='col'>
                            <h3 className='text-[14px] font-[500] mb-1'>Product Rating</h3>
                            <Rating name="half-rating" defaultValue={1} precision={0.5} onChange={onChangeRating} />
                        </div>

                    </div>


                    <div className='col w-full p-5 px-0'>
                        <h3 className='font-[700] text-[18px] mb-2'>Media & Images</h3>

                        <div className='grid grid-cols-7 gap-4 '>

                            {
                                previews?.length !== 0 && previews?.map((image, index) => {
                                    return (
                                        <div className='uploadBoxWrapper relative' key={index}>
                                            <span className='absolute -top-[10px] -right-[10px] text-[16px] w-[20px] h-[20px] bg-red-700 overflow-hidden  rounded-full cursor-pointer z-50 flex items-center justify-center text-white' onClick={() => removeImg(image, index)}><IoClose /></span>

                                            <div className='uploadBox  relative rounded-md overflow-hidden border border-dashed border-[rgba(0,0,0,0.3)] h-[150px] w-[100%] bg-gray-100 cursor-pointer hover:bg-gray-200 flex flex-col items-center justify-center'>
                                                <img src={image} className='w-full h-full ' alt="" />
                                            </div>
                                        </div>
                                    )
                                })
                            }



                            <UploadBox multiple={true} name="images" url="/api/product/uploadImages" setPreviewsFun={setPreviewsFun} />
                        </div>
                    </div>

                </div>
                <br />
                <Button type='submit' className='btn-blue w-full flex gap-2 items-center justify-center'><FaCloudUploadAlt className='text-[25px]' />Publish and View</Button>
            </form>


        </section>
    );
};

export default AddProduct;
