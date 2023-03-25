import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	products: []
};

const productSlice = createSlice({
	name: 'products',
	initialState,
	reducers: {
		setProducts: (state, action) => {
			state.products = action.payload;
		},
		addProduct: (state, action) => {
			state.products.push(action.payload);
		},
		removeProduct: (state, action) => {
			return state.products.filter(product => product.id !== action.payload.id);
		},
		updateProduct: (state, action) => {
			const index = state.products.findIndex(product => product.id === action.payload.id);
			if (index !== -1) {
				state.products[index] = action.payload;
			}
		}
	}
});

export const { setProducts, addProduct, removeProduct, updateProduct } = productSlice.actions;

export default productSlice.reducer;
