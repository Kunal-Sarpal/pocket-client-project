import React, { useState } from 'react';
import { MdOutlinePhotoLibrary } from "react-icons/md";
import AddProduct from '../Components/AddProduct';
import ManageOrders from '../Components/ManageOrders';
import UpdateProducts from '../Components/UpdateProducts';

const Admin = () => {

    return (
        <>
            <div className="min-h-screen flex flex-col">

                {/* Upper Section */}
                <div className="bg-gray-100 flex justify-between p-8 gap-6">

                    {/* Product Upload Section */}
                    <section className="w-1/3 bg-white border border-gray-300 shadow-lg rounded-md p-6">
                        <AddProduct />
                    </section>

                    {/* Order Management Section */}
                    <section className="flex-1 bg-white border border-gray-300 shadow-lg rounded-md p-6 h-[66vh]">
                        <ManageOrders />
                    </section>
                </div>

                {/* Bottom Section */}
                <div className="bg-gray-100 flex border-t border-gray-300 p-8 gap-6">

                    {/* Update Products Section */}
                    <section className="flex-1 bg-white border border-gray-300 shadow-lg rounded-md p-6">
                        <UpdateProducts />
                    </section>
                </div>
            </div>
        </>
    );
};

export default Admin;
