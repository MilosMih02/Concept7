// app.js
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const controller = require('../controllers/controller');

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Use the controller for routes
app.use('/api', controller);

// Start the server
const PORT = 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));