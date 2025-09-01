import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
// import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import ProductItem from '../components/ProductItem';
import { Button } from '@mui/material';
import { IoGrid } from "react-icons/io5";
import { MdMenu } from "react-icons/md";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ProductItemListView from '../components/ProductItemListView';
import Pagination from '@mui/material/Pagination';
import { postData } from '../utils/api';




const ProductListing = () => {

  const [itemView, setItemView] = useState('grid')

  const [anchorEl, setAnchorEl] = React.useState(null);

  const [productData, setProductData] = useState([]);
  const [isLoading, setIsLoading] = useState(false)

  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1)

  const [selectedSortVal, setSelectedSortVal] = useState("Name, A to Z");



  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSortBy = (name, order, products, value) => {
    setSelectedSortVal(value);
    postData(`/api/product/sortBy`, {
      products: products,
      sortBy: name,
      order: order
    }).then((res) => {
      setProductData(res);
      setAnchorEl(null);
    })
  }


  return (
    <section className='py-5 pb-0'>
      <div className='container'>
        <Breadcrumbs aria-label="breadcrumb">
          <Link underline="hover" color="inherit" href="/" className='link transition'>
            Home
          </Link>
          <Link
            underline="hover"
            color="inherit"
            href="/"
            className='link transition'
          >
            Fashion
          </Link>
        </Breadcrumbs>
      </div>

      <div className='bg-white p-2 mt-4'>
        <div className='container flex gap-3'>
          <div className='sidebarWrapper  w-[17%] bg-white'>
            <Sidebar productData={productData} setProductData={setProductData} isLoading={isLoading} setIsLoading={setIsLoading} page={page} setTotalPages={setTotalPages} />
          </div>

          <div className='rightContent w-[83%] py-3'>

            <div className='bg-[#f1f1f1] p-2 w-full mb-3 rounded-md flex items-center justify-between'>
              <div className='col1 flex items-center itemviewActions '>
                <Button className={`!w-[40px] !h-[40px] !min-w-[40px] !rounded-full !text-[#000] ${itemView === 'list' && 'active'}`} onClick={() => setItemView('list')}><MdMenu className='text-black' /></Button>
                <Button className={`!w-[40px] !h-[40px] !min-w-[40px] !rounded-full !text-[#000] ${itemView === 'grid' && 'active'}`} onClick={() => setItemView('grid')}><IoGrid className='text-black' /></Button>
                <span className='text-[14px] font-[500] pl-3 text-back'>There are {productData?.products?.length !== 0 ? productData?.products?.length : 0} products.</span>
              </div>

              <div className='col2  flex items-center gap-3 pr-4'>
                <span className='text-[14px] font-[500] text-back'>Sort By:</span>
                <Button
                  variant="outlined"
                  id="basic-button"
                  aria-controls={open ? 'basic-menu' : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? 'true' : undefined}
                  onClick={handleClick}
                  className='!bg-white !text-[12px] !text-black !capitalize !border-[1px] !border-gray-300'
                >
                  {selectedSortVal}
                </Button>
                <Menu
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  slotProps={{
                    list: {
                      'aria-labelledby': 'basic-button',
                    },
                  }}
                >
                  <MenuItem
                    onClick={() => handleSortBy('name', 'asc', productData, 'Name, A to Z')}
                    className='!text-[13px] !text-black'
                  >
                    Name, A to Z
                  </MenuItem>

                  <MenuItem
                    onClick={() => handleSortBy('name', 'desc', productData, 'Name, Z to A')}
                    className='!text-[13px] !text-black'
                  >
                    Name, Z to A
                  </MenuItem>

                  <MenuItem
                    onClick={() => handleSortBy('price', 'asc', productData, 'Price, low to high')}
                  >
                    Price, low to high
                  </MenuItem>

                  <MenuItem
                    onClick={() => handleSortBy('price', 'desc', productData, 'Price, high to low')}
                  >
                    Price, high to low
                  </MenuItem>



                </Menu>
              </div>

            </div>

            <div className={`${itemView === 'grid' ? 'grid grid-cols-4 md:grid-cols-4 gap-10' : 'flex flex-col gap-6'}`}>


              {
                itemView === "grid" ? (
                  productData?.products?.length > 0 &&
                  productData.products.map((item, i) => {
                    return <ProductItem key={i} item={item} />;
                  })
                ) : (
                  productData?.products?.length > 0 &&
                  productData.products.map((item, i) => {
                    return <ProductItemListView key={i} item={item} />;
                  })
                )
              }


            </div>

            {
              totalPages > 1 &&
              <div className='flex items-center justify-center mt-10'>
                <Pagination
                  count={totalPages}
                  showFirstButton showLastButton
                  page={page}
                  onChange={(e, value) => setPage(value)}
                />
              </div>

            }

          </div>
        </div>
      </div>

    </section>
  );
}

export default ProductListing;
