import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import { RiMenu2Line } from "react-icons/ri";
import { MdKeyboardArrowDown } from "react-icons/md";
import { IoIosRocket } from "react-icons/io";
import CategoryPanel from './CategoryPanel';



const Navigation = () => {

    const [isOpenCatPanel, setIsOpenCatPanel] = useState(false);

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

                            <li className='list-none relative'>
                                <Link to={"/productListing"} className='link transition text-[14px] font-[500]'><Button>Fashion</Button></Link>

                                <div className='submenu absolute top-[120%] min-w-[150px] bg-white shadow-md opacity-0 transition-all'>
                                    <ul>
                                        <li className='list-none w-full'>
                                            <Link to={"/"} className='w-full'>
                                                <Button className='!text-black w-full !text-left !justify-start !rounded-none'>Men</Button>

                                                <div className='submenu absolute top-[0%] left-[100%] min-w-[150px] bg-white shadow-md opacity-0 transition-all'>
                                                    <ul>
                                                        <li className='list-none w-full'>
                                                            <Link to={"/"} className='w-full'>
                                                                <Button className='!text-black w-full !text-left !justify-start !rounded-none'>Men1</Button>
                                                            </Link>
                                                        </li>
                                                        <li className='list-none w-full'>
                                                            <Link to={"/"} className='w-full'>
                                                                <Button className='!text-black w-full !text-left !justify-start !rounded-none'>Women1</Button>
                                                            </Link>
                                                        </li>
                                                        <li className='list-none w-full'>
                                                            <Link to={"/"} className='w-full'>
                                                                <Button className='!text-black w-full !text-left !justify-start !rounded-none'>Kids1</Button>
                                                            </Link>
                                                        </li>
                                                        <li className='list-none w-full'>
                                                            <Link to={"/"} className='w-full'>
                                                                <Button className='!text-black w-full !text-left !justify-start !rounded-none'>Girls1</Button>
                                                            </Link>
                                                        </li>
                                                        <li className='list-none w-full'>
                                                            <Link to={"/"} className='w-full'>
                                                                <Button className='!text-black w-full !text-left !justify-start !rounded-none'>Boys1</Button>
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </Link>
                                        </li>
                                        <li className='list-none w-full'>
                                            <Link to={"/"} className='w-full'>
                                                <Button className='!text-black w-full !text-left !justify-start !rounded-none'>Women</Button>
                                                <div className='submenu absolute top-[0%] left-[100%] min-w-[150px] bg-white shadow-md opacity-0 transition-all'>
                                                    <ul>
                                                        <li className='list-none w-full'>
                                                            <Link to={"/"} className='w-full'>
                                                                <Button className='!text-black w-full !text-left !justify-start !rounded-none'>Men3</Button>
                                                            </Link>
                                                        </li>
                                                        <li className='list-none w-full'>
                                                            <Link to={"/"} className='w-full'>
                                                                <Button className='!text-black w-full !text-left !justify-start !rounded-none'>Women3</Button>
                                                            </Link>
                                                        </li>
                                                        <li className='list-none w-full'>
                                                            <Link to={"/"} className='w-full'>
                                                                <Button className='!text-black w-full !text-left !justify-start !rounded-none'>Kids3</Button>
                                                            </Link>
                                                        </li>
                                                        <li className='list-none w-full'>
                                                            <Link to={"/"} className='w-full'>
                                                                <Button className='!text-black w-full !text-left !justify-start !rounded-none'>Girls3</Button>
                                                            </Link>
                                                        </li>
                                                        <li className='list-none w-full'>
                                                            <Link to={"/"} className='w-full'>
                                                                <Button className='!text-black w-full !text-left !justify-start !rounded-none'>Boys3</Button>
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </Link>
                                        </li>
                                        <li className='list-none w-full'>
                                            <Link to={"/"} className='w-full'>
                                                <Button className='!text-black w-full !text-left !justify-start !rounded-none'>Kids</Button>
                                            </Link>
                                        </li>
                                        <li className='list-none w-full'>
                                            <Link to={"/"} className='w-full'>
                                                <Button className='!text-black w-full !text-left !justify-start !rounded-none'>Girls</Button>
                                            </Link>
                                        </li>
                                        <li className='list-none w-full'>
                                            <Link to={"/"} className='w-full'>
                                                <Button className='!text-black w-full !text-left !justify-start !rounded-none'>Boys</Button>
                                            </Link>
                                        </li>


                                    </ul>
                                </div>
                            </li>


                            <li className='list-none relative'>
                                <Link to={"/"} className='link transition text-[14px] font-[500]'><Button>Electronics</Button></Link>
                                <div className='submenu absolute top-[120%] min-w-[160px] bg-white shadow-md opacity-0 transition-all'>
                                    <ul>
                                        <li><Link to="/"><Button className='!text-black !justify-start !rounded-none w-full'>Mobiles</Button></Link></li>
                                        <li><Link to="/"><Button className='!text-black !justify-start !rounded-none w-full'>Laptops</Button></Link></li>
                                        <li><Link to="/"><Button className='!text-black !justify-start !rounded-none w-full'>Smart Watches</Button></Link></li>
                                        <li><Link to="/"><Button className='!text-black !justify-start !rounded-none w-full'>Accessories</Button></Link></li>
                                    </ul>
                                </div>
                            </li>


                            <li className='list-none relative'>
                                <Link to={"/"} className='link transition text-[14px] font-[500]'><Button>Bags</Button></Link>
                                <div className='submenu absolute top-[120%] min-w-[150px] bg-white shadow-md opacity-0 transition-all'>
                                    <ul>
                                        <li><Link to="/"><Button className='!text-black !justify-start !rounded-none w-full'>Laptop Bags</Button></Link></li>
                                        <li><Link to="/"><Button className='!text-black !justify-start !rounded-none w-full'>Handbags</Button></Link></li>
                                        <li><Link to="/"><Button className='!text-black !justify-start !rounded-none w-full'>Travel Backpacks</Button></Link></li>
                                    </ul>
                                </div>
                            </li>


                            <li className='list-none relative'>
                                <Link to={"/"} className='link transition text-[14px] font-[500]'><Button>Footware</Button></Link>

                                <div className='submenu absolute top-[120%] min-w-[150px] bg-white shadow-md opacity-0 transition-all'>
                                    <ul>
                                        <li><Link to="/"><Button className='!text-black !justify-start !rounded-none w-full'>Sneakers</Button></Link></li>
                                        <li><Link to="/"><Button className='!text-black !justify-start !rounded-none w-full'>Formal Shoes</Button></Link></li>
                                        <li><Link to="/"><Button className='!text-black !justify-start !rounded-none w-full'>Sandals</Button></Link></li>
                                    </ul>
                                </div>
                            </li>


                            <li className='list-none relative'>
                                <Link to={"/"} className='link transition text-[14px] font-[500]'><Button>Groceries</Button></Link>
                                <div className='submenu absolute top-[120%] min-w-[150px] bg-white shadow-md opacity-0 transition-all'>
                                    <ul>
                                        <li><Link to="/"><Button className='!text-black !justify-start !rounded-none w-full'>Fruits & Vegetables</Button></Link></li>
                                        <li><Link to="/"><Button className='!text-black !justify-start !rounded-none w-full'>Dairy Products</Button></Link></li>
                                        <li><Link to="/"><Button className='!text-black !justify-start !rounded-none w-full'>Spices</Button></Link></li>
                                    </ul>
                                </div>
                            </li>


                            <li className='list-none relative'>
                                <Link to={"/"} className='link transition text-[14px] font-[500]'><Button>Beauty</Button></Link>
                                <div className='submenu absolute top-[120%] min-w-[150px] bg-white shadow-md opacity-0 transition-all'>
                                    <ul>
                                        <li><Link to="/"><Button className='!text-black !justify-start !rounded-none w-full'>Makeup</Button></Link></li>
                                        <li><Link to="/"><Button className='!text-black !justify-start !rounded-none w-full'>Skin Care</Button></Link></li>
                                        <li><Link to="/"><Button className='!text-black !justify-start !rounded-none w-full'>Hair Care</Button></Link></li>
                                    </ul>
                                </div>
                            </li>


                            <li className='list-none relative'>
                                <Link to={"/"} className='link transition text-[14px] font-[500]'><Button>Wellness</Button></Link>

                                <div className='submenu absolute top-[120%] min-w-[150px] bg-white shadow-md opacity-0 transition-all'>
                                    <ul>
                                        <li><Link to="/"><Button className='!text-black !justify-start !rounded-none w-full'>Fitness Gear</Button></Link></li>
                                        <li><Link to="/"><Button className='!text-black !justify-start !rounded-none w-full'>Vitamins</Button></Link></li>
                                        <li><Link to="/"><Button className='!text-black !justify-start !rounded-none w-full'>Aromatherapy</Button></Link></li>
                                    </ul>
                                </div>
                            </li>

                            
                            <li className='list-none relative'>
                                <Link to={"/"} className='link transition text-[14px] font-[500]'><Button>Jewellery</Button></Link>

                                <div className='submenu absolute top-[120%] min-w-[150px] bg-white shadow-md opacity-0 transition-all'>
                                    <ul>
                                        <li><Link to="/"><Button className='!text-black !justify-start !rounded-none w-full'>Necklaces</Button></Link></li>
                                        <li><Link to="/"><Button className='!text-black !justify-start !rounded-none w-full'>Earrings</Button></Link></li>
                                        <li><Link to="/"><Button className='!text-black !justify-start !rounded-none w-full'>Bracelets</Button></Link></li>
                                        <li><Link to="/"><Button className='!text-black !justify-start !rounded-none w-full'>Rings</Button></Link></li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div className='col_3 w-[20%] flex items-center gap-1 mt-[5px]'>
                        <IoIosRocket className='text-[18px] border rounded-full w-6 h-5 border-black gap-1' />
                        <p className='text-[13px]'> Free International Delivery</p>
                    </div>
                </div>
            </nav>

            {/* CategoryPanle componant */}
            <CategoryPanel openCategoryPanel={openCategoryPanel} isOpenCatPanel={isOpenCatPanel} />


        </>
    );
}

export default Navigation;
