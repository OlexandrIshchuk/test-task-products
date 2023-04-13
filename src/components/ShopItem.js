import React from 'react';

function ShopItem({ products, category }) {
	const filteredProductsByCategory = products.filter(el => {
		return el.category === category;
	});

	return (
		<div className="row">
			{filteredProductsByCategory.map(product => (
				<div key={product.id} className="col-md-6 col-lg-4">
					<div className="shop-item">
						<div className="item-image">
							<img src={product.thumbnail} alt={product.thumbnail} />
						</div>

						<h4>{product.title}</h4>

						<span className="item-price">${product.price}</span>

						<span className="item-description">{product.description}</span>
					</div>
				</div>
			))}
		</div>
	);
}

export default ShopItem;
