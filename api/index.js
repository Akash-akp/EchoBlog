import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import userRoutes from './routes/user.route.js'
import authRoutes from './routes/auth.route.js'

dotenv.config();

mongoose.connect(process.env.Mongo_URL)
.then(
    () =>console.log("mongodb is connected")
).catch(
    (error) => console.log(error)
)

const app = express();

app.use(express.json());

const port = 3000;

app.listen(port,()=>{
    console.log("Server is running on port on", port)
});

app.use('/api/user',userRoutes);
app.use('/api/auth',authRoutes);