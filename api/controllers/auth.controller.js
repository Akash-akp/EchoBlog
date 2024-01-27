import User from '../models/user.model.js'
import bcryptjs from 'bcryptjs';
import { errorHandler } from '../utils/error.js';

export const signup = async(req,res,next) =>{
    const {userName , email, password} = req.body;
    if(!userName || !email || !password || userName === '' || email === '' || password === '' ){
        next(errorHandler(400,"All field are required"))
    }

    const hashedPassword = bcryptjs.hashSync(password,10);

    const newUser = new User({
        userName,
        email,
        password:hashedPassword,
    });
    try{
        await newUser.save();
        res.json("SignUp succesfull");
    }catch(error){
        next(error);
    }
}