import mongoose from "mongoose";

const likesSchema = mongoose.Schema({
    post:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Post"
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
})

const Likes = mongoose.model("Likes",likesSchema);
export default Likes;