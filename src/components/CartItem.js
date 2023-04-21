import React from 'react';
import { clearItemFromCart, removeItem, addItem } from '../store/cartSlice';
import { useDispatch } from 'react-redux';

const CartItem = ({ cartItem }) => {
	const dispatch = useDispatch();
	const { title, thumbnail, price, quantity } = cartItem;

	function removeItemFromCart() {
		dispatch(clearItemFromCart(cartItem));
	}

	function addItemCart() {
		dispatch(addItem(cartItem));
	}

	function removeItemCart() {
		dispatch(removeItem(cartItem));
	}

	return (
		<div className="cart-item">
			<div className="image-container">
				<img src={thumbnail} alt="item" />
			</div>
			<span className="name me-2">{title}</span>
			<span className="quantity">
				<div className="arrow" onClick={removeItemCart}>
					&#10094;
				</div>
				<span className="value">{quantity}</span>
				<div className="arrow" onClick={addItemCart}>
					&#10095;
				</div>
			</span>
			<span className="price">${price}</span>
			<div className="remove-button" onClick={removeItemFromCart}>
				&#10005;
			</div>
		</div>
	);
};

export default CartItem;
