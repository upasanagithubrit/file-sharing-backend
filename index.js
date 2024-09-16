import express from 'express';
import cors from 'cors';
import router from './routes/routes.js';
import DBConnection from './database/db.js';
import dotenv from 'dotenv';

dotenv.config(); // Load environment variables

const app = express();

app.use(cors()); // Enable CORS
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded data
app.use(express.json()); // Parse JSON request bodies
app.use('/', router); // Use the defined routes

const PORT = process.env.PORT || 8000; // Set the port

DBConnection(); // Connect to the database

app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`)); // Start the server
