import React, { useEffect, useState } from 'react'
import Header from './components/Header'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import ProductListing from './pages/ProductListing'
import Footer from './components/Footer';
import ProductDetails from './pages/ProductDetails'
import { createContext } from 'react'
import { IoClose } from "react-icons/io5";



import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
// import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
// import DialogContentText from '@mui/material/DialogContentText';
// import DialogTitle from '@mui/material/DialogTitle';
import ProductZoom from './components/ProductZoom'
import ProductDetailsComponent from './components/ProductDetails'
import Login from './pages/Login'
import Register from './pages/Register'
import CartPage from './pages/CartPage'
import Verify from './pages/Verify'


import toast, { Toaster } from 'react-hot-toast';
import ForgotPassword from './pages/ForgotPassword'
import CheckOut from './pages/CheckOut'
import MyAccount from './pages/MyAccount'
import MyList from './pages/MyList'
import Orders from './pages/Orders'
import { fetchDataFromApi } from './utils/api'


const MyContext = createContext();


function App() {

  const [openProductDetailsModal, setOpenProductDetailsModal] = useState(false);
   const [fullWidth, setFullWidth] = React.useState(true);
  const [maxWidth, setMaxWidth] = React.useState('lg');
  const [isLogin, setIsLogin] = useState(false)
  const [userData, setUserData] = useState(null)

  const [openCartPanel, setOpenCartPanel] = useState(false);

  

  const handleCloseProductDetailsModal = () => {
    setOpenProductDetailsModal(false);
  };

  const toggleCartPanel = (newOpen) => () => {
    setOpenCartPanel(newOpen);
  };

   useEffect(()=>{
        
    const token = localStorage.getItem('accesstoken');

    if(token !== undefined && token!==null  && token !==""){
      setIsLogin(true)

      fetchDataFromApi("/api/user/user-details").then((res)=>{
        console.log(res)
        setUserData(res.data);
      })
    }else{
      setIsLogin(false)
    }
    },[isLogin])

  const openAlertBox =(status,meg)=>{
   
    if(status === 'success') {
      toast.success(meg);
    }
    if(status === 'error') {
      toast.error(meg);
    }
  }

  const values = {
      setOpenProductDetailsModal,
      setOpenCartPanel,
      openCartPanel,
      toggleCartPanel,
      openAlertBox,
      isLogin,
      setIsLogin,
      setUserData,
      userData
  }


  return (
    <div>
      <BrowserRouter>
      <MyContext.Provider value={values}>
        <Header />
        <Routes>
          <Route path={"/"} exact={true} element={<Home />} />
          <Route path={"/productListing"} exact={true} element={<ProductListing />} />
          <Route path={"/productDetails/:id"} exact={true} element={<ProductDetails />} />
          <Route path={"/login"} exact={true} element={<Login />} />
          <Route path={"/register"} exact={true} element={<Register />} />
          <Route path={"/cart"} exact={true} element={<CartPage />} />
          <Route path={"/verify"} exact={true} element={<Verify />} />
          <Route path={"/forgot-password"} exact={true} element={<ForgotPassword />} />
          <Route path={"/checkout"} exact={true} element={<CheckOut />} />
          <Route path={"/my-account"} exact={true} element={<MyAccount />} />
          <Route path={"/my-list"} exact={true} element={<MyList />} />
          <Route path={"/my-orders"} exact={true} element={<Orders />} />
        </Routes>
        <Footer />
        </MyContext.Provider>
      </BrowserRouter>

      <Toaster />

       <Dialog
        open={openProductDetailsModal}
        fullWidth={fullWidth}
        maxWidth={maxWidth}
        onClose={handleCloseProductDetailsModal}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        className='ProductDetailsModal'
      >
        <DialogContent>
         <div className='ProductDetailsModalContainer flex items-center w-full relative'>
          <Button className='!w-[40px] h-[40px] !min-w-[40px] !rounded-full !text-black !absolute top-[-10px] right-[-10px]' onClick={handleCloseProductDetailsModal}><IoClose /></Button>
          <div className='col1 w-[40%]'>
              <ProductZoom />
          </div>
          <div className='col2 w-[60%] pl-5'>
            <ProductDetailsComponent />
          </div>
         </div>
        </DialogContent>   
      </Dialog>


      
    </div>
  )
}

export default App

export {MyContext}