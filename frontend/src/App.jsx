import Navbar from '../src/componentes/Navbar'
import { Route, Routes } from 'react-router-dom'
import DashBoard from '../src/pages/DashBoardPage'
import ContributionForm from '../src/pages/ContributionPage'
import JumboLoan from '../src/pages/JumboLoanPage'
import EducationLoan from '../src/pages/EducationLoanPage'
import EmergencyLoan from '../src/pages/EmergencyLoanPage'
import Login from './pages/Login'
import Signup from './pages/Signup'


function App() {


  return (
    <div className='h-screen overflow-y-scroll no-scrollbar'>
    <Navbar/>
    <Routes>
      <Route  path='/login' element={<Login/>}/>
      <Route  path='/signup' element={<Signup/>}/>
      <Route  path='/dashboard' element={<DashBoard/>}/>
      <Route  path='/jumbo-loan' element={<JumboLoan/>}/>
      <Route  path='/emergency-loan' element={<EmergencyLoan/>}/>
      <Route  path='/education-loan' element={<EducationLoan/>}/>
      <Route  path='/change-contribution' element={<ContributionForm/>}/>
    </Routes>
    </div>
  )
}

export default App
