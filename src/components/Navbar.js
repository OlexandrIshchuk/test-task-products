import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeUser } from '../store/userSlice';
import { useNavigate } from 'react-router-dom';
import CartIcon from './CartIcon';

export const Navbar = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const user = useSelector(({ auth }) => auth.user);
	const cartItems = useSelector(({ cart }) => cart.cartItems);

	function handleClick() {
		navigate('/login');
		dispatch(removeUser());
	}

	return (
		<div className="header-container">
			<div className="header">
				<div className="logo">
					<Link to="/">MY PAGE</Link>
				</div>

				<nav>
					<ul>
						<li>
							<Link to="/">Home</Link>
						</li>
						{user.email !== '' ? (
							<li>
								<Link to="/products">Products</Link>
							</li>
						) : (
							''
						)}
						<li>
							<Link to="/shop">Shop</Link>
						</li>
						{user.email === '' ? (
							<li>
								<Link to="/login">LogIn</Link>
							</li>
						) : (
							<li>
								<Link onClick={handleClick}>LogOut</Link>
							</li>
						)}
						<li>
							<Link to="/cart">
								<CartIcon cartItems={cartItems} />
							</Link>
						</li>
					</ul>
				</nav>
			</div>
		</div>
	);
};
