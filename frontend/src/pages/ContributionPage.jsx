import React from 'react'

import { MainScreen } from '../layout/SplitScreen'
import Sidebar from '../componentes/Sidebar'
import ContributionForm from '../componentes/ContributionComponent'


function Contribution() {
  return (
    <MainScreen Left={Sidebar} Right={ContributionForm} />
  )
}

export default Contribution