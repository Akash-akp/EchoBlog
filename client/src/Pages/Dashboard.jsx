import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useState } from 'react'

const Dashboard = () => {
  const location = useLocation();
  const [tab,setTab] = new useState('');
  useEffect(()=>{
    const urlParam = new URLSearchParams(location.search);
    const tabFromURL = urlParam.get('tab');
    setTab(tabFromURL);
  }, [location.search , setTab]);

  return (
    <div className='h-screen'>
      Dashboard - {new URLSearchParams(location.search).get('tab')}
    </div>
  )
}

export default Dashboard
