import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { fetchAddProduct } from '../store/productSlice';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const validationSchema = Yup.object({
	title: Yup.string().required('The name is required'),
	description: Yup.string().required('Description is required'),
	price: Yup.number()
		.required('Price is required')
		.min(1, 'The price must be at least 1')
		.max(5000, 'The price should not be more than 5000'),
	rating: Yup.number()
		.required('Rating is required')
		.min(1, 'The rating must be at least 1')
		.max(5, 'The rating should not be more than 5'),
	stock: Yup.number()
		.required('Stock is required')
		.min(1, 'The stock must be at least 1')
		.max(200, 'The stock should not be more than 200'),
	category: Yup.string().required('The category is required')
});

function AddProduct() {
	const dispatch = useDispatch();
	const formik = useFormik({
		initialValues: {
			title: '',
			description: '',
			price: '',
			rating: '',
			stock: '',
			category: ''
		},
		validationSchema,
		onSubmit: values => {
			dispatch(fetchAddProduct(values));
			formik.resetForm();
		}
	});

	return (
		<>
			<h2 className="text-center mt-5">Add Product</h2>
			<Form className="add-product-form" onSubmit={formik.handleSubmit}>
				<Form.Group className="mb-3 mt-3" controlId="title">
					<Form.Label>Name</Form.Label>
					<Form.Control
						type="text"
						placeholder="Enter the name of the product"
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						value={formik.values.title}
						isInvalid={formik.touched.title && !!formik.errors.title}
					/>
					<Form.Control.Feedback type="invalid">{formik.errors.title}</Form.Control.Feedback>
				</Form.Group>

				<Form.Group className="mb-3" controlId="description">
					<Form.Label>Description</Form.Label>
					<Form.Control
						as="textarea"
						rows={3}
						type="text"
						placeholder="Enter the product description"
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						value={formik.values.description}
						isInvalid={formik.touched.description && !!formik.errors.description}
					/>
					<Form.Control.Feedback type="invalid">{formik.errors.description}</Form.Control.Feedback>
				</Form.Group>

				<Form.Group className="mb-3" controlId="price">
					<Form.Label>Price</Form.Label>
					<Form.Control
						type="number"
						placeholder="Enter the product price (from 1 to 500)"
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						value={formik.values.price}
						isInvalid={formik.touched.price && !!formik.errors.price}
					/>
					<Form.Control.Feedback type="invalid">{formik.errors.price}</Form.Control.Feedback>
				</Form.Group>

				<Form.Group className="mb-3" controlId="rating">
					<Form.Label>Rating</Form.Label>
					<Form.Control
						type="number"
						placeholder="Enter a rating (from 1 to 5)"
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						value={formik.values.rating}
						isInvalid={formik.touched.rating && !!formik.errors.rating}
					/>
					<Form.Control.Feedback type="invalid">{formik.errors.rating}</Form.Control.Feedback>
				</Form.Group>

				<Form.Group className="mb-3" controlId="stock">
					<Form.Label>Stock</Form.Label>
					<Form.Control
						type="number"
						placeholder="Enter a stock (from 1 to 200)"
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						value={formik.values.stock}
						isInvalid={formik.touched.stock && !!formik.errors.stock}
					/>
					<Form.Control.Feedback type="invalid">{formik.errors.stock}</Form.Control.Feedback>
				</Form.Group>

				<Form.Group className="mb-3 mt-3" controlId="category">
					<Form.Label>Category</Form.Label>
					<Form.Control
						type="text"
						placeholder="Enter a category"
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						value={formik.values.category}
						isInvalid={formik.touched.category && !!formik.errors.category}
					/>
					<Form.Control.Feedback type="invalid">{formik.errors.category}</Form.Control.Feedback>
				</Form.Group>

				<Button variant="primary" type="submit">
					Add product
				</Button>
			</Form>
		</>
	);
}

export default AddProduct;
