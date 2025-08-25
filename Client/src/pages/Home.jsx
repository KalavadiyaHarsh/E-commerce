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
import ProductLoading from '../components/ProductLoading';

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
    setPopularProductsData([])
    fetchDataFromApi(`/api/product/getAllProductsByCatId/${context?.catData[0]?._id}`).then((res) => {
      if (res?.error === false) {
        setPopularProductsData(res?.data)
      }
    })

  }, [context?.catData])

  useEffect(() => {
    setAllProductData([])
    setAllFeatureProducts([])

    fetchDataFromApi("/api/product/getAllProducts").then((res) => {
      if (res?.error === false) {
        setAllProductData(res?.products)
        
      }
    })

    fetchDataFromApi("/api/product/getAllFeatureProducts").then((res) => {
      if (res?.error === false) {
        setAllFeatureProducts(res?.products)
        
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

          {
            popularProductsData?.length === 0 && <ProductLoading />
          }


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
            allProductData?.length === 0 && <ProductLoading />
          }
          {
            allProductData?.length !== 0 && <ProductsSlider items={5} data={allProductData} />
          }

          <AdsBannerSlider items={3} />
        </div>
      </section>

      <section className='py-5 pt-0 bg-white'>
        <div className='container'>
          <h2 className='text-[20px] font-[600]'>Featured Products</h2>
          {
            allFeatureProducts?.length === 0 && <ProductLoading />
          }
          
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
