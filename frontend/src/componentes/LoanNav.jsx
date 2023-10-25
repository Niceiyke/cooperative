import React from 'react'

function LoanNav() {
  return (

    <div className=' bg-gray-100  md:flex md:justify-between  h-1/6 border-b-4'>
        <div className='bg-blue-700 text-center  md:w-2/4 border-8 h-full flex flex-col items-center justify-center '>
           <div className='text-white pb-4 font-bold text-2xl'>Total Contribution</div>
           <div className='text-white font-black text-3xl'>$5,000,000</div>
           </div>
           <div className='bg-blue-700 text-center  md:w-2/4 border-8 h-full flex flex-col items-center justify-center '>
           <div className='text-white pb-4 font-bold text-2xl'>Avaliable Balance</div>
           <div className='text-white font-black text-3xl'>$1,000,000</div>
           </div>
           <div className='bg-blue-700 text-center  md:w-2/4 border-8 h-full flex flex-col items-center justify-center '>
           <div className='text-white pb-4 font-bold text-2xl'>Max Amount</div>
           <div className='text-white font-black text-3xl'>$900,000</div>
           </div>
      </div>
    
  )
}

export default LoanNav