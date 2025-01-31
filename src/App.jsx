import { useState } from 'react'
import './App.css'
import Header from './components/Dashboard/Header'
import Sidebar from './components/Dashboard/Sidebar'


function App() {

  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }

  return (
   <>
   <div className='grid-container'>
      <Header OpenSidebar={OpenSidebar}/>
      <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
    </div>
   </>
  )
}

export default App
