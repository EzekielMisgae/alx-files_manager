// Importing required modules
const express = require('express');
const router = require('./routes/index');

// Setting up the port to run the server
const port = process.env.PORT || 5000;

// Creating an express app
const app = express();

// Enabling JSON parsing
app.use(express.json());

// Using router for API routes
app.use('/', router);

// Starting the server and listening to the specified port
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

// Exporting the app
module.exports = app;
