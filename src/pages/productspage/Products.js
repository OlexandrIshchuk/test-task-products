import React from 'react';
import ProductList from '../../components/ProductList';
import AddProduct from '../../components/AddProduct';

import './products.styles.scss';

const Products = () => {
	return (
		<>
			<h1 className="text-center mb-5">Products</h1>
			<ProductList />
			<h2 className="text-center mt-5">Add Product</h2>
			<AddProduct />
		</>
	);
};

export default Products;
