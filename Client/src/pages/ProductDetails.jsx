import React, { useEffect, useState } from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import { Link, useParams } from 'react-router-dom';
import ProductZoom from '../components/ProductZoom';
import Rating from '@mui/material/Rating';
import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import ProductsSlider from '../components/ProductsSlider';
import ProductDetailsComponent from '../components/ProductDetails';
import { fetchDataFromApi } from '../utils/api';
import CircularProgress from '@mui/material/CircularProgress';
import Reviews from './Reviews';


const ProductDetails = () => {

  const [activeTab, setActiveTab] = useState(0)
  const [productData, setProductData] = useState()
  const [isLoading, setIsLoading] = useState(false);

  const { id } = useParams();




  useEffect(() => {
    setIsLoading(true)
    fetchDataFromApi(`/api/product/${id}`).then((res) => {
      if (res?.error === false) {
        setProductData(res.product)
        setTimeout(() => {

          setIsLoading(false)
        }, 500);
      }

      window.scrollTo(0, 0)

    })

  }, [id])

  return (
    <>
      <div className='py-5'>
        <div className='container'>
          <Breadcrumbs aria-label="breadcrumb">
            <Link to="/" className='link transition' underline="hover" color="inherit">
              Home
            </Link>
            <Link to="/" className='link transition' underline="hover" color="inherit">
              Fashion
            </Link>
            <h1>Cropped Satin Bobmer Jacket</h1>
          </Breadcrumbs>
        </div>
      </div>



      <section className='bg-white py-5'>
        {
          isLoading === true
            ?
            <div className='flex items-center justify-center min-h-[300px]'>
              <CircularProgress color="inherit" />
            </div>
            :
            <div className='container flex gap-8 items-center'>
              <div className='productZommContainer w-[40%] '>
                <ProductZoom images={productData?.images} />
              </div>

              <div className='productContent w-[60%] pl-10'>
                <ProductDetailsComponent data={productData} />
              </div>
            </div>
        }





        <div className='container py-10'>
          <div className='flex items-center gap-5'>
            <span className={`link text-[18px] cursor-pointer font-[500]} ${activeTab === 0 && 'text-primary'}`} onClick={() => setActiveTab(0)}>Description</span>
            <span className={`link text-[18px] cursor-pointer font-[500]} ${activeTab === 1 && 'text-primary'}`} onClick={() => setActiveTab(1)}>product Details</span>
            <span className={`link text-[18px] cursor-pointer font-[500]} ${activeTab === 2 && 'text-primary'}`} onClick={() => setActiveTab(2)}>Reviws (5)</span>
          </div>


          {
            activeTab === 0 &&
            <div className='shadow-md w-full p-5 rounded-md mt-3'>
              <p>Studio Design' PolyFaune collection features classic products with colorful patterns, inspired by the traditional japanese origamis. To wear with a chino or jeans. The sublimation textile printing process provides an exceptional color rendering and a color, guaranteed overtime.</p>

              <h4 className='mt-2 font-[600]'>Packaging & Delivery</h4>

              <p>Less lion goodness that euphemistically robin expeditiously bluebird smugly scratched far while thus cackled sheepishly rigid after due one assenting regarding censorious while occasional or this more crane went more as this less much amid overhung anathematic because much held one exuberantly sheep goodness so where rat wry well concomitantly.</p>

              <h4 className='mt-2 font-[600]'>Suggested Use</h4>

              <p>Scallop or far crud plain remarkably far by thus far iguana lewd precociously and and less rattlesnake contrary caustic wow this near alas and next and pled the yikes articulate about as less cackled dalmatian in much less well jeering for the thanks blindly sentimental whimpered less across objectively fanciful grimaced wildly some wow and rose jeepers outgrew lugubrious luridly irrationally attractively dachshund.</p>
            </div>
          }

          {
            activeTab === 1 &&
            <div className='shadow-md w-full p-5 rounded-md mt-3'>

              <div class="overflow-x-auto">
                <table class="min-w-full bg-white border border-gray-300">
                  <thead>
                    <tr class="bg-gray-200 text-gray-700 text-left">
                      <th class="py-3 px-4 border-b border-gray-300">Specification</th>
                      <th class="py-3 px-4 border-b border-gray-300">Details</th>
                    </tr>
                  </thead>
                  <tbody class="text-gray-800">
                    <tr>
                      <td class="py-2 px-4 border-b border-gray-300">Stand Up</td>
                      <td class="py-2 px-4 border-b border-gray-300">35″L x 24″W x 37-45″H (front to back wheel)</td>
                    </tr>
                    <tr>
                      <td class="py-2 px-4 border-b border-gray-300">Folded (w/o wheels)</td>
                      <td class="py-2 px-4 border-b border-gray-300">32.5″L x 18.5″W x 16.5″H</td>
                    </tr>
                    <tr>
                      <td class="py-2 px-4 border-b border-gray-300">Folded (w/ wheels)</td>
                      <td class="py-2 px-4 border-b border-gray-300">32.5″L x 24″W x 18.5″H</td>
                    </tr>
                    <tr>
                      <td class="py-2 px-4 border-b border-gray-300">Door Pass Through</td>
                      <td class="py-2 px-4 border-b border-gray-300">24″</td>
                    </tr>
                    <tr>
                      <td class="py-2 px-4 border-b border-gray-300">Frame</td>
                      <td class="py-2 px-4 border-b border-gray-300">Aluminum</td>
                    </tr>
                    <tr>
                      <td class="py-2 px-4 border-b border-gray-300">Weight (w/o wheels)</td>
                      <td class="py-2 px-4 border-b border-gray-300">20 LBS</td>
                    </tr>
                    <tr>
                      <td class="py-2 px-4 border-b border-gray-300">Weight Capacity</td>
                      <td class="py-2 px-4 border-b border-gray-300">60 LBS</td>
                    </tr>
                    <tr>
                      <td class="py-2 px-4 border-b border-gray-300">Width</td>
                      <td class="py-2 px-4 border-b border-gray-300">24″</td>
                    </tr>
                    <tr>
                      <td class="py-2 px-4 border-b border-gray-300">Handle height (ground to handle)</td>
                      <td class="py-2 px-4 border-b border-gray-300">37-45″</td>
                    </tr>
                    <tr>
                      <td class="py-2 px-4">Wheels</td>
                      <td class="py-2 px-4">12″ air / wide track slick tread</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

          }

          {
            activeTab === 2 &&
            <div className='shadow-md w-[80%] p-5 rounded-md mt-3'>
              {
                productData?.length!==0 && <Reviews productId={productData?._id} />
              }
                
            </div>
          }

        </div>
      </section>

      <div className='container pt-5'>
        <h2 className='text-[20px] font-[600] uppercase'>RELATED  Products</h2>
        <ProductsSlider items={5} />

      </div>
    </>
  );
}

export default ProductDetails;
