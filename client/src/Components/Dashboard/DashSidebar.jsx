import React from 'react'
import DashSideLink from './DashSideLink'

const DashSidebar = () => {
  return (
    <div className='w-[300px] bg-lightBgColor dark:bg-gray-700 h-full border-r-2 border-gray-300 dark:border-gray-800 shadow-xl dark:text-white text-lg flex flex-col items-center'>
      <DashSideLink value={"Profile"} tab={"profile"} />
      <DashSideLink value={"Dashboard"} tab={"dashboard"} />
      <DashSideLink value={"Personal Info"} tab={"personalinfo"} />
      <DashSideLink value={"Sign Out"} tab={"signout"} />
      <DashSideLink value={"Delete Account"} tab={"deleteaccount"} />
    </div>
  )
}

export default DashSidebar
