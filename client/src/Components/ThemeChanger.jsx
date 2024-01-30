import React from 'react'
import { useSelector } from 'react-redux';


const ThemeChanger = ({children}) => {
    const { mode } = useSelector(state => state.dark);
  return (
    <div className={mode?('dark'):('')}>
      {children}
    </div>
  )
}

export default ThemeChanger
