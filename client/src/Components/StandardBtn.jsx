import React from 'react'
import { Link } from 'react-router-dom'

const StandardBtn = ({address,value,addon}) => {
  return (
    <Link to={address} className={addon+' '+'text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'}>
        {value}
    </Link>
  )
}

export default StandardBtn
