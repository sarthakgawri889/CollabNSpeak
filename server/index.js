import express from 'express';
import Connection from './database/db.js';
import route from './routes/route.js';
import cors from 'cors';
import bodyParser from 'body-parser';

const app = express();
const PORT = 8000;

// Apply CORS middleware before defining routes
app.use(cors()); // Allow requests from all origins
app.use(express.json());
app.use(bodyParser.json({extended: true}));
app.use(bodyParser.urlencoded({extended:true}));
// Define your routes
app.use('/', route);

// Connect to the database
Connection();

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running successfully on PORT ${PORT}`);
});


