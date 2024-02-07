import React, { useEffect, useState } from 'react'
import { AiOutlineLike } from "react-icons/ai";
import { FaRegComments } from "react-icons/fa";
import { IoPeople } from "react-icons/io5";
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import StandardBtn from '../StandardBtn';
import BlogPostComments from './BlogPostComments';

const BlogPost = () => {
    const [commentData, setCommentData] = useState('');
    const [loading , setLoading] = useState(true);
    const [postData , setPostData] = useState(null)
    const dispatch = useDispatch();
    const {currentUser} = useSelector(state => state.user);
    const location = useLocation();
    useEffect(()=>{
        const urlParam = new URLSearchParams(location.search);
        const tabFromURL = urlParam.get('id');
        console.log(tabFromURL);
        try{
            setLoading(true);
            const getUser = async() => {
                const data = await fetch(`/api/post/getPostById?id=${tabFromURL}`);
                const userinfo = await data.json();
                console.log(userinfo);
                setPostData(userinfo.post);
                setLoading(false)
            }
            getUser();
        }catch(error){
            toast.error("Server Error");
        }
    },[]);


    const createCommentHandler = async()=>{
        const newComment = {
            post: postData._id,
            user: currentUser._id,
            body: commentData
        }
        const data = await fetch('/api/post/createComment',{
            method:'post',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify(newComment)
        })
        const newCommentData = await data.json();
        console.log(newCommentData);
        window.location.reload();
    }

  return (
    loading?
    (<div>

    </div>)
    :
    (
    <div className='flex flex-col items-center bg-lightBgColor dark:bg-gray-800 dark:text-white'>
        <div>
            <img src={postData.user.profilePhoto} alt='' className='h-[100px] w-[100px] mt-9 rounded-full border border-gray-800 dark:border-gray-300' />
        </div>
        <div className='flex text-lg mt-1 mb-3 items-center'>
            <p className='mx-3'>
                {postData.user.userName}
            </p>
            <IoPeople />       
        </div>
        <div>
            {postData.user._id==currentUser._id?
            (<div className='flex gap-3 mb-6'>
                <StandardBtn value={"Edit"} addon={'rounded-lg'} />
                <Link to="/blog" className='rounded-lg text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium text-sm px-4 py-2 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800'>
                    Remove
                </Link>    
            </div>)
            :
            (<div className='flex gap-3 mb-6'>
                    <StandardBtn value={"Follow"} addon={'rounded-lg'} />
                    <Link className='rounded-lg text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium text-sm px-4 py-2 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800'>
                        Block
                    </Link>
            </div>)}
        </div>
        <div className='text-6xl'>
            {postData.title}
        </div>
        <div className='w-[90%] min-h-screen my-5 text-lg'>
            {postData.body}
        </div>
        <div className='flex justify-between w-[90%]'>
            <button className='flex items-center my-3 text-2xl border py-2 px-3 rounded-lg border-black dark:border-gray-300'>
                <AiOutlineLike /> Like
            </button>
            <Link to='/blog' className='flex items-center my-3 text-2xl border py-2 px-3 rounded-lg border-black dark:border-gray-300'>
                Back to Post
            </Link>
        </div>
        <div className='w-[90%]'>
            <div className='flex text-xl my-2 rounded-lg overflow-hidden'>
                <input type='text' onChange={(e)=>setCommentData(e.target.value)} placeholder='Comment Here' className='border w-full rounded-l-lg py-2 px-3 text-black' value={commentData} />
                <button onClick={createCommentHandler} className='bg-blue-800 text-white py-2 px-3'>
                    Comment
                </button>
            </div>
            <div className='flex items-center gap-2 text-xl my-5'>
                Comments <FaRegComments /> {postData.comments.length}
            </div>
            
            <BlogPostComments postData={postData} />
        </div>
    </div>
    )
  )
}

export default BlogPost
