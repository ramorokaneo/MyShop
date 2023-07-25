const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = 5000; // Replace with your desired port number

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Sample route to handle a GET request
app.get('/api/sample', (req, res) => {
  res.json({ message: 'Hello from Express server!' });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
