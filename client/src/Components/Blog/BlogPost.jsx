import React, { useEffect, useState } from 'react'
import { AiOutlineLike } from "react-icons/ai";
import { FaRegComments } from "react-icons/fa";
import { IoPeople } from "react-icons/io5";
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import StandardBtn from '../StandardBtn';
import BlogPostComments from './BlogPostComments';
import { TbThumbUpFilled } from "react-icons/tb";
import { FaComments } from "react-icons/fa6";
import { signInSuccess } from '../../Redux/user/userSlice';
import UpdateBlog from './UpdateBlog';

const BlogPost = () => {
    const [isPostUserFollowed , setIsPostUserFollowed] = useState(false);
    const [isUpdateShow,setIsUpdateShow] = useState(false);
    const [isLiked, setIsLiked] = useState(null);
    const [commentData, setCommentData] = useState('');
    const [loading , setLoading] = useState(true);
    const [postData , setPostData] = useState(null)
    const dispatch = useDispatch();
    const {currentUser} = useSelector(state => state.user);
    const location = useLocation();
    const navigate = useNavigate();
    useEffect(()=>{
        const urlParam = new URLSearchParams(location.search);
        const tabFromURL = urlParam.get('id');
        try{
            setLoading(true);
            const getUser = async() => {
                const data = await fetch(`/api/post/getPostById?id=${tabFromURL}`);
                const userinfo = await data.json();
                const data2body = {
                    post: userinfo.post._id,
                    user: currentUser._id
                }
                const data2 = await fetch('/api/post/isLike',{
                    method: 'post',
                    headers: {'Content-Type':'application/json'},
                    body: JSON.stringify(data2body)
                })
                const likedata = await data2.json();
                setPostData(userinfo.post);
                console.log(userinfo.post)
                setIsPostUserFollowed(currentUser.following.includes(userinfo.post.user._id));
                if(likedata.likeId){
                    setIsLiked(likedata.likeId._id);
                }else{
                    setIsLiked(null);
                }
                setLoading(false)
            }
            getUser();
        }catch(error){
            toast.error("Server Error");
        }
    },[isLiked,isPostUserFollowed]);


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
        window.location.reload();
    }

    const likeHandler = async() => {
        if(isLiked!=null){
            const removeLike = {
                post: postData._id,
                id: isLiked,
                user: currentUser._id
            }
            console.log("isLiked",isLiked);
            try{
                const data = await fetch('/api/post/removeLike',{
                    method:'DELETE',
                    headers: {'Content-Type':'application/json'},
                    body: JSON.stringify(removeLike)
                })
                const likeData = await data.json();
                console.log(likeData);
                toast.success("UnLiked");
                setIsLiked(null);
            }catch(error){
                toast.error("Unable to unlike");
            }
            
        }else{
            const newLike = {
                post: postData._id,
                user: currentUser._id,
            }
            try{
                const data = await fetch('/api/post/addLike',{
                    method:'post',
                    headers: {'Content-Type':'application/json'},
                    body: JSON.stringify(newLike)
                })
                const pData = await data.json();
                console.log(pData.like._id);
                setIsLiked(pData.like._id);
                toast.success("Liked");
            }catch(error){
                toast.error("Unable to like");
            }
        }
    }

    const FollowHandler = async(event)=>{
        try{
            const FollowData = {
                id : postData.user._id,
                selfid : currentUser._id
            }
            console.log(FollowData);
            const data = await fetch('/api/user/followUser',{
                method:'post',
                headers: {'Content-Type':'application/json'},
                body: JSON.stringify(FollowData)
            })
            const d = await data.json();
            dispatch(signInSuccess(d.user));
            setIsPostUserFollowed(!isPostUserFollowed);
        }catch(error){
            toast.error("Cannot Followed");
        }
    }
    
    const unFollowHandler = async(event)=>{
        try{
            const FollowData = {
                id : postData.user._id,
                selfid : currentUser._id
            }
            console.log(FollowData);
            const data = await fetch('/api/user/unFollowUser',{
                method:'post',
                headers: {'Content-Type':'application/json'},
                body: JSON.stringify(FollowData)
            })
            const d = await data.json();
            dispatch(signInSuccess(d.user));
            setIsPostUserFollowed(!isPostUserFollowed);
        }catch(error){
            toast.error("Cannot UnFollowed");
        }
    }

    const removePostHandler = async(event) => {
        try{
            const removePostIdData = {
                id: postData._id
            }
            const data = await fetch('/api/post/removePost',{
                method: 'delete',
                headers: {'Content-Type':'application/json'},
                body: JSON.stringify(removePostIdData)
            });
            setTimeout(()=>{
                window.location.reload();
            },2000);
            const userUpdate = await fetch(`/api/post/getUserById?id=${currentUser._id}`);
            const userUpdateData = await userUpdate.json();
            dispatch(signInSuccess(userUpdateData.user));
            toast.success("Post Deleted");
        }catch(error){
            toast.error("Unable to delete post");
        }
    }

    const editClickHandler = (event)=>{
        event.preventDefault();
        setIsUpdateShow(true);
    }

  return (
    loading?
    (<div className='h-screen dark:bg-gray-800 bg-lightBgColor'>

    </div>)
    :
    (
    <div className='flex flex-col items-center bg-lightBgColor dark:bg-gray-800 dark:text-white'>
        {isUpdateShow?(<UpdateBlog setIsUpdateShow={setIsUpdateShow} postData={postData} />):(<div></div>)}
        <div>
            <img src={postData.user.profilePhoto} alt='' className='h-[100px] w-[100px] mt-9 rounded-full border border-gray-800 dark:border-gray-300' />
        </div>
        <div className='flex text-lg mt-1 items-center'>
            <p className='mx-3'>
                {postData.user.userName}
            </p>
            {postData.user.follower.length} 
            <IoPeople className='ml-1' /> 
        </div>
        <div className='flex gap-1 items-center text-md text-black mb-3 dark:text-white'>
            {postData.likes.length} <TbThumbUpFilled className='mr-3' />
            {postData.comments.length} <FaComments />
        </div>      
        <div>
            {postData.user._id===currentUser._id?
            (<div className='flex gap-3 mb-6'>
                <button onClick={editClickHandler}>
                    <StandardBtn value={"Edit"} addon={'rounded-lg'} />
                </button>
                <Link to="/blog" onClick={removePostHandler} className='rounded-lg text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium text-sm px-4 py-2 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800'>
                    Remove
                </Link>    
            </div>)
            :
            (<div className='flex gap-3 mb-6'>
                    {isPostUserFollowed?(
                        <button onClick={unFollowHandler} >
                            <StandardBtn address={`/blog-post?id=${postData._id}`} value={"UnFollow"} addon={'rounded-lg'}/>
                        </button>
                    ):(
                        <button onClick={FollowHandler} >
                            <StandardBtn address={`/blog-post?id=${postData._id}`} value={"Follow"} addon={'rounded-lg'}/>
                        </button>
                    )}
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
            <button onClick={likeHandler} className={` ${isLiked?('bg-blue-700 text-white border-gray-300'):('')} flex items-center my-3 text-2xl border py-2 px-3 rounded-lg border-black dark:border-gray-300 hover:bg-blue-700 hover:text-white hover:border-white relative`}>
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
