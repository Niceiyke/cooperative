import React from 'react'

function DashboardScreen({Screen1,Screen2}) {
  return (
    <div className='bg-gray-200 flex '>
        <div><Screen1/></div>
        <div><Screen2/></div>
    </div>
  )
}

export default DashboardScreen