import Post from "../models/post.model.js"
import Comment from "../models/comment.model.js"
import Likes from "../models/likes.model.js"


export const getPost = async(req,res,next)=>{
    try{
        const post = await Post.find().populate("user comments likes").exec();
        res.status(200).json({
            post
        })
    }catch(error){
        next();
    }
}

export const createPost = async(req,res,next) => {
    try{
        const {user,title,body,likes,comments} = req.body;
        const newPost = new Post({
            user,title,body,likes,comments
        })
        const savedPost = await newPost.save();
        console.log(req.body);
        const updatedPost = await Post.findOne({user,title,body}).populate("user").exec();
        res.status(200).json({
            post: updatedPost
        })
    }catch(error){
        next();
    }
    
}

export const deletePost = (req,res,next) => {

}

export const createComment = async(req,res,next) => {
    try{
        const {post,user,body} = req.body;
        console.log(req.body);
        const comment = new Comment({
            post,user,body
        })
        const savedComment = await comment.save();
        const updatedPost = await Post.findByIdAndUpdate(post,{$push:{comments:savedComment._id}},{new:true})
        .populate("user comments")
        .exec();
        res.status(200).json({
            post: updatedPost
        })
    }catch(error){
        next(error);
    }
}

export const deleteComment = (req,res,next) => {
    
}

export const addLike = async(req,res,next) => {
    try{
        const {post,user} = req.body;
        const newLike = new Likes({post,user});
        const isLiked = await Likes.findOne({post,user});
        console.log(isLiked);
        if(isLiked){
            res.status(200).json({
                isLiked
            })
        }else{
            const updatedLike = await newLike.save();
            const updatedPost = await Post.findByIdAndUpdate(updatedLike.post,{$push:{likes:updatedLike._id}},{new: true})
            .populate("user comments likes")
            .exec();
            res.status(200).json({
                post: updatedPost
            })
        }
    }catch(error){
        next();
    }
}

export const removeLike = async(req,res,next) => {
    try{
        const like = req.body;
        const targetPost = await Post.findOneAndUpdate({_id:like.post},{
            $pull: {likes:like._id}
        }, {new:true});
        const isLiked = await Likes.deleteOne(like);
        res.status(200).json({
            isLiked
        })
    }catch{
        next();
    }
}