import React from 'react';
import { useSelector } from 'react-redux';
import { ReactComponent as ShoppingIcon } from '../assets/shopping-bag.svg';

function CartIcon() {
	const cartItems = useSelector(({ cart }) => cart.cartItems);

	const itemCount = cartItems.reduce((accumalatedQuantity, cartItem) => accumalatedQuantity + cartItem.quantity, 0);

	return (
		<>
			<div className="cart-icon">
				<ShoppingIcon className="shopping-icon" />
				<span className="item-count">{itemCount}</span>
			</div>
		</>
	);
}

export default CartIcon;
