import React from 'react'

import { MainScreen } from '../layout/SplitScreen'
import Sidebar from '../componentes/Sidebar'
import JumboLoanForm from '../componentes/JumboComponents'


function JumboLoan() {
  return (
    <MainScreen Left={Sidebar} Right={JumboLoanForm} />
  )
}

export default JumboLoan