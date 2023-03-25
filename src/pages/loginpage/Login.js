import { Link } from 'react-router-dom';
import './login.style.scss';

const Login = () => {
	return (
		<>
			<h1 className="text-center mb-5">Login</h1>

			<div className="login-wrapper mx-auto">
				<form>
					<div className="login">
						<input type="email" className="form-control mb-3" placeholder="Email"></input>
						<input type="password" className="form-control mb-3" placeholder="Password"></input>

						<span className="text-center">
							If you do not have an account,<br></br>
							<Link className="register-link" to="/register">
								please register
							</Link>
						</span>

						<button className="btn btn-primary">Login</button>
					</div>
				</form>
			</div>
		</>
	);
};

export default Login;
