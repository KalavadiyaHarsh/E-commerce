import React from 'react';
import DashboardBoxes from '../components/DashboardBoxes';
import Button from '@mui/material/Button';
import { FaPlus } from "react-icons/fa6";

const Dashboard = () => {
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
        <div class="overflow-x-auto  ">
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
        </div>

      </div>
    </>
  );
}

export default Dashboard;