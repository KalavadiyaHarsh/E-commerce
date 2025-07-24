import React from 'react';
import { FaCloudUploadAlt, FaUser, FaHeart, FaShoppingBag, FaSignOutAlt } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import Button from '@mui/material/Button';


const AccountSidebar = () => {
    return (
        <div className='card bg-white shadow-md p-5 rounded-md sticky top-[15px]'>

            {/* Profile Image */}
            <div className='w-full p-3 flex items-center justify-center flex-col'>
                <div className='w-[110px] h-[110px] rounded-full overflow-hidden mb-4 relative'>
                    <img
                        src="https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?w=600&auto=format&fit=crop&q=60"
                        alt="Profile"
                        className='w-full h-full object-cover'
                    />
                    <div className='overlay absolute top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.3)] flex items-center justify-center cursor-pointer opacity-0 transition-all hover:opacity-100'>
                        <FaCloudUploadAlt className='text-white text-[30px]' />
                        <input type="file" className='absolute opacity-0 top-0 left-0 w-full h-full cursor-pointer' />
                    </div>
                </div>
                <h3 className='font-semibold text-[16px] mb-2'>Rajesh Sharma</h3>
            </div>

            {/* Menu Links */}
            <ul className='list-none pb-5 bg-[#f1f1f1] myAccountTabs'>

                <li className='w-full'>
                    <NavLink to="/my-account" end className={({ isActive }) => isActive ? "isActive" : ""}>
                        <Button className="w-full !text-left !py-2 !px-5 !justify-start capitalize !text-[rgba(0,0,0,0.8)] !rounded-none flex items-center gap-2">
                            <FaUser className="text-[15px]" /> My Profile
                        </Button>
                    </NavLink>
                </li>

                <li className='w-full'>
                    <NavLink to="/my-list" className={({ isActive }) => isActive ? "isActive" : ""}>
                        <Button className="w-full !text-left !py-2 !px-5 !justify-start capitalize !text-[rgba(0,0,0,0.8)] !rounded-none flex items-center gap-2">
                            <FaHeart className="text-[15px]" /> My List
                        </Button>
                    </NavLink>
                </li>

                <li className='w-full'>
                    <NavLink to="/my-orders" className={({ isActive }) => isActive ? "isActive" : ""}>
                        <Button className="w-full !text-left !py-2 !px-5 !justify-start capitalize !text-[rgba(0,0,0,0.8)] !rounded-none flex items-center gap-2">
                            <FaShoppingBag className="text-[15px]" /> My Orders
                        </Button>
                    </NavLink>
                </li>

                <li className='w-full'>
                    <NavLink to="/logout" className={({ isActive }) => isActive ? "isActive" : ""}>
                        <Button className="w-full !text-left !py-2 !px-5 !justify-start capitalize !text-[rgba(0,0,0,0.8)] !rounded-none flex items-center gap-2">
                            <FaSignOutAlt className="text-[15px]" /> Logout
                        </Button>
                    </NavLink>
                </li>

            </ul>
        </div>
    );
}

export default AccountSidebar;
