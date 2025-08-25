import React, { useContext, useEffect, useState } from 'react';
import HomeSlider from '../components/HomeSlider';
import HomeCatSlider from '../components/HomeCatSlider';
import { FaShippingFast } from "react-icons/fa";
import AdsBannerSlider from '../components/AdsBannerSlider';

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import ProductsSlider from '../components/ProductsSlider';
import { MyContext } from '../App';
import { fetchDataFromApi } from '../utils/api';

const Home = () => {
  const context = useContext(MyContext);
  const [value, setValue] = React.useState(0);
  const [popularProductsData, setPopularProductsData] = useState([])
  const [allProductData, setAllProductData] = useState([])
  const [allFeatureProducts, setAllFeatureProducts] = useState([])

  const handleChange = (event, newValue) => {
    // console.log(event?.target)
    setValue(newValue);
  }

  useEffect(() => {
    fetchDataFromApi(`/api/product/getAllProductsByCatId/${context?.catData[0]?._id}`).then((res) => {
      if (res?.error === false) {
        setPopularProductsData(res?.data)
      }
    })

  }, [context?.catData])

  useEffect(() => {
    fetchDataFromApi("/api/product/getAllProducts").then((res) => {
      if (res?.error === false) {
        setAllProductData(res?.products)
        console.log(res?.products)
      }
    })

    fetchDataFromApi("/api/product/getAllFeatureProducts").then((res) => {
      if (res?.error === false) {
        setAllFeatureProducts(res?.products)
        console.log(res?.products)
      }
    })
  }, [])

  const filterByCatId = (id) => {
    fetchDataFromApi(`/api/product/getAllProductsByCatId/${id}`).then((res) => {
      if (res?.error === false) {
        // console.log(res?.data)
        setPopularProductsData(res?.data)

      }

    })

  }


  return (
    <div>
      <HomeSlider />
      {
        context?.catData?.length !== 0 && <HomeCatSlider data={context?.catData} />
      }


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

                {
                  context?.catData?.length !== 0 && context?.catData?.map((cat, index) => {
                    return (
                      <Tab key={index} label={cat?.name} onClick={() => filterByCatId(cat?._id)} />
                    )
                  })
                }

              </Tabs>

            </div>
          </div>

          <div className='flex items-center animate-pulse'>
            <div className='col w-[20%] h-[250px]'>
              <div className="flex items-center justify-center w-full h-48 bg-gray-300 rounded-sm sm:w-96 dark:bg-gray-300">
                <svg className="w-10 h-10 text-gray-200 dark:text-gray-200" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                  <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
                </svg>
              </div>

              <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-300 w-48 mb-4 mt-3"></div>
              <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-300 max-w-[480px] mb-2.5"></div>
            </div>
          </div>

          {
            popularProductsData?.length !== 0 && <ProductsSlider items={5} data={popularProductsData} />
          }


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
          {
            allProductData?.length !== 0 && <ProductsSlider items={5} data={allProductData || []} />
          }

          <AdsBannerSlider items={3} />
        </div>
      </section>

      <section className='py-5 pt-0 bg-white'>
        <div className='container'>
          <h2 className='text-[20px] font-[600]'>Featured Products</h2>
          {
            allFeatureProducts?.length !== 0 && <ProductsSlider items={5} data={allFeatureProducts} />
          }

          <AdsBannerSlider items={3} />
        </div>
      </section>


    </div>
  );
}

export default Home;
