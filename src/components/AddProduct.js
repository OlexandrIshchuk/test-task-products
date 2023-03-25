import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addProduct } from '../store/productSlice';

const AddProduct = () => {
	const products = useSelector(({ products }) => products.products);
	const dispatch = useDispatch();
	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
	const [price, setPrice] = useState('');
	const [category, setCategory] = useState('');

	const formData = {
		id: products.length + 1,
		title,
		description,
		price,
		images: '',
		rating: 0,
		stock: 0,
		category
	};

	function handleSubmit(e) {
		e.preventDefault();
		dispatch(addProduct(formData));
	}

	return (
		<>
			<form onSubmit={handleSubmit}>
				<input
					className="form-control mb-3"
					type="text"
					value={title}
					onChange={e => setTitle(e.target.value)}
				></input>
				<input
					className="form-control mb-3"
					type="text"
					value={description}
					onChange={e => setDescription(e.target.value)}
				></input>
				<input
					className="form-control mb-3"
					type="text"
					value={price}
					onChange={e => setPrice(e.target.value)}
				></input>
				<input
					className="form-control mb-3"
					type="text"
					value={category}
					onChange={e => setCategory(e.target.value)}
				></input>
				<button type="submit" className="btn btn-primary">
					Add product
				</button>
			</form>
		</>
	);
};

export default AddProduct;
