import React, { useEffect, useState } from "react";

const BlogPostEachComment = ({cmnt}) => {
    const [loading , setLoading] = useState(true);
    const [userInfo ,setUserInfo] = useState(null);
    const getUser = async(id)=>{
        setLoading(true);
        const data = await fetch(`/api/post/getUserById?id=${id}`);
        const userinfo = await data.json();
        setUserInfo(userinfo.user);
        console.log(userinfo);
        setLoading(false);
    }
    useEffect(()=>{
        getUser(cmnt.user);
    },[])
  return (
    <div>
        {loading?
        (
            <div></div>
        )
        :
        (
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
        )
        }
    </div>
  );
};

export default BlogPostEachComment;
