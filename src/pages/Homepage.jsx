import React, { useContext } from 'react';
import Card from '../Components/Card';
import '../index.css';
import Navbar from '../Components/Navbar';
import { paymentContext } from '../paymentContext';
import Payment from '../Components/Payment';

const Homepage = () => {
    const {payment} = useContext(paymentContext);
    return (
        <>
            {!payment ? <div className="flex justify-center    ">

                {/* Sidebar */}
                <div className="md:w-1/5 transition-all ease-in-out duration-300 w-0  h-screen fixed top-0 left-0  overflow-hidden  text-white ">
                    <Navbar />
                </div>

                {/* Main Content */}
                <div className="ml-1/5  w-full md:w-4/5 border-l-2  rounded-l-[50px]  fixed   h-screen right-0 p-8 overflow-y-auto  overflow-hidden">
                    {/* Header */}
                    <div className="mb-8">
                        <h1 className="text-5xl font-extrabold text-gray-800 mb-4">Shop</h1>
                        <p className="text-gray-600 text-lg">
                            Explore our range of products and find what suits you best.
                        </p>
                    </div>

                    {/* Cards Section */}
                    <div className="grid xl:grid-cols-4  grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                    </div>
                </div>
            </div> : <div className='w-full bg-green-100 h-screen flex justify-center items-center'><Payment /></div>}
        </>
       
    );
};

export default Homepage;
