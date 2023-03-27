import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeUser } from '../store/userSlice';

export const Navbar = () => {
	const dispatch = useDispatch();
	const user = useSelector(({ auth }) => auth.user);

	function handleClick() {
		dispatch(removeUser());
	}

	return (
		<div className="container">
			<div className="header">
				<div className="logo">
					<Link to="/">MY PAGE</Link>
				</div>

				<nav>
					<ul>
						<li>
							<Link to="/">Home</Link>
						</li>
						<li>
							<Link to="/products">Products</Link>
						</li>
						<li>
							<Link to="/contact">Contact</Link>
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
					</ul>
				</nav>
			</div>
		</div>
	);
};
