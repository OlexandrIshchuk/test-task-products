import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './pages/layout/Layout';
import Home from './pages/homepage/Home';
import Products from './pages/productspage/Products';
import Contact from './pages/contactpage/Contact';
import Login from './pages/loginpage/Login';
import Register from './pages/registerpage/Register';
import NoPage from './pages/404page/NoPage';
import UpdateProduct from './pages/updateproductpage/UpdateProduct';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchProducts } from '../src/components/Api';

import './App.css';

export default function App() {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(fetchProducts());
	}, []); //eslint-disable-line react-hooks/exhaustive-deps
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Home />} />
					<Route path="products" element={<Products />} />
					<Route path="contact" element={<Contact />} />
					<Route path="login" element={<Login />} />
					<Route path="register" element={<Register />} />
					<Route path="update-product" element={<UpdateProduct />} />
					<Route path="*" element={<NoPage />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
