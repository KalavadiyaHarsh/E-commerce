import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import { RiMenu2Line } from "react-icons/ri";
import { MdKeyboardArrowDown } from "react-icons/md";
import { IoIosRocket } from "react-icons/io";
import CategoryPanel from './CategoryPanel';
import { fetchDataFromApi } from '../utils/api';
import { MyContext } from '../App';



const Navigation = () => {

    const [isOpenCatPanel, setIsOpenCatPanel] = useState(false);
    const context = useContext(MyContext);
    //const [context?.catData, setcontext?.catData] = useState([])

    // useEffect(() => {
    //     fetchDataFromApi("/api/category").then((res) => {
    //         if (res?.error === false) {
    //             setcontext?.catData(res?.data)
    //             console.log(res?.data)
    //         }

    //     })
    // }, []);

    const openCategoryPanel = () => {
        setIsOpenCatPanel(!isOpenCatPanel);
    }
    return (
        <>
            <nav className='py-2'>
                <div className='container flex items-start justify-end gap-4'>
                    <div className='col_1 w-[20%] '>
                        <Button className='!text-black gap-2 w-full !text-[12px]' onClick={openCategoryPanel}>
                            <RiMenu2Line className='text-[18px]' /> Shop by Categories <MdKeyboardArrowDown className='text-[18px] ml-auto' />
                        </Button>
                    </div>

                    <div className='col_2 w-[60%]'>
                        <ul className='nav flex items-center gap-2'>
                            <li className='list-none '>
                                <Link to={"/"} className='link transition text-[14px] font-[500]'>
                                    <Button className='link transition !font-[500]'>Home</Button>
                                </Link>
                            </li>

                            {
                                context?.catData?.length !== 0 && context?.catData.map((cat, index) => {
                                    return (
                                        <li className='list-none relative' key={index}>
                                            <Link to={`/productListing?catId=${cat?._id}`} className='link transition text-[14px] font-[500]'><Button>{cat?.name}</Button></Link>

                                            {
                                                cat?.children?.length !== 0 && (
                                                    <div className='submenu absolute top-[120%] min-w-[150px] bg-white shadow-md opacity-0 transition-all'>
                                                        <ul>
                                                            {cat.children.map((subCat, subIndex) => {
                                                                return (
                                                                    <li className='list-none w-full' key={subIndex}>
                                                                        <Link to={`/productListing?subCatId=${subCat?._id}`} className='w-full'>
                                                                            <Button className='!text-black w-full !text-left !justify-start !rounded-none'>
                                                                                {subCat?.name}
                                                                            </Button>
                                                                        </Link>

                                                                        {
                                                                            subCat?.children?.length !== 0 &&
                                                                            <div className='submenu absolute top-[0%] left-[100%] min-w-[150px] bg-white shadow-md opacity-0 transition-all'>
                                                                                <ul>
                                                                                    {
                                                                                        subCat.children.map((thirdSubCat, thirdSubIndex) => {
                                                                                            return (
                                                                                                <li className='list-none w-full' key={thirdSubIndex}>
                                                                                                    <Link to={`/productListing?thirdsubCatId=${thirdSubCat?._id}`} className='w-full'>
                                                                                                        <Button className='!text-black w-full!text-left!justify-start!rounded-none'>
                                                                                                            {thirdSubCat?.name}
                                                                                                        </Button>
                                                                                                    </Link>
                                                                                                </li>
                                                                                            );
                                                                                        })
                                                                                    }
                                                                                </ul>
                                                                            </div>
                                                                        }



                                                                    </li>
                                                                );
                                                            })}
                                                        </ul>
                                                    </div>
                                                )
                                            }

                                        </li>
                                    )

                                })
                            }


                        </ul>
                    </div>

                    <div className='col_3 w-[20%] flex items-center gap-1 mt-[5px]'>
                        <IoIosRocket className='text-[18px] border rounded-full w-6 h-5 border-black gap-1' />
                        <p className='text-[13px]'> Free International Delivery</p>
                    </div>
                </div>
            </nav>

            {/* CategoryPanle componant */}
            {
                context?.catData?.length!== 0 && <CategoryPanel openCategoryPanel={openCategoryPanel} isOpenCatPanel={isOpenCatPanel} data={context?.catData} />
            }
            


        </>
    );
}

export default Navigation;
