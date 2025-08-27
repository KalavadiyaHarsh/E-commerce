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


import { deleteData, fetchDataFromApi } from '../../utils/api';

import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import SearchBox from '../../components/SearchBox';
import { MyContext } from '../../App';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const columns = [
    { id: 'image', label: 'IMAGE', minWidth: 250 },
    { id: 'action', label: 'ACTION', minWidth: 100 },
];

const BannerList = () => {
    const context = useContext(MyContext);

    const [bannerFilterVal, setBannerFilterVal] = useState('');
    const [allBannerData, setAllBannerData] = useState([]);

    useEffect(() => {
        fetchDataFromApi("/api/bannerV1").then((res) => {
            setAllBannerData(res?.data);
          //  console.log(res)
            context?.setBannerData(res?.data);
        });
    }, []);

    const handleChangeFilter = (event) => {
        const selectedId = event.target.value;
        setBannerFilterVal(selectedId);

        if (!selectedId) {
            context?.setBannerData(allBannerData);
        } else {
            fetchDataFromApi(`/api/bannerV1/${selectedId}`).then((res) => {
                if (res?.error === false) {
                    context?.setBannerData([res?.banner]);
                } else {
                    context?.setBannerData([]);
                }
            });
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
    };

    const deleteBanner = (id) => {
        deleteData(`/api/bannerV1/${id}`).then(() => {
            fetchDataFromApi("/api/bannerV1").then((res) => {
                context?.setBannerData(res?.data);
            });
        });
    };

    return (
        <>
            <div className='flex items-center justify-between pl-3'>
                <h2 className='text-[19px] font-[600]'>Banner List</h2>

                <div className='col w-[30%] flex items-center justify-end gap-3 '>
                    <Button className='btn !bg-green-600 !px-[19px] !py-[8px]  !text-white'>Export</Button>
                    <Button className='btn-blue w-full !text-black' onClick={() => context.setIsOpenFullScreenPanle({
                        open: true,
                        model: 'Add BannerV1'
                    })}>Add New Banner</Button>
                </div>
            </div>

            <div className='card mt-3 bg-white rounded-lg shadow-md'>
                <div className='flex items-center justify-between w-full pl-6 pb-4 pr-5 pt-5'>
                    <div className=' col w-[20%]'>
                        <h4 className='font-[600] text-[13px] mb-1'>Banner Filter</h4>
                        <Select
                            className='w-full'
                            size='small'
                            value={bannerFilterVal}
                            onChange={handleChangeFilter}
                        >
                            <MenuItem value="">All Banners</MenuItem>
                            {allBannerData?.map((item, index) => (
                                <MenuItem key={index} value={item?._id} className='capitalize'>
                                    {item?.bannerTitle || `Banner ${index + 1}`}
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
                        <TableHead>
                            <TableRow>
                                <TableCell>
                                    <Checkbox {...label} size="small" />
                                </TableCell>
                                {columns.map((column) => (
                                    <TableCell key={column.id} style={{ minWidth: column.minWidth }}>
                                        {column.label}
                                    </TableCell>
                                ))}
                            </TableRow>
                        </TableHead>

                        <TableBody>
                            {context?.bannerData?.length !== 0 && context?.bannerData?.map((item, index) => (
                                <TableRow key={index}>
                                    <TableCell width={60}>
                                        <Checkbox {...label} size="small" />
                                    </TableCell>

                                    <TableCell width={250}>
                                        <LazyLoadImage
                                            className='w-[80px] rounded-md'
                                            effect="blur"
                                            src={item.images[0]}
                                        />
                                    </TableCell>

                                    <TableCell width={100}>
                                        <div className='flex items-center gap-1'>
                                            <Tooltip title="Edit">
                                                <IconButton>
                                                    <Button className='myCustomBtn !w-[35px] !h-[35px] !text-green-400'
                                                        onClick={() => context.setIsOpenFullScreenPanle({
                                                            open: true,
                                                            model: 'Edit BannerV1',
                                                            id: item?._id
                                                        })}>
                                                        <MdModeEdit className=' !text-[24px]' />
                                                    </Button>
                                                </IconButton>
                                            </Tooltip>

                                            <Tooltip title="View">
                                                <IconButton>
                                                    <Button className='myCustomBtn !w-[35px] !h-[35px] !text-primary'>
                                                        <IoEye className=' !text-[24px]' />
                                                    </Button>
                                                </IconButton>
                                            </Tooltip>

                                            <Tooltip title="Delete">
                                                <IconButton>
                                                    <Button className='myCustomBtn !w-[35px] !h-[35px] !text-red-600'
                                                        onClick={() => deleteBanner(item?._id)}>
                                                        <MdDelete className=' !text-[24px]' />
                                                    </Button>
                                                </IconButton>
                                            </Tooltip>
                                        </div>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>

                <TablePagination
                    rowsPerPageOptions={[10, 25, 100]}
                    component="div"
                    count={context?.bannerData?.length || 0}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </div>
        </>
    );
};

export default BannerList;
