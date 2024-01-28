import React from 'react'
// import logo from '../img/logo.png'
import SignUp from './SignUp'
import SignIn from './SignIn'
import img1 from '../img/illustration1.png'
import { useLocation } from 'react-router-dom'

const FormUI = () => {
    const location = useLocation();
  return (
    <div className='bg-[rgb(233,226,245)] dark:bg-gray-400 h-[100vh] w-full flex justify-center items-center'>
        <div className='bg-[rgb(240,240,240)] dark:bg-gray-300 h-[600px] xl:w-[80%] w-[90%] rounded-2xl relative overflow-hidden shadow-lg'>
            <div className='bg-violet-500 h-[340px] w-[340px] rounded-full absolute top-[5%] left-[25%] blur-[100px]'>

            </div>
            <div className='bg-blue-500 h-[340px] w-[340px] rounded-full absolute top-[30%] left-[18%] blur-[100px]'>

            </div>
            <div className='bg-green-500 h-[340px] w-[340px] rounded-full absolute bottom-[5%] left-[10%] blur-[100px]'>

            </div>
            <div className='h-full w-full absolute opacity-50 backdrop-blur-sm'>

            </div>

            <div className='absolute flex h-full w-full'>
                <div className='md:flex flex-col w-[50%] justify-center items-center hidden'>
                    <div className='w-[550px]'>
                        <div className='text-center font-bond lg:text-5xl text-4xl my-10'>
                            Welcome to <span className='font-bold'>EchoBlog</span>!
                        </div>
                        <div className='lg:text-xl text-md my-3 lg:w-[350px] w-[300px] mx-auto'>
                            
                            Ready to share your thoughts with the world? Join EchoBlog today and be part of a vibrant community of bloggers.
                        </div>
                        <img src={img1} alt='' className='w-[400px] mx-auto'/>
                    </div>
                </div>
                <div className='md:w-[50%] w-full relative flex justify-center items-center'>
                    <div className='bg-white dark:bg-gray-800 dark:text-white md:w-[80%] w-[90%] h-[530px] rounded-2xl shadow-lg'>
                        <div className='flex justify-center items-center gap-2 mb-5 mt-7'>
                            {/* <img src={logo} alt='' className='h-[45px]'></img> */}
                            <div className='text-3xl font-semibold'>EchoBlog</div>
                        </div>
                        <div className='mx-5'>
                            {location.pathname==='/sign-up'?(<SignUp />):location.pathname==='/sign-in'?(<SignIn />):(<div></div>)}
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default FormUI
