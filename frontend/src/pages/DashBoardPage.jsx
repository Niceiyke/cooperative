import React from 'react'

import { MainScreen } from '../layout/SplitScreen'
import Sidebar from '../componentes/Sidebar'
import DashBoardComponent from '../componentes/DashboardComponent'


function DashBoard() {
  return (
    <MainScreen Left={Sidebar} Right={DashBoardComponent} />
  )
}

export default DashBoard