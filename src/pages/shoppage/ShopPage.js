import React from 'react';
import { useSelector } from 'react-redux';
import Shop from '../../components/Shop';
import Spinner from '../../components/spinner/Spinner';

import './shop.styles.scss';

const ShopPage = () => {
	const products = useSelector(({ products }) => products.products);

	return (
		<>
			<h1 className="text-center mb-5">Shop</h1>
			{products.length !== 0 ? <Shop /> : <Spinner />}
		</>
	);
};

export default ShopPage;
