import React from 'react'
import CatCrying from '../../img/sad-cat-crying-cat.gif'
import { AiOutlineLike } from "react-icons/ai";
import { FaRegComments } from "react-icons/fa";
import { IoPeople } from "react-icons/io5";

const BlogCard = () => {
  return (
    <div className='flex flex-col w-[280px] h-[320px] rounded-xl bg-white border border-gray-200 dark:border-gray-700 dark:bg-gray-800 dark:text-white shadow-2xl hover:scale-110 transition-transform duration-500 ease-in-out overflow-hidden'>
      <div className='h-[150px] w-full bg-blue-800'>
        <img src={CatCrying} alt='post-img' className='h-full w-full bg-cover' />
      </div>
      <div className='my-2 mx-3'>
        <div className='flex gap-2 text-sm justify-between'>
            <div className='flex items-center'> 
                <div className='mr-1'>
                    Name
                </div>
                0 <IoPeople className='text-lg ' />
            </div>
            <div className='flex items-center gap-2'>
                <div className='flex'> 
                    0 <AiOutlineLike className='text-lg' />
                </div>
                <div className='flex items-center'> 
                    0 <FaRegComments className='text-lg ml-1' />
                </div>
            </div>
        </div>
        <h1 className='text-lg'>
            Heading
        </h1>
        <p className='text-sm'>
            Description
        </p>
      </div>
    </div>
  )
}

export default BlogCard
