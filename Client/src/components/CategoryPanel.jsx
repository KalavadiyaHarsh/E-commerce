import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
// import Button from '@mui/material/Button';
// import List from '@mui/material/List';
// import Divider from '@mui/material/Divider';
// import ListItem from '@mui/material/ListItem';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemText from '@mui/material/ListItemText';
import { IoMdClose } from "react-icons/io";
// import { FaRegSquarePlus } from "react-icons/fa6";
// import { FaRegMinusSquare } from "react-icons/fa";
// import { Link } from 'react-router-dom';
import CategoryCollapse from './CategoryCollapse';


const CategoryPanel = (props) => {

  // const [submenuIndex, setSubmenuIndex] = useState(null);
  // const [innersubmenuIndex, setInnerSubmenuIndex] = useState(null)

  // const openSubmenu = (index) => {
  //   if (submenuIndex === index) {
  //     setSubmenuIndex(null);
  //   } else {
  //     setSubmenuIndex(index);
  //   }
  // }

  // const openInnerSubmenu = (index) => {
  //   if (innersubmenuIndex === index) {
  //     setInnerSubmenuIndex(null);
  //   } else {
  //     setInnerSubmenuIndex(index);
  //   }
  // }

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" className='categoryPanle' >

      <h3 className='p-3 text-[16px] font-[500] flex justify-between items-center'>Shop By Categories <IoMdClose onClick={props.openCategoryPanel} className='cursor-pointer text-[19px]' /></h3>

      {
        props?.data?.length !== 0 && <CategoryCollapse data={props?.data} />
      }



    </Box>
  );


  return (
    <>
      <Drawer open={props.isOpenCatPanel} onClose={props.openCategoryPanel}>
        {DrawerList}
      </Drawer>
    </>
  );
}

export default CategoryPanel;
