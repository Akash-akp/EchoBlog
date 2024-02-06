import React from 'react'
import CatCrying from '../../img/sad-cat-crying-cat.gif'
import { AiOutlineLike } from "react-icons/ai";
import { FaRegComments } from "react-icons/fa";
import { IoPeople } from "react-icons/io5";

const BlogCard = ({title,body,userName,likesCount,commentsCount,userProfileImg}) => {
  if(userName.length>12){
    userName = userName.substring(0,10)+"...";
  }
  if(title.length>32){
    title = title.substring(0,30)+"...";
  }
  if(body.length>153){
    body = body.substring(0,150)+"...";
  }
  return (
    <div className='flex flex-col w-[280px] h-[320px] rounded-xl bg-white border border-gray-200 dark:border-gray-700 dark:bg-gray-800 dark:text-white shadow-2xl hover:scale-110 transition-transform duration-500 ease-in-out overflow-hidden'>
      <div className='h-[150px] w-full bg-blue-800'>
        {/* <img src={CatCrying} alt='post-img' className='h-full w-full bg-cover' /> */}
      </div>
      <div className='my-2 mx-3'>
        <div className='flex gap-2 text-sm justify-between'>
            <div className='flex items-center'> 
                <img src={userProfileImg} alt='' className='h-5 rounded-full pr-1' />
                <div className='mr-1'>
                    {userName}
                </div>
                0 <IoPeople className='text-lg ' />
            </div>
            <div className='flex items-center gap-2'>
                <div className='flex'> 
                  {likesCount} <AiOutlineLike className='text-lg' />
                </div>
                <div className='flex items-center'> 
                  {commentsCount} <FaRegComments className='text-lg ml-1' />
                </div>
            </div>
        </div>
        <h1 className='text-lg font-semibold'>
            {title}
        </h1>
        <p className='text-sm font-thin'>
            {body}
        </p>
      </div>
    </div>
  )
}

export default BlogCard
