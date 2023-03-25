import React from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => {
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
						<li>
							<Link to="/login">LogIn</Link>
						</li>
					</ul>
				</nav>
			</div>
		</div>
	);
};
