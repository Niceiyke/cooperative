import React from 'react'
import Logo from './logo'
import SidebarContent from './SidebarContent'
import SidebarLinks from './SidebarLinks'

function Sidebar() {
  return (
    <div className='text-red-300 m-8'>
       <SidebarContent

       Logo={Logo}
       SideBarLinks={SidebarLinks}
   
       
       />
        
    </div>
  )
}

export default Sidebar