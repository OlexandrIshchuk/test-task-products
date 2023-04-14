import { useSelector } from 'react-redux';
import './shopItem.styles.scss';

function ShopItemPage() {
	const products = useSelector(({ products }) => products.products);
	const productId = document.location.pathname.substring(document.location.pathname.lastIndexOf('/') + 1);

	const selectedProduct = products.find(el => {
		return el.id === +productId;
	});

	const { id, title, description, price, rating, stock, category, thumbnail, images } = selectedProduct;

	return (
		<div className="item-wrapper">
			<h1>{title}</h1>

			<div className="row">
				<div className="col-lg-7 d-flex flex-column">
					<img src={images[1] || thumbnail} alt={thumbnail} />

					<span>{description}</span>
				</div>

				<div className="col-lg-5 d-flex flex-column">
					<span className="item-price">Price: ${price}</span>

					<span>Rating: {rating}</span>

					<span>Stock: {stock}</span>

					<span>Category: {category}</span>

					<div className="add-to-cart-btn">
						<button>Add to cart</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ShopItemPage;
