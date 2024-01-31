import React from 'react'
import CarouselCard from './CarouselCard'
import { GoDotFill } from "react-icons/go";

const Carousel = () => {
  return (
    <div className='flex flex-col justify-center items-center m-5 mb-[40px]'>
        <h1 className='text-3xl font-bold flex'>
        Trending Articles
        </h1>
        <div className='w-screen flex flex-col items-center'>
            <CarouselCard />
            <div className='flex'>
            <GoDotFill className='text-blue-600' />
            <GoDotFill className='text-gray-300' />
            <GoDotFill className='text-gray-300' />
            </div>
        </div>
    </div>

  )
}

export default Carousel
