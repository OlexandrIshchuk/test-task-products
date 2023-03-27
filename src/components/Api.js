import { setProducts, addProduct, removeProduct } from '../store/productSlice';

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
