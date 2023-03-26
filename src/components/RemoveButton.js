import { useDispatch } from 'react-redux';
import { removeProduct } from '../store/productSlice';
import { fetchRemoveProduct } from './Api';

const RemoveButton = id => {
	const dispatch = useDispatch();

	const handleClick = () => {
		dispatch(removeProduct(id));
		dispatch(fetchRemoveProduct(id));
	};

	return (
		<>
			<button className="btn btn-danger btn-sm" onClick={handleClick}>
				Remove
			</button>
		</>
	);
};

export default RemoveButton;
