import { Badge, IconButton } from '@mui/material';
import { IoCartOutline } from "react-icons/io5";

import React from 'react';
import { FaTachometerAlt, FaEnvelope, FaDownload, FaUsers, FaCog, FaVideo, FaCamera } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { SiPocketcasts } from "react-icons/si";
import { useSelector } from 'react-redux';


const Sidebar = () => {
    const navigate = useNavigate();
    const cartItem = useSelector(state=>state.cartdata.cartItems);
    console.log(cartItem.length);
    return (
        <div className="text-[#191919] h-screen flex flex-col bg-white ">
            {/* Brand Name */}
            <div className="p-4 border-b-2 w-96 z-[0]  shadow-b border-gray-200">
                <h1 className="text-2xl  text-zinc-700 poppins-light animate duration-200 flex font-extrabold">Pocket <SiPocketcasts size={16} className='text-zinc-700 rotate-[140deg]' /></h1>
            </div>

            {/* Search Bar */}
            <div className='py-4'>
                
            </div>

            {/* Navigation Links */}
            <ul className="space-y-2 px-4">
                {/* Active Link */}
                <li className=" font-semibold  text-zinc-600  border-purple-200 rounded-md p-2 flex items-center space-x-4 cursor-pointer">
                    <FaTachometerAlt className="text-lg" />
                    <span>Dashboard</span>
                </li>

                {/* Other Links */}
                <li onClick={() => navigate("/admin")} className="hover:bg-gray-100 text-zinc-600 font-semibold rounded-md p-2 flex items-center space-x-4 cursor-pointer ">
                    <FaEnvelope className="text-lg" />
                    <span>Admin</span>
                </li>
              
                
            </ul>

            {/* Profile Section */}
            <div className="mt-auto p-4 border-t-2 border-gray-200">
                <div className="flex items-center space-x-4">
                    <img
                        src="https://via.placeholder.com/40"
                        alt="Profile"
                        className="rounded-full w-10 h-10"
                    />
                    <div className='border-zinc-600 '>
                        <Badge
                            badgeContent={cartItem.length}
                            color='error'
                            overlap="circular"
                            sx={{
                                '& .MuiBadge-dot': {
                                    borderRadius: '80%',
                                    width: 10,
                                    height: 10,
                                    backgroundColor: '#000',
                                },
                            }}
                        >
                            <IoCartOutline className='border-2 rounded-full  p-1 border-zinc-600 hover:scale-95 hover:cursor-pointer hover:bg-zinc-100' size={40} onClick={()=>navigate('/cart')} />
                        </Badge>

                       
                        <p className="text-xs text-gray-600">your cart</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
