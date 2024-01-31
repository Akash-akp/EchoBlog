import User from '../models/user.model.js'
import bcryptjs from 'bcryptjs';
import { errorHandler } from '../utils/error.js';
import jwt from 'jsonwebtoken';

export const signup = async(req,res,next) =>{
    console.log(req.body);
    const {userName , email, password} = req.body;
    if(!userName || !email || !password || userName === '' || email === '' || password === '' ){
        return next(errorHandler(400,"All field are required"))
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
};

export const signin = async(req,res,next) => {
    const { email , password } = req.body;
    if(!email || !password){
        return next(errorHandler(400,"All field are required"));
    }
    try{
        const validUser = await User.findOne({email});
        if(!validUser){
            return next(errorHandler(400,"Invalid Credential"));
        }
        const validPassword = bcryptjs.compareSync(password,validUser.password);
        if(!validPassword){
            return next(errorHandler(400,"Invalid Credential"));
        }
        // npm i jsonwebtoken
        const token = jwt.sign(
            { userId: validUser._id} , process.env.JWT_SECRET
        );
        validUser.message = "Loggedin";
        const {password:pass , ...rest} = validUser._doc;
        res
        .status(200)
        .cookie('access token',token,{
            httpOnly:true,
        })
        .json(rest);
    }catch(error){
        next(error);
    }
};

export const google = (req , res , next) => {
    const {name,email,image} = req.body;
    try{
        const alreadyUser = User.findOne({email});
        if(alreadyUser){
            const token = jwt.sign({id: alreadyUser._id}, process.env.JWT_SECRET);
        }
    }catch(error){

    }
    const newUser = new User({
        userName: name,
        email,
        profilePhoto: image
    })
}