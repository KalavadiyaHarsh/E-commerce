import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import React, { createContext, useState } from 'react'
import Products from './pages/Products'
import AddProduct from './pages/AddProduct'

import Dialog from '@mui/material/Dialog';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { IoClose } from "react-icons/io5";
import Slide from '@mui/material/Slide';
import { Button } from '@mui/material'
import HomeSliderBanners from './pages/HomeSliderBanners'
import AddHomeSlide from './pages/AddHomeSlide'
import Category from './pages/Category'
import AddCategory from './pages/AddCategory'

const MyContext = createContext();

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
function App() {

  const [isSidebarOpen, setIsSidebarOpen] = useState(true)
  const [isOpenFullScreenPanle, setIsOpenFullScreenPanle] = useState({
    open: false,
    model: ''
  })

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

  const values = {
    isSidebarOpen,
    setIsSidebarOpen,
    isOpenFullScreenPanle,
    setIsOpenFullScreenPanle,
    handleClickOpen
  };

  return (
    <>
      <MyContext.Provider value={values}>
        <RouterProvider router={router} />

        <Dialog
          fullScreen
          open={isOpenFullScreenPanle.open}
          onClose={handleClose}
          slots={{
            transition: Transition,
          }}
        >
          <AppBar sx={{ position: 'relative' }}>
            <Toolbar>
              <IconButton
                edge="start"
                color="inherit"
                onClick={handleClose}
                aria-label="close"
              >
                <IoClose />
              </IconButton>
              <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
                {isOpenFullScreenPanle?.model}
              </Typography>
              <Button autoFocus color="inherit" onClick={handleClose}>
                save
              </Button>
            </Toolbar>
          </AppBar>
          {
            isOpenFullScreenPanle?.model === "Add Product" && <AddProduct />
          }

          {
            isOpenFullScreenPanle?.model === "Add Home Slide" && <AddHomeSlide />
          }

          {
            isOpenFullScreenPanle?.model === "Add New Category" && <AddCategory />
          }

        </Dialog>
      </MyContext.Provider>
    </>
  )
}

export { MyContext }
export default App

