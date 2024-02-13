import Post from "../models/post.model.js"
import Comment from "../models/comment.model.js"
import Likes from "../models/likes.model.js"
import User from "../models/user.model.js"


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

export const getUserById = async(req,res,next)=>{
    const id = req.query.id;
    try{
        const currentPost = await User.findById(id);
        res.status(200).json({
            user: currentPost
        });
    }catch(error){
        next();
    }
}

export const getPostById = async(req,res,next)=>{
    const id = req.query.id;
    try{
        const currentPost = await Post.findById(id).populate("user").populate("comments").exec();
        res.status(200).json({
            post: currentPost
        });
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

export const deletePost = async(req,res,next) => {
    try{
        const id = req.body.id;
        const selectedPost = await Post.findById(id);
        selectedPost.likes.map(async(lk)=>{
            const deletelk = await Likes.deleteOne({_id:lk});
        })
        selectedPost.comments.map(async(cmnt)=>{
            const deletecmnt = await Comment.deleteOne({_id:cmnt});
        })
        const deleteThePost = await Post.deleteOne(selectedPost);
        res.status(200).json({
            success: true,
        })
    }catch(error){
        next();
    }
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

export const removeComment = async(req,res,next) => {
    const post = req.body.post;
    const delComment = req.body.id;
    try{
        const postData = await Post.findOneAndUpdate({_id:post},{
            $pull: {comments:delComment}
        });

        const deletedData = await Comment.deleteOne({_id:delComment});
        res.status(200).json({
            deletedData
        });
    }catch(error){
        next();
    }
}

export const isLike = async(req,res,next) => {
    try{
        const {post,user} = req.body;
        const isLiked = await Likes.findOne({post,user});
        if(isLiked){
            res.status(200).json({
                isLiked: true,
                likeId: isLiked
            })
        }else{
            res.status(200).json({
                isLiked: false,
                likeId: null
            })
        }
    }catch(error){
        next();
    }
}

export const addLike = async(req,res,next) => {
    try{
        const {post,user} = req.body;
        const newLike = new Likes({post,user});
        const isLiked = await Likes.findOne({post,user});
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
                post: updatedPost,
                like: updatedLike
            })
        }
    }catch(error){
        next();
    }
}

export const removeLike = async(req,res,next) => {
    console.log("hello");
    try{
        const like = req.body;
        const targetPost = await Post.findOneAndUpdate({_id:like.post},{
            $pull: {likes:like.id}
        }, {new:true});
        const isLiked = await Likes.deleteOne({_id:like.id});
        res.status(200).json({
            isLiked
        })
    }catch{
        next();
    }
}