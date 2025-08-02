import React, { useContext, useEffect, useState } from 'react';
import { FaCloudUploadAlt, FaUser, FaHeart, FaShoppingBag, FaSignOutAlt } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import Button from '@mui/material/Button';
import { MyContext } from '../App';
import { useNavigate } from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';
import { uploadImage } from '../utils/api';

const AccountSidebar = () => {

    const [previews, setPreviews] = useState([]);
    const [uploading, setUploading] = useState(false)

    const context = useContext(MyContext);
    const history = useNavigate();

    useEffect(() => {
        const userAvatar = [];
        if (context?.userData?.avatar !== "" && context?.userData?.avatar !== undefined) {
            userAvatar.push(context?.userData?.avatar);
            setPreviews(userAvatar)
        }
    }, [context?.userData])

    let selectedImages = [];

    const formData = new FormData();


    const onchangeFile = async (e, apiEndPoint) => {
        try {
            setPreviews([]);
            const files = e.target.files;
            setUploading(true);
            // console.log(files)

            for (var i = 0; i < files.length; i++) {
                if (files[i] && (files[i].type === "image/jpeg" || files[i].type === "image/jpg" || files[i].type === "image/png" || files[i].type === "image/webp")) {
                    const file = files[i];
                    selectedImages.push(file);
                    formData.append(`avatar`, file);

                    uploadImage("/api/user/user-avatar", formData).then((res) => {
                        //console.log(res.avatar)
                        setUploading(false);
                        let avatar = [];
                        avatar.push(res?.avatar);
                        setPreviews(avatar);
                    })

                }
                else {
                    context.openAlertBox("error", "Please select a valid JPG , JPEG , PNG or webp image file.");
                    setUploading(false);
                    return false;
                }
            }


        } catch (error) {
            console.log(error);
        }
    }


    return (
        <div className='card bg-white shadow-md p-5 rounded-md sticky top-[15px]'>

            {/* Profile Image */}
            <div className='w-full p-3 flex items-center justify-center flex-col'>
                <div className='w-[110px] h-[110px] rounded-full overflow-hidden mb-4 relative flex items-center justify-center bg-gray-200'>

                    {
                        uploading === true ? <CircularProgress color="inherit" /> :
                            <>
                                {
                                    previews?.length !== 0 ? previews?.map((img, index) => {
                                        //  console.log(img)
                                        return (
                                            <img
                                                src={img}
                                                key={index}
                                                alt="Profile"
                                                className='w-full h-full '
                                            />
                                        )
                                    })
                                        :
                                        <img
                                            src='user.png'
                                            alt="Profile"
                                            className='w-full h-full '
                                        />
                                }
                            </>
                    }


                    <div className='overlay absolute top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.3)] flex items-center justify-center cursor-pointer opacity-0 transition-all hover:opacity-100'>
                        <FaCloudUploadAlt className='text-white text-[30px]' />
                        <input
                            type="file"
                            className='absolute opacity-0 top-0 left-0 w-full h-full cursor-pointer'
                            accept='image/*'
                            onChange={(e) => {
                                onchangeFile(e, "/api/user/user-avatar")
                            }}
                            name='avatar'
                        />
                    </div>
                </div>
                <h3 className='font-semibold text-[16px] mb-2'>{context?.userData?.name}</h3>
                <h6 className='text-[13px] font-[500]'>{context?.userData?.email}</h6>
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
