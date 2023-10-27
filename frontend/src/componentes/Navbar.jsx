import React, { useState } from 'react'
import {AiOutlineBars} from 'react-icons/ai'
import {BsFillCircleFill} from 'react-icons/bs'

function Navbar() {
  const [toggleNavBar,setToggleNavbar]=useState(false)

  const handleToggle =()=>{setToggleNavbar(!toggleNavBar)}

  const toggleLightMode =()=>{
    console.log('light theme clicked')

  }
  const toggleDarkMode =()=>{
    console.log('dark theme clicked') 

  }

  return (
    <div className='bg-gray-200 border-b-2 h-16 m-2  flex justify-between items-center'>
        <div className='mx-4 hidden lg:block'>Navbar</div>
        <div className='mx-4 hidden lg:block'>
            <a className='text-blue-700 font-bold p-4'>Home</a>
            <a className='text-blue-700 font-bold p-4'>Help</a>
            <a className='text-blue-700 font-bold p-4'>Profile</a>
            <a className='text-blue-700 font-bold p-4'>Logout</a>
        </div>
        <button onClick={handleToggle} className='md:hidden'><AiOutlineBars size='30px'/></button>
        <div>
          <button onClick={toggleLightMode} className='p-2'><BsFillCircleFill size='20px'  color='white'/></button>
          <button onClick={toggleDarkMode} className='p-2'><BsFillCircleFill size='20px'  color='black'/></button>

        </div>
    </div>
  )
}

export default Navbar