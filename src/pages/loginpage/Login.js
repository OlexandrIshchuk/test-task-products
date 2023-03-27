import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { setUser } from '../../store/userSlice';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './login.style.scss';

const validationSchema = Yup.object({
	email: Yup.string().email().required('Email is required'),
	password: Yup.string().required('Password is required').min(6, 'Password is too short - should be 6 chars minimum')
});

const Login = () => {
	const navigate = useNavigate();
	// const [email, setEmail] = useState('');
	// const [password, setPassword] = useState('');
	const dispatch = useDispatch();

	const formik = useFormik({
		initialValues: {
			email: '',
			password: ''
		},
		validationSchema,
		onSubmit: values => {
			dispatch(setUser(values));
			navigate('/');
		}
	});

	// const formData = {
	// 	email,
	// 	password
	// };

	// function handleSubmit(e) {
	// 	e.preventDefault();
	// 	dispatch(setUser(formData));
	// 	navigate('/');
	// }
	return (
		<>
			<h1 className="text-center mb-5">Login</h1>

			<div className="login-wrapper mx-auto">
				<Form className="" onSubmit={formik.handleSubmit}>
					<div className="login">
						<Form.Group className="mb-3 mt-3" controlId="email">
							<Form.Label>Email</Form.Label>
							<Form.Control
								type="email"
								placeholder="Enter your email"
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
								value={formik.values.email}
								isInvalid={formik.touched.email && !!formik.errors.email}
							/>
							<Form.Control.Feedback type="invalid">{formik.errors.email}</Form.Control.Feedback>
						</Form.Group>

						<Form.Group className="mb-3" controlId="password">
							<Form.Label>Password</Form.Label>
							<Form.Control
								type="password"
								placeholder="Enter your password"
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
								value={formik.values.password}
								isInvalid={formik.touched.password && !!formik.errors.password}
							/>
							<Form.Control.Feedback type="invalid">{formik.errors.password}</Form.Control.Feedback>
						</Form.Group>
						<Button variant="primary" type="submit">
							Login
						</Button>
					</div>
				</Form>

				{/* <form onSubmit={handleSubmit}>
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
				</form> */}
			</div>
		</>
	);
};

export default Login;
