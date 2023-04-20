import { createSlice } from '@reduxjs/toolkit';

const addItemToCart = (cartItems, cartItemToAdd) => {
	const existingCartItem = cartItems.find(cartItem => cartItem.id === cartItemToAdd.id);

	if (existingCartItem) {
		return cartItems.map(cartItem =>
			cartItem.id === cartItemToAdd.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
		);
	}

	return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

const initialState = {
	cartItems: []
};

const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addItem: (state, action) => {
			state.cartItems.push(action.payload);
			addItemToCart(state.cartItems, action.payload);
		},
		removeItem: (state, action) => {
			state.cartItems = state.cartItems.filter(cartItem => cartItem.id !== action.payload.id);
		}
	}
});

export const { addItem, removeItem } = cartSlice.actions;

export default cartSlice.reducer;
