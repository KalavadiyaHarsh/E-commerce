import React, { useContext, useState } from 'react';
import { Button } from '@mui/material';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa6';
import { MyContext } from '../App';
import EditSubCatBox from './EditSubCatBox';


const SubCatList = () => {

    const [isOpen, setIsOpen] = useState(0);
    const context = useContext(MyContext);

    const expend = (index) => {
        if (isOpen === index) {
            setIsOpen(null);
        } else {
            setIsOpen(index);
        }
    };

    return (
        <>

            <div className='flex items-center justify-between pl-3'>
                <h2 className='text-[19px] font-[600]'>Sub Category List</h2>

                <div className='col w-[30%] flex items-center justify-end gap-3 '>
                    <Button className='btn !bg-green-600 !px-[19px] !py-[8px]  !text-white'>Export</Button>
                    <Button className='btn-blue w-full !text-black' onClick={() => context.setIsOpenFullScreenPanle({
                        open: true,
                        model: 'Add New Sub Category'
                    })}>Add New Sub Category</Button>
                </div>
            </div>

            <div className="card my-4 pt-5 pb-5 px-5 shadow-md sm:rounded-lg bg-white">
                {
                    context?.catData2?.length !== 0 &&
                    <ul className="w-full">
                        {
                            context?.catData?.map((firstLevelCat, index) => {
                                return (
                                    <li className="w-full mb-1" key={index}>
                                        <div className="flex items-center justify-between w-full p-2 bg-[#f1f1f1] rounded-sm px-4">
                                            <span className="font-[500] flex items-center gap-4 text-[14px]">
                                                {firstLevelCat?.name}
                                            </span>

                                            <Button
                                                className="min-w-[35px] w-[35px] h-[35px] rounded-full bg-white text-black ml-auto"
                                                onClick={() => expend(index)}
                                            >
                                                {isOpen === index ? <FaAngleUp /> : <FaAngleDown />}
                                                
                                            </Button>
                                        </div>

                                        {
                                            isOpen === index &&
                                            <>
                                                {firstLevelCat?.children?.length !== 0 && (
                                                    <ul className="w-full">
                                                        {firstLevelCat?.children?.map((subCat, index_) => {
                                                            return (
                                                                <li className="w-full py-1" key={index_}>
                                                                    <EditSubCatBox
                                                                        name={subCat?.name}
                                                                        id={subCat?._id}
                                                                        catData={context?.catData}
                                                                        index={index_}
                                                                        selectedCat={subCat?.parentId}
                                                                        selectedCatName={subCat?.parentCatName}
                                                                    />

                                                                    {subCat?.children?.length !== 0 &&
                                                                        <ul className="pl-4">
                                                                            {
                                                                                subCat?.children?.map((thirdLevel, index__) => {
                                                                                    return (
                                                                                        <li
                                                                                            key={index__}
                                                                                            className="w-full hover:bg-[#f1f1f1]"
                                                                                        >
                                                                                            <EditSubCatBox
                                                                                                name={thirdLevel.name}
                                                                                                catData={firstLevelCat?.children}
                                                                                                index={index__}
                                                                                                selectedCat={thirdLevel?.parentId}
                                                                                                selectedCatName={thirdLevel?.parentCatName}
                                                                                                id={thirdLevel?._id}
                                                                                            />
                                                                                        </li>
                                                                                    )
                                                                                })
                                                                            }

                                                                        </ul>}
                                                                </li>


                                                            );
                                                        })}
                                                    </ul>
                                                )}
                                            </>
                                        }
                                    </li>
                                );
                            })
                        }
                    </ul>
                }
            </div>

        </>
    );
}

export default SubCatList;
