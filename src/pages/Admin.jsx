import React, { useState } from 'react';
import { MdOutlinePhotoLibrary } from "react-icons/md";
import AddProduct from '../Components/AddProduct';
import ManageOrders from '../Components/ManageOrders';

const Admin = () => {
   

    return (
        <>
        <div>
            {/* // upper one */}
                <div className="bg-gray-100 flex">


                    {/* Product Upload Section */}
                    <section className="w-1/3  border-r border-b-white  border-zinc-400 flex justify-top items-start p-10 flex-col">
                        <AddProduct />
                    </section>


                    {/* Order Management Section */}
                    <section className='flex border-b border-zinc-500  p-10 gap-4 justify-start w-full items-top flex-col '>
                        <ManageOrders />
                    </section>
                </div>
                {/* Bottom-one */}
                <div className="bg-gray-100 flex">

                    <section className='flex  p-10 gap-4 justify-start w-full items-top flex-col '>
                        <ManageOrders />
                    </section>

                    {/* Product Upload Section */}
                    <section className="w-1/3  border-l   border-zinc-400 flex justify-top items-start p-10 flex-col">
                        <AddProduct />
                    </section>


                    {/* Order Management Section */}
                   
                </div>
        </div>
        </>
      
    );
};

export default Admin;
