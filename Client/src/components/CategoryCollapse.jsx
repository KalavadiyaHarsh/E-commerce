import React, { useState } from 'react';
// import Box from '@mui/material/Box';
// import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
// import List from '@mui/material/List';
// import Divider from '@mui/material/Divider';
// import ListItem from '@mui/material/ListItem';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemText from '@mui/material/ListItemText';
// import { IoMdClose } from "react-icons/io";
import { FaRegSquarePlus } from "react-icons/fa6";
import { FaRegMinusSquare } from "react-icons/fa";
import { Link } from 'react-router-dom';

const CategoryCollapse = () => {

    
      const [submenuIndex, setSubmenuIndex] = useState(null);
      const [innersubmenuIndex, setInnerSubmenuIndex] = useState(null)
    
      const openSubmenu = (index) => {
        if (submenuIndex === index) {
          setSubmenuIndex(null);
        } else {
          setSubmenuIndex(index);
        }
      }
    
      const openInnerSubmenu = (index) => {
        if (innersubmenuIndex === index) {
          setInnerSubmenuIndex(null);
        } else {
          setInnerSubmenuIndex(index);
        }
      }

  return (
    <div>
      <div className='scroll'>
        <ul className="w-full">
          <li className="list-none flex items-center relative flex-col">
            <Link to={"/productListing"} className='w-full'>
              <Button className="w-full !text-left !justify-start !px-3 !text-black">
                Fashion
              </Button>
            </Link>
            {
              submenuIndex === 0 ?
                <FaRegMinusSquare className='absolute top-[10px] right-[15px] cursor-pointer' onClick={() => openSubmenu(0)} />
                :
                <FaRegSquarePlus className='absolute top-[10px] right-[15px] cursor-pointer' onClick={() => openSubmenu(0)} />
            }

            {
              submenuIndex === 0 &&
              <ul className="submenu ml-4 w-full  pl-3">
                <li className="list-none relative">
                  <Link to={"/"} className='w-full'>
                    <Button className="w-full !text-left !justify-start !px-3 !text-black">
                      Apparel
                    </Button>
                  </Link>
                  {
                    innersubmenuIndex === 0 ?
                      <FaRegMinusSquare className='absolute top-[10px] right-[23px] cursor-pointer' onClick={() => openInnerSubmenu(0)} />
                      :
                      <FaRegSquarePlus className='absolute top-[10px] right-[23px] cursor-pointer' onClick={() => openInnerSubmenu(0)} />
                  }

                  {
                    innersubmenuIndex === 0 &&
                    <ul className="inner_submenu ml-4">
                      <li className="list-none flex items-center justify-between w-full px-3 py-1">
                        <Link to="/" className="w-full link !text-left normal-case !p-0 min-w-0 transition">
                          Smart Tablet
                        </Link>
                      </li>
                      <li className="inner_submenu list-none flex items-center justify-between w-full px-3 py-1">
                        <Link to="/" className="w-full link !text-left normal-case !p-0 min-w-0 transition">
                          Crepe T-shirt
                        </Link>
                      </li>
                      <li className="inner_submenu list-none flex items-center justify-between w-full px-3 py-1">
                        <Link to="/" className="w-full link !text-left normal-case !p-0 min-w-0 transition">
                          Leather Watch
                        </Link>
                      </li>
                      <li className="inner_submenu list-none flex items-center justify-between w-full px-3 py-1">
                        <Link to="/" className="w-full link !text-left normal-case !p-0 min-w-0 transition">
                          Rolling Diamond
                        </Link>
                      </li>
                    </ul>
                  }


                </li>

              </ul>
            }


          </li>



          <li className="list-none flex items-center relative flex-col">
            <Link to={"/"} className='w-full'>
              <Button className="w-full !text-left !justify-start !px-3 !text-black">
                watch
              </Button>
            </Link>
            {
              submenuIndex === 1 ?
                <FaRegMinusSquare className='absolute top-[10px] right-[15px] cursor-pointer' onClick={() => openSubmenu(1)} />
                :
                <FaRegSquarePlus className='absolute top-[10px] right-[15px] cursor-pointer' onClick={() => openSubmenu(1)} />
            }

            {
              submenuIndex === 1 &&
              <ul className="submenu ml-4 w-full  pl-3">
                <li className="list-none relative">
                  <Link to={"/"} className='w-full'>
                    <Button className="w-full !text-left !justify-start !px-3 !text-black">
                      Apparel
                    </Button>
                  </Link>
                  {
                    innersubmenuIndex === 1 ?
                      <FaRegMinusSquare className='absolute top-[10px] right-[23px] cursor-pointer' onClick={() => openInnerSubmenu(1)} />
                      :
                      <FaRegSquarePlus className='absolute top-[10px] right-[23px] cursor-pointer' onClick={() => openInnerSubmenu(1)} />
                  }

                  {
                    innersubmenuIndex === 1 &&
                    <ul className="inner_submenu ml-4">
                      <li className="list-none flex items-center justify-between w-full px-3 py-1">
                        <Link to="/" className="w-full link !text-left normal-case !p-0 min-w-0 transition">
                          Smart Tablet
                        </Link>
                      </li>
                      <li className="inner_submenu list-none flex items-center justify-between w-full px-3 py-1">
                        <Link to="/" className="w-full link !text-left normal-case !p-0 min-w-0 transition">
                          Crepe T-shirt
                        </Link>
                      </li>
                      <li className="inner_submenu list-none flex items-center justify-between w-full px-3 py-1">
                        <Link to="/" className="w-full link !text-left normal-case !p-0 min-w-0 transition">
                          Leather Watch
                        </Link>
                      </li>
                      <li className="inner_submenu list-none flex items-center justify-between w-full px-3 py-1">
                        <Link to="/" className="w-full link !text-left normal-case !p-0 min-w-0 transition">
                          Rolling Diamond
                        </Link>
                      </li>
                    </ul>
                  }


                </li>

              </ul>
            }


          </li>


          <li className="list-none flex items-center relative flex-col">
            <Link to={"/"} className='w-full'>
              <Button className="w-full !text-left !justify-start !px-3 !text-black">
                Footwear
              </Button>
            </Link>
            {
              submenuIndex === 2 ?
                <FaRegMinusSquare className='absolute top-[10px] right-[15px] cursor-pointer' onClick={() => openSubmenu(2)} />
                :
                <FaRegSquarePlus className='absolute top-[10px] right-[15px] cursor-pointer' onClick={() => openSubmenu(2)} />
            }

            {
              submenuIndex === 2 &&
              <ul className="submenu ml-4 w-full pl-3">
                <li className="list-none relative">
                  <Link to={"/"} className='w-full'>
                    <Button className="w-full !text-left !justify-start !px-3 !text-black">
                      Shoes
                    </Button>
                  </Link>
                  {
                    innersubmenuIndex === 2 ?
                      <FaRegMinusSquare className='absolute top-[10px] right-[23px] cursor-pointer' onClick={() => openInnerSubmenu(2)} />
                      :
                      <FaRegSquarePlus className='absolute top-[10px] right-[23px] cursor-pointer' onClick={() => openInnerSubmenu(2)} />
                  }

                  {
                    innersubmenuIndex === 2 &&
                    <ul className="inner_submenu ml-4">
                      <li className="list-none flex items-center justify-between w-full px-3 py-1">
                        <Link to="/" className="w-full link !text-left normal-case !p-0 min-w-0 transition">
                          Sports Shoes
                        </Link>
                      </li>
                      <li className="list-none flex items-center justify-between w-full px-3 py-1">
                        <Link to="/" className="w-full link !text-left normal-case !p-0 min-w-0 transition">
                          Loafers
                        </Link>
                      </li>
                      <li className="list-none flex items-center justify-between w-full px-3 py-1">
                        <Link to="/" className="w-full link !text-left normal-case !p-0 min-w-0 transition">
                          Formal Shoes
                        </Link>
                      </li>
                    </ul>
                  }
                </li>
              </ul>
            }
          </li>

          <li className="list-none flex items-center relative flex-col">
            <Link to={"/"} className='w-full'>
              <Button className="w-full !text-left !justify-start !px-3 !text-black">
                Electronics
              </Button>
            </Link>
            {
              submenuIndex === 3 ?
                <FaRegMinusSquare className='absolute top-[10px] right-[15px] cursor-pointer' onClick={() => openSubmenu(3)} />
                :
                <FaRegSquarePlus className='absolute top-[10px] right-[15px] cursor-pointer' onClick={() => openSubmenu(3)} />
            }

            {
              submenuIndex === 3 &&
              <ul className="submenu ml-4 w-full pl-3">
                <li className="list-none relative">
                  <Link to={"/"} className='w-full'>
                    <Button className="w-full !text-left !justify-start !px-3 !text-black">
                      Mobiles
                    </Button>
                  </Link>
                  {
                    innersubmenuIndex === 3 ?
                      <FaRegMinusSquare className='absolute top-[10px] right-[23px] cursor-pointer' onClick={() => openInnerSubmenu(3)} />
                      :
                      <FaRegSquarePlus className='absolute top-[10px] right-[23px] cursor-pointer' onClick={() => openInnerSubmenu(3)} />
                  }

                  {
                    innersubmenuIndex === 3 &&
                    <ul className="inner_submenu ml-4">
                      <li className="list-none flex items-center justify-between w-full px-3 py-1">
                        <Link to="/" className="w-full link !text-left normal-case !p-0 min-w-0 transition">
                          iPhone
                        </Link>
                      </li>
                      <li className="list-none flex items-center justify-between w-full px-3 py-1">
                        <Link to="/" className="w-full link !text-left normal-case !p-0 min-w-0 transition">
                          Samsung
                        </Link>
                      </li>
                      <li className="list-none flex items-center justify-between w-full px-3 py-1">
                        <Link to="/" className="w-full link !text-left normal-case !p-0 min-w-0 transition">
                          OnePlus
                        </Link>
                      </li>
                      <li className="list-none flex items-center justify-between w-full px-3 py-1">
                        <Link to="/" className="w-full link !text-left normal-case !p-0 min-w-0 transition">
                          Xiaomi
                        </Link>
                      </li>
                    </ul>
                  }
                </li>
              </ul>
            }
          </li>

          <li className="list-none flex items-center relative flex-col">
            <Link to={"/"} className='w-full'>
              <Button className="w-full !text-left !justify-start !px-3 !text-black">
                Home Appliances
              </Button>
            </Link>
            {
              submenuIndex === 4 ?
                <FaRegMinusSquare className='absolute top-[10px] right-[15px] cursor-pointer' onClick={() => openSubmenu(4)} />
                :
                <FaRegSquarePlus className='absolute top-[10px] right-[15px] cursor-pointer' onClick={() => openSubmenu(4)} />
            }

            {
              submenuIndex === 4 &&
              <ul className="submenu ml-4 w-full pl-3">
                <li className="list-none relative">
                  <Link to={"/"} className='w-full'>
                    <Button className="w-full !text-left !justify-start !px-3 !text-black">
                      Kitchen
                    </Button>
                  </Link>
                  {
                    innersubmenuIndex === 4 ?
                      <FaRegMinusSquare className='absolute top-[10px] right-[23px] cursor-pointer' onClick={() => openInnerSubmenu(4)} />
                      :
                      <FaRegSquarePlus className='absolute top-[10px] right-[23px] cursor-pointer' onClick={() => openInnerSubmenu(4)} />
                  }

                  {
                    innersubmenuIndex === 4 &&
                    <ul className="inner_submenu ml-4">
                      <li className="list-none flex items-center justify-between w-full px-3 py-1">
                        <Link to="/" className="w-full link !text-left normal-case !p-0 min-w-0 transition">
                          Mixer Grinder
                        </Link>
                      </li>
                      <li className="list-none flex items-center justify-between w-full px-3 py-1">
                        <Link to="/" className="w-full link !text-left normal-case !p-0 min-w-0 transition">
                          Microwave Oven
                        </Link>
                      </li>
                      <li className="list-none flex items-center justify-between w-full px-3 py-1">
                        <Link to="/" className="w-full link !text-left normal-case !p-0 min-w-0 transition">
                          Induction Cooktop
                        </Link>
                      </li>
                      <li className="list-none flex items-center justify-between w-full px-3 py-1">
                        <Link to="/" className="w-full link !text-left normal-case !p-0 min-w-0 transition">
                          Electric Kettle
                        </Link>
                      </li>
                    </ul>
                  }
                </li>
              </ul>
            }
          </li>




        </ul>

      </div>
    </div>
  );
}

export default CategoryCollapse;
