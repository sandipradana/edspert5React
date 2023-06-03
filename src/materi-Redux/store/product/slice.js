import { createSlice } from '@reduxjs/toolkit'
import * as productAct from './action';

export const productSlice = createSlice({
    name: 'product',
    initialState: {
        loading: false,
        entities: [],
        entity: {
            createdAt: '',
            title: '',
            image: '',
            description: '',
            price: '',
        },
        error: null,
    },
    extraReducers: (builder) => 
    builder
    .addCase(productAct.getProducts.pending, (state) => {
        state.loading = true;
    })
    .addCase(productAct.getProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.entities = action.payload
    })
    .addCase(productAct.getProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload
    })

    .addCase(productAct.getProduct.pending, (state) => {
        state.loading = true;
    })
    .addCase(productAct.getProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.entity = action.payload
    })
    .addCase(productAct.getProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload
    })
})

export default productSlice.reducer;