// import React, { useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { addProduct } from '../store/productSlice';
// import { fetchAddProduct } from './Api';

// const AddProduct = () => {
// 	const products = useSelector(({ products }) => products.products);
// 	const dispatch = useDispatch();
// 	const [title, setTitle] = useState('');
// 	const [description, setDescription] = useState('');
// 	const [price, setPrice] = useState('');
// 	const [category, setCategory] = useState('');

// 	const formData = {
// 		id: products.length + 1,
// 		title,
// 		description,
// 		price,
// 		images: '',
// 		rating: 0,
// 		stock: 0,
// 		category
// 	};

// 	function handleSubmit(e) {
// 		e.preventDefault();
// 		dispatch(fetchAddProduct(formData));
// 		// dispatch(addProduct(formData));
// 	}

// 	return (
// 		<>
// 			<form onSubmit={handleSubmit}>
// 				<input
// 					className="form-control mb-3"
// 					type="text"
// 					value={title}
// 					onChange={e => setTitle(e.target.value)}
// 				></input>
// 				<input
// 					className="form-control mb-3"
// 					type="text"
// 					value={description}
// 					onChange={e => setDescription(e.target.value)}
// 				></input>
// 				<input
// 					className="form-control mb-3"
// 					type="text"
// 					value={price}
// 					onChange={e => setPrice(e.target.value)}
// 				></input>
// 				<input
// 					className="form-control mb-3"
// 					type="text"
// 					value={category}
// 					onChange={e => setCategory(e.target.value)}
// 				></input>
// 				<button type="submit" className="btn btn-primary">
// 					Add product
// 				</button>
// 			</form>
// 		</>
// 	);
// };

// export default AddProduct;

import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { addProduct } from '../store/productSlice';
import { fetchAddProduct } from './Api';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const validationSchema = Yup.object({
	id: Yup.number().integer(),
	title: Yup.string().required("Назва є обов'язковою"),
	author: Yup.string().required("Автор є обов'язковим"),
	year: Yup.number()
		.required("Рік видання є обов'язковим")
		.integer()
		.min(1900, 'Рік видання повинен бути не менше 1900')
		.max(new Date().getFullYear(), 'Рік видання повинен бути не більше поточного року'),
	rating: Yup.number()
		.required("Рейтинг є обов'язковим")
		.min(1, 'Рейтинг повинен бути не менше 1')
		.max(5, 'Рейтинг повинен бути не більше 5')
});

const AddProduct = () => {
	const products = useSelector(({ products }) => products.products);
	const dispatch = useDispatch();
	const formik = useFormik({
		initialValues: {
			id: products.length + 1,
			title: '',
			author: '',
			year: '',
			rating: ''
		},
		validationSchema,
		onSubmit: values => {
			dispatch(fetchAddProduct(values));
		}
	});

	return (
		<Form onSubmit={formik.handleSubmit}>
			<Form.Group className="mb-3 mt-3" controlId="title">
				<Form.Label>Назва</Form.Label>
				<Form.Control
					type="text"
					placeholder="Введіть назву товару"
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
					value={formik.values.title}
					isInvalid={formik.touched.title && !!formik.errors.title}
				/>
				<Form.Control.Feedback type="invalid">{formik.errors.title}</Form.Control.Feedback>
			</Form.Group>

			<Form.Group className="mb-3" controlId="author">
				<Form.Label>Автор</Form.Label>
				<Form.Control
					type="text"
					placeholder="Введіть ім'я автора"
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
					value={formik.values.author}
					isInvalid={formik.touched.author && !!formik.errors.author}
				/>
				<Form.Control.Feedback type="invalid">{formik.errors.author}</Form.Control.Feedback>
			</Form.Group>

			<Form.Group className="mb-3" controlId="year">
				<Form.Label>Рік видання</Form.Label>
				<Form.Control
					type="number"
					placeholder="Введіть рік видання"
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
					value={formik.values.year}
					isInvalid={formik.touched.year && !!formik.errors.year}
				/>
				<Form.Control.Feedback type="invalid">{formik.errors.year}</Form.Control.Feedback>
			</Form.Group>

			<Form.Group className="mb-3" controlId="rating">
				<Form.Label>Рейтинг</Form.Label>
				<Form.Control
					type="number"
					placeholder="Введіть рейтинг (від 1 до 5)"
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
					value={formik.values.rating}
					isInvalid={formik.touched.rating && !!formik.errors.rating}
				/>
				<Form.Control.Feedback type="invalid">{formik.errors.rating}</Form.Control.Feedback>
			</Form.Group>
			<Button variant="primary" type="submit">
				Додати товар
			</Button>
		</Form>
	);
};

export default AddProduct;
