import { error } from 'console';
import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose'

dotenv.config();

mongoose.connect(process.env.Mongo_URL)
.then(
    () =>{console.log("mongodb is connected")}
).catch(
    (error) => console.log(error)
)

const app = express();

const port = 3000;

app.listen(port,()=>{
    console.log("Server is running on port on", port)
})