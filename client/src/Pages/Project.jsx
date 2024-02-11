import React from 'react'
import ProjectCard from '../Components/Project/ProjectCard'

const Project = () => {
  return (
    <div className='dark:bg-gray-800 bg-lightBgColor h-screen pt-5'>
      <div className='flex justify-center w-full'>
        <div className='w-[90%] grid grid-cols-4 gap-5'> 
          <ProjectCard title={'Project Title'} body={'Project Body'} />
          <ProjectCard title={'Project Title'} body={'Project Body'} />
          <ProjectCard title={'Project Title'} body={'Project Body'} />
          <ProjectCard title={'Project Title'} body={'Project Body'} />
          <ProjectCard title={'Project Title'} body={'Project Body'} />
          <ProjectCard title={'Project Title'} body={'Project Body'} />
          <ProjectCard title={'Project Title'} body={'Project Body'} />
          <ProjectCard title={'Project Title'} body={'Project Body'} />
        </div>
      </div>
    </div>
  )
}

export default Project
