import React from 'react'
import BlogCard from './BlogCard'

const BlogMain = () => {
  return (
    <div className='mx-5 my-10 flex justify-center'>
        <div className='grid xl:grid-cols-3 lg:grid-cols-2 gap-10'>
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        </div>
    </div>
  )
}

export default BlogMain
