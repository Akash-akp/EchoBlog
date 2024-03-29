import React, { useEffect, useRef, useState } from 'react'
import StandardBtn from '../StandardBtn'
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { signInSuccess } from '../../Redux/user/userSlice';

const CreateBlog = ({setCreateBlogUI}) => {
    const dispatch = useDispatch();
    const {currentUser} = useSelector(state => state.user);
    const [formData, setFormData] = useState({title:"",body:""});
    const cardRef = useRef();
    useEffect( ()=>{
        let createBlogHandler = (e)=>{
            if(!cardRef.current.contains(e.target)){
                setCreateBlogUI(false);
            }
        }
        document.addEventListener('mousedown',createBlogHandler);
        return ()=>{
            document.removeEventListener('mousedown',createBlogHandler);
        }
    },[cardRef]);

    const formChangeHandler = (event) =>{
        setFormData((prev)=>{
            return {...prev,[event.target.name]:event.target.value}
        })
    }

    const createBtnHandler = async(event) => {
        if(!formData.title||!formData.body){
            toast.error("Add title and body");
            return;
        }
        const postData = {
            user: currentUser._id,
            title: formData.title,
            body: formData.body
        }
        console.log(postData);
        try{
            const res = await fetch('api/post/createPost',{
                method: 'post',
                headers: {'Content-Type':'application/json'},
                body: JSON.stringify(postData)
            });
            const data = await res.json();
            const res2 = await fetch(`api/post/getUserById?id=${currentUser._id}`);
            const data2 = await res2.json();
            dispatch(signInSuccess(data2.user));

        }catch(error){
            toast.error("Server Error");
        }
        setCreateBlogUI(false);
        window.location.reload();
    }
  return (
  <div className='w-screen h-screen fixed flex justify-center items-center top-0 z-30'>
    <div className='w-full h-full bg-gray-800 dark:bg-gray-500 opacity-80 z-40'>

    </div>
    <div className='absolute w-[80%] h-[90%] bg-white dark:bg-gray-800 dark:text-white opacity-100 z-50 overflow-hidden rounded-2xl shadow-lg' ref={cardRef}>
        <div className='text-5xl m-5'>
            Create Your Post :
        </div>
        <form action="" className='w-full h-full flex flex-col items-center'>
            <div className='flex gap-2 text-2xl mt-5 items-center'>
                <div className='font-semibold w-[100px]'>
                    Title : 
                </div>
                <input onChange={formChangeHandler} type='text' name='title' className='bg-gray-300 dark:bg-gray-600 px-2 py-1 font-thin rounded-lg w-[530px]' value={formData.title} required/>
            </div>
            <div className='flex gap-2 text-2xl mt-5 items-center'>
                <div className='font-semibold w-[100px]'>
                    Body : 
                </div>
                <textarea onChange={formChangeHandler} rows={10} name='body'  className='bg-gray-300 dark:bg-gray-600 px-2 py-1 font-thin rounded-lg w-[530px]' value={formData.body} required/>
            </div>
            <div className='flex gap-2 text-2xl mt-5 items-center'>
                <div className='font-semibold w-[100px]'>
                    Image : 
                </div>
                <input type='file' className='bg-gray-300 dark:bg-gray-600 px-2 py-1 font-thin rounded-lg w-[530px]' />
            </div>
            <button onClick={createBtnHandler} className='mt-7'>
                <StandardBtn value={"Post"} addon={" rounded-full text-xl px-[50px] "} />
            </button>
        </form>
    </div>
  </div>
  )
}

export default CreateBlog
