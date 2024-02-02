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
        res.status(200)
        .cookie('access token',token,{
            httpOnly:true,
        })
        .json(rest);
    }catch(error){
        next(error);
    }
};

export const google = async(req , res , next) => {
    const {name,email,image} = req.body;
    try{
        const alreadyUser = await User.findOne({email});
        if(alreadyUser){
            const token = jwt.sign({id: alreadyUser._id}, process.env.JWT_SECRET);
            const {password:pass , ...rest} = alreadyUser._doc;
            res.status(200)
            .cookie('access token',token,{
                httpOnly:true,
            })
            .json(rest);
        }else{
            const generatePassword = Math.random().toString().slice(-8)+Math.random().toString().slice(-8);
            const hashedPassword = bcryptjs.hashSync(generatePassword);
            const newUser = new User({userName:name,email,password:hashedPassword,profilePhoto:image});
            const updatedUser = await newUser.save();
            const token = jwt.sign({id: updatedUser._id}, process.env.JWT_SECRET);
            const {password:pass , ...rest} = updatedUser._doc;
            res.status(200)
            .cookie('access token',token,{
                httpOnly:true,
            })
            .json(rest);
        }
    }catch(error){
        next();
    }
    const newUser = new User({
        userName: name,
        email,
        profilePhoto: image
    })
}