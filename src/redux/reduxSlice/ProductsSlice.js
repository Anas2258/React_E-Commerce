import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    products : [],
    loading: false
}

export const fetchProducts = createAsyncThunk('products/fetchProducts',
    async () => {
        try {
            const response = axios.get("https://fakestoreapi.com/products/")
            // console.log(response.clone().json())
            return response
        } catch(err){
            console.log(err)
        }
    }
)

export const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchProducts.pending]: (state) => {
            state.loading = true
        },
        [fetchProducts.fulfilled]: (state, {payload}) => {
            state.loading = false
            console.log(payload.data)
            state.products = payload.data
        },
        [fetchProducts.rejected]: (state) => {
            state.loading = false
        },
    }
})

export const productsReducer = productsSlice.reducer