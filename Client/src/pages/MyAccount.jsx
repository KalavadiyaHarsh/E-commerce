import React, { useContext, useEffect, useState } from 'react';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import AccountSidebar from '../components/AccountSidebar';
import { MyContext } from '../App';
import { useNavigate } from 'react-router-dom';
import { editData } from '../utils/api';
import { CircularProgress } from '@mui/material';
import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';

const MyAccount = () => {

  const [isLoading, setIsLoading] = useState(false)
  const [userId, setUserId] = useState("")
  const [phone, setPhone] = useState('');


  const [formFields, setFormFields] = useState({
    name: '',
    email: '',
    mobile: ''
  })


  const context = useContext(MyContext);
  const history = useNavigate();

  useEffect(() => {
    if (context?.isLogin === false) {
      history('/');
    }
    else {
      history('/my-account');
    }
  }, [context?.isLogin]);

  useEffect(() => {
    if (context?.userData?._id !== "" && context?.userData?._id !== undefined) {
      setUserId(context?.userData?._id);
      setFormFields({
        name: context?.userData?.name,
        email: context?.userData?.email,
        mobile: context?.userData?.mobile
      })
      let ph = String(context?.userData?.mobile || '');

      if (!ph.startsWith('+')) {
        ph = '+91' + ph;
      }

      setPhone(ph);

    }
  }, [context?.userData])

  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setFormFields(() => {
      return {
        ...formFields,
        [name]: value
      }
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsLoading(true);

    if (formFields.name.trim() === "") {
      context.openAlertBox("error", "Please enter name!");
      setIsLoading(false);
      return;
    }

    if (formFields.email.trim() === "") {
      context.openAlertBox("error", "Please add email ID!");
      setIsLoading(false);
      return;
    }

    if (formFields.mobile.trim() === "") {
      context.openAlertBox("error", "Please add mobile Number!");
      setIsLoading(false);
      return;
    }

    editData(`/api/user/${userId}`, formFields)
      .then((res) => {
        if (res?.error !== true) {
          setIsLoading(false);
          context.openAlertBox("success", res?.message);
        } else {
          context.openAlertBox("error", res?.message);
          setIsLoading(false);
        }
      })
      .catch((err) => {
        console.error("Update failed:", err);
        context.openAlertBox("error", "Something went wrong!");
        setIsLoading(false);
      });
  }


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

            <form className="mt-5" onSubmit={handleSubmit}>
              <div className="flex items-center gap-5 mb-5">
                <div className="w-[50%]">
                  <TextField
                    label="Full Name"
                    variant="outlined"
                    size="small"
                    className="w-full"
                    name='name'
                    value={formFields.name}
                    onChange={onChangeInput}
                  />
                </div>
                <div className="w-[50%]">
                  <TextField
                    type='email'
                    label="Email"
                    variant="outlined"
                    size="small"
                    className="w-full"
                    name='email'
                    value={formFields.email}
                    onChange={onChangeInput}
                    disabled={true}
                  />
                </div>
              </div>

              <div className="w-[48%] mb-5">
                <PhoneInput
                  defaultCountry="in"
                  value={phone}
                  disabled={isLoading}
                  onChange={(phone) => {
                    setPhone(phone);
                    setFormFields((prev) => ({
                      ...prev,
                      mobile: phone
                    }));
                  }}
                />

                {/* <TextField
                  label="Phone Number"
                  variant="outlined"
                  size="small"
                  className="w-full"
                  name='mobile'
                  value={formFields.mobile}
                  onChange={onChangeInput}
                /> */}
              </div>

              <div className="flex gap-4">

                <Button type="submit" className='btn-Org w-36'>
                  {
                    isLoading === true ? <CircularProgress color="inherit" /> : 'Update Profile'
                  }
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
