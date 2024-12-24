import React, { useState } from 'react';
import {
    Box,
    Typography,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Select,
    MenuItem,
    TextField,
    Button,
    Paper,
    InputLabel,
    FormControl,
} from '@mui/material';

const ManageOrders = ({ searchType, setSearchType, searchQuery, setSearchQuery, filteredOrders, deleteOrder }) => {
    
    const [orders, setOrders] = useState([
            { _id: '12345',product:"prime", email: 'user1@example.com', upi: '1234567890', phone: '9876543210' },
            { _id: '67890', product: "yotube", email: 'user2@example.com', upi: '0987654321', phone: '8765432109' },
        ]);
    return (
       
            <div className=' bg-white p-5  shadow-md' >
                <h1 className='text-3xl w-fit font-extrabold text-zinc-700 mb-5  '>
                    Manage Orders
                    <hr  className='mt-2 mb-4' />
                </h1>

                {/* Search Orders */}
            <Box sx={{ marginBottom: 4, display: 'flex', gap: 2 }}>
                <FormControl fullWidth required variant="outlined" size="small">
                    <InputLabel id="validity-unit-label">Type</InputLabel>
                    <Select
                        labelId="validity-unit-label"
                        value={searchType}
                        onChange={(e) => setSearchType(e.target.value)}
                        label="Type"
                        sx={{ width: '200px' }}
                    >
                        <MenuItem value="email"><h1 className='text-zinc-500 font-light'>Email</h1></MenuItem>
                        <MenuItem value="upi"><h1 className='text-zinc-500 font-light'>Phone</h1></MenuItem>
                        <MenuItem value="phone"><h1 className='text-zinc-500 font-light'>Upi-UTR</h1></MenuItem>
                    </Select>
                </FormControl>

                <TextField
                    variant="outlined"
                    size="small"
                    placeholder={`Search by ${searchType}`}
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    fullWidth
                />
            </Box>

                {/* Orders Table */}
                <TableContainer component={Paper} sx={{ borderRadius: 1, overflow: 'hidden' }}>
                    <Table>
                        <TableHead>
                            <TableRow sx={{ backgroundColor: '#f5f5f5' }}>
                                <TableCell>Order ID</TableCell>
                                <TableCell>Product</TableCell>
                                <TableCell>Email</TableCell>
                                <TableCell>UPI UTR</TableCell>
                                <TableCell>Phone</TableCell>
                                <TableCell>Actions</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {orders.map((order) => (
                                <TableRow key={order._id} hover>
                                    <TableCell>{order._id}</TableCell>
                                    <TableCell>{order.product}</TableCell>
                                    <TableCell>{order.email}</TableCell>
                                    <TableCell>{order.upi}</TableCell>
                                    <TableCell>{order.phone}</TableCell>
                                    <TableCell>
                                        <Button
                                            variant="outlined"
                                            color="error"
                                            size="small"
                                            onClick={() => deleteOrder(order._id)}
                                            sx={{
                                                textTransform: 'none',
                                                '&:hover': { backgroundColor: '#ffebee' },
                                            }}
                                        >
                                            Delete
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        
    );
};

export default ManageOrders;
