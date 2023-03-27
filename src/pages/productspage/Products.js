import React from 'react';
import { useSelector } from 'react-redux';
import ProductList from '../../components/ProductList';
import AddProduct from '../../components/AddProduct';
import Spinner from '../../components/spinner/Spinner';

import './products.styles.scss';

const Products = () => {
	const user = useSelector(({ auth }) => auth.user);
	const products = useSelector(({ products }) => products.products);

	return (
		<>
			<h1 className="text-center mb-5">Products</h1>
			{products.length !== 0 ? <ProductList /> : <Spinner />}
			{user.email !== '' ? <AddProduct /> : ''}
		</>
	);
};

export default Products;
