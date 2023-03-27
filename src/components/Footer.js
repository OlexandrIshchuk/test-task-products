import React from 'react';
import { Link } from 'react-router-dom';

export const Footer = () => {
	return (
		<div className="container">
			<footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
				<p className="col-md-4 mb-0 text-muted">© 2023 Company, Inc</p>

				<ul className="nav col-md-4 justify-content-end">
					<li className="nav-item">
						<Link to="/" className="nav-link px-2 text-muted">
							Home
						</Link>
					</li>
					<li className="nav-item">
						<Link to="/products" className="nav-link px-2 text-muted">
							Products
						</Link>
					</li>
					<li className="nav-item">
						<Link to="/contact" className="nav-link px-2 text-muted">
							Contact
						</Link>
					</li>
					<li className="nav-item">
						<Link to="/login" className="nav-link px-2 text-muted">
							LogIn
						</Link>
					</li>
				</ul>
			</footer>
		</div>
	);
};
