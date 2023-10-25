import React from 'react'
import TableContent from '../componentes/TableContent'

function DashBoardComponent() {
  return (
    <div className='text-gray-500 font-bold m-2 '>
      <div className=' bg-gray-100  md:flex md:justify-between  h-1/6 border-b-4'>
        <div className='bg-blue-700 text-center  md:w-2/4 border-8 h-full flex flex-col items-center justify-center '>
           <div className='text-white pb-4 font-bold text-2xl'>Total Contribution</div>
           <div className='text-white font-black text-3xl'>$5,000,000</div>
           </div>
           <div className='bg-blue-700 text-center  md:w-2/4 border-8 h-full flex flex-col items-center justify-center '>
           <div className='text-white pb-4 font-bold text-2xl'>Avaliable Balance</div>
           <div className='text-white font-black text-3xl'>$1,000,000</div>
           </div>
      </div>
      <div className='md:flex md:justify-between md:items-center text-center'>
        <div className='m-2 md:w-2/4 border-2 '>
          <h1>RECENT TRANSACTION</h1>
          <TableContent/>
        </div>
        <div className='m-2 md:w-2/4 border-2'>
          <h1>RUNNING LOANS</h1>
          <TableContent/>
        </div>
      </div>
      
      </div>
  )
}

export default DashBoardComponent