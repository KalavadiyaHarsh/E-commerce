import React,{useContext} from 'react';
import { MdLocalShipping } from "react-icons/md";
import { PiKeyReturn } from "react-icons/pi";
import { LiaGiftSolid } from "react-icons/lia";
import { MdOutlineSupportAgent } from "react-icons/md";
import { IoWalletOutline } from "react-icons/io5";
import { IoChatboxOutline } from "react-icons/io5";
import { FaFacebookF, FaYoutube, FaPinterestP, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Drawer from '@mui/material/Drawer';
import CartPanel from '../components/CartPanel';
import { IoClose } from "react-icons/io5";
import { Button } from '@mui/material';
import { MyContext } from '../App';


const Footer = () => {

    const context= useContext(MyContext);



    return (
        <>
            <footer className='py-6 bg-white border-[1px] border-gray-100'>
                <div className='container'>
                    <div className='flex items-center justify-center gap-8 p-5 pb-11'>
                        <div className='col flex items-center justify-center flex-col group'>
                            <MdLocalShipping className='text-[50px] transition-all duration-300 group-hover:-translate-y-1 group-hover:scale-110  group-hover:text-primary' />
                            <h3 className='text-[18px] font-[600] mt-3'>Free Shipping</h3>
                            <p className='text-[13px] font-[500]'>For all Orders Over $100</p>
                        </div>

                        <div className='col flex items-center justify-center flex-col group'>
                            <PiKeyReturn className='text-[50px] transition-all duration-300 group-hover:-translate-y-1 group-hover:scale-110  group-hover:text-primary' />
                            <h3 className='text-[18px] font-[600] mt-3'>30 Days Returns</h3>
                            <p className='text-[13px] font-[500]'>For an Exchange Product</p>
                        </div>

                        <div className='col flex items-center justify-center flex-col group'>
                            <IoWalletOutline className='text-[50px] transition-all duration-300 group-hover:-translate-y-1 group-hover:scale-110  group-hover:text-primary' />
                            <h3 className='text-[18px] font-[600] mt-3'>Secured Payment</h3>
                            <p className='text-[13px] font-[500]'>Payment Cards Accepted</p>
                        </div>


                        <div className='col flex items-center justify-center flex-col group'>
                            <LiaGiftSolid className='text-[50px] transition-all duration-300 group-hover:-translate-y-1 group-hover:scale-110  group-hover:text-primary' />
                            <h3 className='text-[18px] font-[600] mt-3'>Special Gifts</h3>
                            <p className='text-[13px] font-[500]'>Our First Product Orde</p>
                        </div>

                        <div className='col flex items-center justify-center flex-col group'>
                            <MdOutlineSupportAgent className='text-[50px] transition-all duration-300 group-hover:-translate-y-1 group-hover:scale-110  group-hover:text-primary' />
                            <h3 className='text-[18px] font-[600] mt-3'>Support 24/7</h3>
                            <p className='text-[13px] font-[500]'>Contact us Anytime</p>
                        </div>
                    </div>

                    <hr />

                    <div className='footer flex  justify-between gap-10 py-8 px-8 w-full bg-[#f9f9f9]'>
                        {/* Part 1: Contact Us */}
                        <div className='part-1 w-full md:w-[23%]'>
                            <h2 className='text-[20px] font-[600] mb-3'>Contact us</h2>
                            <p className='text-[14px] font-[400] mb-2'>
                                Classyshop - Mega Super Store <br />507-Union Trade Centre France
                            </p>
                            <Link className='link text-[14px] text-blue-500 underline' to="mailto:sales@yourcompany.com">sales@yourcompany.com</Link>
                            <p className='text-[21px] font-[600] text-primary mt-3'>(+91) 9876-543-210</p>

                            <div className='flex items-center gap-3 mt-4'>
                                <IoChatboxOutline className='text-[30px] text-primary' />
                                <span className='text-[16px] font-[600]'>Online Chat<br />Get Expert Help</span>
                            </div>
                        </div>

                        {/* Part 2: Products */}
                        <div className='part-2 w-full md:w-[18%]'>
                            <h2 className='text-[18px] font-[600] mb-3'>Products</h2>
                            <ul className='space-y-2 text-[14px]'>
                                <li><Link to="#" className=' link hover:!ml-1 transition-all'>Prices drop</Link></li>
                                <li><Link to="#" className=' link hover:!ml-1 transition-all'>New products</Link></li>
                                <li><Link to="#" className=' link hover:!ml-1 transition-all'>Best sales</Link></li>
                                <li><Link to="#" className=' link hover:!ml-1 transition-all'>Contact us</Link></li>
                                <li><Link to="#" className=' link hover:!ml-1 transition-all'>Sitemap</Link></li>
                                <li><Link to="#" className=' link hover:!ml-1 transition-all'>Stores</Link></li>
                            </ul>
                        </div>

                        {/* Part 3: Our Company */}
                        <div className='part-3 w-full md:w-[18%]'>
                            <h2 className='text-[18px] font-[600] mb-3'>Our company</h2>
                            <ul className='space-y-2 text-[14px]'>
                                <li><Link to="#" className='hover:underline link'>Delivery</Link></li>
                                <li><Link to="#" className='hover:underline link'>Legal Notice</Link></li>
                                <li><Link to="#" className='hover:underline link'>Terms and conditions of use</Link></li>
                                <li><Link to="#" className='hover:underline link'>About us</Link></li>
                                <li><Link to="#" className='hover:underline link'>Secure payment</Link></li>
                                <li><Link to="#" className='hover:underline link'>Login</Link></li>
                            </ul>
                        </div>

                        {/* Part 4: Newsletter */}
                        <div className='part-4 w-full md:w-[35%]'>
                            <h2 className='text-[18px] font-[600] mb-3'>Subscribe to newsletter</h2>
                            <p className='text-[14px] mb-4'>Subscribe to our latest newsletter to get news about special discounts.</p>

                            <input
                                type='email'
                                placeholder='Your Email Address'
                                className='w-full border border-gray-300 rounded-md p-2 mb-3'
                            />
                            <button className='bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md'>
                                SUBSCRIBE
                            </button>

                            <div className='flex items-start gap-2 mt-3 text-[13px]'>
                                <input type='checkbox' />
                                <span>I agree to the terms and conditions and the privacy policy</span>
                            </div>
                        </div>
                    </div>

                </div>
            </footer>

            <div className='bottomStrip border-t border-gray-300 py-4 px-6 flex flex-col md:flex-row items-center justify-between'>
                {/* Left: Social Media Icons */}
                <div className='flex gap-4 mb-2 md:mb-0'>
                    {[FaFacebookF, FaYoutube, FaPinterestP, FaInstagram].map((Icon, i) => (
                        <a key={i} href='#' className='w-9 h-9 border border-gray-300 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition'>
                            <Icon className='text-gray-700 hover:text-white text-sm' />
                        </a>
                    ))}
                </div>

                {/* Center: Text */}
                <p className='text-[14px] text-gray-600'>© 2025 - Ecommerce Template</p>

                {/* Right: Payment Icons */}
                <div className='flex items-center gap-2 mt-2 md:mt-0'>
                    <img src='https://ecommerce-frontend-view.netlify.app/carte_bleue.png   ' alt='CB' className='w-10 h-auto' />
                    <img src='https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png' alt='Visa' className='w-10 h-auto' />
                    <img src='https://upload.wikimedia.org/wikipedia/commons/0/04/Mastercard-logo.png' alt='MasterCard' className='w-10 h-auto' />
                    <img src='https://upload.wikimedia.org/wikipedia/commons/3/30/American_Express_logo.svg' alt='Amex' className='w-10 h-auto' />
                    <img src='https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg' alt='PayPal' className='w-10 h-auto' />
                </div>
            </div>





            {/* cart panal */}

       <Drawer open={context.openCartPanel} onClose={context.toggleCartPanel(false)} anchor={"right"} className='CartPanel'>
         <div className='flex items-center justify-between py-3 px-4 gap-3 border-b border-[rgba(0,0,0,0.1)]'>
             <h4>Shopping Cart (1)</h4>
             <Button className='!min-w-2  !text-primary !text-[19px]' onClick={context.toggleCartPanel(false)}><IoClose /></Button>
         </div>

        
         <CartPanel />
      </Drawer>


        </>
    );
}

export default Footer;
