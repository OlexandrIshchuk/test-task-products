import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ReactComponent as ShoppingIcon } from '../assets/shopping-bag.svg';

function CartIcon() {
	const cartItems = useSelector(({ cart }) => cart.cartItems);

	return (
		<>
			<div className="cart-icon">
				<ShoppingIcon className="shopping-icon" />
				<span className="item-count">{cartItems.length}</span>
			</div>
		</>
	);
}

export default CartIcon;
