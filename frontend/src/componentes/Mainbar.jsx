import React from 'react'
import Navbar from './Navbar'
import { Route, Routes } from 'react-router-dom'
import DashBoard from '../pages/DashBoard'
import ContributionForm from '../pages/Contribution'
import JumboLoanForm from '../pages/JumboLoan'
import EmergencyLoanForm from '../pages/EmmergencyLoan'
import EducationLoanForm from '../pages/EducationLoan'

function Mainbar() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route  path='/dashboard' element={<DashBoard/>}/>
      <Route  path='/change-contribution' element={<ContributionForm/>}/>
      <Route  path='/jumbo-loan' element={<JumboLoanForm/>}/>
      <Route  path='/emergency-loan' element={<EmergencyLoanForm/>}/>
      <Route  path='/education-loan' element={<EducationLoanForm/>}/>
    </Routes>
    </>
  )
}

export default Mainbar