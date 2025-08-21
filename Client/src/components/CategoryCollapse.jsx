import React, { useState } from 'react';
import Button from '@mui/material/Button';
import { FaRegSquarePlus } from "react-icons/fa6";
import { FaRegMinusSquare } from "react-icons/fa";
import { Link } from 'react-router-dom';

const CategoryCollapse = (props) => {


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
          {
            props?.data?.length !== 0 && props?.data?.map((cat, index) => {
              return (
                <li className="list-none flex items-center relative flex-col">
                  <Link to={"/productListing"} className='w-full'>
                    <Button className="w-full !text-left !justify-start !px-3 !text-black">
                      {cat?.name}
                    </Button>
                  </Link>
                  {
                    submenuIndex === index ?
                      <FaRegMinusSquare className='absolute top-[10px] right-[15px] cursor-pointer' onClick={() => openSubmenu(index)} />
                      :
                      <FaRegSquarePlus className='absolute top-[10px] right-[15px] cursor-pointer' onClick={() => openSubmenu(index)} />
                  }

                  {
                    submenuIndex === index &&
                    <ul className="submenu ml-4 w-full  pl-3">
                      {
                        cat?.children?.length !== 0 && cat?.children?.map((subCat, subIndex) => {
                          return (
                            <li className="list-none relative">
                              <Link to={"/"} className='w-full'>
                                <Button className="w-full !text-left !justify-start !px-3 !text-black">
                                  {subCat?.name}
                                </Button>
                              </Link>
                              {
                                innersubmenuIndex === subIndex ?
                                  <FaRegMinusSquare className='absolute top-[10px] right-[23px] cursor-pointer' onClick={() => openInnerSubmenu(subIndex)} />
                                  :
                                  <FaRegSquarePlus className='absolute top-[10px] right-[23px] cursor-pointer' onClick={() => openInnerSubmenu(subIndex)} />
                              }

                              {
                                innersubmenuIndex === subIndex &&
                                <ul className="inner_submenu ml-4">
                                  {
                                    subCat?.children?.length !== 0 && subCat?.children?.map((thirdLavelCat, thirdLevelIndex)=>{
                                      return (
                                      <li key={thirdLevelIndex} className="list-none flex items-center justify-between w-full px-3 py-1">
                                        <Link to="/" className="w-full link !text-left normal-case !p-0 min-w-0 transition">
                                          {thirdLavelCat?.name}
                                        </Link> 
                                      </li>
                                      )
                                    })
                                  }

                                </ul>
                              }
                            </li>
                          )
                        }
                        )
                      }

                    </ul>
                  }

                </li>
              )
            }
            )
          }


        </ul>

      </div>
    </div>
  );
}

export default CategoryCollapse;
