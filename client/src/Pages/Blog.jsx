import React from 'react'
import BlogSideBar from '../Components/Blog/BlogSideBar'
import BlogMain from '../Components/Blog/BlogMain'

const About = () => {
  return (
    <div className='xl:h-[1600px] lg:h-[2300px] h-[4500px] w-full bg-white dark:bg-gray-900'>
      <div className='flex h-full w-full justify-between'>
        <BlogSideBar />
        <div className='w-[calc(100%-350px)]'>
          <BlogMain />

        </div>
      </div>
    </div>
  )
}

export default About
