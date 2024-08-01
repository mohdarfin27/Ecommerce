const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { Pool } = require('pg');

const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// PostgreSQL pool
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'ecommerecelogin',
  password: 'arfin27',
  port: 5432,
});

// Endpoint to handle form submission
app.post('/submit', async (req, res) => {
  const { username, password } = req.body;

  try {
    const result = await pool.query(
      'INSERT INTO users_detail (username, password) VALUES ($1, $2) RETURNING *',
      [username, password]
    );
    res.status(200).json(result.rows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
