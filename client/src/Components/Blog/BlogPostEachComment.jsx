import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { FaTrashAlt } from "react-icons/fa";
import toast from "react-hot-toast";

const BlogPostEachComment = ({cmnt,postData}) => {
    const { currentUser } = useSelector((state)=>state.user);
    const [loading , setLoading] = useState(true);
    const [userInfo ,setUserInfo] = useState(null);
    const getUser = async(id)=>{
        setLoading(true);
        const data = await fetch(`/api/post/getUserById?id=${id}`);
        const userinfo = await data.json();
        setUserInfo(userinfo.user);
        setLoading(false);
    }
    useEffect(()=>{
        getUser(cmnt.user);
    },[]);
    
    const deleteCommentHandler = async()=>{
      try{
        const delData = {
          post: postData._id,
          id: cmnt._id
        }
        await fetch('/api/post/removeComment',{
          method: 'delete',
          headers: {'Content-Type':'application/json'},
          body: JSON.stringify(delData)
        });
        window.location.reload();
      }catch(error){
        toast.error("unable to delete comment");
      }
    }
  return (
    <div>
        {loading?
        (
            <div></div>
        )
        :
        (
          <div className="flex justify-between items-center">
            <div>
                <div className="mt-2 ml-2 flex items-center gap-2">
                  <img
                    src={userInfo.profilePhoto}
                    className="h-7 w-7 rounded-full border border-black"
                    alt=""
                  />
                  <div className="text-lg">{userInfo.userName}</div>
                </div>
                <div className="text-sm ml-11 mb-2">{cmnt.body}</div>
            </div>
            {currentUser._id===userInfo._id?
            (
              <button onClick={deleteCommentHandler}>
                <FaTrashAlt className="text-xl mx-3" />
              </button>
            )
            :
            (
              <div>

              </div>
            )
            }
          </div>
        )
        }
    </div>
  );
};

export default BlogPostEachComment;
