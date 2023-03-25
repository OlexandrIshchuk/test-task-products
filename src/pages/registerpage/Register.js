import './register.style.scss';
const Register = () => {
	return (
		<>
			<h1 className="text-center mb-5">Register</h1>
			<div className="register-wrapper mx-auto">
				<form>
					<div className="register">
						<input type="text" className="form-control mb-3" placeholder="Username"></input>
						<input type="email" className="form-control mb-3" placeholder="Email"></input>
						<input type="password" className="form-control mb-3" placeholder="Password"></input>
						<input type="password" className="form-control mb-3" placeholder="Confirm password"></input>

						<button className="btn btn-primary">Register</button>
					</div>
				</form>
			</div>
		</>
	);
};

export default Register;
