import React, { useContext, useState } from 'react';
import { IoImagesOutline } from "react-icons/io5";
import { uploadImages } from '../utils/api';
import { MyContext } from '../App';
import CircularProgress from '@mui/material/CircularProgress';
import Tooltip from '@mui/material/Tooltip';


const UploadBox = (props) => {
  const [previews, setPreviews] = useState([]);
  const [uploading, setUploading] = useState(false)

  const context = useContext(MyContext);

  let selectedImages = [];

  const formData = new FormData();

  // const onchangeFile = async (e, apiEndPoint) => {
  //   try {
  //     setPreviews([]);
  //     const files = e.target.files;
  //     setUploading(true);
  //     // console.log(files)

  //     for (var i = 0; i < files.length; i++) {
  //       if (files[i] && (files[i].type === "image/jpeg" || files[i].type === "image/jpg" || files[i].type === "image/png" || files[i].type === "image/webp")) {
  //         const file = files[i];
  //         selectedImages.push(file);
  //         formData.append(props.name, file);

  //         uploadImage(apiEndPoint, formData).then((res) => {
  //           //console.log(res.avatar)
  //           setUploading(false);
  //           // let avatar = [];
  //           // avatar.push(res?.avatar);
  //           //console.log(res?.images)
  //           //props.setPreviews(res?.images);
  //           props.setPreviewsFun(res?.image);
  //         })

  //       }
  //       else {
  //         context.openAlertBox("error", "Please select a valid JPG , JPEG , PNG or webp image file.");
  //         setUploading(false);
  //         return false;
  //       }
  //     }


  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  const onchangeFile = async (e, apiEndPoint) => {
    try {
      const files = e.target.files;
      setUploading(true);

      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        if (
          file &&
          ["image/jpeg", "image/jpg", "image/png", "image/webp"].includes(file.type)
        ) {
          const formData = new FormData(); // ✅ move inside the loop
          formData.append(props.name, file);

          const res = await uploadImages(apiEndPoint, formData); // wait for each upload
          if (res?.image) {
            props.setPreviewsFun(res.image); // add uploaded image to preview
          }
        } else {
          context.openAlertBox("error", "Please select a valid JPG , JPEG , PNG or webp image file.");
          setUploading(false);
          return false;
        }
      }

      setUploading(false);
      e.target.value = null; // ✅ reset input
    } catch (error) {
      console.error("Image upload error:", error);
      setUploading(false);
    }
  };

  return (
    <Tooltip title="Recommended image size: 540px (width) × 720px (height)" placement="top">
      <div className='uploadBox p-3 relative rounded-md overflow-hidden border border-dashed border-[rgba(0,0,0,0.3)] h-[150px] w-[100%] bg-gray-100 cursor-pointer hover:bg-gray-200 flex flex-col items-center justify-center'>

        {
          uploading === true ?
            <>
              < CircularProgress />
              <h4 className='text-center'>Uploading...</h4>
            </>
            :
            <>
              <IoImagesOutline className='text-[40px] opacity-20' />
              <h4 className='text-[14px] font-[600]'>Image Upload</h4>

              <input
                type="file"
                multiple={props.multiple}
                className='absolute top-0 left-0 w-full h-full opacity-0'
                accept='image/*'
                onChange={(e) => {
                  onchangeFile(e, props?.url)
                }}
                name="images"
              />

            </>

        }

      </div>
    </Tooltip>
  );
}

export default UploadBox;
