import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import React, { createContext, useEffect, useState } from 'react'
import Products from './pages/Products'


import HomeSliderBanners from './pages/HomeSliderBanners'
import Category from './pages/Category'
import SubCatList from './pages/SubCatList'
import toast, { Toaster } from 'react-hot-toast';
import { fetchDataFromApi } from './utils/api'
import ProductDetails from './pages/ProductDetails'

const MyContext = createContext();


function App() {

  const [isSidebarOpen, setIsSidebarOpen] = useState(true)
  const [isOpenFullScreenPanle, setIsOpenFullScreenPanle] = useState({
    open: false,
    model: '',
    id: ""
  })
  const [catData, setCatData] = useState([])


  const handleClickOpen = () => {
    setIsOpenFullScreenPanle({
      open: true,
      model: 'Add Product'
    });
  };


  const handleClose = () => {
    setIsOpenFullScreenPanle({
      open: false
    });
  };

  const openAlertBox = (status, msg) => {
    if (status === 'success') {
      toast.success(msg);
    } else if (status === 'error') {
      toast.error(msg);
    } else {
      toast(msg);
    }
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <section className='main w-full'>
            <Header />
            <div className="contentMain flex">
              <div
                className={`sidebarWrapper overflow-hidden transition-all duration-1000 ease-in-out ${isSidebarOpen === true ? 'w-[18%]' : 'hidden'}`}
              >
                <Sidebar />
              </div>
              <div
                className={`contentRight py-4 px-5 transition-all duration-50 ease-in-out ${isSidebarOpen ? 'w-[82%]' : 'w-full'}`}
              >
                <Dashboard />
              </div>
            </div>
          </section>
        </>
      )
    },

    {
      path: "/products",
      element: (
        <>
          <section className='main w-full'>
            <Header />
            <div className="contentMain flex">
              <div
                className={`sidebarWrapper overflow-hidden transition-all duration-1000 ease-in-out ${isSidebarOpen === true ? 'w-[18%]' : 'hidden'}`}
              >
                <Sidebar />
              </div>
              <div
                className={`contentRight py-4 px-5 transition-all duration-50 ease-in-out ${isSidebarOpen ? 'w-[82%]' : 'w-full'}`}
              >
                <Products />
              </div>
            </div>
          </section>
        </>
      )
    },

    {
      path: "/homeSlider/list",
      element: (
        <>
          <section className='main w-full'>
            <Header />
            <div className="contentMain flex">
              <div
                className={`sidebarWrapper overflow-hidden transition-all duration-1000 ease-in-out ${isSidebarOpen === true ? 'w-[18%]' : 'hidden'}`}
              >
                <Sidebar />
              </div>
              <div
                className={`contentRight py-4 px-5 transition-all duration-50 ease-in-out ${isSidebarOpen ? 'w-[82%]' : 'w-full'}`}
              >
                <HomeSliderBanners />
              </div>
            </div>
          </section>
        </>
      )
    },

    {
      path: "/category/list",
      element: (
        <>
          <section className='main w-full'>
            <Header />
            <div className="contentMain flex">
              <div
                className={`sidebarWrapper overflow-hidden transition-all duration-1000 ease-in-out ${isSidebarOpen === true ? 'w-[18%]' : 'hidden'}`}
              >
                <Sidebar />
              </div>
              <div
                className={`contentRight py-4 px-5 transition-all duration-50 ease-in-out ${isSidebarOpen ? 'w-[82%]' : 'w-full'}`}
              >
                <Category />
              </div>
            </div>
          </section>
        </>
      )
    },

    {
      path: "/subcategory/list",
      element: (
        <>
          <section className='main w-full'>
            <Header />
            <div className="contentMain flex">
              <div
                className={`sidebarWrapper overflow-hidden transition-all duration-1000 ease-in-out ${isSidebarOpen === true ? 'w-[18%]' : 'hidden'}`}
              >
                <Sidebar />
              </div>
              <div
                className={`contentRight py-4 px-5 transition-all duration-50 ease-in-out ${isSidebarOpen ? 'w-[82%]' : 'w-full'}`}
              >
                <SubCatList />
              </div>
            </div>
          </section>
        </>
      )
    },

     {
      path: "/product/:id",
      element: (
        <>
          <section className='main w-full'>
            <Header />
            <div className="contentMain flex">
              <div
                className={`sidebarWrapper overflow-hidden transition-all duration-1000 ease-in-out ${isSidebarOpen === true ? 'w-[18%]' : 'hidden'}`}
              >
                <Sidebar />
              </div>
              <div
                className={`contentRight py-4 px-5 transition-all duration-50 ease-in-out ${isSidebarOpen ? 'w-[82%]' : 'w-full'}`}
              >
                <ProductDetails />
              </div>
            </div>
          </section>
        </>
      )
    },

    // {
    //   path: "/products/upload",
    //   exact: true,
    //   element: (
    //     <>
    //       <AddProduct />
    //     </>
    //   )
    // }


  ])

  useEffect(() => {
    fetchDataFromApi("/api/category").then((res) => {
    
      setCatData(res?.data)
    })
  }, [])

  

  const values = {
    isSidebarOpen,
    setIsSidebarOpen,
    isOpenFullScreenPanle,
    setIsOpenFullScreenPanle,
    handleClickOpen,
    handleClose,
    openAlertBox,
    catData,
    setCatData
  };

  return (
    <>
      <MyContext.Provider value={values}>
        <RouterProvider router={router} />
        <Toaster />
        
      </MyContext.Provider>
    </>
  )
}

export { MyContext }
export default App

