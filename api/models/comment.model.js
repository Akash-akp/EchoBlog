import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
    post:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Post",
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    body:{
        type: String,
        required: true
    }
})

const Comment = mongoose.model('Comment',commentSchema);

export default Comment;