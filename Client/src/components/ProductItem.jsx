import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Rating from '@mui/material/Rating';
import { Button } from '@mui/material';
import { IoMdHeartEmpty } from "react-icons/io";
import { IoGitCompareOutline } from "react-icons/io5";
import { MdZoomOutMap } from "react-icons/md";
import Tooltip from '@mui/material/Tooltip';
import { MyContext } from '../App';


function ProductItem() {

    const context = useContext(MyContext)


    return (
        <div className='productItem group w-[250px] rounded-md overflow-hidden bg-white shadow-xl border-[1px] border-[rgba(0,0,0,1)]  '>
            <div className='imgwrapper w-full group-hover:scale-105 overflow-hidden relative'>
                <Link to={"/productDetails/:id"}>
                    <div className='img h-[250px]'>
                        <img
                            src="https://serviceapi.spicezgold.com/download/1742463096955_hbhb1.jpg"
                            alt="Product"
                            className='w-full h-full object-center'
                        />

                        <img
                            src="https://serviceapi.spicezgold.com/download/1742463096956_hbhb2.jpg"
                            alt="Product"
                            className='w-full h-full object-center absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition-all duration-500'
                        />
                    </div>
                </Link>
                <span className='discount flex items-center absolute top-[10px] left-[10px] z-50 bg-primary text-white rounded-xl p-1 text-[13px] font-[500]'>10%</span>

                <div className='actions absolute top-[15px] right-[-199px] z-50 flex items-center gap-2 flex-col w-[50px] transition-all duration-500 group-hover:right-[-1px]'>
                    <Tooltip title="Favorite" placement="left">
                        <Button className='!w-[35px] !h-[35px] !min-w-[35px] rounded-full !bg-white text-black hover:!bg-primary hover:!text-white'>
                            <IoMdHeartEmpty className='text-[18px] text-black hover:text-white' />
                        </Button>
                    </Tooltip>

                    <Tooltip title="Compare" placement="left">
                        <Button className='!w-[35px] !h-[35px] !min-w-[35px] rounded-full !bg-white text-black hover:!bg-primary hover:!text-white'>
                            <IoGitCompareOutline className='text-[18px] text-black hover:text-white' />
                        </Button>
                    </Tooltip>

                    <Tooltip title="Zoom" placement="left">
                        <Button className='!w-[35px] !h-[35px] !min-w-[35px] rounded-full !bg-white text-black hover:!bg-primary hover:!text-white' onClick={()=>context.setOpenProductDetailsModal(true)}>
                            <MdZoomOutMap className='text-[18px] text-black hover:text-white' />
                        </Button>
                    </Tooltip>
                </div>


            </div>

            <div className='info p-3 py-5 bg-[#f1f1f1]'>
                <h6 className='text-[13px] font-semibold'><Link to={"/"} className='link transition-all'>Soylent Green</Link></h6>
                <h3 className='text-[14px] title mt-1 mb-1 font-[500] text-black'>
                    <Link to={"/"} className='link transition-all'>Lorem ipsum, dobsvfgukd gstyujsxggyuh dfusjnb v</Link>
                </h3>
                <Rating name="size-small" defaultValue={4} size="small" readOnly />

                <div className='flex items-center gap-4'>
                    <span className='oldPrice line-through text-gray-500 text-[15px] font-[500]'>$58.00</span>
                    <span className='price text-primary text-[15px] font-[600]'>$58.00</span>
                </div>


            </div>
        </div>
    );
}

export default ProductItem;





