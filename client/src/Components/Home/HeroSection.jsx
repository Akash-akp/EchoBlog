import React from 'react'
import blogHeroImg from '../../img/blog-hero-img.png'
import StandardBtn from '../StandardBtn'

const HeroSection = () => {
  return (
    <div className='flex justify-center'>
      <div className="flex relative w-full items-center max-w-[1280px]">
        <div className='w-[750px] p-10 flex flex-col gap-5'> 
          <h1 className='text-5xl font-sans font-bold'>
            Discover Nice Article Here
          </h1>
          <p className='text-lg text-gray-700 dark:text-gray-400 py-2'>
            All the articles and content on the site are <span className='text-black font-medium dark:text-white'>updated daily</span>, and <br /> don't forget to let <span className='text-black font-medium dark:text-white'>your Blog Echo here</span>.
          </p>
          <StandardBtn address="/blog" value="Discover Blogs" addon="rounded-full text-xl "/>
        </div>
        <div className='md:w-[60%]'>
          <img src={blogHeroImg} alt="" className='lg:w-[100%] lg:relative absolute top-0 right-0 w-[40%] md:block hidden' />
        </div>
      </div>
    </div>
  )
}

export default HeroSection
