import React, { useState } from 'react';
import AccountSidebar from '../components/AccountSidebar';
import { Button } from '@mui/material';
import { FaAngleDown } from "react-icons/fa6";
import { FaAngleUp } from "react-icons/fa6";
import Badge from '../components/Badge';
const Orders = () => {

    const [isOpenOrderdProduct, setIsOpenOrderdProduct] = useState(null)

    const isShowOrderdProduct = (index) => {
        if(isOpenOrderdProduct === index)
        {
            setIsOpenOrderdProduct(null);
        }
        else{
            setIsOpenOrderdProduct(index);
        }
    }
    return (
        <section className='py-10 w-full'>
            <div className='container flex gap-6'>
                <div className='col1 w-full md:w-[20%] '>
                    <AccountSidebar />
                </div>

                <div className='leftPart w-[80%]'>
                    <div className='shadow-md bg-white rounded-md'>
                        <div className='py-2 px-3 border-b border-[rgba(0,0,0,0.1)]'>
                            <h2>My Orders</h2>
                            <p className='mt-0'>There are <span className='font-bold text-primary'>3 </span>Orders.</p>
                        </div>




                        <div className="overflow-x-scroll">
                            <table className="min-w-full bg-white border border-gray-300 text-sm text-left whitespace-nowrap">
                                <thead className="bg-gray-50 text-gray-700">
                                    <tr>
                                        <th className="py-2 px-4 border-b">
                                            &nbsp;
                                        </th>
                                        <th className="py-2 px-4 border-b">Order Id</th>
                                        <th className="py-2 px-4 border-b">Payment Id</th>
                                        <th className="py-2 px-4 border-b">Name</th>
                                        <th className="py-2 px-4 border-b">Phone Number</th>
                                        <th className="py-2 px-4 border-b">Address</th>
                                        <th className="py-2 px-4 border-b">Pincode</th>
                                        <th className="py-2 px-4 border-b">Total Amount</th>
                                        <th className="py-2 px-4 border-b">Email</th>
                                        <th className="py-2 px-4 border-b">UserID</th>
                                        <th className="py-2 px-4 border-b">Order Status</th>
                                        <th className="py-2 px-4 border-b">Date</th>
                                    </tr>
                                </thead>

                                <tbody className="text-gray-800">
                                    <tr className="hover:bg-gray-100">
                                        <td className="py-2 px-4 border-b">
                                            <Button className='!w-[35px] !h-[35px] !min-w-[35px] !rounded-full !bg-[#f1f1f1]' onClick={() => isShowOrderdProduct(0)}>
                                                {
                                                    isOpenOrderdProduct === 0 ? <FaAngleUp className="text-[16px] text-[rgba(0,0,0,0.7)]" /> : <FaAngleDown className="text-[16px] text-[rgba(0,0,0,0.7)]" />
                                                }
                                            </Button>
                                        </td>
                                        <td className="py-2 px-4 border-b text-primary underline cursor-pointer">
                                            67514d9914da0b78a342b261
                                        </td>
                                        <td className="py-2 px-4 border-b  text-primary underline cursor-pointer">pay_PTP0qEXFhrtyp8</td>
                                        <td className="py-2 px-4 border-b font-semibold uppercase">
                                            Rinku Verma
                                        </td>
                                        <td className="py-2 px-4 border-b">09643990046</td>
                                        <td className="py-2 px-4 border-b ">
                                            <span>H No 222 Street No 6 Adarsh Mohalla Maujpur Delhi near shivam</span>
                                        </td>
                                        <td className="py-2 px-4 border-b">110053</td>
                                        <td className="py-2 px-4 border-b">₹1,299</td>
                                        <td className="py-2 px-4 border-b">rinku.verma@email.com</td>
                                        <td className="py-2 px-4 border-b  text-primary underline cursor-pointer">usr_123456789</td>
                                        <td className="py-2 px-4  font-medium"><Badge status='delivered' /></td>
                                        <td className="py-2 px-4 border-b">2025-07-17</td>
                                    </tr>

                                    {
                                        isOpenOrderdProduct === 0 && 
                                        <tr>
                                            <td className='pl-[135px]' colSpan="4">

                                                <div className="overflow-x-scroll">
                                                    <table className="min-w-full bg-white  text-sm text-left whitespace-nowrap">
                                                        <thead className="bg-gray-50 text-gray-700">
                                                            <tr>

                                                                <th className="py-2 px-4 border-b">Product Id</th>
                                                                <th className="py-2 px-4 border-b">Product Title</th>
                                                                <th className="py-2 px-4 border-b">Image</th>
                                                                <th className="py-2 px-4 border-b">Quantity</th>
                                                                <th className="py-2 px-4 border-b">Price</th>
                                                                <th className="py-2 px-4 border-b">Sub Total</th>

                                                            </tr>
                                                        </thead>

                                                        <tbody className="text-gray-800">
                                                            <tr className="hover:bg-gray-100">

                                                                <td className="py-2 px-4 border-b text-gray-600  cursor-pointer">
                                                                    67514d9914da0b78a342b261
                                                                </td>
                                                                <td className="py-2 px-4 border-b ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, vitae.</td>
                                                                <td className="py-2 px-4 border-b font-semibold uppercase">
                                                                    <img src="https://api.spicezgold.com/download/file_1734690981297_011618e4-4682-4123-be80-1fb7737d34ad1714702040213RARERABBITMenComfortOpaqueCasualShirt1.jpg" className='w-[50px] h-[50px] rounded-md object-cover' />
                                                                </td>
                                                                <td className="py-2 px-4 border-b">3</td>
                                                                <td className="py-2 px-4 border-b ">
                                                                    <span>1300</span>
                                                                </td>
                                                                <td className="py-2 px-4 border-b">1300</td>

                                                            </tr>

                                                            <tr className="hover:bg-gray-100">

                                                                <td className="py-2 px-4 border-b text-gray-600 cursor-pointer">
                                                                    67514d9914da0b78a342b261
                                                                </td>
                                                                <td className="py-2 px-4 border-b ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, vitae.</td>
                                                                <td className="py-2 px-4 border-b font-semibold uppercase">
                                                                    <img src="https://api.spicezgold.com/download/file_1734690981297_011618e4-4682-4123-be80-1fb7737d34ad1714702040213RARERABBITMenComfortOpaqueCasualShirt1.jpg" className='w-[50px] h-[50px] rounded-md object-cover' />
                                                                </td>
                                                                <td className="py-2 px-4 border-b">3</td>
                                                                <td className="py-2 px-4 border-b ">
                                                                    <span>1300</span>
                                                                </td>
                                                                <td className="py-2 px-4 border-b">1300</td>

                                                            </tr>


                                                        </tbody>
                                                    </table>
                                                </div>
                                            </td>
                                        </tr>
                                    }








                                    <tr className="hover:bg-gray-100">
                                        <td className="py-2 px-4 border-b">
                                            <Button className='!w-[35px] !h-[35px] !min-w-[35px] !rounded-full !bg-[#f1f1f1]' onClick={() => isShowOrderdProduct(1)}>
                                                {
                                                    isOpenOrderdProduct === 1 ? <FaAngleUp className="text-[16px] text-[rgba(0,0,0,0.7)]" /> : <FaAngleDown className="text-[16px] text-[rgba(0,0,0,0.7)]" />
                                                }
                                            </Button>
                                        </td>
                                        <td className="py-2 px-4 border-b text-primary underline cursor-pointer">
                                            67514d9914da0b78a342b261
                                        </td>
                                        <td className="py-2 px-4 border-b  text-primary underline cursor-pointer">pay_PTP0qEXFhrtyp8</td>
                                        <td className="py-2 px-4 border-b font-semibold uppercase">
                                            Rinku Verma
                                        </td>
                                        <td className="py-2 px-4 border-b">09643990046</td>
                                        <td className="py-2 px-4 border-b ">
                                            <span>H No 222 Street No 6 Adarsh Mohalla Maujpur Delhi near shivam</span>
                                        </td>
                                        <td className="py-2 px-4 border-b">110053</td>
                                        <td className="py-2 px-4 border-b">₹1,299</td>
                                        <td className="py-2 px-4 border-b">rinku.verma@email.com</td>
                                        <td className="py-2 px-4 border-b  text-primary underline cursor-pointer">usr_123456789</td>
                                        <td className="py-2 px-4  font-medium"><Badge status='delivered' /></td>
                                        <td className="py-2 px-4 border-b">2025-07-17</td>
                                    </tr>

                                    {
                                        isOpenOrderdProduct === 1 && 
                                        <tr>
                                            <td className='pl-[135px]' colSpan="4">

                                                <div className="overflow-x-scroll">
                                                    <table className="min-w-full bg-white  text-sm text-left whitespace-nowrap">
                                                        <thead className="bg-gray-50 text-gray-700">
                                                            <tr>

                                                                <th className="py-2 px-4 border-b">Product Id</th>
                                                                <th className="py-2 px-4 border-b">Product Title</th>
                                                                <th className="py-2 px-4 border-b">Image</th>
                                                                <th className="py-2 px-4 border-b">Quantity</th>
                                                                <th className="py-2 px-4 border-b">Price</th>
                                                                <th className="py-2 px-4 border-b">Sub Total</th>

                                                            </tr>
                                                        </thead>

                                                        <tbody className="text-gray-800">
                                                            <tr className="hover:bg-gray-100">

                                                                <td className="py-2 px-4 border-b text-gray-600  cursor-pointer">
                                                                    67514d9914da0b78a342b261
                                                                </td>
                                                                <td className="py-2 px-4 border-b ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, vitae.</td>
                                                                <td className="py-2 px-4 border-b font-semibold uppercase">
                                                                    <img src="https://api.spicezgold.com/download/file_1734690981297_011618e4-4682-4123-be80-1fb7737d34ad1714702040213RARERABBITMenComfortOpaqueCasualShirt1.jpg" className='w-[50px] h-[50px] rounded-md object-cover' />
                                                                </td>
                                                                <td className="py-2 px-4 border-b">3</td>
                                                                <td className="py-2 px-4 border-b ">
                                                                    <span>1300</span>
                                                                </td>
                                                                <td className="py-2 px-4 border-b">1300</td>

                                                            </tr>

                                                            <tr className="hover:bg-gray-100">

                                                                <td className="py-2 px-4 border-b text-gray-600 cursor-pointer">
                                                                    67514d9914da0b78a342b261
                                                                </td>
                                                                <td className="py-2 px-4 border-b ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, vitae.</td>
                                                                <td className="py-2 px-4 border-b font-semibold uppercase">
                                                                    <img src="https://api.spicezgold.com/download/file_1734690981297_011618e4-4682-4123-be80-1fb7737d34ad1714702040213RARERABBITMenComfortOpaqueCasualShirt1.jpg" className='w-[50px] h-[50px] rounded-md object-cover' />
                                                                </td>
                                                                <td className="py-2 px-4 border-b">3</td>
                                                                <td className="py-2 px-4 border-b ">
                                                                    <span>1300</span>
                                                                </td>
                                                                <td className="py-2 px-4 border-b">1300</td>

                                                            </tr>


                                                        </tbody>
                                                    </table>
                                                </div>
                                            </td>
                                        </tr>
                                    }


                                </tbody>
                            </table>
                        </div>


                        


                    </div>
                </div>
            </div>
        </section>
    );
}

export default Orders;
