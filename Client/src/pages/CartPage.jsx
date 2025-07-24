import React, { useState } from 'react';

import Button from '@mui/material/Button';

import { IoBagCheck } from "react-icons/io5";
import CartItems from '../components/CartItems';
import { Link } from 'react-router-dom';

const CartPage = () => {

    

    // Sample data for cart items
    return (
        <section className='section py-5 pb-10'>
            <div className='container w-[80%] !max-w-[80%] flex gap-5'>
                <div className='leftPart w-[70%]'>


                    <div className='shadow-md bg-white rounded-md mt-3'>
                        <div className='py-2 px-3 border-b border-[rgba(0,0,0,0.1)]'>
                            <h2>Your Cart</h2>
                            <p className='mt-0'>There are <span className='font-bold text-primary'>3 </span>Products in your cart.</p>
                        </div>
                        
                      <CartItems size='S' qty={1} />
                      <CartItems size='S' qty={1} />
                      <CartItems size='S' qty={1} />
                      <CartItems size='S' qty={1} />
                      <CartItems size='S' qty={1} />


                    </div>
                </div>


                <div className='rightPart w-[30%]'>
                    <div className='shadow-md bg-white rounded-md mt-3 p-5'>
                        <h3 className='pb-3'>Cart Totals</h3>
                        <hr />

                        <p className='flex items-center justify-between'>
                            <span className='text-[14px] font-[500]'>Subtotal</span>
                            <span className='text-primary font-bold'>$1,300.00</span>
                        </p>

                        <p className='flex items-center justify-between'>
                            <span className='text-[14px] font-[500]'>Shipping</span>
                            <span className='text-primary font-bold'>Free</span>
                        </p>

                        <p className='flex items-center justify-between'>
                            <span className='text-[14px] font-[500]'>Estimate for </span>
                            <span className='text-primary font-bold'>Surat</span>
                        </p>

                        <p className='flex items-center justify-between'>
                            <span className='text-[14px] font-[500]'>Total</span>
                            <span className='text-primary font-bold'>$1,300.00</span>
                        </p>
                        <br />
                        <Link to={'/checkout'}><Button className='btn-Org w-full flex gap-2'><IoBagCheck className='text-[19px]' />Checkout</Button></Link>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default CartPage;
