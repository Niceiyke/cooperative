import React, { useState } from 'react'
import {AiOutlineBars} from 'react-icons/ai'

function Navbar() {
  const [toggleNavBar,setToggleNavbar]=useState(false)

  const handleToggle =()=>{setToggleNavbar(!toggleNavBar)}
  return (
    <div className='bg-white border-b-2 h-16 m-2  flex justify-between items-center'>
        <div className='mx-4 hidden lg:block'>Navbar</div>
        <div className='mx-4 hidden lg:block'>
            <a className='text-blue-700 font-bold p-4'>Home</a>
            <a className='text-blue-700 font-bold p-4'>Help</a>
            <a className='text-blue-700 font-bold p-4'>Profile</a>
            <a className='text-blue-700 font-bold p-4'>Logout</a>
        </div>
        <button onClick={handleToggle} className='md:hidden'><AiOutlineBars size='30px'/></button>
    </div>
  )
}

export default Navbar