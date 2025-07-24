import React, { useState } from 'react';
import HomeSlider from '../components/HomeSlider';
import HomeCatSlider from '../components/HomeCatSlider';
import { FaShippingFast } from "react-icons/fa";
import AdsBannerSlider from '../components/AdsBannerSlider';

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import ProductsSlider from '../components/ProductsSlider';

const Home = () => {

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  }
  return (
    <div>
      <HomeSlider />
      <HomeCatSlider />

      <section className='bg-white py-8'>
        <div className='container'>
          <div className='flex items-center justify-between'>
            <div className='leftSec'>
              <h2 className='text-[20px] font-[600]'>Popular Products</h2>
              <p className='text-[14px] font-[400]'>Do not miss the current offers until the end of march.</p>
            </div>

            <div className='rightSec w-[60%]'>
              <Tabs
                value={value}
                onChange={handleChange}
                variant="scrollable"
                scrollButtons="auto"
                aria-label="scrollable auto tabs example"
              >
                <Tab label="Home" />
                <Tab label="Fashion" />
                <Tab label="Electronics" />
                <Tab label="Bags" />
                <Tab label="Footware" />
                <Tab label="Groceries" />
                <Tab label="Beauty" />
                <Tab label="Wellness" />
                <Tab label="Jewellery" />
              </Tabs>

            </div>
          </div>

          <ProductsSlider items={5}/>
        </div>
      </section>



      <section className='py-4 pt-2 bg-white'>
        <div className='container'>
          <div className='freeShipping w-[80%] m-auto p-4 py-2 border-2 border-[#ff5252] flex items-center justify-between rounded-md mb-7'>
            <div className='col1 flex items-center gap-4'>
              <FaShippingFast className='text-[50px]' />
              <span className='text-[19px] font-[500] uppercase'>Free Shipping</span>
            </div>

            <div className='col2'>
              <p className='mb-0 font-[500]'>Free Delivery Now On Your First Order and over $200</p>
            </div>

            <div className='col3'>
              <p className='font-[600] text-[30px]'>- Only $200*</p>
            </div>
          </div>

          <AdsBannerSlider items={4} />
        </div>

      </section>

    <section className='py-5 pt-0 bg-white'>
      <div className='container'>
              <h2 className='text-[20px] font-[600]'>Latest Products</h2>
          <ProductsSlider items={5}/>

          <AdsBannerSlider items={3} />
      </div>
    </section>

    <section className='py-5 pt-0 bg-white'>
      <div className='container'>
              <h2 className='text-[20px] font-[600]'>Featured Products</h2>
          <ProductsSlider items={5}/>

          <AdsBannerSlider items={3} />
      </div>
    </section>

    
    </div>
  );
}

export default Home;
