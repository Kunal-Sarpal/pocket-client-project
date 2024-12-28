import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: [
        {
            id: 1,
            title: "Spotify Premium",
            price: 26,
            stock: 37,
            like: 102,
        },
        {
            id: 2,
            title: "Swiggy Gold",
            price: 299,
            stock: 37,
            like: 103,
        },
        {
            id: 3,
            title: "Youtube Premium",
            price: 59,
            stock: 37,
            like: 120,
        },
        {
            id: 4,
            title: "Spotify Premium",
            price: 26,
            stock: 37,
            like: 10,
        },
        {
            id: 5,
            title: "Swiggy Gold",
            price: 299,
            stock: 37,
            like: 10,
        },
        {
            id: 6,
            title: "Youtube Premium",
            price: 59,
            stock: 37,
            like: 10,
        }, {
            id: 7,
            title: "Spotify Premium",
            price: 26,
            stock: 37,
            like: 10,
        },
        {
            id: 8,
            title: "Swiggy Gold",
            price: 299,
            stock: 37,
            like: 10,
        },
        {
            id: 9,
            title: "Youtube Premium",
            price: 59,
            stock: 37,
            like: 10,
        }
    ]
};

export const dataSlice = createSlice({
    name: "data",
    initialState,
    reducers: {
        addData: (state, action) => {
            state.data.push(action.payload);
        },
        getData: (state, action) => {
            state.data = action.payload;
        },
        updateStock: (state, action) => {
            state.data.forEach((item) => {
                if (item.id === action.payload.id) {
                    item.stock = action.payload.stock;
                }
            });
        },
        updateLike: (state, action) => {
            state.data.forEach((item) => {
                if (item.id === action.payload.id) {
                    item.like += 1;
                }
            });
        }
    }
});

export const { addData, getData, updateStock, updateLike } = dataSlice.actions;

export default dataSlice.reducer;