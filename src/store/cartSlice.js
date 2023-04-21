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

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
	const existingCartItem = cartItems.find(cartItem => cartItem.id === cartItemToRemove.id);

	if (existingCartItem.quantity === 1) {
		return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id);
	}

	return cartItems.map(cartItem =>
		cartItem.id === cartItemToRemove.id ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem
	);
};

const initialState = {
	cartItems: []
};

const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addItem: (state, action) => {
			state.cartItems = addItemToCart(state.cartItems, action.payload);
		},
		removeItem: (state, action) => {
			state.cartItems = removeItemFromCart(state.cartItems, action.payload);
		},
		clearItemFromCart: (state, action) => {
			state.cartItems = state.cartItems.filter(cartItem => cartItem.id !== action.payload.id);
		}
	}
});

export const { addItem, removeItem, clearItemFromCart } = cartSlice.actions;

export default cartSlice.reducer;
