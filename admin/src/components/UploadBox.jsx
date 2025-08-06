import React from 'react';
import { IoImagesOutline } from "react-icons/io5";

const UploadBox = (props) => {
  return (
    <div className='uploadBox p-3 relative rounded-md overflow-hidden border border-dashed border-[rgba(0,0,0,0.3)] h-[150px] w-[100%] bg-gray-100 cursor-pointer hover:bg-gray-200 flex flex-col items-center justify-center'>
        <IoImagesOutline className='text-[40px] opacity-20'/>
      <h4 className='text-[14px] font-[600]'>Image Upload</h4>

      <input type="file" multiple={props.multiple} className='absolute top-0 left-0 w-full h-full opacity-0'  />
    </div>
  );
}

export default UploadBox;
