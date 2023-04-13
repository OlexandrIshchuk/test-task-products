// import React from 'react';
// import { useSelector } from 'react-redux';
// import ShopItem from './ShopItem';

// function Shop() {
// 	const products = useSelector(({ products }) => products.products);
// 	return (
// 		<>
// 			<h3>Smartphones</h3>
// 			<ShopItem products={products} category="smartphones" />

// 			<h3>Laptops</h3>
// 			<ShopItem products={products} category="laptops" />

// 			<h3>Fragrances</h3>
// 			<ShopItem products={products} category="fragrances" />

// 			<h3>Skincare</h3>
// 			<ShopItem products={products} category="skincare" />

// 			<h3>Groceries</h3>
// 			<ShopItem products={products} category="groceries" />

// 			<h3>Home-decoration</h3>
// 			<ShopItem products={products} category="home-decoration" />
// 		</>
// 	);
// }

// export default Shop;

import React from 'react';
import { useSelector } from 'react-redux';
import ShopItem from './ShopItem';

function Category({ category, products }) {
	return (
		<>
			<h2 className="items-category">{category}</h2>
			<ShopItem products={products} category={category} />
		</>
	);
}

function Shop() {
	const products = useSelector(({ products }) => products.products);
	const categories = ['smartphones', 'laptops', 'fragrances', 'skincare', 'groceries', 'home-decoration'];

	return (
		<>
			{categories.map(category => (
				<Category key={category} category={category} products={products} />
			))}
		</>
	);
}

export default Shop;
