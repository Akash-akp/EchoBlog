import User from '../models/user.model.js'
import bcryptjs from 'bcryptjs';

export const signup = async(req,res) =>{
    const {userName , email, password} = req.body;
    if(!userName || !email || !password || userName === '' || email === '' || password === '' ){
        return res.status(400).json({message: 'All fields are required'});
    }

    const hashedPassword = bcryptjs.hashSync(password,10);

    const newUser = new User({
        userName,
        email,
        password:hashedPassword,
    });
    await newUser.save();
    res.json("SignUp succesfull")
}