import React from 'react'
import { FaStar } from "react-icons/fa";

const TestimonialCard = ({id,data,currentId,setCurrentId}) => {

  const changeId = (id)=>{
    let out = 'h-[250px] lg:w-[500px] w-[380px] rounded-md shadow-lg ';
    if(id===currentId){
      out += 'bg-blue-700 text-white absolute md:-top-[50px] md:scale-[1.12] -top-[25px] left-[50%] -translate-x-[50%] z-20 ';
    }else if(id<(currentId)){
      out += 'bg-white absolute top-0 left-[25%] -translate-x-[50%] ';
      if(id===(currentId-1)){
        out+='z-10 md:block hidden '
      }else{
        if(id===currentId-2){
          out+='z-0 md:block hidden '
        }else{
          out+='z-0 hidden'
        }
      }
    }else if(id>currentId){
      out+='bg-white absolute top-0 left-[75%] -translate-x-[50%] ';
      if(id===currentId+1){
        out+='z-10 md:block hidden '
      }else{
        if(id===currentId+2){
          out+='z-0 md:block hidden '
        }else{
          out+='z-0 hidden '
        }
      }
    }else{
      out+='hidden bg-white absolute top-0 right-[25%] translate-x-[50%] z-0'
    }
    out += ' transition-all duration-1000 ease-in-out '
    return out;
  }

  return (
    <div className={changeId(id)}>
      <div className='flex items-center relative'>
        <div>
          <img src={data.image_url} alt='person-img' className='m-5 h-[50px] rounded-full'></img>
        </div>
        <div className=' text-start '>
          <div className='text-xl'>
            {data.name}
          </div>
          <div className='text-sm'>
            {data.occupation}
          </div>
        </div>
        <div className='flex items-center gap-1 lg:text-lg text-sm absolute lg:right-10 right-6'>
          <FaStar className={data.rating>=1?(" text-[#edd661] "):("text-gray-400")} />
          <FaStar className={data.rating>=2?(" text-[#edd661] "):("text-gray-400")} />
          <FaStar className={data.rating>=3?(" text-[#edd661] "):("text-gray-400")} />
          <FaStar className={data.rating>=4?(" text-[#edd661] "):("text-gray-400")} />
          <FaStar className={data.rating>=5?(" text-[#edd661] "):("text-gray-400")} />
          <div>
            ({data.rating})
          </div>
        </div>
      </div>
      <div className='lg:text-lg text-md text-start lg:mx-8 mx-5 my-2'>
        {data.comment}
      </div>
    </div>
  )
}

export default TestimonialCard
