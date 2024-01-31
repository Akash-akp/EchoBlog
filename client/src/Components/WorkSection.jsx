import React from 'react'
import { TiTick } from "react-icons/ti";

const WorkSection = () => {
  return (
    <div>
      <div className='mx-12 my-5 py-[40px]'>
        <div>
          <h1 className='text-5xl my-9 font-bold'>WHAT DO WE PROVIDE?</h1>
          <ul className='text-2xl flex flex-col gap-5'>
            <div className='flex'>
              <div className='w-[40px]'>
                <TiTick className=' text-blue-500 text-4xl' />
              </div>
              <li><span className='font-semibold'>Information Sharing:</span> Echo Blog offers a platform for individuals to express themselves, share their stories, and connect with others.</li>
            </div>
            <div className='flex'>
              <div className='w-[40px]'>
                <TiTick className=' text-blue-500 text-4xl' />
              </div>
              <li><span className='font-semibold'>Content Publication:</span> This content can cover a wide range of topics, including personal experiences, industry insights, tutorials, reviews, and more</li>
            </div>
            <div className='flex'>
              <div className='w-[40px]'>
                <TiTick className=' text-blue-500 text-4xl' />
              </div>
              <li><span className='font-semibold'>Networking:</span> This websites allow for interaction with readers through comments, social media sharing, and engagement features.</li>
            </div>
            <div className='flex'>
              <div className='w-[40px]'>
                <TiTick className=' text-blue-500 text-4xl' />
              </div>
              <li><span className='font-semibold'>Brand Building:</span> For businesses, a blog is a crucial component of online presence and brand building.</li>
            </div>
            <div className='flex'>
              <div className='w-[40px]'>
                <TiTick className=' text-blue-500 text-4xl' />
              </div>
              <li><span className='font-semibold'>Monetization:</span> Some blogs generate revenue through various monetization strategies, such as advertising, sponsored content, affiliate marketing, or selling products/services.</li>
            </div>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default WorkSection;