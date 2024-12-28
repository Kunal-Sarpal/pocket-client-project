import React, { useContext, useState } from 'react';
import Card from '../Components/Card';
import '../index.css';
import Navbar from '../Components/Navbar';
import { paymentContext } from '../paymentContext';
import Payment from '../Components/Payment';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Homepage = () => {
    const data = useSelector((state) => state.appdata.data)
    const [open,setOpen] = useState(false);
    // console.log(data[0])
    // const dispatch = useDispatch()
    return (
        <>
            <div className="flex justify-center transition-all ease-in-out duration-200    ">

                {/* Sidebar */}
                <div className={` ${open ? ' w-3/4 overflow-hidden'  : 'w-0'}  bg-white md:w-1/5  transition-all ease-in-out duration-300   h-screen fixed top-0 left-0  overflow-hidden  text-white z-50 bg-red-600  `}>
                    <Navbar />
                </div>

                {/* Main Content */}
                <div className={`${open ? `w-full` :'w-full' } md:w-4/5 transition-all ease-in-out duration-200 ml-1/5  w-full  border-l-2  rounded-l-[50px]  fixed   h-screen right-0 p-8 overflow-y-auto  overflow-hidden`}>
                    <button
                        onClick={() => setOpen((prev) => !prev)}
                        className="lg:hidden absolute top-4 right-4 z-60 p-3 bg-zinc-700 hover:bg-zinc-800 text-white rounded-full">
                        {open ? (
                            // Close icon (X) when sidebar is open
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            // Hamburger menu icon when sidebar is closed
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        )}
                    </button>
                    {/* Header */}
                    <div className="mb-8">
                        <h1 className="text-5xl font-extrabold text-gray-800 mb-4">Shop</h1>
                        <p className="text-gray-600 text-lg">
                            Explore our range of products and find what suits you best.
                        </p>
                    </div>

                    {/* Cards Section */}
                    <div className="grid xl:grid-cols-4  grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {data.map((item,index) => (
                            <Card key={index} id={item.id} title={item.title} stock={item.stock} like={item.like} price={item.price} />
                        ))}
                       
                    </div>
                </div>
            </div>
        </>
       
    );
};

export default Homepage;
