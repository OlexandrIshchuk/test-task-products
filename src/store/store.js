import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import productReducer from './productSlice';
import userReducer from './userSlice';

const store = configureStore({
	reducer: {
		products: productReducer,
		user: userReducer
	},
	middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger)
});

export default store;
