import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { RiTwitterXFill } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='h-[250px] w-full bg-white dark:bg-gray-800 dark:text-white p-5 border-t-4 border-gray-500 dark:border-gray-300 relative'>
        <div className='text-2xl font-semibold'>
            EchoBlog
        </div>
        <div className='flex md:w-[600px] w-[400px] justify-around absolute right-0'>
            <div className=''>
                <h1 className='text-md font-semibold'> ABOUT </h1>
                <Link className='text-sm my-2 block hover:underline'>About Section</Link>
                <Link className='text-sm my-2 block hover:underline'>Akashakp's Project</Link>
            </div>
            <div className=''>
                <h1 className='text-md font-semibold'> FOLLOW US </h1>
                <Link className='text-sm my-2 block hover:underline'>Github</Link>
                <Link className='text-sm my-2 block hover:underline'>Discord</Link>
            </div>
            <div className=''>
                <h1 className='text-md font-semibold'> LEGAL </h1>
                <Link className='text-sm my-2 block hover:underline'>Privacy Policy</Link>
                <Link className='text-sm my-2 block hover:underline'>Term and Codition</Link>
            </div>
        </div>
        <div className='w-full absolute bottom-0 flex justify-center left-0'>
            <div className='h-[60px] w-[95%] border-t border-gray-400 py-4 flex justify-between items-end'>
                <div className='text-sm'>
                &#169; 2024 EchoBlog
                </div>
                <div className=''>
                    <div className='flex text-2xl gap-6 text-gray-400 dark:text-gray-600'>
                        <Link className='hover:text-gray-600 dark:hover:text-gray-300'><FaFacebook /></Link>
                        <Link className='hover:text-gray-600 dark:hover:text-gray-300'><FaInstagram /></Link>
                        <Link className='hover:text-gray-600 dark:hover:text-gray-300'><RiTwitterXFill /></Link>
                        <Link className='hover:text-gray-600 dark:hover:text-gray-300'><FaGithub /></Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer
