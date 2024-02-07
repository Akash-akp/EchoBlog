import React, { useEffect, useState } from 'react'
import { AiOutlineLike } from "react-icons/ai";
import { FaRegComments } from "react-icons/fa";
import { IoPeople } from "react-icons/io5";
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { toast } from 'react-hot-toast';

const BlogPost = () => {
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
        <div className='flex text-lg mt-1 mb-5 items-center'>
            <p className='mx-3'>
                {postData.user.userName}
            </p>
            <IoPeople />       
        </div>
        <div className='text-5xl'>
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
                <input type='text' placeholder='Comment Here' className='border w-full rounded-l-lg py-2 px-3 text-black' />
                <button className='bg-blue-800 text-white py-2 px-3'>
                    Comment
                </button>
            </div>
            <div className='flex items-center gap-2 text-xl my-5'>
                Comments <FaRegComments /> 0
            </div>
            <div className='h-[100px] w-full border my-5 flex justify-center items-center bg-white rounded-lg text-black'>
                No Comments
            </div>
        </div>
    </div>
    )
  )
}

export default BlogPost
