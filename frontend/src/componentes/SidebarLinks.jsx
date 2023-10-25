import { useState } from "react"
import { AiFillDashboard,AiFillSchedule} from 'react-icons/ai'
import {MdChangeCircle} from 'react-icons/md'
import { Link } from "react-router-dom"



function SidebarLinks() {
  const [loanrequest, setLoanrequest]=useState(false)

  const handleLoanRequestToggle=()=>{setLoanrequest(!loanrequest)}
  return (
    <>
      <div className="mb-4 flex flex-row items-center"><AiFillDashboard size='30px' color="white" /><Link to='/dashboard' className="hidden lg:block ml-2 text-white font-black">Dashboard</Link></div>
      <button onClick={handleLoanRequestToggle}  className="mb-2 flex flex-row items-center"><AiFillSchedule size='30px' color="white"/><p className="hidden lg:block ml-2 text-white font-bold">Loan Request</p>
      </button>
      {loanrequest?<ul className="hidden lg:block ml-10">
        <li className="text-white font-medium pb-2"><Link to ='/jumbo-loan'>Jumbo Loan</Link></li>
        <li className="text-white font-medium pb-2"><Link to='/emergency-loan'>Emergency Loan</Link></li>
        <li className="text-white font-medium pb-2"><Link to='/education-loan'>Education Loan</Link></li>
      
      </ul>:<ul className="hidden lg:block ml-4"></ul>}
      <div className="mb-4 flex flex-row items-center"><MdChangeCircle size='30px' color="white"/><Link to='/change-contribution' className=" hidden lg:block ml-2 text-white font-bold ">Change Contribution</Link></div>
      <div className="mb-4 flex flex-row items-center"><AiFillSchedule size='30px' color="white"/><a className="hidden lg:block ml-2 text-white font-bold">Request Approval</a></div>
       
    </>
  )
}

export default SidebarLinks
