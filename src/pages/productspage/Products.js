import React from 'react';
import { useSelector } from 'react-redux';
import ProductList from '../../components/ProductList';
import AddProduct from '../../components/AddProduct';

import './products.styles.scss';

const Products = () => {
	const user = useSelector(({ auth }) => auth.user);

	return (
		<>
			<h1 className="text-center mb-5">Products</h1>
			<ProductList />
			{user ? <AddProduct /> : ''}
		</>
	);
};

export default Products;
