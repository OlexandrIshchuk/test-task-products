import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import productReducer from './productSlice';
import userReducer from './userSlice';
import cartReducer from './cartSlice';

const store = configureStore({
	reducer: {
		products: productReducer,
		auth: userReducer,
		cart: cartReducer
	},
	middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger)
});

export default store;
