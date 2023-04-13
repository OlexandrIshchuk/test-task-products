const express = require('express');
const bodyParser = require('body-parser');
const { Pool } = require('pg');
const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// Postgres configuration
const pool = new Pool({
	user: 'postgres',
	host: 'localhost',
	database: 'mydb',
	password: 'mypassword',
	port: 5432
});

// Register endpoint
app.post('/api/register', async (req, res) => {
	const { name, email, password, confirmPassword } = req.body;

	// Insert user into the database
	const client = await pool.connect();
	try {
		await client.query('INSERT INTO users (name, email, password) VALUES ($1, $2, $3, $4)', [
			name,
			email,
			password,
			confirmPassword
		]);
		// Return success response
		res.json({ success: true, message: 'User registered successfully' });
	} catch (err) {
		console.error(err);
		// Return error response
		res.status(500).json({ success: false, message: 'Internal server error' });
	} finally {
		client.release();
	}
});

// Sign-in endpoint
app.post('/api/signin', async (req, res) => {
	const { email, password } = req.body;

	// Find user by email in the database
	const client = await pool.connect();
	try {
		const result = await client.query('SELECT * FROM users WHERE email = $1', [email]);
		const user = result.rows[0];

		// Check if user exists and password is correct
		if (user && user.password === password) {
			// Return success response
			res.json({ success: true, message: 'Sign-in successful' });
		} else {
			// Return error response
			res.status(401).json({ success: false, message: 'Invalid email or password' });
		}
	} catch (err) {
		console.error(err);
		// Return error response
		res.status(500).json({ success: false, message: 'Internal server error' });
	} finally {
		client.release();
	}
});

app.get('/api/ping', (req, res) => {
	res.send('Ta-da!');
});

// Start the server
app.listen(3000, () => {
	console.log('Server started on port 3000');
});
