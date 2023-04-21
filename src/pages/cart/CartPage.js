import { useSelector } from 'react-redux';
import CartItem from '../../components/CartItem';
import './cartPage.styles.scss';

function CartPage() {
	const cartItems = useSelector(({ cart }) => cart.cartItems);

	const totalPrice = cartItems.reduce(
		(accumalatedQuantity, cartItem) => accumalatedQuantity + cartItem.quantity * cartItem.price,
		0
	);

	return (
		<div className="cart-page-container">
			<div className="cart-header-container">
				<div className="header-block-container">
					<span>Product</span>
				</div>
				<div className="header-block-container">
					<span>Name</span>
				</div>
				<div className="header-block-container">
					<span>Quantity</span>
				</div>
				<div className="header-block-container">
					<span>Price</span>
				</div>
				<div className="header-block-container">
					<span>Remove</span>
				</div>
			</div>
			{cartItems.map(cartItem => (
				<CartItem key={cartItem.id} cartItem={cartItem} />
			))}
			<div className="total-container">TOTAL: ${totalPrice}</div>
		</div>
	);
}

export default CartPage;
