import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import RemoveButton from './RemoveButton';
import EditButton from './EditButton';

function ProductList() {
	const products = useSelector(({ products }) => products.products);
	const user = useSelector(({ auth }) => auth.user);
	const [sortOrder, setSortOrder] = useState('asc');
	const [sortBy, setSortBy] = useState('id');
	const [filterValue, setFilterValue] = useState('');

	const handleSort = column => {
		if (column === sortBy) {
			setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
		} else {
			setSortBy(column);
			setSortOrder('asc');
		}
	};

	const handleFilter = e => {
		setFilterValue(e.target.value);
	};

	let filteredProducts = products.filter(product => {
		return (
			product.title.toLowerCase().includes(filterValue.toLowerCase()) ||
			product.description.toLowerCase().includes(filterValue.toLowerCase()) ||
			product.category.toLowerCase().includes(filterValue.toLowerCase())
		);
	});

	filteredProducts = filteredProducts.sort((a, b) => {
		if (sortBy === 'id') {
			return sortOrder === 'asc' ? a.id - b.id : b.id - a.id;
		} else if (sortBy === 'title') {
			return sortOrder === 'asc' ? a.title.localeCompare(b.title) : b.title.localeCompare(a.title);
		} else if (sortBy === 'description') {
			return sortOrder === 'asc'
				? a.description.localeCompare(b.description)
				: b.description.localeCompare(a.description);
		} else if (sortBy === 'price') {
			return sortOrder === 'asc' ? a.price - b.price : b.price - a.price;
		} else if (sortBy === 'rating') {
			return sortOrder === 'asc' ? a.rating - b.rating : b.rating - a.rating;
		} else if (sortBy === 'stock') {
			return sortOrder === 'asc' ? a.stock - b.stock : b.stock - a.stock;
		} else if (sortBy === 'category') {
			return sortOrder === 'asc' ? a.category.localeCompare(b.category) : b.category.localeCompare(a.category);
		}
		return 0;
	});

	return (
		<div>
			<label className="form-label">
				<strong>Search</strong>
			</label>
			<input className="form-control mb-5 w-50" type="text" onChange={handleFilter} value={filterValue} />

			<table className="table">
				<thead>
					<tr>
						<th className="text-center" onClick={() => handleSort('id')}>
							ID
						</th>
						<th className="text-center" onClick={() => handleSort('title')}>
							Name
						</th>
						<th className="text-center" onClick={() => handleSort('description')}>
							Description
						</th>
						<th className="text-center" onClick={() => handleSort('price')}>
							Price
						</th>
						<th className="text-center">Photo</th>
						<th className="text-center" onClick={() => handleSort('rating')}>
							Rating
						</th>
						<th className="text-center" onClick={() => handleSort('stock')}>
							Stock
						</th>
						<th className="text-center" onClick={() => handleSort('category')}>
							Category
						</th>
						{user.email !== '' ? <th className="text-center"></th> : ''}
						{user.email !== '' ? <th className="text-center"></th> : ''}
					</tr>
				</thead>
				<tbody>
					{filteredProducts.map(product => (
						<tr key={product.id}>
							<td>{product.id}</td>
							<td>{product.title}</td>
							<td>{product.description}</td>
							<td>{product.price}</td>
							<td>
								<img className="productImages" src={product.thumbnail} alt={product.thumbnail} />
							</td>
							<td>{product.rating}</td>
							<td>{product.stock}</td>
							<td>{product.category}</td>
							{user.email !== '' ? (
								<td>
									<EditButton id={product.id} />
								</td>
							) : (
								''
							)}
							{user.email !== '' ? (
								<td>
									<RemoveButton id={product.id} />
								</td>
							) : (
								''
							)}
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}

export default ProductList;
