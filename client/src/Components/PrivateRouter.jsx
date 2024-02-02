import React from 'react'
import { useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom';
import { Navigate } from 'react-router-dom';

const PrivateRouter = () => {
    const { currentUser } = useSelector((state)=>state.user);
  return currentUser? <Outlet /> : <Navigate to='/sign-up' > </Navigate>
}

export default PrivateRouter
