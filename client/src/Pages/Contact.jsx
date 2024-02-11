import React from 'react'
import { IoMdMail } from "react-icons/io";
import { IoLocation } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import StandardBtn from '../Components/StandardBtn'

const Contact = () => {
  return (
    <div className='h-screen flex justify-center items-center text-xl bg-lightBgColor dark:bg-gray-800'>
      <div className='w-[90%] h-[600px] rounded-2xl shadow-lg bg-white relative flex overflow-hidden'>
        <div className='w-[60%] p-5 dark:bg-gray-700 dark:text-white'>
          <div className='w-full px-5 flex flex-col items-center h-[300px] gap-8'>
            <h1 className='text-5xl font-semibold mt-5'>
              Contact Us
            </h1>
            <p className='text-2xl text-gray-600 mx-2 w-[500px] dark:text-gray-400'>
              Feel free to contact us any time. We will get back to you as soon...
            </p>
            <input type='text' placeholder='Name' className='block w-[70%] p-2 border-b-2 border-gray-400 placeholder:text-gray-500 text-2xl placeholder:text-2xl focus:outline-none focus:border-black dark:bg-gray-700 dark:placeholder:text-gray-300 dark:text-white dark:focus:border-white' />
            <input type='email' placeholder='Email' className='block w-[70%] p-2 border-b-2 border-gray-400 placeholder:text-gray-500 text-2xl placeholder:text-2xl focus:outline-none focus:border-black dark:bg-gray-700 dark:placeholder:text-gray-300 dark:text-white dark:focus:border-white' />
            <input type='text' placeholder='Message' className='block w-[70%] p-2 border-b-2 border-gray-400 placeholder:text-gray-500 text-2xl placeholder:text-2xl focus:outline-none focus:border-black dark:bg-gray-700 dark:placeholder:text-gray-300 dark:text-white dark:focus:border-white' />
            <StandardBtn value={'SEND'} addon={'h-[50px] w-[150px] text-xl flex justify-center items-center my-4 rounded-lg '} />
          </div>
        </div>
        <div className='w-[40%] h-full dark:bg-blue-800 bg-blue-600 text-white flex p-5 flex-col items-center'>
          <h1 className='text-5xl my-5'>
            Contact Information
          </h1>
          <div className='flex flex-col justify-center h-[450px]'>
            <div className='flex items-center gap-2 text-xl bg-[#ffffff60] p-5 w-full my-2 rounded-lg hover:bg-[#00000060]'>
              <IoMdMail className='text-3xl'/>
              <p>
                akashakp0037@gmail.com
              </p>
            </div>
            <div className='flex items-center gap-2 text-xl bg-[#ffffff60] p-5 w-full my-2 rounded-lg hover:bg-[#00000060]'>
              <FaYoutube className='text-3xl'/>
              <p>
                GeekNerd
              </p>
            </div>
            <div className='flex items-center gap-2 text-xl bg-[#ffffff60] p-5 w-full my-2 rounded-lg hover:bg-[#00000060]'>
              <FaLinkedin className='text-3xl'/>
              <p>
                LinkedIn profile
              </p>
            </div>
            <div className='flex items-center gap-2 text-xl bg-[#ffffff60] p-5 w-full my-2 rounded-lg hover:bg-[#00000060]'>
              <IoLocation className='text-3xl'/>
              <p>
                Bhubaneswar, Odisha
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
