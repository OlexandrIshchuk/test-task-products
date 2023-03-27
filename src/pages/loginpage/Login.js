import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setUser } from '../../store/userSlice';
import './login.style.scss';

const Login = () => {
	const navigate = useNavigate();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const dispatch = useDispatch();

	const formData = {
		email,
		password
	};

	function handleSubmit(e) {
		e.preventDefault();
		dispatch(setUser(formData));
		navigate('/');
	}
	return (
		<>
			<h1 className="text-center mb-5">Login</h1>

			<div className="login-wrapper mx-auto">
				<form onSubmit={handleSubmit}>
					<div className="login">
						<input
							value={email}
							onChange={e => setEmail(e.target.value)}
							type="email"
							className="form-control mb-3"
							placeholder="Email"
						></input>
						<input
							value={password}
							onChange={e => setPassword(e.target.value)}
							type="password"
							className="form-control mb-3"
							placeholder="Password"
						></input>

						<span className="text-center">
							If you do not have an account,<br></br>
							<Link className="register-link" to="/register">
								please register
							</Link>
						</span>

						<button type="submit" className="btn btn-primary">
							Login
						</button>
					</div>
				</form>
			</div>
		</>
	);
};

export default Login;
