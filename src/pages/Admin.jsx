import React, { useState } from 'react';
import { MdOutlinePhotoLibrary } from "react-icons/md";

const Admin = () => {
    const [products, setProducts] = useState([
        { id: 1, name: 'Sample Product 1', price: 500, image: 'https://via.placeholder.com/150' },
        { id: 2, name: 'Sample Product 2', price: 1500, image: 'https://via.placeholder.com/150' },
    ]);
    const [orders, setOrders] = useState([
        { _id: '12345',product:"prime", email: 'user1@example.com', upi: '1234567890', phone: '9876543210' },
        { _id: '67890', product: "yotube", email: 'user2@example.com', upi: '0987654321', phone: '8765432109' },
    ]);
    const [searchQuery, setSearchQuery] = useState('');
    const [searchType, setSearchType] = useState('email');

    // Upload a new product (adds random placeholder for now)
    const handleProductUpload = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const newProduct = {
            id: Math.random().toString(36).substring(2, 9),
            name: formData.get('name'),
            price: formData.get('price'),
            image: 'https://via.placeholder.com/150',
        };
        setProducts((prev) => [...prev, newProduct]);
        alert('Product uploaded successfully!');
    };

    // Delete an order
    const deleteOrder = (id) => {
        setOrders((prev) => prev.filter((order) => order._id !== id));
        alert('Order deleted successfully!');
    };

    // Filtered orders based on search
    const filteredOrders = orders.filter((order) =>
        order[searchType]?.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="grid bg-gray-100  min-h-screen grid-cols-2  ">
           

            {/* Product Upload Section */}
            <section className="w-full  bg-green-100 flex justify-center items-center flex-col">
                <h2 className="text-3xl font-extrabold text-gray-700 mb-4">Add Product </h2>
                <form
                    onSubmit={handleProductUpload}
                    className="bg-white px-10 py-10 border-zinc-300 border shadow rounded-lg p-6 flex flex-col gap-4"
                >
                    <input
                        type="text"
                        name="name"
                        placeholder="Product Name"
                        className="p-3 border rounded-md"
                        required
                    />
                    <input
                        type="number"
                        name="price"
                        placeholder="Enter Price in Ruppes"
                        className="p-3 border rounded-md"
                        required
                    />
                    <label  className="block border-blue-200 w-full text-sm border shadow  rounded  py-3 px-2 text-gray-500 file:bg-gray-100 file:border-0  file:py-2 file:rounded-lg cursor-pointer">
                        
                        <span className='flex justify-center items-center gap-2'>Choose a file  <MdOutlinePhotoLibrary /></span> 
                        
                        <input type="file" id="file-input" className="hidden" />

                    </label>
                    <button
                        type="submit"
                        className="py-2 px-4 border text-[#9333EA] border-[#9333EA]  mt-5 rounded-md transition-all bg-[#cd99fa48]"
                    >
                        Upload Product
                    </button>
                </form>
            </section>

            {/* Order Management Section */}
            <section className='flex flex-col gap-4 justify-center items-center '>
                    <h2 className="text-3xl font-extrabold text-gray-700 mb-4">Manage Orders</h2>
                <div className="bg-white shadow rounded-lg p-6">
                    {/* Search Orders */}
                    <div className="mb-4 flex gap-4">
                        <select
                            value={searchType}
                            onChange={(e) => setSearchType(e.target.value)}
                            className="p-3 border rounded-md"
                        >
                            <option value="email">Email</option>
                            <option value="upi">UPI UTR</option>
                            <option value="phone">Phone</option>
                        </select>
                        <input
                            type="text"
                            placeholder={`Search by ${searchType}`}
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="p-3 border rounded-md flex-1"
                        />
                    </div>

                    {/* Orders Table */}
                    <table className="w-full table-auto border-collapse">
                        <thead>
                            <tr className="bg-gray-200">
                                <th className="border p-3 text-left">Order ID</th>
                                <th className="border p-3 text-left">Product</th>
                                <th className="border p-3 text-left">Email</th>
                                <th className="border p-3 text-left">UPI UTR</th>
                                <th className="border p-3 text-left">Phone</th>
                                <th className="border p-3 text-left">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredOrders.map((order) => (
                                <tr key={order._id} className="hover:bg-gray-50">
                                    <td className="border p-3">{order._id}</td>
                                    <td className="border p-3">{order.product}</td>
                                    <td className="border p-3">{order.email}</td>
                                    <td className="border p-3">{order.upi}</td>
                                    <td className="border p-3">{order.phone}</td>
                                    <td className="border p-3">
                                        <button
                                            onClick={() => deleteOrder(order._id)}
                                            className="py-1 border text-red-500 px-3 border-red-500  rounded hover:bg-red-100 transition-all"
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>
        </div>
    );
};

export default Admin;
