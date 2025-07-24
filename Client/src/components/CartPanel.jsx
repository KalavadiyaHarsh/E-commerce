import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { MdOutlineDelete } from "react-icons/md";
import { Button } from '@mui/material';
import { MyContext } from '../App';

const CartPanel = () => {

    const context = useContext(MyContext);


    return (
        <>
            <div className='scroll w-full max-h-[300px] overflow-x-hidden overflow-y-scroll py-2 px-4 '>
                <div className='cartItem w-full flex items-center gap-4  border-b border-[rgba(0,0,0,0.1)] py-3'>
                    <div className='img w-[25%] overflow-hidden h-[80px] rounded-lg  border boeder-[rgba(0,0,0,0.1)]'>
                        <Link to={'/product/45875'} ><img src="https://demos.codezeel.com/prestashop/PRS21/PRS210502/70-home_default/mug-today-is-a-good-day.jpg" alt="" className='w-full hover:scale-105' /></Link>
                    </div>


                    <div className='info w-[75%] pl-3 pr-5'>
                        <h4 className='text-[16px] font-[500]'><Link to={'/product/5485'} className='link transition-all'>Lorem ipsum dolorelit Numquam, quis.</Link></h4>
                        <p className='flex items-center gap-5 mt-2 mb-2 '>
                            <span className='text-[14px] font-[500]'>Qty: <span className='text-primary'>1</span></span>
                            <span className='text-[14px] font-[500]'>Price: <span className='text-primary'>$100.00</span></span>
                        </p>
                    </div>

                    <Button className='!mb-14 !min-w-2 !text-primary !text-[29px]'><MdOutlineDelete /></Button>
                </div>

                <div className='cartItem w-full flex items-center gap-4  border-b border-[rgba(0,0,0,0.1)] py-3'>
                    <div className='img w-[25%] overflow-hidden h-[80px] rounded-lg  border boeder-[rgba(0,0,0,0.1)]'>
                        <Link to={'/product/45875'} ><img src="https://demos.codezeel.com/prestashop/PRS21/PRS210502/70-home_default/mug-today-is-a-good-day.jpg" alt="" className='w-full hover:scale-105' /></Link>
                    </div>


                    <div className='info w-[75%] pl-3 pr-5'>
                        <h4 className='text-[16px] font-[500]'><Link to={'/product/5485'} className='link transition-all'>Lorem ipsum dolorelit Numquam, quis.</Link></h4>
                        <p className='flex items-center gap-5 mt-2 mb-2 '>
                            <span className='text-[14px] font-[500]'>Qty: <span className='text-primary'>1</span></span>
                            <span className='text-[14px] font-[500]'>Price: <span className='text-primary'>$100.00</span></span>
                        </p>
                    </div>

                    <Button className='!mb-14 !min-w-2 !text-primary !text-[29px]'><MdOutlineDelete /></Button>
                </div>

                <div className='cartItem w-full flex items-center gap-4  border-b border-[rgba(0,0,0,0.1)] py-3'>
                    <div className='img w-[25%] overflow-hidden h-[80px] rounded-lg  border boeder-[rgba(0,0,0,0.1)]'>
                        <Link to={'/product/45875'} ><img src="https://demos.codezeel.com/prestashop/PRS21/PRS210502/70-home_default/mug-today-is-a-good-day.jpg" alt="" className='w-full hover:scale-105' /></Link>
                    </div>


                    <div className='info w-[75%] pl-3 pr-5'>
                        <h4 className='text-[16px] font-[500]'><Link to={'/product/5485'} className='link transition-all'>Lorem ipsum dolorelit Numquam, quis.</Link></h4>
                        <p className='flex items-center gap-5 mt-2 mb-2 '>
                            <span className='text-[14px] font-[500]'>Qty: <span className='text-primary'>1</span></span>
                            <span className='text-[14px] font-[500]'>Price: <span className='text-primary'>$100.00</span></span>
                        </p>
                    </div>

                    <Button className='!mb-14 !min-w-2 !text-primary !text-[29px]'><MdOutlineDelete /></Button>
                </div>

                <div className='cartItem w-full flex items-center gap-4  border-b border-[rgba(0,0,0,0.1)] py-3'>
                    <div className='img w-[25%] overflow-hidden h-[80px] rounded-lg  border boeder-[rgba(0,0,0,0.1)]'>
                        <Link to={'/product/45875'} ><img src="https://demos.codezeel.com/prestashop/PRS21/PRS210502/70-home_default/mug-today-is-a-good-day.jpg" alt="" className='w-full hover:scale-105' /></Link>
                    </div>


                    <div className='info w-[75%] pl-3 pr-5'>
                        <h4 className='text-[16px] font-[500]'><Link to={'/product/5485'} className='link transition-all'>Lorem ipsum dolorelit Numquam, quis.</Link></h4>
                        <p className='flex items-center gap-5 mt-2 mb-2 '>
                            <span className='text-[14px] font-[500]'>Qty: <span className='text-primary'>1</span></span>
                            <span className='text-[14px] font-[500]'>Price: <span className='text-primary'>$100.00</span></span>
                        </p>
                    </div>

                    <Button className='!mb-14 !min-w-2 !text-primary !text-[29px]'><MdOutlineDelete /></Button>
                </div>

                <div className='cartItem w-full flex items-center gap-4  border-b border-[rgba(0,0,0,0.1)] py-3'>
                    <div className='img w-[25%] overflow-hidden h-[80px] rounded-lg  border boeder-[rgba(0,0,0,0.1)]'>
                        <Link to={'/product/45875'} ><img src="https://demos.codezeel.com/prestashop/PRS21/PRS210502/70-home_default/mug-today-is-a-good-day.jpg" alt="" className='w-full hover:scale-105' /></Link>
                    </div>


                    <div className='info w-[75%] pl-3 pr-5'>
                        <h4 className='text-[16px] font-[500]'><Link to={'/product/5485'} className='link transition-all'>Lorem ipsum dolorelit Numquam, quis.</Link></h4>
                        <p className='flex items-center gap-5 mt-2 mb-2 '>
                            <span className='text-[14px] font-[500]'>Qty: <span className='text-primary'>1</span></span>
                            <span className='text-[14px] font-[500]'>Price: <span className='text-primary'>$100.00</span></span>
                        </p>
                    </div>

                    <Button className='!mb-14 !min-w-2 !text-primary !text-[29px]'><MdOutlineDelete /></Button>
                </div>





            </div>

            <div className='bottomSec absolute bottom-[10px] left-[10px] w-full overflow-x-hidden '>
                <div className='bottomInfo py-3 px-4 w-full border-t border-[rgba(0,0,0,0.1)] flex items-center justify-between flex-col'>
                    <div className='flex items-center justify-between w-full'>
                        <span className='text-[14px] font-[600]'>1 item</span>
                        <span className='text-primary font-bold'>$86.00</span>
                    </div>

                    <div className='flex items-center justify-between w-full'>
                        <span className='text-[14px] font-[600]'>Shipping</span>
                        <span className='text-primary font-bold'>$7.00</span>
                    </div>
                </div>

                <div className='bottomInfo py-3 px-4 w-full border-t border-[rgba(0,0,0,0.1)] flex items-center justify-between flex-col'>
                    <div className='flex items-center justify-between w-full'>
                        <span className='text-[14px] font-[600]'>Total (tax excl.)</span>
                        <span className='text-primary font-bold'>$86.00</span>
                    </div>

                    <div className='flex items-center justify-between w-full'>
                        <span className='text-[14px] font-[600]'>Taxes:</span>
                        <span className='text-primary font-bold'>$0.00</span>
                    </div>
                </div>

                <div className='flex items-center justify-between  w-[100%] py-3 px-4 mx-14]'>
                    <Link to={'/cart'} className='!min-w-[48%]'><Button className='!bg-primary !text-white  !rounded-md !text-[15px] font-[500] w-full  hover:!bg-black hover:!text-white' onClick={context.toggleCartPanel(false)}>VIEW CART</Button></Link>
                    <Link to={'/checkout'} className='!min-w-[48%]'><Button className='!bg-primary !text-white  !rounded-md !text-[15px] font-[500] !min-w-full hover:!bg-black hover:!text-white' onClick={context.toggleCartPanel(false)}>CHECKOUT</Button></Link>

                </div>
            </div>


        </>
    );
}

export default CartPanel;
