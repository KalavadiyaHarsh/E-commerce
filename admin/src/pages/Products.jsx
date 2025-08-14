import React, { useContext, useEffect, useState } from 'react';
import { Button, TableBody } from '@mui/material';

import Checkbox from '@mui/material/Checkbox';
import { Link } from 'react-router-dom'
import Progress from '../components/progress';
import { MdModeEdit } from "react-icons/md";
import { IoEye } from "react-icons/io5";
import { MdDelete } from "react-icons/md";
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';


import Table from '@mui/material/Table';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';

import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import SearchBox from '../components/SearchBox';
import { MyContext } from '../App';
import { deleteData, fetchDataFromApi } from '../utils/api';

import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';


const label = { inputProps: { 'aria-label': 'Checkbox demo' } };



const columns = [
    { id: 'product', label: 'PRODUCT', minWidth: 150 },
    { id: 'category', label: 'CATEGORY', minWidth: 100 },
    { id: 'subcategory', label: 'SUB CATEGORY', minWidth: 150 },
    { id: 'price', label: 'PRICE', minWidth: 100 },
    { id: 'sales', label: 'SALES', minWidth: 100 },
    { id: 'action', label: 'ACTION', minWidth: 120 },
];


const Products = () => {

    const context = useContext(MyContext)
    const [categoryFillterVal, setCategoryFillterVal] = useState('');

    const [productData, setProductData] = useState([]);

    useEffect(() => {
        fetchDataFromApi("/api/product/getAllProducts").then((res) => {
            if (res?.error === false) {
                setProductData(res?.products);
                // console.log(res?.products);
            }
        });
    }, []);

    const handleChangeFillter = (event) => {
        setCategoryFillterVal(event.target.value);
    };

    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    const deleteProduct = (id) => {
        deleteData(`/api/product/${id}`).then((res) => {
            // fetchDataFromApi("/api/product/getAllProducts").then((res) => {
            //     if (res?.error === false) {
            //         setProductData(res?.products);
            //     }
            // });
            if (res?.error === false) {
                window.location.reload();
                context.openAlertBox("success", res?.message);
            }
            else {
                context.openAlertBox("error", "Product not deleted!");
            }

        })
    }

    return (
        <>

            <div className='flex items-center justify-between pl-3'>
                <h2 className='text-[19px] font-[600]'>Products</h2>

                <div className='col w-[25%] flex items-center justify-end gap-3 '>
                    <Button className='btn !bg-green-600 !px-[19px] !py-[8px]  !text-white'>Export</Button>
                    <Button className='btn-blue w-full !text-black' onClick={context.handleClickOpen}>Add Product</Button>
                </div>
            </div>

            <div className='card mt-3 bg-white rounded-lg shadow-md'>

                <div className='flex items-center justify-between w-full pl-6 pb-4 pr-5 pt-5'>
                    <div className=' col w-[20%]'>
                        <h4 className='font-[600] text-[13px]'>Category</h4>
                        <Select
                            className='w-full'
                            size='small'
                            labelId="demo-simple-select-standard-label"
                            id="demo-simple-select-standard"
                            value={categoryFillterVal}
                            onChange={handleChangeFillter}
                            label="Category"
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={10}>Men</MenuItem>
                            <MenuItem value={20}>Women</MenuItem>
                            <MenuItem value={30}>Kids</MenuItem>
                        </Select>
                    </div>


                    <div className=' col w-[20%]'>
                        <SearchBox />
                    </div>

                </div>

                <TableContainer sx={{ maxHeight: 440 }}>
                    <Table stickyHeader aria-label="sticky table">
                        <TableHead >
                            <TableRow>

                                <TableCell>
                                    <Checkbox {...label} size="small" />
                                </TableCell>

                                {columns.map((column) => (
                                    <TableCell
                                        key={column.id}
                                        align={column.align}
                                        style={{ minWidth: column.minWidth }}
                                    >
                                        {column.label}
                                    </TableCell>
                                ))}
                            </TableRow>
                        </TableHead>

                        <TableBody>

                            {
                                productData.length !== 0 && [...productData] // make a copy so original isn't mutated
                                    .reverse()
                                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                    .map((product, index) => {
                                        return (
                                            <TableRow key={index}>
                                                <TableCell style={{ minWidth: columns.minWidth }}>
                                                    <Checkbox {...label} size="small" />
                                                </TableCell>

                                                <TableCell style={{ minWidth: columns.minWidth }}>
                                                    <div className='flex items-center gap-4 w-[350px]'>
                                                        <div className="img w-[65px] h-[65px] rounded-md overflow-hidden ">
                                                            <Link to={`/product/${product?._id}`}>

                                                                <LazyLoadImage
                                                                    effect="blur"
                                                                    wrapperProps={{
                                                                        style: { transitionDelay: "1s" },
                                                                    }}
                                                                    src={product?.images[0]}
                                                                    className='w-full h-full hover:scale-105 transition-all rounded-md'
                                                                />
                                                            </Link>
                                                        </div>

                                                        <div className='w-[80%]'>
                                                            <h3 className='font-[600] text-[12px] leading-4 hover:text-[#5943da]'> <Link to={`/product/${product?._id}`}>{product?.name}</Link></h3>

                                                            <span className='text-[12px]'>{product?.brand}</span>
                                                        </div>

                                                    </div>
                                                </TableCell>



                                                <TableCell style={{ minWidth: columns.minWidth }}>
                                                    {product?.catName}
                                                </TableCell>

                                                <TableCell style={{ minWidth: columns.minWidth }}>
                                                    {product?.subCat}
                                                </TableCell>

                                                <TableCell style={{ minWidth: columns.minWidth }}>
                                                    <div class="flex items-center gap-2 flex-col leading-4">
                                                        <span class="oldPrice line-through text-gray-500 text-[15px] font-[500]">&#x20b9;{product?.oldPrice}</span>
                                                        <span class="price text-primary text-[15px] font-[600]">&#x20b9;{product?.price}</span>
                                                    </div>
                                                </TableCell>

                                                <TableCell style={{ minWidth: columns.minWidth }}>
                                                    <p className='text-[14px]'><span className='font-[600]'>{product?.sale} </span>Sale</p>
                                                    {/* <Progress value={40} type="success" /> */}
                                                </TableCell>

                                                <TableCell>
                                                    <div className='flex items-center gap-1'>
                                                        <Tooltip title="Edit" placement='top'>
                                                            <IconButton>
                                                                <Button className='myCustomBtn !w-[35px] !h-[35px] !min-w-[35px] !text-green-400 !rounded-md !p-0' onClick={() => context.setIsOpenFullScreenPanle({
                                                                    open: true,
                                                                    model: 'Edit Product',
                                                                    id: product?._id
                                                                })}><MdModeEdit className=' !text-[24px]' /></Button>
                                                            </IconButton>
                                                        </Tooltip>

                                                        <Tooltip title="View" placement='top'>
                                                            <IconButton>
                                                                <Button className='myCustomBtn !w-[35px] !h-[35px] !min-w-[35px] !text-primary !text-[18px] !rounded-md !p-0'><IoEye className=' !text-[24px]' /></Button>

                                                            </IconButton>
                                                        </Tooltip>

                                                        <Tooltip title="Delete" placement='top'>
                                                            <IconButton>
                                                                <Button className='myCustomBtn !w-[35px] !h-[35px] !min-w-[35px] !text-red-600 !text-[18px] !rounded-md !p-0' onClick={() => deleteProduct
                                                                    (product?._id)}>
                                                                    <MdDelete className=' !text-[24px]' />
                                                                </Button>

                                                            </IconButton>
                                                        </Tooltip>
                                                    </div>

                                                </TableCell>
                                            </TableRow>
                                        )
                                    })
                            }


                        </TableBody>

                    </Table>
                </TableContainer>

                <TablePagination
                    rowsPerPageOptions={[10, 25, 100]}
                    component="div"
                    count={productData?.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />



            </div>
        </>
    );
}

export default Products;
