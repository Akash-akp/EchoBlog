import React from 'react'
import Card from './TestimonialCard'
import { useState } from 'react'
import { GoDotFill } from "react-icons/go";

const Testimonials = ({data}) => {
    const [currentId,setCurrentId] = useState(1);

    const incCurrentId = ()=>{
        if(currentId===7){
            return;
        }
        setCurrentId((currentId+1)%8);
    }
    
    const decCurrentId = ()=>{
        if(currentId===0){
            return;
        }
        setCurrentId((8+currentId-1)%8);
    }

    const currentColor = (id)=>{
        if(id===currentId){
            return 'text-blue-500';
        }else{
            return 'text-gray-300';
        }
    }
    
  return (
    <div className=''>
    <div className='max-w-[1280px] mx-auto text-center py-9 flex flex-col justify-center items-center '>
      <h2 className='text-lg'>
        SEE WHAT OUR CLIENTS HAVE TO SAY
      </h2>
      <h1 className='text-4xl mt-2 mb-8'>
        Testimonials
      </h1>
      <div className='h-[200px] w-[100%] relative md:my-[70px] my-[20px] text-black'>
        <Card id={0} data={data[0]} currentId={currentId} setCurrentId={setCurrentId} ></Card>
        <Card id={1} data={data[1]} currentId={currentId} setCurrentId={setCurrentId} ></Card>
        <Card id={2} data={data[2]} currentId={currentId} setCurrentId={setCurrentId} ></Card>
        <Card id={3} data={data[3]} currentId={currentId} setCurrentId={setCurrentId} ></Card>
        <Card id={4} data={data[4]} currentId={currentId} setCurrentId={setCurrentId} ></Card>
        <Card id={5} data={data[5]} currentId={currentId} setCurrentId={setCurrentId} ></Card>
        <Card id={6} data={data[6]} currentId={currentId} setCurrentId={setCurrentId} ></Card>
        <Card id={7} data={data[7]} currentId={currentId} setCurrentId={setCurrentId} ></Card>
      </div>
      <div className='flex flex-col w-[100%] items-center gap-4'>
        <div className='flex justify-between mt-9 w-[150px] items-center text-black'>
            <button onClick={decCurrentId} className={(currentId===0?('bg-gray-800 text-white shadow-none'):('bg-white'))+' h-10 w-10 flex items-center justify-center rounded-full text-lg font-bold shadow-md hover:shadow-none hover:bg-gray-700 dark:hover:bg-gray-800 hover:text-white'}>
                &lt;
            </button>
            <button onClick={incCurrentId} className={(currentId===7?('bg-gray-800 text-white shadow-none'):('bg-white'))+' h-10 w-10 flex items-center justify-center rounded-full text-lg font-bold shadow-md hover:shadow-none hover:bg-gray-700 dark:hover:bg-gray-800 hover:text-white'}>
                &gt;
            </button>
        </div>
        <div className='flex'>
            <GoDotFill className={currentColor(0)} />
            <GoDotFill className={currentColor(1)} />
            <GoDotFill className={currentColor(2)} />
            <GoDotFill className={currentColor(3)} />
            <GoDotFill className={currentColor(4)} />
            <GoDotFill className={currentColor(5)} />
            <GoDotFill className={currentColor(6)} />
            <GoDotFill className={currentColor(7)} />
        </div>
      </div>
    </div>
    </div>
  )
}

export default Testimonials
