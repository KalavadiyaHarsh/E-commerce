import React, { useState } from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import { Link } from 'react-router-dom';
import ProductZoom from '../components/ProductZoom';
import Rating from '@mui/material/Rating';
import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import ProductsSlider from '../components/ProductsSlider';
import ProductDetailsComponent from '../components/ProductDetails';



const ProductDetails = () => {

  const [activeTab, setActiveTab] = useState(0)

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
        <div className='container flex gap-8 items-center'>
          <div className='productZommContainer w-[40%] '>
            <ProductZoom />
          </div>

          <div className='productContent w-[60%] pl-10'>
            <ProductDetailsComponent />
          </div>
        </div>



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
              <div className='w-full productReviewsContainer'>
                <h2 className='text-[18px]'>Customer questions & answers</h2>

                <div className='reviwescroll w-full max-h-[300px] overflow-y-scroll overflow-x-hidden'>
                  <div className='review w-ful pb-5 pr-5 border-b-[1px] border-[rgba(0,0,0,0.1)] flex items-center justify-between'>
                    <div className='info w-[60%] flex items-center gap-2 mt-3'>
                      <div className='img w-[80px] h-[80px] overflow-hidden rounded-full'>
                        <img src="https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW5kaWFufGVufDB8fDB8fHww" alt="" className='w-full h-full object-cover' />
                      </div>

                      <div className='w-[80%]'>
                        <h4 className='text-[16px]'>Rinku Verma</h4>
                        <h5 className='text-[13px] mb-0'>2025-07-01</h5>
                        <p className='mt-0 mb-0'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto, id tenetur recusandae autem inventore commodi et quis ad laudantium?</p>
                      </div>

                    </div>

                    <Rating name="size-small" defaultValue={4} size="small" readOnly />

                  </div>

                  <div className='review w-ful pb-5 pr-5 border-b-[1px] border-[rgba(0,0,0,0.1)] flex items-center justify-between'>
                    <div className='info w-[60%] flex items-center gap-2 mt-3'>
                      <div className='img w-[80px] h-[80px] overflow-hidden rounded-full'>
                        <img src="https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW5kaWFufGVufDB8fDB8fHww" alt="" className='w-full h-full object-cover' />
                      </div>

                      <div className='w-[80%]'>
                        <h4 className='text-[16px]'>Rinku Verma</h4>
                        <h5 className='text-[13px] mb-0'>2025-07-01</h5>
                        <p className='mt-0 mb-0'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto, id tenetur recusandae autem inventore commodi et quis ad laudantium?</p>
                      </div>

                    </div>

                    <Rating name="size-small" defaultValue={4} size="small" readOnly />

                  </div>

                  <div className='review w-ful pb-5 pr-5 border-b-[1px] border-[rgba(0,0,0,0.1)] flex items-center justify-between'>
                    <div className='info w-[60%] flex items-center gap-2 mt-3'>
                      <div className='img w-[80px] h-[80px] overflow-hidden rounded-full'>
                        <img src="https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW5kaWFufGVufDB8fDB8fHww" alt="" className='w-full h-full object-cover' />
                      </div>

                      <div className='w-[80%]'>
                        <h4 className='text-[16px]'>Rinku Verma</h4>
                        <h5 className='text-[13px] mb-0'>2025-07-01</h5>
                        <p className='mt-0 mb-0'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto, id tenetur recusandae autem inventore commodi et quis ad laudantium?</p>
                      </div>

                    </div>

                    <Rating name="size-small" defaultValue={4} size="small" readOnly />

                  </div>

                  <div className='review w-ful pb-5 pr-5 border-b-[1px] border-[rgba(0,0,0,0.1)] flex items-center justify-between'>
                    <div className='info w-[60%] flex items-center gap-2 mt-3'>
                      <div className='img w-[80px] h-[80px] overflow-hidden rounded-full'>
                        <img src="https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW5kaWFufGVufDB8fDB8fHww" alt="" className='w-full h-full object-cover' />
                      </div>

                      <div className='w-[80%]'>
                        <h4 className='text-[16px]'>Rinku Verma</h4>
                        <h5 className='text-[13px] mb-0'>2025-07-01</h5>
                        <p className='mt-0 mb-0'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto, id tenetur recusandae autem inventore commodi et quis ad laudantium?</p>
                      </div>

                    </div>

                    <Rating name="size-small" defaultValue={4} size="small" readOnly />

                  </div>
                </div>

                <br />

                <div className='reviewForm bg-[#fafafa] p-4 rounded-md'>
                  <h2 className='text-[18px]'>Add a review</h2>

                  <form className='w-full mt-4'>
                    <TextField
                      id="outlined-multiline-static"
                      label="Write a Review"
                      className='w-full'
                      multiline
                      rows={5}
                    />
                    <br /><br />
                    <Rating name="size-small" defaultValue={4} size="small" />


                    <div className='flex items-center'>
                      <br />
                      <br />
                      <Button className=' !bg-primary !text-white '>Submit Review</Button>
                    </div>
                  </form>


                </div>


              </div>
            </div>
          }

        </div>
      </section>

      <div className='container pt-5'>
          <h2 className='text-[20px] font-[600] uppercase'>RELATED  Products</h2>
          <ProductsSlider items={5}/>

      </div>
    </>
  );
}

export default ProductDetails;
