import React from 'react'

const ProjectCard = ({title,body}) => {
  return (
    <div>
      <div className='flex flex-col w-[280px] h-[320px] rounded-xl bg-white border border-gray-200 dark:border-gray-700 dark:bg-gray-800 dark:text-white shadow-2xl hover:scale-110 transition-transform duration-500 ease-in-out overflow-hidden'>
      <div className='h-[150px] w-full bg-blue-800'>
        {/* <img src={CatCrying} alt='post-img' className='h-full w-full bg-cover' /> */}
      </div>
      <div className='my-2 mx-3'>
        <h1 className='text-lg font-semibold'>
            {title}
        </h1>
        <p className='text-sm font-thin'>
            {body}
        </p>
      </div>
    </div>
    </div>
  )
}

export default ProjectCard
