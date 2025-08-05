import React from 'react';
import DashboardBoxes from '../components/DashboardBoxes';
import { FaPlus } from "react-icons/fa6";
import { Button } from '@mui/material';
import { FaAngleDown } from "react-icons/fa6";
import { FaAngleUp } from "react-icons/fa6";
import { useState } from 'react';
import Badge from '../components/Badge';
import Checkbox from '@mui/material/Checkbox';
import { Link } from 'react-router-dom'
import Progress from '../components/progress';
import { MdModeEdit } from "react-icons/md";
import { IoEye } from "react-icons/io5";
import { MdDelete } from "react-icons/md";
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import Pagination from '@mui/material/Pagination';





const label = { inputProps: { 'aria-label': 'Checkbox demo' } };



const Dashboard = () => {

  const [isOpenOrderdProduct, setIsOpenOrderdProduct] = useState(null)

  const isShowOrderdProduct = (index) => {
    if (isOpenOrderdProduct === index) {
      setIsOpenOrderdProduct(null);
    }
    else {
      setIsOpenOrderdProduct(index);
    }
  }


  return (
    <>
      <div className='w-full bg-white px-5 py-2 border border-[rgba(0,0,0,0.1)] flex items-center justify-between gap-8 mb-5 rounded-md'>
        <div className='info '>
          <h1 className='text-[35px] font-[700] leading-10 mb-3'>Good Morning,<br /> Cameron <span className='text-[25px]'>👋</span></h1>
          <p>Here’s What happening on your store today. See the statistics at once.</p>
          <br />
          <Button className='btn-blue !capitalize ' > <FaPlus /> Add Product</Button>
        </div>

        <img src="https://isomorphic-furyroad.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fshop-illustration.b3542492.png&w=3840&q=75" alt="" className='w-[250px]' />
      </div>
      <DashboardBoxes />


      <div className='card mt-3 bg-white rounded-lg shadow-md '>
        <div className='flex items-center justify-between p-5'>
          <h2 className='text-[19px] font-[600]'>Recent Orders</h2>
        </div>
        {/* <div class="overflow-x-auto  ">
          <table class="min-w-full text-sm text-left text-gray-700">
            <thead class="bg-gray-100 text-gray-600 uppercase text-xs">
              <tr>
                <th class="px-4 py-3">Order ID</th>
                <th class="px-4 py-3">Customer</th>
                <th class="px-4 py-3">Items</th>
                <th class="px-4 py-3">Price</th>
                <th class="px-4 py-3">Created</th>
                <th class="px-4 py-3">Modified</th>
                <th class="px-4 py-3">Status</th>
                <th class="px-4 py-3">Actions</th>
                <th class="px-4 py-3">Actions</th>
                <th class="px-4 py-3">Actions</th>
                <th class="px-4 py-3">Actions</th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
              <tr>
                <td class="px-4 py-4 font-medium text-gray-900">#3413</td>
                <td class="px-4 py-4 flex items-center gap-3">
                  <img class="w-8 h-8 rounded-full" src="https://i.pravatar.cc/40?img=5" alt="" />
                  <div>
                    <div class="font-semibold">Dr. Ernest</div>
                    <div class="text-gray-500 text-xs">august17@hotmail.com</div>
                  </div>
                </td>
                <td class="px-4 py-4">83</td>
                <td class="px-4 py-4">$457.00</td>
                <td class="px-4 py-4 text-xs">
                  <div>August 6, 2023</div>
                  <div class="text-gray-400">5:31 AM</div>
                </td>
                <td class="px-4 py-4 text-xs">
                  <div>August 11, 2023</div>
                  <div class="text-gray-400">4:09 AM</div>
                </td>
                <td class="px-4 py-4">
                  <span class="text-red-600 bg-red-100 text-xs font-medium px-2 py-1 rounded-full">Cancelled</span>
                </td>
                <td class="px-4 py-4">
                  <span class="text-red-600 bg-red-100 text-xs font-medium px-2 py-1 rounded-full">Cancelled</span>
                </td>
                <td class="px-4 py-4">
                  <span class="text-red-600 bg-red-100 text-xs font-medium px-2 py-1 rounded-full">Cancelled</span>
                </td>
                <td class="px-4 py-4">
                  <span class="text-red-600 bg-red-100 text-xs font-medium px-2 py-1 rounded-full">Cancelled</span>
                </td>
                <td class="px-4 py-4">
                  <span class="text-red-600 bg-red-100 text-xs font-medium px-2 py-1 rounded-full">Cancelled</span>
                </td>
               
              </tr>
              
              <tr>
                <td class="px-4 py-4 font-medium text-gray-900">#3413</td>
                <td class="px-4 py-4 flex items-center gap-3">
                  <img class="w-8 h-8 rounded-full" src="https://i.pravatar.cc/40?img=5" alt="" />
                  <div>
                    <div class="font-semibold">Dr. Ernest</div>
                    <div class="text-gray-500 text-xs">august17@hotmail.com</div>
                  </div>
                </td>
                <td class="px-4 py-4">83</td>
                <td class="px-4 py-4">$457.00</td>
                <td class="px-4 py-4 text-xs">
                  <div>August 6, 2023</div>
                  <div class="text-gray-400">5:31 AM</div>
                </td>
                <td class="px-4 py-4 text-xs">
                  <div>August 11, 2023</div>
                  <div class="text-gray-400">4:09 AM</div>
                </td>
                <td class="px-4 py-4">
                  <span class="text-red-600 bg-red-100 text-xs font-medium px-2 py-1 rounded-full">Cancelled</span>
                </td>
                <td class="px-4 py-4 flex items-center gap-2 text-gray-500">
                  <button class="hover:text-blue-600"><i class="fas fa-pen"></i></button>
                  <button class="hover:text-green-600"><i class="fas fa-eye"></i></button>
                  <button class="hover:text-red-600"><i class="fas fa-trash"></i></button>
                </td>
              </tr>

              <tr>
                <td class="px-4 py-4 font-medium text-gray-900">#3413</td>
                <td class="px-4 py-4 flex items-center gap-3">
                  <img class="w-8 h-8 rounded-full" src="https://i.pravatar.cc/40?img=5" alt="" />
                  <div>
                    <div class="font-semibold">Dr. Ernest</div>
                    <div class="text-gray-500 text-xs">august17@hotmail.com</div>
                  </div>
                </td>
                <td class="px-4 py-4">83</td>
                <td class="px-4 py-4">$457.00</td>
                <td class="px-4 py-4 text-xs">
                  <div>August 6, 2023</div>
                  <div class="text-gray-400">5:31 AM</div>
                </td>
                <td class="px-4 py-4 text-xs">
                  <div>August 11, 2023</div>
                  <div class="text-gray-400">4:09 AM</div>
                </td>
                <td class="px-4 py-4">
                  <span class="text-red-600 bg-red-100 text-xs font-medium px-2 py-1 rounded-full">Cancelled</span>
                </td>
                <td class="px-4 py-4 flex items-center gap-2 text-gray-500">
                  <button class="hover:text-blue-600"><i class="fas fa-pen"></i></button>
                  <button class="hover:text-green-600"><i class="fas fa-eye"></i></button>
                  <button class="hover:text-red-600"><i class="fas fa-trash"></i></button>
                </td>
              </tr>
            </tbody>
          </table>
        </div> */}
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
                <td className="py-2 px-4  font-medium"><Badge status='pending' /></td>
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


      <div className='card mt-3 bg-white rounded-lg shadow-md'>
        <div className='flex items-center justify-between p-5'>
          <h2 className='text-[19px] font-[600]'>Products  (Tailwind CSS Table)</h2>
        </div>

        <div className="overflow-x-scroll">
          <table className="min-w-full bg-white border border-gray-300 text-sm text-left">
            <thead className="bg-gray-50 text-gray-700">
              <tr>
                <th className="py-2 px-4 border-b">
                  <Checkbox {...label} size="small" />
                </th>
                <th className="py-2 px-4 border-b">Products</th>
                <th className="py-2 px-4 border-b">Category</th>
                <th className="py-2 px-4 border-b">sub category</th>
                <th className="py-2 px-4 border-b">Price</th>
                <th className="py-2 px-4 border-b">SALES</th>
                <th className="py-2 px-4 border-b">Action</th>

              </tr>
            </thead>

            <tbody className="text-gray-800">
              <tr >
                <td className="py-2 px-4 border-b">
                  <div>
                    <Checkbox {...label} size="small" />
                  </div>
                </td>

                <td className="py-2 px-4 border-b">
                  <div className='flex items-center gap-4 w-[350px]'>
                    <div className="img w-[65px] h-[65px] rounded-md overflow-hidden ">
                      <Link to='/product/45745'>
                        <img src="https://api.spicezgold.com/download/file_1734690981297_011618e4-4682-4123-be80-1fb7737d34ad1714702040213RARERABBITMenComfortOpaqueCasualShirt1.jpg" className='w-full hover:scale-105 transition-all' />
                      </Link>
                    </div>

                    <div className='w-[80%]'>
                      <h3 className='font-[600] text-[12px] leading-4 hover:text-[#5943da]'> <Link to='/product/45745'> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae doloremque neque consectetur quis? Totam, sapiente. </Link></h3>

                      <span className='text-[12px]'>Books</span>
                    </div>

                  </div>
                </td>

                <td className="py-2 px-4 border-b">
                  Electronics
                </td>

                <td className="py-2 px-4 border-b">
                  Women
                </td>

                <td className="py-2 px-4 border-b">
                  <div class="flex items-center gap-2 flex-col leading-4">
                    <span class="oldPrice line-through text-gray-500 text-[15px] font-[500]">$58.00</span>
                    <span class="price text-primary text-[15px] font-[600]">$58.00</span>
                  </div>
                </td>

                <td className="py-2 px-4 border-b ">
                  <p className='text-[14px]'><span className='font-[600]'>134 </span>sale</p>
                  <Progress value={40} type="success" />
                </td>

                <td className="py-2 px-4 border-b ">
                  <div className='flex items-center gap-1'>
                    <Tooltip title="Edit" placement='top'>
                      <IconButton>
                        <Button className='myCustomBtn !w-[35px] !h-[35px] !min-w-[35px] !text-green-400 !rounded-md !p-0'><MdModeEdit className=' !text-[24px]' /></Button>
                      </IconButton>
                    </Tooltip>

                    <Tooltip title="View" placement='top'>
                      <IconButton>
                        <Button className='myCustomBtn !w-[35px] !h-[35px] !min-w-[35px] !text-primary !text-[18px] !rounded-md !p-0'><IoEye className=' !text-[24px]' /></Button>

                      </IconButton>
                    </Tooltip>

                    <Tooltip title="Delete" placement='top'>
                      <IconButton>
                        <Button className='myCustomBtn !w-[35px] !h-[35px] !min-w-[35px] !text-red-600 !text-[18px] !rounded-md !p-0'><MdDelete className=' !text-[24px]' /></Button>

                      </IconButton>
                    </Tooltip>
                  </div>

                </td>

              </tr>

              <tr >
                <td className="py-2 px-4 border-b">
                  <div>
                    <Checkbox {...label} size="small" />
                  </div>
                </td>

                <td className="py-2 px-4 border-b">
                  <div className='flex items-center gap-4 w-[350px]'>
                    <div className="img w-[65px] h-[65px] rounded-md overflow-hidden ">
                      <Link to='/product/45745'>
                        <img src="https://api.spicezgold.com/download/file_1734690981297_011618e4-4682-4123-be80-1fb7737d34ad1714702040213RARERABBITMenComfortOpaqueCasualShirt1.jpg" className='w-full hover:scale-105 transition-all' />
                      </Link>
                    </div>

                    <div className='w-[80%]'>
                      <h3 className='font-[600] text-[12px] leading-4 hover:text-[#5943da]'> <Link to='/product/45745'> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae doloremque neque consectetur quis? Totam, sapiente. </Link></h3>

                      <span className='text-[12px]'>Books</span>
                    </div>

                  </div>
                </td>

                <td className="py-2 px-4 border-b">
                  Electronics
                </td>

                <td className="py-2 px-4 border-b">
                  Women
                </td>

                <td className="py-2 px-4 border-b">
                  <div class="flex items-center gap-2 flex-col leading-4">
                    <span class="oldPrice line-through text-gray-500 text-[15px] font-[500]">$58.00</span>
                    <span class="price text-primary text-[15px] font-[600]">$58.00</span>
                  </div>
                </td>

                <td className="py-2 px-4 border-b ">
                  <p className='text-[14px]'><span className='font-[600]'>134 </span>sale</p>
                  <Progress value={90} type="success" />
                </td>

                <td className="py-2 px-4 border-b ">
                  <div className='flex items-center gap-1'>
                    <Tooltip title="Edit" placement='top'>
                      <IconButton>
                        <Button className='myCustomBtn !w-[35px] !h-[35px] !min-w-[35px] !text-green-400 !rounded-md !p-0'><MdModeEdit className=' !text-[24px]' /></Button>
                      </IconButton>
                    </Tooltip>

                    <Tooltip title="View" placement='top'>
                      <IconButton>
                        <Button className='myCustomBtn !w-[35px] !h-[35px] !min-w-[35px] !text-primary !text-[18px] !rounded-md !p-0'><IoEye className=' !text-[24px]' /></Button>

                      </IconButton>
                    </Tooltip>

                    <Tooltip title="Delete" placement='top'>
                      <IconButton>
                        <Button className='myCustomBtn !w-[35px] !h-[35px] !min-w-[35px] !text-red-600 !text-[18px] !rounded-md !p-0'><MdDelete className=' !text-[24px]' /></Button>

                      </IconButton>
                    </Tooltip>
                  </div>

                </td>

              </tr>

              <tr >
                <td className="py-2 px-4 border-b">
                  <div>
                    <Checkbox {...label} size="small" />
                  </div>
                </td>

                <td className="py-2 px-4 border-b">
                  <div className='flex items-center gap-4 w-[350px]'>
                    <div className="img w-[65px] h-[65px] rounded-md overflow-hidden ">
                      <Link to='/product/45745'>
                        <img src="https://api.spicezgold.com/download/file_1734690981297_011618e4-4682-4123-be80-1fb7737d34ad1714702040213RARERABBITMenComfortOpaqueCasualShirt1.jpg" className='w-full hover:scale-105 transition-all' />
                      </Link>
                    </div>

                    <div className='w-[80%]'>
                      <h3 className='font-[600] text-[12px] leading-4 hover:text-[#5943da]'> <Link to='/product/45745'> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae doloremque neque consectetur quis? Totam, sapiente. </Link></h3>

                      <span className='text-[12px]'>Books</span>
                    </div>

                  </div>
                </td>

                <td className="py-2 px-4 border-b">
                  Electronics
                </td>

                <td className="py-2 px-4 border-b">
                  Women
                </td>

                <td className="py-2 px-4 border-b">
                  <div class="flex items-center gap-2 flex-col leading-4">
                    <span class="oldPrice line-through text-gray-500 text-[15px] font-[500]">$58.00</span>
                    <span class="price text-primary text-[15px] font-[600]">$58.00</span>
                  </div>
                </td>

                <td className="py-2 px-4 border-b ">
                  <p className='text-[14px]'><span className='font-[600]'>134 </span>sale</p>
                  <Progress value={10} type="warning" />
                </td>

                <td className="py-2 px-4 border-b ">
                  <div className='flex items-center gap-1'>
                    <Tooltip title="Edit" placement='top'>
                      <IconButton>
                        <Button className='myCustomBtn !w-[35px] !h-[35px] !min-w-[35px] !text-green-400 !rounded-md !p-0'><MdModeEdit className=' !text-[24px]' /></Button>
                      </IconButton>
                    </Tooltip>

                    <Tooltip title="View" placement='top'>
                      <IconButton>
                        <Button className='myCustomBtn !w-[35px] !h-[35px] !min-w-[35px] !text-primary !text-[18px] !rounded-md !p-0'><IoEye className=' !text-[24px]' /></Button>

                      </IconButton>
                    </Tooltip>

                    <Tooltip title="Delete" placement='top'>
                      <IconButton>
                        <Button className='myCustomBtn !w-[35px] !h-[35px] !min-w-[35px] !text-red-600 !text-[18px] !rounded-md !p-0'><MdDelete className=' !text-[24px]' /></Button>

                      </IconButton>
                    </Tooltip>
                  </div>

                </td>

              </tr>

              <tr >
                <td className="py-2 px-4 border-b">
                  <div>
                    <Checkbox {...label} size="small" />
                  </div>
                </td>

                <td className="py-2 px-4 border-b">
                  <div className='flex items-center gap-4 w-[350px]'>
                    <div className="img w-[65px] h-[65px] rounded-md overflow-hidden ">
                      <Link to='/product/45745'>
                        <img src="https://api.spicezgold.com/download/file_1734690981297_011618e4-4682-4123-be80-1fb7737d34ad1714702040213RARERABBITMenComfortOpaqueCasualShirt1.jpg" className='w-full hover:scale-105 transition-all' />
                      </Link>
                    </div>

                    <div className='w-[80%]'>
                      <h3 className='font-[600] text-[12px] leading-4 hover:text-[#5943da]'> <Link to='/product/45745'> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae doloremque neque consectetur quis? Totam, sapiente. </Link></h3>

                      <span className='text-[12px]'>Books</span>
                    </div>

                  </div>
                </td>

                <td className="py-2 px-4 border-b">
                  Electronics
                </td>

                <td className="py-2 px-4 border-b">
                  Women
                </td>

                <td className="py-2 px-4 border-b">
                  <div class="flex items-center gap-2 flex-col leading-4">
                    <span class="oldPrice line-through text-gray-500 text-[15px] font-[500]">$58.00</span>
                    <span class="price text-primary text-[15px] font-[600]">$58.00</span>
                  </div>
                </td>

                <td className="py-2 px-4 border-b ">
                  <p className='text-[14px]'><span className='font-[600]'>134 </span>sale</p>
                  <Progress value={30} type="error" />
                </td>

                <td className="py-2 px-4 border-b ">
                  <div className='flex items-center gap-1'>
                    <Tooltip title="Edit" placement='top'>
                      <IconButton>
                        <Button className='myCustomBtn !w-[35px] !h-[35px] !min-w-[35px] !text-green-400 !rounded-md !p-0'><MdModeEdit className=' !text-[24px]' /></Button>
                      </IconButton>
                    </Tooltip>

                    <Tooltip title="View" placement='top'>
                      <IconButton>
                        <Button className='myCustomBtn !w-[35px] !h-[35px] !min-w-[35px] !text-primary !text-[18px] !rounded-md !p-0'><IoEye className=' !text-[24px]' /></Button>

                      </IconButton>
                    </Tooltip>

                    <Tooltip title="Delete" placement='top'>
                      <IconButton>
                        <Button className='myCustomBtn !w-[35px] !h-[35px] !min-w-[35px] !text-red-600 !text-[18px] !rounded-md !p-0'><MdDelete className=' !text-[24px]' /></Button>

                      </IconButton>
                    </Tooltip>
                  </div>

                </td>

              </tr>

              <tr >
                <td className="py-2 px-4 border-b">
                  <div>
                    <Checkbox {...label} size="small" />
                  </div>
                </td>

                <td className="py-2 px-4 border-b">
                  <div className='flex items-center gap-4 w-[350px]'>
                    <div className="img w-[65px] h-[65px] rounded-md overflow-hidden ">
                      <Link to='/product/45745'>
                        <img src="https://api.spicezgold.com/download/file_1734690981297_011618e4-4682-4123-be80-1fb7737d34ad1714702040213RARERABBITMenComfortOpaqueCasualShirt1.jpg" className='w-full hover:scale-105 transition-all' />
                      </Link>
                    </div>

                    <div className='w-[80%]'>
                      <h3 className='font-[600] text-[12px] leading-4 hover:text-[#5943da]'> <Link to='/product/45745'> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae doloremque neque consectetur quis? Totam, sapiente. </Link></h3>

                      <span className='text-[12px]'>Books</span>
                    </div>

                  </div>
                </td>

                <td className="py-2 px-4 border-b">
                  Electronics
                </td>

                <td className="py-2 px-4 border-b">
                  Women
                </td>

                <td className="py-2 px-4 border-b">
                  <div class="flex items-center gap-2 flex-col leading-4">
                    <span class="oldPrice line-through text-gray-500 text-[15px] font-[500]">$58.00</span>
                    <span class="price text-primary text-[15px] font-[600]">$58.00</span>
                  </div>
                </td>

                <td className="py-2 px-4 border-b ">
                  <p className='text-[14px]'><span className='font-[600]'>134 </span>sale</p>
                  <Progress value={70} type="warning" />
                </td>

                <td className="py-2 px-4 border-b ">
                  <div className='flex items-center gap-1'>
                    <Tooltip title="Edit" placement='top'>
                      <IconButton>
                        <Button className='myCustomBtn !w-[35px] !h-[35px] !min-w-[35px] !text-green-400 !rounded-md !p-0'><MdModeEdit className=' !text-[24px]' /></Button>
                      </IconButton>
                    </Tooltip>

                    <Tooltip title="View" placement='top'>
                      <IconButton>
                        <Button className='myCustomBtn !w-[35px] !h-[35px] !min-w-[35px] !text-primary !text-[18px] !rounded-md !p-0'><IoEye className=' !text-[24px]' /></Button>

                      </IconButton>
                    </Tooltip>

                    <Tooltip title="Delete" placement='top'>
                      <IconButton>
                        <Button className='myCustomBtn !w-[35px] !h-[35px] !min-w-[35px] !text-red-600 !text-[18px] !rounded-md !p-0'><MdDelete className=' !text-[24px]' /></Button>

                      </IconButton>
                    </Tooltip>
                  </div>

                </td>

              </tr>

              <tr >
                <td className="py-2 px-4 border-b">
                  <div>
                    <Checkbox {...label} size="small" />
                  </div>
                </td>

                <td className="py-2 px-4 border-b">
                  <div className='flex items-center gap-4 w-[350px]'>
                    <div className="img w-[65px] h-[65px] rounded-md overflow-hidden ">
                      <Link to='/product/45745'>
                        <img src="https://api.spicezgold.com/download/file_1734690981297_011618e4-4682-4123-be80-1fb7737d34ad1714702040213RARERABBITMenComfortOpaqueCasualShirt1.jpg" className='w-full hover:scale-105 transition-all' />
                      </Link>
                    </div>

                    <div className='w-[80%]'>
                      <h3 className='font-[600] text-[12px] leading-4 hover:text-[#5943da]'> <Link to='/product/45745'> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae doloremque neque consectetur quis? Totam, sapiente. </Link></h3>

                      <span className='text-[12px]'>Books</span>
                    </div>

                  </div>
                </td>

                <td className="py-2 px-4 border-b">
                  Electronics
                </td>

                <td className="py-2 px-4 border-b">
                  Women
                </td>

                <td className="py-2 px-4 border-b">
                  <div class="flex items-center gap-2 flex-col leading-4">
                    <span class="oldPrice line-through text-gray-500 text-[15px] font-[500]">$58.00</span>
                    <span class="price text-primary text-[15px] font-[600]">$58.00</span>
                  </div>
                </td>

                <td className="py-2 px-4 border-b ">
                  <p className='text-[14px]'><span className='font-[600]'>134 </span>sale</p>
                  <Progress value={100} type="error" />
                </td>

                <td className="py-2 px-4 border-b ">
                  <div className='flex items-center gap-1'>
                    <Tooltip title="Edit" placement='top'>
                      <IconButton>
                        <Button className='myCustomBtn !w-[35px] !h-[35px] !min-w-[35px] !text-green-400 !rounded-md !p-0'><MdModeEdit className=' !text-[24px]' /></Button>
                      </IconButton>
                    </Tooltip>

                    <Tooltip title="View" placement='top'>
                      <IconButton>
                        <Button className='myCustomBtn !w-[35px] !h-[35px] !min-w-[35px] !text-primary !text-[18px] !rounded-md !p-0'><IoEye className=' !text-[24px]' /></Button>

                      </IconButton>
                    </Tooltip>

                    <Tooltip title="Delete" placement='top'>
                      <IconButton>
                        <Button className='myCustomBtn !w-[35px] !h-[35px] !min-w-[35px] !text-red-600 !text-[18px] !rounded-md !p-0'><MdDelete className=' !text-[24px]' /></Button>

                      </IconButton>
                    </Tooltip>
                  </div>

                </td>

              </tr>


            </tbody>
          </table>
        </div>

        <div className='flex items-center justify-end py-4 pr-3'>
          <Pagination count={10} color="primary" />
        </div>



      </div>
    </>
  );
}

export default Dashboard;