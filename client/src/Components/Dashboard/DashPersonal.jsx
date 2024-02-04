import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { useSelector } from 'react-redux'

const DashPersonal = () => {
    const { currentUser } = useSelector(state => state.user);
    const [userName , setUserName] = useState(currentUser.userName);

    const inputChangeHandler = (event) => {
        setUserName(event.target.value);
    }
  return (
    <div className='w-full h-full flex justify-center dark:text-white'>
      <form>
                <div className='flex gap-2 text-2xl mt-5 items-center'>
                    <div className='font-semibold w-[210px]'>
                        User Name : 
                    </div>
                    <div onClick={()=>toast.error("You can change it in profile tab")} className='bg-gray-300 dark:bg-gray-600 px-2 py-1 font-thin rounded-lg w-[330px]'>
                        {userName}     
                    </div>
                </div>
                <div className='flex gap-2 text-2xl mt-5 items-center'>
                    <div className='font-semibold w-[210px]'>
                        Email Id : 
                    </div>
                    <div className='dark:bg-gray-600 bg-gray-300 px-2 py-1 font-thin rounded-lg w-[330px]'>
                        {currentUser.email}
                    </div>
                </div>
                <div className='flex gap-2 text-2xl mt-5 items-center'>
                    <div className='font-semibold w-[210px]'>
                        Phone Number :
                    </div>
                    <input type='Number' className='dark:bg-gray-600 bg-gray-300 px-2 py-1 font-thin rounded-lg w-[330px]' required />
                </div>
                <div className='flex gap-2 text-2xl mt-5 items-center'>
                    <div className='font-semibold w-[210px]'>
                        Gender :
                    </div>
                    <select className='dark:bg-gray-600 bg-gray-300 px-2 py-1 font-thin rounded-lg w-[330px]' >
                        <option selected>Choose Gender</option>
                        <option>Male</option>
                        <option>Female</option>
                        <option>Other</option>
                    </select>
                </div>
                <div className='flex gap-2 text-2xl mt-5 items-center'>
                    <div className='font-semibold w-[210px]'>
                        Address :
                    </div>
                    <input type='password' className='dark:bg-gray-600 bg-gray-300 px-2 py-1 font-thin rounded-lg w-[330px]' required />
                </div>
                <div className='flex gap-2 text-2xl mt-5 items-center'>
                    <div className='font-semibold w-[210px]'>
                        City :
                    </div>
                    <input type='password' className='dark:bg-gray-600 bg-gray-300 px-2 py-1 font-thin rounded-lg w-[330px]' required />
                </div>
                <div className='flex gap-2 text-2xl mt-5 items-center'>
                    <div className='font-semibold w-[210px]'>
                        Country :
                    </div>
                    <select type='password' className='dark:bg-gray-600 bg-gray-300 px-2 py-1 font-thin rounded-lg w-[330px]'> 
                        <option>Choose Country</option>
                        <option>India</option>
                        <option>Nepal</option>
                        <option>Bhutan</option>
                        <option>Other</option>
                    </select>
                </div>
                <div className='text-center my-5'>
                    <button className='text-white rounded-lg w-[100px] bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-lg px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>
                        Update
                    </button>
                </div>
            </form>
    </div>
  )
}

export default DashPersonal
