import { createSlice } from '@reduxjs/toolkit';

export const fetchProducts = () => {
	return async dispatch => {
		try {
			const response = await fetch('https://dummyjson.com/products/');
			const data = await response.json();
			dispatch(setProducts(data.products));
		} catch (error) {
			console.error('Error fetching products: ', error);
		}
	};
};

export const fetchAddProduct = formData => {
	return async dispatch => {
		try {
			const response = await fetch('https://dummyjson.com/products/add', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(formData)
			});
			const data = await response.json();
			dispatch(addProduct(data));
		} catch (error) {
			console.error('Error add product: ', error);
		}
	};
};

export const fetchRemoveProduct = query => {
	return async dispatch => {
		try {
			const response = await fetch(`https://dummyjson.com/products/${query.id}`, {
				method: 'DELETE'
			});
			const data = await response.json();
			dispatch(removeProduct(data));
		} catch (error) {
			console.error('Error remove product: ', error);
		}
	};
};

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
			state.products = state.products.filter(product => product.id !== action.payload.id);
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
