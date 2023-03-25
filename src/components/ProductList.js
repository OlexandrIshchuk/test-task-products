import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from './Api';
import RemoveButton from './RemoveButton';

const ProductList = () => {
	const products = useSelector(({ products }) => products.products);
	const dispatch = useDispatch();
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

	useEffect(() => {
		dispatch(fetchProducts());
	}, []); //eslint-disable-line react-hooks/exhaustive-deps

	return (
		<div>
			<label for="exampleInputEmail1" class="form-label">
				Search
			</label>
			<input className="form-control mb-5" type="text" onChange={handleFilter} value={filterValue} />

			<table className="table">
				<thead>
					<tr>
						<th className="text-center" onClick={() => handleSort('id')}>
							ID
						</th>
						<th className="text-center" onClick={() => handleSort('title')}>
							Назва
						</th>
						<th className="text-center" onClick={() => handleSort('description')}>
							Опис
						</th>
						<th className="text-center" onClick={() => handleSort('price')}>
							Ціна
						</th>
						<th className="text-center" onClick={() => handleSort('images')}>
							Фото
						</th>
						<th className="text-center" onClick={() => handleSort('rating')}>
							Рейтинг
						</th>
						<th className="text-center" onClick={() => handleSort('stock')}>
							Сток
						</th>
						<th className="text-center" onClick={() => handleSort('category')}>
							Категорія
						</th>
						<th className="text-center"></th>
						<th className="text-center"></th>
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
								<img className="productImages" src={product.images[0]} alt={product.images[0]} />
							</td>
							<td>{product.rating}</td>
							<td>{product.stock}</td>
							<td>{product.category}</td>
							<td>
								<button className="btn btn-primary btn-sm">Редаг</button>
							</td>
							<td>
								<RemoveButton id={product.id} />
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default ProductList;
