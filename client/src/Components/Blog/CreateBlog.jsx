import React, { useEffect, useRef } from 'react'
import StandardBtn from '../StandardBtn'

const CreateBlog = ({setCreateBlogUI}) => {
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
    })
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
                <input type='text' className='bg-gray-300 dark:bg-gray-600 px-2 py-1 font-thin rounded-lg w-[530px]' required/>
            </div>
            <div className='flex gap-2 text-2xl mt-5 items-center'>
                <div className='font-semibold w-[100px]'>
                    Body : 
                </div>
                <textarea rows={10}  className='bg-gray-300 dark:bg-gray-600 px-2 py-1 font-thin rounded-lg w-[530px]' required/>
            </div>
            <div className='flex gap-2 text-2xl mt-5 items-center'>
                <div className='font-semibold w-[100px]'>
                    Image : 
                </div>
                <input type='file' className='bg-gray-300 dark:bg-gray-600 px-2 py-1 font-thin rounded-lg w-[530px]' />
            </div>
            <StandardBtn value={"Post"} addon={" m-5 rounded-full text-xl px-[50px] "} />
        </form>
    </div>
  </div>
  )
}

export default CreateBlog
