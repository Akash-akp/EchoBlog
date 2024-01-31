import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import userRoutes from './routes/user.route.js'
import authRoutes from './routes/auth.route.js'

// config .env file
dotenv.config();

mongoose.connect(process.env.Mongo_URL)
.then(
    () =>console.log("mongodb is connected")
).catch(
    (error) => console.log(error)
)

const app = express();

// app use jwt
app.use(express.json());

const port = 3005;

app.listen(port,()=>{
    console.log("Server is running on port on", port)
});

app.use('/api/user',userRoutes);
app.use('/api/auth',authRoutes);

app.use((err, req, res, next)=>{
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    res.status(statusCode).json({
        success:false,
        statusCode,
        message
    });
});