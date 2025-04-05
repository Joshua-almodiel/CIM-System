import React from 'react'
import HealthWorkerSidebar from '../Components/HealthWorkerDashboard/HealthWorkerSidebar.jsx'
import NavBar from '../Components/HealthWorkerDashboard/Navbar.jsx'
import { Outlet } from 'react-router-dom'


const HealthWorker = () => {

  return (
    <div className="flex min-h-screen">
      <HealthWorkerSidebar />
      <div className="flex-1 ml-64 bg-gray-900 text-white h-screen">
        <NavBar />
        <Outlet />
      </div>
    </div>
  )
}

export default HealthWorker
