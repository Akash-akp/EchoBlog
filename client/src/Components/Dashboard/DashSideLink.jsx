import React from 'react'
import { NavLink} from 'react-router-dom'
import { useSelector } from 'react-redux'

const DashSideLink = ({value,tab}) => {
    const { dashTab } = useSelector(state => state.dash);
  return (
    <NavLink to={`/dashboard?tab=${tab}`} className={`${dashTab === tab?(`bg-white dark:bg-gray-900 `):(`dark:bg-gray-600 `)} text-xl font-medium m-2 py-2 w-[90%] rounded-lg text-center border border-gray-400 hover:bg-white dark:border-gray-800 dark:hover:bg-gray-900 bg-gray-300 `}>
        {value}
    </NavLink>
  )
}

export default DashSideLink
