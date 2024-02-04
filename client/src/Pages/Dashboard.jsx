import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useState } from 'react'
import DashSidebar from '../Components/Dashboard/DashSidebar'
import DashProfile from '../Components/Dashboard/DashProfile'
import { useDispatch , useSelector } from 'react-redux'
import { setDashTab } from '../Redux/user/dashSlice'
import DashSignOut from '../Components/Dashboard/DashSignOut'
import DashPersonal from '../Components/Dashboard/DashPersonal'
import DashDelete from '../Components/Dashboard/DashDelete'
import DashDashboard from '../Components/Dashboard/DashDashboard'

const Dashboard = () => {
  const dispatch = useDispatch();
  const { dashTab } = useSelector(state => state.dash);
  const location = useLocation();
  useEffect(()=>{
    const urlParam = new URLSearchParams(location.search);
    const tabFromURL = urlParam.get('tab');
    dispatch(setDashTab(tabFromURL));
  }, [location.search]);


  return (
    <div className='h-screen w-full bg-white dark:bg-gray-900 flex relative'>
      <div>
        <DashSidebar />
      </div>
      <div className='w-full h-full'>
        {dashTab==='profile' && <DashProfile /> }
        {dashTab==='dashboard' && <DashDashboard /> }
        {dashTab==='personalinfo' && <DashPersonal /> }
        {dashTab==='signout' && <DashSignOut /> }
        {dashTab==='deleteaccount' && <DashDelete />}
      </div>
    </div>
  )
}

export default Dashboard
