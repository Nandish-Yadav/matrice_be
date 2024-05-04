import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';


const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));

// app.use(req,res,(next) => {})

app.get('/', (req, res) => {
    res.json({ message: 'App running good' });
    
});



app.listen(8000,()=>{
    console.log('Server is running on port 8000');
})