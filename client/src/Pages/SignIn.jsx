import React from 'react'
import GoogleImage from '../img/google.png'
import { useState } from 'react'
import { Link } from 'react-router-dom';

const SignIn = () => {
    const [formData , setFormData] = useState({userId:"",userPassword:""});
    const changeHandler = (event)=>{
        console.log(formData);
        setFormData((prev)=>{
            return {...prev ,[event.target.name]:event.target.value}
        })
    }
  return (
    <div>
        <div className='text-center mb-5'>
            <div className='text-xl'>
                Login account
            </div>
            <div className='text-sm text-gray-500 dark:text-gray-400'>
                Don't have an account? <Link to='/sign-up' className='text-blue-600 dark:text-blue-300 hover:underline'>Create account</Link>
            </div>
        </div>
      <form className='flex flex-col items-center gap-3'>
        <input type='email' placeholder='Email Address' name='userId' value={formData.userId} onChange={changeHandler}  className='border border-gray-300 rounded-lg w-[280px] px-3 py-2 text-sm'></input>
        <input type='password' placeholder='Password' name='userPassword' value={formData.userPassword} onChange={changeHandler}  className='border border-gray-300 rounded-lg w-[280px] px-3 py-2 text-sm'></input>
        <button className='bg-blue-600 w-[280px] py-2 rounded-lg hover:bg-blue-800 text-white'>Log In</button>
        <p className='text-[10px] text-gray-500 dark:text-gray-400 relative bottom-1'>By login you agree to our <span className='text-blue-600 dark:text-blue-300 hover:underline'>Term of Use</span> and <span className='text-blue-600 dark:text-blue-300 hover:underline'>PrivacyPolicy</span>.</p>
      </form>
      <div className='flex flex-col items-center my-3'>
        <div className='w-[280px] flex items-center text-gray-800'>
            <div className='border w-full'></div>
            <div className='text-sm w-[330px] text-center dark:text-white'>Continue with</div>
            <div className='border w-full'></div>
        </div>
        <div className='border border-gray-300 rounded-lg w-[280px] my-3 px-3 py-2 text-sm cursor-pointer relative'>
            <div className='absolute left-3 top-1'>
                <img src={GoogleImage} className='h-[30px]' alt='google-img'></img>
            </div>
            <div className='text-center'>
                Google
            </div>
        </div>
      </div>
    </div>
  )
}

export default SignIn
