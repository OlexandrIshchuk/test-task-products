import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './pages/layout/Layout';
import Home from './pages/homepage/Home';
import Products from './pages/productspage/Products';
import Shop from './pages/shoppage/ShopPage';
import Login from './pages/loginpage/Login';
import Register from './pages/registerpage/Register';
import NoPage from './pages/404page/NoPage';
import UpdateProduct from './pages/updateproductpage/UpdateProduct';
import { useEffect, Suspense } from 'react';
import { useDispatch } from 'react-redux';
import { fetchProducts } from '../src/store/productSlice';
import ErrorBoundary from './components/errorboundary/ErrorBoundary';
import Spinner from './components/spinner/Spinner';
import ScrollToTop from './components/ScrollToTop';
import ShopItemPage from './pages/shopitempage/ShopItemPage';
import CartPage from './pages/cart/CartPage';

import './App.css';

export default function App() {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(fetchProducts());
	}, []); //eslint-disable-line react-hooks/exhaustive-deps
	return (
		<BrowserRouter>
			<ScrollToTop />
			<ErrorBoundary>
				<Suspense fallback={<Spinner />}>
					<Routes>
						<Route path="/" element={<Layout />}>
							<Route index element={<Home />} />
							<Route path="products" element={<Products />} />
							<Route path="shop" element={<Shop />} />
							<Route path="shop-item/:id" element={<ShopItemPage />} />
							<Route path="login" element={<Login />} />
							<Route path="register" element={<Register />} />
							<Route path="edit-product/:id" element={<UpdateProduct />} />
							<Route path="*" element={<NoPage />} />
							<Route path="cart" element={<CartPage />} />
						</Route>
					</Routes>
				</Suspense>
			</ErrorBoundary>
		</BrowserRouter>
	);
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
