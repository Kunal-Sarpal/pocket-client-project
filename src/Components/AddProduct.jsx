import React, { useState } from 'react';
import {
    Box,
    Button,
    TextField,
    Typography,
    MenuItem,
    Select,
    FormControl,
    InputLabel,
    Paper,
} from '@mui/material';
import { MdOutlinePhotoLibrary } from 'react-icons/md';

const AddProduct = () => {
    const [validity, setValidity] = useState({ duration: '', unit: '' });

    const handleProductUpload = (e) => {
        e.preventDefault();
        // Handle form submission logic
        console.log('Uploaded Product:', validity);
    };

    const handleValidityChange = (field) => (event) => {
        setValidity({ ...validity, [field]: event.target.value });
    };

    return (
        <div className=' w-full shadow-md'>
            <div className='border bg-white p-5  flex flex-col gap-2'>
                <h1 className='font-extrabold w-fit text-3xl mb-3 xl text-zinc-700  '>Add Product
                    <hr className='mt-2 ' />
                </h1>

                <TextField
                    label="Product Name"
                    name="name"
                    variant="outlined"
                    fullWidth
                    required
                />
                <TextField
                    label="Price (in Rupees)"
                    name="price"
                    type="number"
                    variant="outlined"
                    fullWidth
                    required
                />
                <TextField
                    label="Stock Quantity"
                    name="stock"
                    type="number"
                    variant="outlined"
                    fullWidth
                    required
                />

                {/* Validity Input */}
                <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
                    <TextField
                        label="Duration"
                        name="duration"
                        type="number"
                        variant="outlined"
                        value={validity.duration}
                        onChange={handleValidityChange('duration')}
                        fullWidth
                        required
                    />
                    <FormControl fullWidth required>
                        <InputLabel id="validity-unit-label">Unit</InputLabel>
                        <Select
                            labelId="validity-unit-label"
                            value={validity.unit}
                            onChange={handleValidityChange('unit')}
                            label="Unit"
                        >
                            <MenuItem value="days">Days</MenuItem>
                            <MenuItem value="months">Months</MenuItem>
                            <MenuItem value="years">Years</MenuItem>
                        </Select>
                    </FormControl>
                </Box>

                {/* File Upload */}
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: 1,
                        border: '1px solid #ccc',
                        borderRadius: 1,
                        padding: 2,
                        cursor: 'pointer',
                    }}
                >
                    <InputLabel
                        htmlFor="file-input"
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 1,
                            cursor: 'pointer',
                            fontWeight: 500,
                            color: '#555',
                        }}
                    >
                        Choose a file <MdOutlinePhotoLibrary size={20} />
                    </InputLabel>
                    <input type="file" id="file-input" style={{ display: 'none' }} />
                </Box>

                <Button
                    type="submit"
                    variant="outlined"
                    color='success'
                    fullWidth
                    sx={{
                        textTransform: 'none',
                        fontSize: '16px',
                        padding: '10px 20px',
                        // backgroundColor: '#9333EA',
                        '&:hover': {
                            // backgroundColor: '#7c2ab8',
                        },
                    }}
                >
                    Upload Product
                </Button>
            </div>
        </div>
    );
};

export default AddProduct;
