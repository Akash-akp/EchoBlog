import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { AiOutlineEye , AiOutlineEyeInvisible } from "react-icons/ai";
import { toast }  from 'react-hot-toast'
import ContinueWithGoogle from '../Components/ContinueWithGoogle';

const SignUp = () => {
    // states 
    const [loading , setLoading] = useState(false);
    const navigate = useNavigate();
    const [eyeVisible,setEyeVisible] = useState(true);
    const [eyeVisibleConfirm,setEyeVisibleConfirm] = useState(true);
    const [formData , setFormData] = useState({userName:"",userId:"",userPassword:"",userConfirmPassword:""});
    const changeHandler = (event)=>{
        console.log(formData);
        setFormData((prev)=>{
            return {...prev ,[event.target.name]:event.target.value.trim()}
        })
    }

    // handle password visibility
    const eyeChangeHandler = () =>{
      setEyeVisible(!eyeVisible);
    }
    const eyeChangeConfirmHandler = () =>{
      setEyeVisibleConfirm(!eyeVisibleConfirm);
    }

    const submitHandler = async(event) =>{
      setLoading(true);
      event.preventDefault();
      if(formData.userPassword!==formData.userConfirmPassword){
          toast.error("Password donot match");
          return;
      }
      const UserData = {
        userName: formData.userName,
        email: formData.userId,
        password: formData.userPassword,
      }
      console.log(UserData);
      // setLoggedIn(true);
      try{
        const res = await fetch('/api/auth/signup',{
          method: 'post',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify(UserData)
        });
        const data = await res.json();
        console.log(data);
        if(data.success===false){
          toast.error("Account already exist")
        }else{
          toast.success("Account Created");
          navigate('/');
        }
      }catch(error){

      }
      setLoading(false);
    }

  return (
    <div>
        <div className='text-center mb-5'>
            <div className='text-xl'>
                Create an account
            </div>
            <div className='text-sm text-gray-500 dark:text-gray-400'>
                Already have an account? <Link to='/sign-in' className='text-blue-600 dark:text-blue-300 hover:underline'>Sign in</Link>
            </div>
        </div>
      <form onSubmit={submitHandler} className='flex flex-col items-center gap-3 text-black'>
        <input type='text' placeholder='Name' name='userName' value={formData.userName} onChange={changeHandler} className='border border-gray-300 rounded-lg w-[280px] px-3 py-2 text-sm'></input>
        <input type='email' placeholder='Email Address' name='userId' value={formData.userId} onChange={changeHandler}  className='border border-gray-300 rounded-lg w-[280px] px-3 py-2 text-sm'></input>
        <div className='relative'>
            <input type={eyeVisible?("password"):("text")} placeholder='Password' name='userPassword' value={formData.userPassword} onChange={changeHandler}  className='border border-gray-300 rounded-lg w-[280px] px-3 py-2 text-sm' required></input>
            <div onClick={eyeChangeHandler} className='absolute right-3 top-[10px] text-lg text-gray-400'>
                {eyeVisible?(<AiOutlineEye />):(<AiOutlineEyeInvisible/>)}
            </div>
        </div>
        <div className='relative'>
            <input type={eyeVisibleConfirm?("password"):("text")} placeholder='Confirm Password' name='userConfirmPassword' value={formData.userConfirmPassword} onChange={changeHandler}  className='border border-gray-300 rounded-lg w-[280px] px-3 py-2 text-sm' required></input>
            <div onClick={eyeChangeConfirmHandler} className='absolute right-3 top-[10px] text-lg text-gray-400'>
                {eyeVisibleConfirm?(<AiOutlineEye />):(<AiOutlineEyeInvisible/>)}
            </div>
        </div>
        <button className='bg-blue-600 w-[280px] py-2 rounded-lg hover:bg-blue-800 hover:text-white text-white disabled:bg-gray-500' disabled={loading}>
          {loading?
          (<div role="status" className='flex gap-2 justify-center items-center'>
          <svg aria-hidden="true" className="w-5 h-5 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
              <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
          </svg>
          <span>Loading</span>
          </div>)
          :
          (<div>SignUp</div>)}
        </button>
        <p className='text-[10px] text-gray-500 dark:text-gray-400 relative bottom-1'>By login you agree to our <span className='text-blue-600 dark:text-blue-300 hover:underline'>Term of Use</span> and <span className='text-blue-600 dark:text-blue-300 hover:underline'>PrivacyPolicy</span>.</p>
      </form>
      <div className='flex flex-col items-center my-3'>
        <div className='w-[280px] flex items-center text-gray-800'>
            <div className='border w-full'></div>
            <div className='text-sm w-[330px] text-center dark:text-white'>Continue with</div>
            <div className='border w-full'></div>
        </div>
        <ContinueWithGoogle />
      </div>
    </div>
  )
}

export default SignUp
