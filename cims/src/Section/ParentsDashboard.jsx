import React from 'react'
import Sidebar from '../Components/ParentDashboard/Sidebar.jsx'
import { Outlet } from 'react-router-dom'

const ParentsDashboard = () => {

    return (
        <div className="flex min-h-screen">
            <Sidebar />
            <div className="flex-1 ml-64 bg-gray-200 text-white min-h-screen">
                <Outlet />
            </div>
        </div>
    )
}

export default ParentsDashboard
