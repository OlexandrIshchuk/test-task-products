import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './register.style.scss';

const validationSchema = Yup.object({
	name: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Name is required'),
	email: Yup.string().email('Invalid email').required('Email is required'),
	password: Yup.string().required('Password is required').min(6, 'Password is too short - should be 6 chars minimum'),
	confirmPassword: Yup.string()
		.oneOf([Yup.ref('password'), null], 'Passwords must match')
		.required('Confirm password is required')
});

function Register() {
	const navigate = useNavigate();

	const formik = useFormik({
		initialValues: {
			name: '',
			email: '',
			password: '',
			confirmPassword: ''
		},
		validationSchema,
		onSubmit: values => {
			localStorage.setItem('user', JSON.stringify(values));
			navigate('/login');
		}
	});

	return (
		<>
			<h1 className="text-center mb-5">Register</h1>
			<div className="register-wrapper mx-auto">
				<Form className="" onSubmit={formik.handleSubmit}>
					<div className="register">
						<Form.Group className="mb-3 mt-3" controlId="name">
							<Form.Label>Name</Form.Label>
							<Form.Control
								type="text"
								placeholder="Enter your email"
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
								value={formik.values.name}
								isInvalid={formik.touched.name && !!formik.errors.name}
							/>
							<Form.Control.Feedback type="invalid">{formik.errors.name}</Form.Control.Feedback>
						</Form.Group>

						<Form.Group className="mb-3" controlId="email">
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

						<Form.Group className="mb-3" controlId="confirmPassword">
							<Form.Label>Confirm password</Form.Label>
							<Form.Control
								type="password"
								placeholder="Enter your password"
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
								value={formik.values.confirmPassword}
								isInvalid={formik.touched.confirmPassword && !!formik.errors.confirmPassword}
							/>
							<Form.Control.Feedback type="invalid">
								{formik.errors.confirmPassword}
							</Form.Control.Feedback>
						</Form.Group>

						<Button variant="primary" type="submit">
							Register
						</Button>
					</div>
				</Form>
			</div>
		</>
	);
}

export default Register;
