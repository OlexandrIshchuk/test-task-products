import React from 'react';
import { useSelector } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { updateProduct } from '../store/productSlice';

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

function EditProduct() {
	const dispatch = useDispatch();
	const products = useSelector(({ products }) => products.products);
	const productId = document.location.pathname.substring(document.location.pathname.lastIndexOf('/') + 1);

	const selectedProduct = products.find(el => {
		return el.id === +productId;
	});

	const { id, title, description, price, rating, stock, category, thumbnail } = selectedProduct;

	const formik = useFormik({
		initialValues: {
			id: +productId,
			title: title,
			description: description,
			price: price,
			rating: rating,
			stock: stock,
			category: category,
			thumbnail: thumbnail
		},
		validationSchema,
		onSubmit: values => {
			dispatch(updateProduct(values));
			formik.resetForm();
		}
	});

	return (
		<>
			<h1 className="text-center mb-5">Edit {title}</h1>
			<table className="table">
				<thead>
					<tr>
						<th className="text-center">ID</th>
						<th className="text-center">Name</th>
						<th className="text-center">Description</th>
						<th className="text-center">Price</th>
						<th className="text-center">Photo</th>
						<th className="text-center">Rating</th>
						<th className="text-center">Stock</th>
						<th className="text-center">Category</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>{id}</td>
						<td>{title}</td>
						<td>{description}</td>
						<td>{price}</td>
						<td>
							<img className="productImages" src={thumbnail} alt={thumbnail} />
						</td>
						<td>{rating}</td>
						<td>{stock}</td>
						<td>{category}</td>
					</tr>
				</tbody>
			</table>
			<Form className="add-product-form mt-5" onSubmit={formik.handleSubmit}>
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
					Edit product
				</Button>
			</Form>
		</>
	);
}

export default EditProduct;
