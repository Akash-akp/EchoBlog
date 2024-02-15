import mongoose from "mongoose";

const postSchema = mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    title:{
        type: String,
        required: true
    },
    body:{
        type: String,
        required: true
    },
    likes:{
        type: [mongoose.Schema.Types.ObjectId],
        ref: "Likes"
    },
    comments:{
        type: [mongoose.Schema.Types.ObjectId],
        ref: "Comment"
    }
})

const Post = mongoose.model("Post",postSchema);
export default Post;