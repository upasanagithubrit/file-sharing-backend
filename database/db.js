import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

const DBConnection = async () => {
    process.env.DB_USER = 'upasnachoudhary216';
    process.env.DB_PASSWORD = 'Mongo216';
    process.env.DB_NAME = 'file-sharing';

    // Define the MongoDB connection URI template
    const MONGO_URI = 'mongodb+srv://$_USERNAME_$:$_PASSWORD_$@cluster0.csvjhhd.mongodb.net/$_DB_NAME_$?retryWrites=true&w=majority&appName=Cluster0';

    // Replace placeholders with actual environment variables
    let dbLink = MONGO_URI.replace("$_USERNAME_$", process.env.DB_USER);
    dbLink = dbLink.replace("$_PASSWORD_$", process.env.DB_PASSWORD);
    dbLink = dbLink.replace("$_DB_NAME_$", process.env.DB_NAME);

    try {
        // Use the modified dbLink to connect to MongoDB
        await mongoose.connect(dbLink, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Database connected successfully');
    } catch (error) {
        console.error('Error while connecting with the database: ', error);
    }
}

export default DBConnection;
