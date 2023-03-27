import { useNavigate } from 'react-router-dom';

const EditButton = data => {
	const navigate = useNavigate();

	function handleClick() {
		navigate(`/edit-product/${data.id}`);
	}

	return (
		<>
			<button className="btn btn-warning btn-sm" onClick={handleClick}>
				Edit
			</button>
		</>
	);
};

export default EditButton;
