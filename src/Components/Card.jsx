import React, { useContext } from 'react';
import { paymentContext } from '../paymentContext';
import { Button } from '@mui/material';

const Card = () => {
    const { setPayment } = useContext(paymentContext);

    const handlePayment = () => {
        setPayment((prev) => !prev);
    };

    return (
        <div className="shadow-md border border-zinc-300 rounded-lg bg-white hover:shadow-xl transition-shadow duration-300 relative overflow-hidden">
            {/* Stock Indicator */}
           

            {/* Image Section */}
            <div className="bg-gray-200 flex items-center justify-center p-2">
                <img
                    src="https://www.scdn.co/i/_global/open-graph-default.png"
                    alt="Spotify Premium"
                    className="w-full h-full object-cover rounded-md"
                />
            </div>

            {/* Content Section */}
            <div className="p-4 space-y-4">
                <h2 className="text-2xl font-bold text-zinc-700 truncate">Spotify Premium</h2>
                <hr className="border-t border-zinc-300" />

                <div className="flex gap-2 items-center">
                    <p className="text-xl text-zinc-700 font-semibold  ">₹25</p>
                    <p className="text-md font-semibold text-zinc-500 pb-1 line-through">₹125</p>
                    
                </div>
                <p className='text-red-500 leading-snug'>
                    5 pieces left at this price!
                </p>
               

                {/* Action Buttons */}
                <div className="flex gap-2">
                    {/* Primary Action: Buy Now */}
                    <Button
                        variant='outlined'
                        color='secondary'
                        onClick={handlePayment}

                    >
                        Buy
                    </Button>
                    <Button
                        variant='outlined'

                    >
                        Add to Cart
                    </Button>

                    {/* Secondary Action: Add to Cart */}
                   
                </div>
            </div>
        </div>
    );
};

export default Card;
