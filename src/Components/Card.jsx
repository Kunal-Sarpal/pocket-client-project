import React, { useContext } from 'react';
import { paymentContext } from '../paymentContext';
import { Button } from '@mui/material';
import Like from './Like';

const Card = ({key,price,title,stock,like}) => {
    const { setPayment } = useContext(paymentContext);

    const handlePayment = () => {
        setPayment((prev) => !prev);
    };

    return (
        <div key={key} className="shadow-md border border-zinc-300 rounded-lg bg-white hover:shadow-xl transition-shadow duration-300 relative ">
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
                <h2 className="text-2xl font-bold text-zinc-700 truncate">{title}</h2>
                <hr className="border-t border-zinc-300" />

                <div className="flex gap-2 items-center">
                    <p className="text-xl text-zinc-700 font-semibold  ">₹{price}</p>
                    <p className="text-md font-semibold text-zinc-500 pb-1 line-through">₹199</p>
                    
                </div>
                <p className='text-red-500 leading-snug'>
                    {stock > 0 ? stock + ' items left at this price!' :' item left at this price!'}
                </p>
               

                {/* Action Buttons */}
                <div className="flex gap-2">
                    {/* Primary Action: Buy Now */}
                    <Button
                        size='small'
                        variant='outlined'
                        color='secondary'
                        onClick={handlePayment}

                    >
                        Buy
                    </Button>
                    <Button
                    size='small'
                        variant='outlined'

                    >
                        Add to Cart
                    </Button>

                    {/* Secondary Action: Add to Cart */}
                </div>
                
              <span className='absolute border p-2 border-zinc-400 rounded-full bottom-[-20px] right-[-10px] text-xs text-zinc-500 bg-white'><Like initialLikes={like}/></span>
            </div>
        </div>
    );
};

export default Card;
