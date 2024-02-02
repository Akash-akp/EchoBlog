import React from 'react'
import GoogleImage from '../img/google.png'
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth'
import { app } from '../firebase'
import { signInSuccess } from '../Redux/user/userSlice.js';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'

const ContinueWithGoogle = () => {
    const auth = getAuth(app);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const ContinueWithGoogleHandler = async() => {
        const Provider = new GoogleAuthProvider();
        Provider.setCustomParameters({ prompt: 'select_account' });
        try{
            const resultFromGoogle = await signInWithPopup(auth, Provider);
            // console.log(resultFromGoogle);
            const res = await fetch('/api/auth/google',{
                method : 'POST',
                headers : {'Content-Type' : 'application/json'},
                body : JSON.stringify({
                    name: resultFromGoogle.user.displayName,
                    email: resultFromGoogle.user.email,
                    image: resultFromGoogle.user.photoURL
                })
            });
            const data = await res.json();
            console.log(data);
            if(res.ok){
                dispatch(signInSuccess(data));
                navigate('/');
            }
        }catch(error){
            console.log(error);
        }
    }
  return (
      <button onClick={ContinueWithGoogleHandler} className='border border-gray-300 rounded-lg w-[280px] my-3 px-3 py-2 text-sm cursor-pointer relative'>
            <div className='absolute left-3 top-1'>
                <img src={GoogleImage} className='h-[30px]' alt='google-img'></img>
            </div>
            <div className='text-center'>
                Google
            </div>
        </button>
  )
}

export default ContinueWithGoogle
