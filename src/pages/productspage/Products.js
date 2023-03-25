import ProductList from '../../components/ProductList';
import AddProduct from '../../components/AddProduct';

import './products.styles.scss';

const Contact = () => {
	return (
		<>
			<h1 className="text-center mb-5">Products</h1>
			<ProductList />
			<AddProduct />
		</>
	);
};

export default Contact;
