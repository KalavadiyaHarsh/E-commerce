import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import Search from './Search';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { IoMdCart } from "react-icons/io";
import { IoGitCompareOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import Tooltip from '@mui/material/Tooltip';
import Navigation from './Navigation';
import { MyContext } from '../App';
import { Button } from '@mui/material';
import { FaRegUser } from "react-icons/fa";
import { BsBagCheckFill } from "react-icons/bs";
import { FaHeart } from "react-icons/fa";
import { IoIosLogOut } from "react-icons/io";



import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';
import { fetchDataFromApi } from '../utils/api';






const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${(theme.vars ?? theme).palette.background.paper}`,
    padding: '0 4px',
  },
}));

const Header = () => {

  const context = useContext(MyContext);

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

   const logout = () => {
  setAnchorEl(null);
  
  fetchDataFromApi("/api/user/logout").then((res) => {
    if (res?.success) {
      localStorage.removeItem("accesstoken");
      localStorage.removeItem("refreshToken");
      context.setIsLogin(false);
    } else {
      console.error("Logout failed:", res?.message || res);
    }
  }).catch((err) => {
    console.error("Error logging out:", err);
  });
};


  return (
    <header className=' bg-white sticky -top-[130px] z-50'>
      <div className="top-strip  py-2 border-b-[1px] border-t-[1px] border-gray-300">
        <div className="container">
          <div className='flex item-center justify-between'>
            <div className='coll w-[50%]'>
              <p className='text-[13px] font-[500]'>Get up to 50% off new season styles, limited time only</p>
            </div>

            <div className='flex items-center justify-end w-full'>
              <ul className='flex items-center gap-4'>
                <li className='list-none'>
                  <Link to='/help-center' className='text-[13px] link font-[500] transition'>Help Center</Link>
                </li>
                <li className='list-none'>
                  <Link to='/order-tracking' className='text-[13px] link font-[500] transition'>Order Tracking</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className='header w-full py-4 border-b-[1px] border-gray-300'>
        <div className='container w-full flex items-center justify-between'>
          <div className='col1 w-[25%]'>
            <Link to={"/"}><img src='logo.jpg'></img></Link>
          </div>

          <div className='col2 w-[35%]'>
            <Search />
          </div>

          <div className='col3 w-[40%] flex items-center pl-7'>

            <ul className='flex items-center justify-end gap-3 w-full'>
              {
                context.isLogin === false ? <li className='list-none'>
                  <Link to={"/login"} className='link transition  text-[15px] font-[500] '>Login</Link> | <Link to={"/register"} className='link transition text-[15px] font-[500] '>Register</Link>
                </li>
                  :
                  (
                    <>
                      <Button className='!text-[#000] myAccountWrap flex items-center gap-3' onClick={handleClick}>
                        <Button className='!w-[40px] !h-[40px] !min-w-[40px] !rounded-full !bg-[#f1f1f1]'>
                          <FaRegUser className='text-[16px] text-[rgba(0,0,0,0.7)]' />
                        </Button>

                        <div className='info flex flex-col '>
                          <h4 className='text-[14px] capitalize leading-3 text-[rgba(0,0,0,0.7)] text-left justify-start font-[500]'>{context?.userData?.name}</h4>
                          <span className='text-[14px] lowercase text-[rgba(0,0,0,0.7)] text-left justify-start font-[400]'>{context?.userData?.email}</span>
                        </div>
                      </Button>

                      <Menu
                        anchorEl={anchorEl}
                        id="account-menu"
                        open={open}
                        onClose={handleClose}
                        onClick={handleClose}
                        slotProps={{
                          paper: {
                            elevation: 0,
                            sx: {
                              overflow: 'visible',
                              filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                              mt: 1.5,
                              '& .MuiAvatar-root': {
                                width: 32,
                                height: 32,
                                ml: -0.5,
                                mr: 1,
                              },
                              '&::before': {
                                content: '""',
                                display: 'block',
                                position: 'absolute', 
                                top: 0,
                                right: 14,
                                width: 10,
                                height: 10,
                                bgcolor: 'background.paper',
                                transform: 'translateY(-50%) rotate(45deg)',
                                zIndex: 0,
                              },
                            },
                          },
                        }}
                        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                      >
                        <Link to={"/my-account"} className='w-full block' >
                          <MenuItem onClick={handleClose} className='flex items-center gap-2 hover:text-primary !text-[14px] !py-2' >
                            <FaRegUser /> My account
                          </MenuItem>
                        </Link>

                        <Link to={"/my-list"} className='w-full block' >
                          <MenuItem onClick={handleClose} className='flex items-center gap-2 hover:text-primary !text-[14px] !py-2' >
                            <FaHeart /> My List
                          </MenuItem>
                        </Link>

                        <Link to={"/my-orders"} className='w-full block' >
                          <MenuItem onClick={handleClose} className='flex items-center gap-2 hover:text-primary !text-[14px] !py-2' >
                            <BsBagCheckFill /> Orders
                          </MenuItem>
                        </Link>

                        <Link to={"/"} >
                          <MenuItem onClick={logout} className='flex items-center gap-2 hover:text-primary !text-[14px] !py-2' >
                            <IoIosLogOut /> Logout
                          </MenuItem>
                        </Link>

                      </Menu>
                    </>
                  )
              }


              <li>
                <Tooltip title="Compare">
                  <IconButton aria-label="cart" >
                    <StyledBadge badgeContent={1} color="secondary">
                      < IoGitCompareOutline />
                    </StyledBadge>
                  </IconButton>
                </Tooltip>
              </li>

              <li>
                <Tooltip title="Wishlist">
                  <IconButton aria-label="cart">
                    <StyledBadge badgeContent={1} color="secondary">
                      < FaRegHeart />
                    </StyledBadge>
                  </IconButton>
                </Tooltip>
              </li>

              <li>
                <Tooltip title="Cart">
                  <IconButton aria-label="cart" onClick={() => context.setOpenCartPanel(true)} >
                    <StyledBadge badgeContent={1} color="secondary">
                      < IoMdCart />
                    </StyledBadge>
                  </IconButton>
                </Tooltip>
              </li>
            </ul>

          </div>
        </div>
      </div>

      <Navigation />
    </header>
  );
}

export default Header;


