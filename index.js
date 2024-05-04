import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import config from './config/index.js';


// Route imports
import userRoutes from './routes/userRoutes.js';
import interviewRoutes from './routes/interviewRoutes.js';

// Load environment variables
dotenv.config();


// App config
const app = express();


// Middleware
app.use(bodyParser.json({ limit: "30mb", extended: true }));

app.use(cors());    // Enables CORS

app.use((req,res,next) => {
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Headers","Origin,X-Requested-With,Content-Type,Accept");
    next();
})

app.use(express.json());   // Parses incoming JSON requests and puts the parsed data in req.body
app.use(express.urlencoded({ extended: true }));


// Default route
app.get('/', (req, res) => {
    res.json({ message: 'App running good' });

});


// Routes
app.use('/users', userRoutes);
app.use('/interviewee', interviewRoutes);


// Listen on provided port, on all network interfaces
app.listen(config.port,()=>{
    console.log('Server is running on port 8000');
})


// Connect to MongoDB
const mongoUri = config.mongoUri;
mongoose.connect(mongoUri, {
    autoIndex: true,
}).then(() => console.log('MongoDB connected successfully'))
  .catch(err => console.error('MongoDB connection error:', err));