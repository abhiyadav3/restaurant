const mongoose = require('mongoose');
require('dotenv').config();

// Define the mongoose connection URL

//const mongoURL = process.env.MONGODB_URL_LOCAL;
const mongoURL = process.env.MONGODB_URL;

// Setup MongoDB connection

mongoose.connect(mongoURL, {
   // useNewUrlParser: true,
  //  useUnifiedTopology: true
})

// Get the default connection
// Mongoose maintains a default connection object representing the MongoDB connection.

const db = mongoose.connection;

// Define event Listeners for database connection

db.on('connected', () => {
    console.log('Connected to MongoDB server')
});

db.on('error', (err) => {
    console.log('MongoDB connection error:', err);
});

db.on('disconnected', () => {
    console.log('MongoDB disconnected');
})

// Export the database connection

module.exports = db;