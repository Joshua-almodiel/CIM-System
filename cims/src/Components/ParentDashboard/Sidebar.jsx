import React from 'react'
import { NavLink } from 'react-router-dom'
import { FaBuilding, FaCalendarAlt, FaCogs, FaMoneyBillAlt, FaMoneyBillWave, FaTachometerAlt, FaUser, FaUsers } from 'react-icons/fa'
import { useAuth } from '../../Context/AuthContext.jsx'

const Sidebar = () => {

  const { user, logout } = useAuth()



  return (
    <div className="fixed inset-y-0 flex flex-col bg-gray-800 text-white w-64">
      <div className="p-4 border-gray-700">
        <h3 className="text-lg text-center font-semibold">CIM System</h3>
      </div>
      <div className="flex flex-col p-8 space-y-6">

        <NavLink
          to="/parent-dashboard"
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
          to={`/parent-dashboard/profile/${user._id}`}
          className={({ isActive }) =>
            `flex items-center p-2 rounded transition duration-200 ${isActive
              ? "bg-blue-500 text-white"
              : "hover:bg-gray-700"
            }`
          }
        >
          <FaUsers className="mr-2" />
          <span>My Child's Records</span>
        </NavLink>

        <NavLink
          to={`/parent-dashboard/vaccinations/${user._id}`}
          className={({ isActive }) =>
            `flex items-center p-2 rounded transition duration-200 ${isActive
              ? "bg-blue-500 text-white"
              : "hover:bg-gray-700"
            }`
          }
        >
          <FaBuilding className="mr-2" />
          <span>Vaccination Schedule</span>
        </NavLink>

        <NavLink
          to={`/parent-dashboard/salary/${user._id}`}
          className={({ isActive }) =>
            `flex items-center p-2 rounded transition duration-200 ${isActive
              ? "bg-blue-500 text-white"
              : "hover:bg-gray-700"
            }`
          }
        >
          <FaCalendarAlt className="mr-2" />
          <span>Reminders</span>
        </NavLink>

        <NavLink
          to={``}
          className={({ isActive }) =>
            `flex items-center p-2 rounded transition duration-200 ${isActive
              ? "bg-blue-500 text-white"
              : "hover:bg-gray-700"
            }`
          }
        >
          <FaCalendarAlt className="mr-2" />
          <span>Health Tips & Guidelines</span>
        </NavLink>

        <NavLink
          to="/parent-dashboard/setting"
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

export default Sidebar
