import React, { useState } from 'react';
import OtpBox from '../components/OtpBox';
import { Button } from '@mui/material';

const Verify = () => {

    const [otp, setOtp] = useState('');
    const handleOtpChange = (value) => {
        setOtp(value);
    };

    const verifyOTP = (e) => {
        e.preventDefault();
        alert(`OTP Entered: ${otp}`);
    }

    return (
        <section className='section py-10'>
            <div className='container'>
                <div className='card shadow-md w-[405px] m-auto rounded-md bg-white p-5 px-10'>
                    <div className='text-center flex justify-center items-center '>
                        <img src="verify.png" alt="" width='80' />
                    </div>
                    <h3 className='text-center text-[18px] text-black my-4 mb-1'>Verify OTP</h3>

                    <p className='text-center mt-0 mb-4'>
                        OTP send to 
                        <span className='text-primary font-bold'> harshkalavadiya192@gmail.com</span>
                    </p>

                    <form onSubmit={verifyOTP}>
                        <OtpBox length={6} onChange={handleOtpChange} />

                        <div className='flex justify-center items-center px-3'>
                            <Button type='submit' className='btn-Org w-full !mt-4'>Verify OTP</Button>
                        </div>

                    </form>



                </div>

            </div>
        </section>
    );
}

export default Verify;


