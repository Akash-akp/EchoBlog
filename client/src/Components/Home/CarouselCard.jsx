import React from 'react'
import { Link } from 'react-router-dom';

const CarouselCard = () => {
    const trendingArticle = "Artificial Intelligence (AI) transcends imagination, reshaping possibilities. It navigates complex data, automates tasks, and evolves with machine learning. Beyond human limits, AI fuels innovation, transforming industries and daily life. Its potential, boundless, sparks a future where machines comprehend, adapt, and create, unveiling an extraordinary era of technological advancement.";
  return (
    <div className='w-[90%] max-w-[1280px] my-5 h-[400px] bg-blue-800 dark:bg-blue-700 rounded-xl relative flex flex-col items-center py-5 gap-8 shadow-2xl'>
        <div className='bg-white h-[70px] w-[250px] rounded-full relative flex items-center'>
            <img src={'https://randomuser.me/api/portraits/men/3.jpg'}  alt='perso-img' className='h-[60px] rounded-full m-2'/>
            <div className='text-lg ml-3 text-black'>
                Charlie Brown
            </div>
        </div>
        <div className='text-white text-5xl'>
            Artificial Intelligence Beyond Imagination
        </div>
        <p className='text-gray-300 text-lg w-[80%]'>
            {trendingArticle.substring(0,400)+"...."}
            <Link className='font-bold hover:underline text-blue-400'>Read More</Link>
        </p>
    </div>
  )
}

export default CarouselCard
