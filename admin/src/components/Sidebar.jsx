import Button from '@mui/material/Button';
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { TbLayoutDashboard } from "react-icons/tb";
import { FaRegImage } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { SiProducthunt } from "react-icons/si";
import { TbCategory } from "react-icons/tb";
import { IoBagCheck } from "react-icons/io5";
import { IoMdLogOut } from "react-icons/io";
import { FaAngleDown } from "react-icons/fa";
import { Collapse } from 'react-collapse';
import { MyContext } from '../App';



const Sidebar = () => {

      const context = useContext(MyContext)
  

  const [submenuIndex, setSubmenuIndex] = useState(null)
  const isOpenSubMenu = (index) => {
    if (submenuIndex === index) {
      setSubmenuIndex(null);
    }
    else {
      setSubmenuIndex(index);

    }
  }
  return (
    <>
      <div className='sidebar fixed top-0 left-0 bg-[#fff] w-[18%] h-full border-r border-[rgba(0,0,0,0.1)] py-2 px-4'>
        <div className='py-2 w-full'>
          <Link to={"/"}><img src="admin logo.png" className='w-[119px]' /></Link>
        </div>

        <ul className='mt-4'>
          <li>
            <Link to={"/"}>
              <Button className='!w-full !capitalize !py-3 hover:!bg-[#f1f1f1] !justify-start gap-3 !text-[14px] !text-[rgba(0,0,0,0.8)] !font-[600] items-center'>
                <TbLayoutDashboard className='text-[20px]' />
                <span> Dashboard </span>
              </Button>
            </Link>
          </li>

          <li>
            <Button className='!w-full !capitalize !py-2 hover:!bg-[#f1f1f1] !justify-start gap-3 !text-[14px] !text-[rgba(0,0,0,0.8)] !font-[600] !items-center' onClick={() => isOpenSubMenu(1)}>
              <FaRegImage className='text-[18px]' />
              <span>Home Slides</span>
              <span className='ml-auto w-[30px] h-[30px] flex items-center justify-center' ><FaAngleDown className={`transition-all ${submenuIndex === 1 ? 'rotate-180' : ''}`} /></span>
            </Button>

            <Collapse isOpened={submenuIndex === 1 ? true : false}>
              <ul className='w-full'>
                <Link to={'/homeSlider/list'}>
                <li className='w-full'>
                  <Button className='!text-[rgba(0,0,0,0.7)] !capitalize !justify-start !w-full !text-[13px] !font-[500] !pl-5 !flex  gap-3'><span className='block w-[4px] h-[4px] rounded-full bg-[rgba(0,0,0,0.2)]'></span>Home Slides List</Button>
                </li>
                </Link>

                <li className='w-full'>
                  <Button className='!text-[rgba(0,0,0,0.7)] !capitalize !justify-start !w-full !text-[13px] !font-[500] !pl-5 !flex  gap-3' onClick={() => context.setIsOpenFullScreenPanle({
                        open: true,
                        model: 'Add Home Slide'
                    })}><span className='block w-[4px] h-[4px] rounded-full bg-[rgba(0,0,0,0.2)]'></span>Add Home Banner Slider</Button>
                </li>
              </ul>
            </Collapse>
          </li>

          <li>
            <Link to={"/users"}>
              <Button className='!w-full !capitalize !py-3 hover:!bg-[#f1f1f1] !justify-start gap-3 !text-[14px] !text-[rgba(0,0,0,0.8)] !font-[600] items-center'>
                <FaUsers className='text-[18px]' />
                <span> Users </span>
              </Button>
            </Link>
          </li>

          <li>
            <Button className='!w-full !capitalize !py-2 hover:!bg-[#f1f1f1] !justify-start gap-3 !text-[14px] !text-[rgba(0,0,0,0.8)] !font-[600] items-center' onClick={() => isOpenSubMenu(2)}>
              <SiProducthunt className='text-[18px]' />
              <span> Products </span>
              <span className='ml-auto w-[30px] h-[30px] flex items-center justify-center'><FaAngleDown className={`transition-all ${submenuIndex === 2 ? 'rotate-180' : ''}`} /></span>
            </Button>

            <Collapse isOpened={submenuIndex === 2 ? true : false}>
              <ul className='w-full'>
                <li className='w-full'>
                  <Link to={"/products"}>
                    <Button className='!text-[rgba(0,0,0,0.7)] !capitalize !justify-start !w-full !text-[13px] !font-[500] !pl-5 !flex  gap-3'><span className='block w-[4px] h-[4px] rounded-full bg-[rgba(0,0,0,0.2)]'></span>Product List</Button>
                  </Link>
                </li>

                <li className='w-full'>
                    <Button className='!text-[rgba(0,0,0,0.7)] !capitalize !justify-start !w-full !text-[13px] !font-[500] !pl-5 !flex  gap-3' onClick={context.handleClickOpen}><span className='block w-[4px] h-[4px] rounded-full bg-[rgba(0,0,0,0.2)]' ></span>Product Upload</Button>
                </li>
              </ul>
            </Collapse>
          </li>

          <li>
            <Button className='!w-full !capitalize !py-2 hover:!bg-[#f1f1f1] !justify-start gap-3 !text-[14px] !text-[rgba(0,0,0,0.8)] !font-[600] items-center' onClick={() => isOpenSubMenu(3)}>
              <TbCategory className='text-[20px]' />
              <span> Category </span>
              <span className='ml-auto w-[30px] h-[30px] flex items-center justify-center'><FaAngleDown className={`transition-all ${submenuIndex === 3 ? 'rotate-180' : ''}`} /></span>
            </Button>

            <Collapse isOpened={submenuIndex === 3 ? true : false}>
              <ul className='w-full'>
                <li className='w-full'>
                  <Link to={"/category/list"}>
                    <Button className='!text-[rgba(0,0,0,0.7)] !capitalize !justify-start !w-full !text-[13px] !font-[500] !pl-5 !flex  gap-3'><span className='block w-[4px] h-[4px] rounded-full bg-[rgba(0,0,0,0.2)]'></span>category List</Button>
                  </Link>
                </li>

                <li className='w-full'> 
                    <Button className='!text-[rgba(0,0,0,0.7)] !capitalize !justify-start !w-full !text-[13px] !font-[500] !pl-5 !flex  gap-3' onClick={() => context.setIsOpenFullScreenPanle({
                        open: true,
                        model: 'Add New Category'
                    })}><span className='block w-[4px] h-[4px] rounded-full bg-[rgba(0,0,0,0.2)]' ></span>Add a category</Button>
                </li>

                <li className='w-full'>
                  <Link to={"/subcategory/list"}>
                    <Button className='!text-[rgba(0,0,0,0.7)] !capitalize !justify-start !w-full !text-[13px] !font-[500] !pl-5 !flex  gap-3'><span className='block w-[4px] h-[4px] rounded-full bg-[rgba(0,0,0,0.2)]'></span>Sub category List</Button>
                  </Link>
                </li>

                <li className='w-full'>
                    <Button className='!text-[rgba(0,0,0,0.7)] !capitalize !justify-start !w-full !text-[13px] !font-[500] !pl-5 !flex  gap-3'onClick={() => context.setIsOpenFullScreenPanle({
                        open: true,
                        model: 'Add New Sub Category'
                    })}><span className='block w-[4px] h-[4px] rounded-full bg-[rgba(0,0,0,0.2)]'></span>Add a Sub category</Button>
                </li>
              </ul>
            </Collapse>
          </li>

          <li>
            <Link to={"/oders"}>
              <Button className='!w-full !capitalize !py-3 hover:!bg-[#f1f1f1] !justify-start gap-3 !text-[14px] !text-[rgba(0,0,0,0.8)] !font-[600] items-center'>
                <IoBagCheck className='text-[20px]' />
                <span> Order </span>
              </Button>
            </Link>
          </li>

          <li>
            <Button className='!w-full !capitalize !py-2 hover:!bg-[#f1f1f1] !justify-start gap-3 !text-[14px] !text-[rgba(0,0,0,0.8)] !font-[600] items-center' onClick={() => isOpenSubMenu(4)}>
              <SiProducthunt className='text-[18px]' />
              <span> Banners </span>
              <span className='ml-auto w-[30px] h-[30px] flex items-center justify-center'><FaAngleDown className={`transition-all ${submenuIndex === 4 ? 'rotate-180' : ''}`} /></span>
            </Button>

            <Collapse isOpened={submenuIndex === 4 ? true : false}>
              <ul className='w-full'>
                <li className='w-full'>
                  <Link to={"/bannerV1/list"}>
                    <Button className='!text-[rgba(0,0,0,0.7)] !capitalize !justify-start !w-full !text-[13px] !font-[500] !pl-5 !flex  gap-3'><span className='block w-[4px] h-[4px] rounded-full bg-[rgba(0,0,0,0.2)]'></span>Banner V1 List</Button>
                  </Link>
                </li>

                <li className='w-full'>
                    <Button className='!text-[rgba(0,0,0,0.7)] !capitalize !justify-start !w-full !text-[13px] !font-[500] !pl-5 !flex  gap-3' onClick={() => context.setIsOpenFullScreenPanle({
                        open: true,
                        model: 'Add BannerV1'
                    })}><span className='block w-[4px] h-[4px] rounded-full bg-[rgba(0,0,0,0.2)]' ></span>Add Banner V1</Button>
                </li>
              </ul>
            </Collapse>
          </li>

          <li>
            <Button className='!w-full !capitalize !py-3 hover:!bg-[#f1f1f1] !justify-start gap-3 !text-[14px] !text-[rgba(0,0,0,0.8)] !font-[600] items-center'>
              <IoMdLogOut className='text-[20px]' />
              <span> Logout </span>
            </Button>
          </li>

        </ul>
      </div>
    </>
  );
}

export default Sidebar;
