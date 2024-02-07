import React, { useEffect, useState } from 'react'
import BlogCard from './BlogCard'
import { Link } from 'react-router-dom';

const BlogMain = () => {
  const [loading,setLoading] = useState(true);
  const [allPost,setAllPost] = useState(null);
  const allBlogData = async() =>{
    try{
      setLoading(true);
      const data = await fetch('/api/post/getPost');
      const allBlogs = await data.json();
      setAllPost(allBlogs);
      setLoading(false);
    }catch(eror){
      
    }
  }
  useEffect(()=>{
    allBlogData();
  },[])
  console.log(allPost);
  return (
    <div className='mx-5 my-10 flex justify-center'>
        <div className='grid xl:grid-cols-3 lg:grid-cols-2 gap-10'>
          {loading?
          (<div> </div>):
          (
            allPost.post.map((pst,index)=>{
              return (
                <Link to='/blog-post'>
              <BlogCard key={index} title={pst.title} body={pst.body} userName={pst.user.userName} likesCount={pst.likes.length} commentsCount={pst.comments.length} userProfileImg={pst.user.profilePhoto} />
              </Link>
              )
          })
          )
          }
        </div>
    </div>
  )
}

export default BlogMain
