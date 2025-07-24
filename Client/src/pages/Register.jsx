import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { IoMdEye } from "react-icons/io";
import { IoIosEyeOff } from "react-icons/io";
import { Link } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";

const SignUp = () => {
    const [isShowPassword, setIsShowPassword] = useState(false);

    return (
        <section className='section py-10'>
            <div className='container'>
                <div className='card shadow-md w-[400px] m-auto rounded-md bg-white p-5 px-10'>
                    <h3 className='text-center text-[18px] text-black font-[600]'>Create your account</h3>

                    <form className='w-full mt-5'>

                        <div className='from-group w-full mb-5'>
                            <TextField type='text' id="name" label="Full Name" variant="outlined" className='w-full' />
                        </div>

                       
                        <div className='from-group w-full mb-5'>
                            <TextField type='email' id="email" label="Email Id" variant="outlined" className='w-full' />
                        </div>

                        <div className='from-group w-full mb-5 relative'>
                            <TextField type={isShowPassword ? 'text' : 'password'} id="password" label="Password" variant="outlined" className='w-full' />
                            <Button
                                className='!absolute top-[10px] right-[10px] z-50 !w-[35px] !h-[35px] !min-w-[35px] !rounded-full !text-black'
                                onClick={() => setIsShowPassword(!isShowPassword)}
                            >
                                {isShowPassword ? <IoMdEye className='text-[19px] opacity-75' /> : <IoIosEyeOff className='text-[19px] opacity-75' />}
                            </Button>
                        </div>

                        <div className='flex items-center w-full my-3'>
                            <Button className='btn-Org w-full !text-[16px] !p-[5px]'>Sign Up</Button>
                        </div>

                        <p className='text-center'>Already have an account? <Link className='link text-[14px] font-[600]' to="/login">Login</Link></p>

                        <p className='text-center font-[500]'>Or continue with social account</p>

                        <Button className='flex gap-3 w-full !bg-[#f1f1f1] !text-[16px] !p-[5px] !mt-3 !text-black'>
                            <FcGoogle className='text-[25px]' />
                            Sign Up With Google
                        </Button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default SignUp;
