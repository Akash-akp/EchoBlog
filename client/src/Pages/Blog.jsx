import React, { useState } from 'react'
import BlogSideBar from '../Components/Blog/BlogSideBar'
import BlogMain from '../Components/Blog/BlogMain'
import CreateBlog from '../Components/Blog/CreateBlog'

const About = () => {
  const [createBlogUI,setCreateBlogUI] = useState(false);
  return (
    <div className='xl:h-[1600px] lg:h-[2300px] h-[4500px] w-full bg-white dark:bg-gray-900'>
      <div className='flex h-full w-full justify-between'>
        <BlogSideBar setCreateBlogUI={setCreateBlogUI} />
        <div className='w-[calc(100%-350px)]'>
          <BlogMain />
        </div>
      </div>
      <div className={createBlogUI?('block'):('hidden')}  >
        <CreateBlog setCreateBlogUI={setCreateBlogUI} />
      </div>
    </div>
  )
}

export default About
