import React from 'react'

import { MainScreen } from '../layout/SplitScreen'
import Sidebar from '../componentes/Sidebar'
import EducationLoanForm from '../componentes/EducationComponents'



function EducationLoan() {
  return (
    <MainScreen Left={Sidebar} Right={EducationLoanForm} />
  )
}

export default EducationLoan