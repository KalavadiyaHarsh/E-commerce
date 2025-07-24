import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Rating from '@mui/material/Rating';
import { Button } from '@mui/material';
import { IoMdHeartEmpty } from "react-icons/io";
import { IoGitCompareOutline } from "react-icons/io5";
import { MdZoomOutMap } from "react-icons/md";
import Tooltip from '@mui/material/Tooltip';
import { IoCartOutline } from "react-icons/io5";
import { MyContext } from '../App';


function ProductItemListView() {

  const context = useContext(MyContext)

  
  return (
    <div className='productItem group w-full rounded-md overflow-hidden bg-white shadow-xl border border-black flex md:flex-row flex-col gap-4'>
      
      {/* Image Section */}
      <div className='imgwrapper w-[270px] h-full relative overflow-hidden flex-shrink-0'>
        <Link to={"/"}>
          <div className='img w-full h-full relative'>
            <img
              src="https://serviceapi.spicezgold.com/download/1742463096955_hbhb1.jpg"
              alt="Product"
              className='w-full h-full '
            />
            <img
              src="https://serviceapi.spicezgold.com/download/1742463096956_hbhb2.jpg"
              alt="Product"
              className='w-full h-full object-cover absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition-all duration-500'
            />
          </div>
        </Link>

        <span className='discount flex items-center absolute top-[10px] left-[10px] z-50 bg-primary text-white rounded-xl p-1 text-[13px] font-[500]'>
          10%
        </span>

        {/* Hover Action Buttons */}
        <div className='actions absolute top-[15px] right-[-199px] z-50 flex items-center gap-2 flex-col w-[50px] transition-all duration-500 group-hover:right-[10px]'>
          <Tooltip title="Favorite" placement="left">
            <Button className='!w-[35px] !h-[35px] !min-w-[35px] rounded-full !bg-white text-black hover:!bg-primary hover:!text-white'>
              <IoMdHeartEmpty className='text-[18px]' />
            </Button>
          </Tooltip>

          <Tooltip title="Compare" placement="left">
            <Button className='!w-[35px] !h-[35px] !min-w-[35px] rounded-full !bg-white text-black hover:!bg-primary hover:!text-white'>
              <IoGitCompareOutline className='text-[18px]' />
            </Button>
          </Tooltip>

          <Tooltip title="Zoom" placement="left">
            <Button className='!w-[35px] !h-[35px] !min-w-[35px] rounded-full !bg-white text-black hover:!bg-primary hover:!text-white' onClick={()=>context.setOpenProductDetailsModal(true)}>
              <MdZoomOutMap className='text-[18px]' />
            </Button>
          </Tooltip>
        </div>
      </div>

      {/* Info Section */}
      <div className='info p-4 flex flex-col justify-between w-full bg-[#f1f1f1]'>
        <div>
          <h6 className='text-[13px] font-semibold'>
            <Link to={"/"} className='link transition-all'>Soylent Green</Link>
          </h6>

          <h3 className='text-[14px] title mt-1 mb-2 font-[500] text-black'>
            <Link to={"/"} className='link transition-all'>
              Lorem ipsum, dobsvfgukd gstyujsxggyuh dfusjnb v
            </Link>
          </h3>

          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus itaque obcaecati commodi eum rem quo fuga? Corrupti commodi ratione sapiente voluptatibus ab ut ipsum quidem laboriosam adipisci esse dolorem recusandae voluptates autem iusto asperiores iste tempore error, quos ipsa alias explicabo officiis modi! Pariatur quam voluptas vero inventore dolores maiores?</p>

          <Rating name="size-small" defaultValue={4} size="small" readOnly />
        </div>

        <div className='flex items-center gap-4 mt-3'>
          <span className='oldPrice line-through text-gray-500 text-[15px] font-[500]'>$58.00</span>
          <span className='price text-primary text-[15px] font-[600]'>$58.00</span>
        </div>

        <Button className='btn !bg-primary !text-white w-44 !gap-3'><IoCartOutline className='text-[19px]' />Add to Cart</Button>
      </div>
    </div>
  );
}

export default ProductItemListView;
