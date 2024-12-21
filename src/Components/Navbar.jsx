import React from 'react';
import { FaTachometerAlt, FaEnvelope, FaDownload, FaUsers, FaCog, FaVideo, FaCamera } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
    const navigate = useNavigate();
    return (
        <div className="text-[#191919] h-screen flex flex-col bg-white">
            {/* Brand Name */}
            <div className="p-4 border-b-2 w-96 z-[0]  shadow-b border-gray-200">
                <h1 className="text-xl font-bold text-black poppins-light">Dashboard</h1>
            </div>

            {/* Search Bar */}
            <div className='py-4'>
                
            </div>

            {/* Navigation Links */}
            <ul className="space-y-2 px-4">
                {/* Active Link */}
                <li className="bg-purple-600 text-white rounded-md p-2 flex items-center space-x-4 cursor-pointer">
                    <FaTachometerAlt className="text-lg" />
                    <span>Dashboard</span>
                </li>

                {/* Other Links */}
                <li onClick={() => navigate("/admin")} className="hover:bg-gray-100 rounded-md p-2 flex items-center space-x-4 cursor-pointer ">
                    <FaEnvelope className="text-lg" />
                    <span>Admin</span>
                </li>
                <li className="hover:bg-gray-100 rounded-md p-2 flex items-center space-x-4 cursor-pointer">
                    <FaDownload className="text-lg" />
                    <span>Downloads</span>
                </li>
                <li className="hover:bg-gray-100 rounded-md p-2 flex items-center space-x-4 cursor-pointer">
                    <FaUsers className="text-lg" />
                    <span>Users</span>
                </li>
                <li className="hover:bg-gray-100 rounded-md p-2 flex items-center space-x-4 cursor-pointer">
                    <FaCog className="text-lg" />
                    <span>Settings</span>
                </li>
                <li className="hover:bg-gray-100 rounded-md p-2 flex items-center space-x-4 cursor-pointer">
                    <FaVideo className="text-lg" />
                    <span>Videos</span>
                </li>
                <li className="hover:bg-gray-100 rounded-md p-2 flex items-center space-x-4 cursor-pointer">
                    <FaCamera className="text-lg" />
                    <span>Photography</span>
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
                    <div>
                        <p className="text-sm font-medium text-black">Hi there,</p>
                        <p className="text-xs text-gray-600">User Name</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
