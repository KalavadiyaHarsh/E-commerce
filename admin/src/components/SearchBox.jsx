import React from 'react';
import { CiSearch } from "react-icons/ci";

const SearchBox = () => {
  return (
    <div className='w-full h-[40px]  bg-[#f1f1f1] relative overflow-hidden'>
      <input type="text" placeholder='Search here..' className='w-full pr-9 h-[40px] border border-[rgba(0,0,0,0.1)] bg-[#f1f1f1] p-2 focus:outline-none focus:border-[rgba(0,0,0,0.5)] rounded-md text-[13px] ' />
      <CiSearch className='absolute top-2 right-2 text-[25px] cursor-pointer rounded-full opacity-50'/>

    </div>
  );
}

export default SearchBox;
