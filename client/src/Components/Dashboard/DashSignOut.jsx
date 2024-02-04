import React from 'react'
import { Link } from 'react-router-dom'
import cryingCat from '../../img/sad-cat-crying-cat.gif'
import { logout } from "../../Redux/user/userSlice";
import { useDispatch } from 'react-redux';

const DashSignOut = () => {
  const dispatch = useDispatch();
  return (
    <div className='h-full w-full flex flex-col items-center dark:text-white'>
      <div className='my-5'>
        <img src={cryingCat} alt='crying-img'/>
      </div>
      <div className='text-3xl'>
        Do you really want to logout?
      </div>
      <div className='my-5 flex gap-5'>
        <Link onClick={()=>dispatch(logout())} className='rounded-full text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium text-md px-4 py-2 text-center dark:bg-red-700 dark:hover:bg-red-800 dark:focus:ring-red-800'>
          Log Out
        </Link>
        <Link to='/' className='rounded-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-md px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>
          Cancel
        </Link>
      </div>
    </div>
  )
}

export default DashSignOut
