import React, { useContext } from 'react';
import { paymentContext } from '../paymentContext';

const Card = () => {
    const {setPayment} = useContext(paymentContext)
    const handlePayment = () =>{
        setPayment((_)=>!_)
    }
    return (

        <div className="border border-gray-200 rounded-lg overflow-hidden bg-white hover:shadow border-b-zinc-400 transition-shadow duration-300">
            {/* Image Section */}
            <div className="h-40 bg-gray-200 flex items-center justify-center p-2">
                <img
                    src="https://www.scdn.co/i/_global/open-graph-default.png"
                    alt="Product"
                    className="h-full rounded-md w-full object-cover"
                />
            </div>

            {/* Content Section */}
            <div className="p-2 space-y-3">
                <h2 className="text-xl font-semibold text-gray-900 truncate">
                    Spotify Premium
                </h2>
                <p className="text-sm text-gray-500">In Stock: 20</p>
                <div className='flex gap-3'>
                <p className="text-lg  text line-through text-zinc-500 font-normal text-right w">Rs. 125</p>
                <p className="text-lg font-semibold text-gray-800 ">Rs. 25</ p>

                </div>

                {/* Action Buttons */}
                <div className="flex ">
                    {/* Primary Action: Buy Now */}
                    <button onClick={() => handlePayment()} className="w-full border text-[#9333EA] border-[#9333EA]  rounded-l-md border-r-0 hover:scale-95 shadow  hover:shadow focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-all duration-100">
                        Buy Now
                    </button>

                    {/* Secondary Action: Add to Cart */}
                    <button className="w-full border border-black bg-gray-200 border-l-0 text-gray-800 py-2 rounded-r-lg hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 transition-all duration-300">
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Card;
