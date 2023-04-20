import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './shopItem.styles.scss';
import { addItem } from '../../store/cartSlice';

function ShopItemPage() {
	const dispatch = useDispatch();
	const products = useSelector(({ products }) => products.products);
	const productId = document.location.pathname.substring(document.location.pathname.lastIndexOf('/') + 1);

	const selectedProduct = products.find(el => {
		return el.id === +productId;
	});

	// const { id, title, description, price, rating, stock, category, thumbnail, images } = selectedProduct;

	const [productImage, setProductImage] = useState(selectedProduct ? selectedProduct.images[0] : '');

	function handleClick() {
		const selectedItem = {
			id: selectedProduct.id,
			title: selectedProduct.title,
			description: selectedProduct.description,
			price: selectedProduct.price,
			thumbnail: selectedProduct.thumbnail
		};
		dispatch(addItem(selectedItem));
	}

	return (
		<>
			{selectedProduct && (
				<div className="item-wrapper">
					<h1>{selectedProduct.title}</h1>

					<div className="row">
						<div className="col-lg-7 d-flex flex-column">
							<img src={productImage} alt={productImage} />
							<div className="d-flex align-items-center">
								{selectedProduct.images.length > 0 &&
									selectedProduct.images.map(image => (
										<div key={image} className="image-gallery-wrapper">
											<img
												className={
													productImage !== image
														? 'image-gallery-item'
														: 'image-gallery-item-active'
												}
												src={image}
												alt={image}
												onClick={() => setProductImage(image)}
											/>
										</div>
									))}
							</div>

							<span>{selectedProduct.description}</span>
						</div>

						<div className="col-lg-5 d-flex flex-column">
							<span className="item-price">Price: ${selectedProduct.price}</span>

							<span>Rating: {selectedProduct.rating}</span>

							<span>Stock: {selectedProduct.stock}</span>

							<span>Category: {selectedProduct.category}</span>

							<button className="btn add-to-cart-btn" onClick={handleClick}>
								Add to cart
							</button>
						</div>
					</div>
				</div>
			)}
		</>
	);
}

export default ShopItemPage;
