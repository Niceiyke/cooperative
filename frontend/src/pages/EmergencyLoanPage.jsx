import React from 'react'

import { MainScreen } from '../layout/SplitScreen'
import Sidebar from '../componentes/Sidebar'

import EmergencyLoanForm from '../componentes/EmergencyComponent'



function EmergencyLoan() {
  return (
    <MainScreen Left={Sidebar} Right={EmergencyLoanForm} />
  )
}

export default EmergencyLoan