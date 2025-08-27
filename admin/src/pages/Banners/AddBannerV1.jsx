import React, { useContext, useState } from 'react';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { MyContext } from '../../App';
import UploadBox from '../../components/UploadBox';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import { FaCloudUploadAlt } from 'react-icons/fa';
import { IoClose } from "react-icons/io5";
import { deleteImages, postData } from '../../utils/api';


const AddBannerV1 = () => {

  const [productCat, setProductCat] = useState('');
  const [productSubCat, setProductSubCat] = useState('');
  const [thirdsubCat, setThirdsubCat] = useState('');
  const [previews, setPreviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false)
  const history = useNavigate();


  const [formFields, setFormFields] = useState({
    catId: "",
    subCatId: "",
    thirdsubCatId: "",
    bannerTitle: '',
    price: "",
    images: []
  });


  const context = useContext(MyContext)


  const handleChangeProductCat = (event) => {
    setProductCat(event.target.value);
    formFields.catId = event.target.value;
  };



  const handleChangeProductSubCat = (event) => {
    setProductSubCat(event.target.value);
    formFields.subCatId = event.target.value;

  };



  const handleChangeThirdSubCat = (event) => {
    setThirdsubCat(event.target.value);
    formFields.thirdsubCatId = event.target.value;
  };


  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setFormFields(() => {
      return {
        ...formFields,
        [name]: value
      }
    })
  }


  const setPreviewsFun = (newImages) => {
    setPreviews((prev) => [...prev, ...newImages]); // merge arrays
    formFields.images = [...(formFields.images || []), ...newImages]; // append to form field
  };

  const removeImg = (image, index) => {
    var imageArr = [];
    imageArr = previews;
    deleteImages(`/api/bannerV1/deleteImage?img=${image}`).then((res) => {
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

    if (formFields.bannerTitle.trim() === "") {
      context.openAlertBox("error", "Please enter Banner Title!");
      setIsLoading(false);
      return;
    }

    if (formFields.price.trim() === "") {
      context.openAlertBox("error", "Please enter Price!");
      setIsLoading(false);
      return;
    }

    if (previews?.length === 0) {
      context.openAlertBox("error", "Please select category image");
      setIsLoading(false);
      return;
    }

    console.log(formFields)
    postData("/api/bannerV1/create", formFields).then((res) => {
      if (res?.error !== true) {
        setTimeout(() => {
          setIsLoading(false);
          context.setIsOpenFullScreenPanle({
            open: false
          });

          window.location.reload();  // ✅ Reload the page to show new category
        }, 1000)
        context.openAlertBox("success", res?.message);
        history("/bannerV1/list");



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

          <div className='grid grid-cols-5 mb-3 gap-5'>
            <div className='col'>
              <h3 className='text-[14px] font-[500] mb-1'>Banner Title</h3>
              <input type="text" name='bannerTitle' value={formFields.bannerTitle} className='w-full h-[40px] border border-[rgba(0,0,0,0.2)] p-3 text-sm' onChange={onChangeInput} />
            </div>

            <div className='col '>
              <h3 className='text-[14px] font-[500] mb-1'>Category</h3>
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
                        <MenuItem key={index} value={cat?._id}>{cat?.name}</MenuItem>
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
                            <MenuItem key={subIndex} value={subCat?._id} >{subCat?.name}</MenuItem>
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
                                <MenuItem key={thirdSubIndex} value={thirdSubCat?._id} >{thirdSubCat?.name}</MenuItem>
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
                      <img src={image} className='w-full h-full ' alt="" />
                    </div>
                  </div>
                )
              })
            }



            <UploadBox multiple={true} name="images" url="/api/bannerV1/uploadImages" setPreviewsFun={setPreviewsFun} />
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

export default AddBannerV1;
