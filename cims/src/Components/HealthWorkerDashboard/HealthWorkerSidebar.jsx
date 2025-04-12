import React from 'react'
import { NavLink } from 'react-router-dom'
import { FaBuilding, FaCalendarAlt, FaCogs, FaMoneyBillAlt, FaMoneyBillWave, FaTachometerAlt, FaUser, FaUsers } from 'react-icons/fa'
import { useAuth } from '../../Context/AuthContext.jsx'

const HealthWorkerSidebar = () => {

  const { logout } = useAuth()


  return (
    <div className="fixed inset-y-0 flex flex-col bg-gray-800 text-white w-64">
      <div className="p-4 border-gray-700">
        <h3 className="text-lg text-center font-semibold">CIM System</h3>
      </div>
      <div className="flex flex-col p-8 space-y-6">

        <NavLink
          to="/healthWorker-dashboard"
          className={({ isActive }) =>
            `flex items-center p-2 rounded transition duration-200 ${isActive
              ? "bg-blue-500 text-white"
              : "hover:bg-gray-700"
            }`
          } end
        >
          <FaTachometerAlt className="mr-2" />
          <span>Dashboard</span>
        </NavLink>

        <NavLink
          to="/healthWorker-dashboard/parents"
          className={({ isActive }) =>
            `flex items-center p-2 rounded transition duration-200 ${isActive
              ? "bg-blue-500 text-white"
              : "hover:bg-gray-700"
            }`
          }
        >
          <FaUsers className="mr-2" />
          <span>Child Records</span>
        </NavLink>

        <NavLink
          to="/healthWorker-dashboard/vaccinations"
          className={({ isActive }) =>
            `flex items-center p-2 rounded transition duration-200 ${isActive
              ? "bg-blue-500 text-white"
              : "hover:bg-gray-700"
            }`
          }
        >
          <FaCalendarAlt className="mr-2" />
          <span>Vaccination Schedule</span>
        </NavLink>

        <NavLink
          to=""
          className={({ isActive }) =>
            `flex items-center p-2 rounded transition duration-200 ${isActive
              ? "bg-blue-500 text-white"
              : "hover:bg-gray-700"
            }`
          }
        >
          <FaMoneyBillWave className="mr-2" />
          <span>Notifications</span>
        </NavLink>

        <NavLink
          to=""
          className={({ isActive }) =>
            `flex items-center p-2 rounded transition duration-200 ${isActive
              ? "bg-blue-500 text-white"
              : "hover:bg-gray-700"
            }`
          }
        >
          <FaMoneyBillWave className="mr-2" />
          <span>Report & Analytics</span>
        </NavLink>

        <NavLink
          to=""
          className={({ isActive }) =>
            `flex items-center p-2 rounded transition duration-200 ${isActive
              ? "bg-blue-500 text-white"
              : "hover:bg-gray-700"
            }`
          }
        >
          <FaMoneyBillWave className="mr-2" />
          <span>User Management</span>
        </NavLink>

        <NavLink
          to="/healthWorker-dashboard/setting"
          className={({ isActive }) =>
            `flex items-center p-2 rounded transition duration-200 ${isActive
              ? "bg-blue-500 text-white"
              : "hover:bg-gray-700"
            }`
          }
        >
          <FaCogs className="mr-2" />
          <span>Settings</span>
        </NavLink>


        <div className='m-2'>
          <button className="bg-red-500 text-white px-4 py-1 rounded-lg hover:bg-red-600 transition duration-200" onClick={logout}>
            Logout
          </button>
        </div>

      </div>
    </div>
  );
}

export default HealthWorkerSidebar
