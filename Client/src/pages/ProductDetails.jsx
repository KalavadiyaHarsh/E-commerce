import React, { useEffect, useRef, useState } from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import { Link, useParams } from 'react-router-dom';
import ProductZoom from '../components/ProductZoom';
import ProductsSlider from '../components/ProductsSlider';
import ProductDetailsComponent from '../components/ProductDetails';
import { fetchDataFromApi } from '../utils/api';
import CircularProgress from '@mui/material/CircularProgress';
import Reviews from './Reviews';


const ProductDetails = () => {

  const [activeTab, setActiveTab] = useState(0)
  const [productData, setProductData] = useState()
  const [isLoading, setIsLoading] = useState(false);
  const [reviewsCount, setReviewsCount] = useState(0)
  const [reletedProductsData, setReletedProductsData] = useState([])


  const { id } = useParams();

  const reviewSec = useRef();

  useEffect(() => {
    fetchDataFromApi(`/api/user/getReviews?productId=${id}`).then(
      (res) => {
        if (res?.error === false) {
          setReviewsCount(res.reviews.length)
        }
      }
    );
  }, [reviewsCount])




  useEffect(() => {
    setIsLoading(true)
    fetchDataFromApi(`/api/product/${id}`).then((res) => {
      if (res?.error === false) {
        setProductData(res?.product)

        fetchDataFromApi(`/api/product/getAllProductsBySubCatId/${res?.product?.subCatId}`).then((res) => {
         if(res?.error === false){
          const filterData = res?.data?.filter((item) => item._id !== id);
           setReletedProductsData(filterData)
         }
        })
        setTimeout(() => {
          setIsLoading(false)
        }, 500);
      }

      window.scrollTo(0, 0)

    })

  }, [id])


  const gotoReviews = () => {
    window.scrollTo({
      top: reviewSec?.current.offsetTop - 170,
      behavior: 'smooth',
    })

    setActiveTab(1);

  }

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
                <ProductDetailsComponent data={productData} reviewsCount={reviewsCount} gotoReviews={gotoReviews} />
              </div>
            </div>
        }





        <div className='container py-10'>
          <div className='flex items-center gap-5'>
            <span className={`link text-[18px] cursor-pointer font-[500]} ${activeTab === 0 && 'text-primary'}`} onClick={() => setActiveTab(0)}>Description</span>
            <span className={`link text-[18px] cursor-pointer font-[500]} ${activeTab === 1 && 'text-primary'}`} onClick={() => setActiveTab(1)} ref={reviewSec}>Reviws ({reviewsCount})</span>
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
            <div className='shadow-md w-[80%] p-5 rounded-md mt-3'>
              {
                productData?.length !== 0 && <Reviews productId={productData?._id} setReviewsCount={setReviewsCount} />
              }

            </div>
          }

        </div>
      </section>

      {
        reletedProductsData?.length !== 0 &&
        <div className='container pt-5'>
          <h2 className='text-[20px] font-[600] uppercase'>RELATED  Products</h2>
          <ProductsSlider items={5} data={reletedProductsData} />

        </div>
      }
    </>
  );
}

export default ProductDetails;
