import { setProducts } from '../store/productSlice';

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
