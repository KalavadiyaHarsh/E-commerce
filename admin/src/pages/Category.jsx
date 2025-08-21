import React, { useContext, useEffect, useState } from 'react';
import { Button, TableBody } from '@mui/material';

import Checkbox from '@mui/material/Checkbox';
import { Link } from 'react-router-dom'
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
    { id: 'image', label: 'IMAGE', minWidth: 250 },
    { id: 'name', label: 'CATEGORY NAME', minWidth: 250 },
    { id: 'action', label: 'ACTION', minWidth: 100 },

];

const Category = () => {

    const context = useContext(MyContext)

    const [categoryFillterVal, setCategoryFillterVal] = useState('');
    const [allCatData, setAllCatData] = useState([]);

    useEffect(() => {
        fetchDataFromApi("/api/category").then((res) => {
            setAllCatData(res?.data);
            context?.setCatData(res?.data);
        });
    }, []);

    const handleChangeFillter = (event) => {
        const selectedId = event.target.value;
        setCategoryFillterVal(selectedId);

        if (!selectedId) {
            // If no category is selected, reset the category data to all categories
            context?.setCatData(allCatData);
        } else {
            // If a category is selected, fetch and set the category data to that category
            fetchDataFromApi(`/api/category/${selectedId}`).then((res) => {
                if (res?.error === false) {
                    context?.setCatData([res?.category]);
                } else {
                    context?.setCatData([]);
                }
            });
            // Fetch and set the category data to that category

        }
    };


    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);

    }



    const deleteCat = (id) => {
        deleteData(`/api/category/${id}`).then((res) => {
            // console.log(res);
            // optionally: refresh the category list or show a success alert
            fetchDataFromApi("/api/category").then((res) => {
                context?.setCatData(res?.data)
            })
        });
    }

    return (
        <>

            <div className='flex items-center justify-between pl-3'>
                <h2 className='text-[19px] font-[600]'>Category List</h2>

                <div className='col w-[30%] flex items-center justify-end gap-3 '>
                    <Button className='btn !bg-green-600 !px-[19px] !py-[8px]  !text-white'>Export</Button>
                    <Button className='btn-blue w-full !text-black' onClick={() => context.setIsOpenFullScreenPanle({
                        open: true,
                        model: 'Add New Category'
                    })}>Add New Category</Button>
                </div>
            </div>

            <div className='card mt-3 bg-white rounded-lg shadow-md'>

                <div className='flex items-center justify-between w-full pl-6 pb-4 pr-5 pt-5'>
                    <div className=' col w-[20%]'>
                        <h4 className='font-[600] text-[13px] mb-1'>Category</h4>
                        <Select
                            className='w-full'
                            size='small'
                            value={categoryFillterVal}
                            onChange={handleChangeFillter}
                        >
                            <MenuItem value="">All Categories</MenuItem> 
                            {allCatData?.map((item, index) => (
                                <MenuItem key={index} value={item?._id} className='capitalize'>
                                    {item?.name}
                                </MenuItem>
                            ))}
                        </Select>
                    </div>


                    <div className=' col w-[20%]'>
                        <SearchBox />
                    </div>

                </div>

                <TableContainer sx={{ maxHeight: 440 }}>
                    <Table stickyHeader aria-label="sticky table">
                        <TableHead >
                            <TableRow >

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
                                context?.catData?.length !== 0 && context?.catData?.map((item, index) => {
                                    return (
                                        <TableRow key={index}>
                                            <TableCell width={60}>
                                                <Checkbox {...label} size="small" />
                                            </TableCell>

                                            <TableCell width={100}>
                                                <div className='flex items-center gap-4 w-[50px]'>
                                                    <div className="img w-full  rounded-md overflow-hidden ">
                                                        <Link to='/product/45745'>
                                                            <LazyLoadImage
                                                                className='w-full hover:scale-105 transition-all'
                                                                effect="blur"
                                                                wrapperProps={{
                                                                    // If you need to, you can tweak the effect transition using the wrapper style.
                                                                    style: { transitionDelay: "1s" },
                                                                }}
                                                                src={item.images[0]} // use normal <img> attributes as props
                                                            />

                                                        </Link>
                                                    </div>


                                                </div>
                                            </TableCell>

                                            <TableCell width={100} className='capitalize'>
                                                <span className='text-[16px] '>{item.name}</span>
                                            </TableCell>


                                            <TableCell width={30}>
                                                <div className='flex items-center gap-1'>
                                                    <Tooltip title="Edit" placement='top'>
                                                        <IconButton>
                                                            <Button className='myCustomBtn !w-[35px] !h-[35px] !min-w-[35px] !text-green-400 !rounded-md !p-0' onClick={() => context.setIsOpenFullScreenPanle({
                                                                open: true,
                                                                model: 'Edit Category',
                                                                id: item?._id
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
                                                            <Button className='myCustomBtn !w-[35px] !h-[35px] !min-w-[35px] !text-red-600 !text-[18px] !rounded-md !p-0' onClick={() => deleteCat(item?._id)}><MdDelete className=' !text-[24px]' /></Button>

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
                    count={30}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />



            </div>
        </>
    );
}

export default Category;
