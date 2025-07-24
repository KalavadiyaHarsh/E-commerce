import React, { useState } from 'react';
import MyListItem from '../components/MyListItem';
import AccountSidebar from '../components/AccountSidebar';

const MyList = () => {

    return (
        <section className='py-10 w-full'>
            <div className='container flex gap-6'>
                <div className='col1 w-full md:w-[25%] '>
                   <AccountSidebar />
                </div>

                <div className='leftPart w-[70%]'>


                    <div className='shadow-md bg-white rounded-md'>
                        <div className='py-2 px-3 border-b border-[rgba(0,0,0,0.1)]'>
                            <h2>Your List</h2>
                            <p className='mt-0'>There are <span className='font-bold text-primary'>3 </span>Products in your list.</p>
                        </div>
                        
                      <MyListItem   />
                      <MyListItem   />
                      <MyListItem   />
                      <MyListItem   />
                      <MyListItem   />
                      <MyListItem   />
                      <MyListItem   />
                      <MyListItem   />


                    </div>
                </div>
            </div>
        </section>
    );

   
}

export default MyList;
