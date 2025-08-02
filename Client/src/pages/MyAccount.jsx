import React, { useContext, useEffect } from 'react';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import AccountSidebar from '../components/AccountSidebar';
import { MyContext } from '../App';
import { useNavigate } from 'react-router-dom';
const MyAccount = () => {

  const context = useContext(MyContext);
  const history = useNavigate();

  useEffect(() => {
    if (context?.isLogin === false) {
      history('/');
    }else{
      history('/my-account');
    }
  }, [context?.isLogin]);


  return (
    <section className='py-10 w-full'>
      <div className='container flex gap-10'>
        <div className='col1 w-full md:w-[25%]'>
          <AccountSidebar />
        </div>

        <div className='col w-full md:w-[50%]'>
          <div className="card bg-white p-5 shadow-md rounded-md">
            <h2 className="pb-3">My Profile</h2>
            <hr />

            <form className="mt-5">
              <div className="flex items-center gap-5 mb-5">
                <div className="w-[50%]">
                  <TextField
                    label="Full Name"
                    variant="outlined"
                    size="small"
                    className="w-full"
                  />
                </div>
                <div className="w-[50%]">
                  <TextField
                    label="Email"
                    variant="outlined"
                    size="small"
                    className="w-full"
                  />
                </div>
              </div>

              <div className="w-[50%] mb-5">
                <TextField
                  label="Phone Number"
                  variant="outlined"
                  size="small"
                  className="w-full"
                />
              </div>

              <div className="flex gap-4">

                <Button className='btn-Org'>
                  Save
                </Button>
                <Button className='btn-rg'>
                  Cancel
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyAccount;
