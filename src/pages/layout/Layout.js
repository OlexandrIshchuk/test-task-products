import { Outlet } from 'react-router-dom';

import './layout.styles.scss';

import { Footer } from '../../components/Footer';
import { Navbar } from '../../components/Navbar';

const Layout = () => {
	return (
		<>
			<Navbar />
			<div className="container content">
				<Outlet />
			</div>
			<Footer />
		</>
	);
};

export default Layout;
