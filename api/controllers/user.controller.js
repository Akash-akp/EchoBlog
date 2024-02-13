import User from "../models/user.model.js";

export const test = (req,res) => {
    res.json({message:"API is working perfectly"});
};

export const followUser = async(req,res,next) => {
    try{
        const UserId = req.body.id;
        const SelfId = req.body.selfid;
        const isFollowed = await User.findById(UserId);
        if(isFollowed.follower.includes(SelfId)){
            return res.status(200).json({
                isFollowed: true
            })
        }
        const followerData = await User.findOneAndUpdate({_id:UserId},{
            $push:{
                follower: SelfId
            }
        })
        const followingData = await User.findOneAndUpdate({_id:SelfId},{
            $push:{
                following: UserId
            }
        })
        const selfUser = await User.findById(SelfId);
        return res.status(200).json({
            success: true,
            user: selfUser,
        })
    }catch(error){
        next();
    }
}

export const unFollowUser = async(req,res,next) => {
    try{
        const UserId = req.body.id;
        const SelfId = req.body.selfid;
        const isFollowed = await User.findById(UserId);
        if(!isFollowed.follower.includes(SelfId)){
            return res.status(200).json({
                isFollowed: false
            })
        }
        const followerData = await User.findOneAndUpdate({_id:UserId},{
            $pull:{
                follower: SelfId
            }
        })
        const followingData = await User.findOneAndUpdate({_id:SelfId},{
            $pull:{
                following: UserId
            }
        })
        const selfUser = await User.findById(SelfId);
        return res.status(200).json({
            success: true,
            user: selfUser
        })
    }catch(error){
        next();
    }
}