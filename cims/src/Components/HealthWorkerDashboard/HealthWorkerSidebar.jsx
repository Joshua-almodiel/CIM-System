import React from "react";
import { NavLink } from "react-router-dom";
import {
  FaTachometerAlt,
  FaUsers,
  FaCalendarAlt,
  FaBell,
  FaChartBar,
  FaUserCog,
  FaCogs,
  FaSignOutAlt,
} from "react-icons/fa";
import { useAuth } from "../../Context/AuthContext.jsx";

const HealthWorkerSidebar = () => {
  const { logout } = useAuth();

  return (
    <div className="fixed inset-y-0 flex flex-col bg-white text-gray-800 w-64 border-r border-gray-200 shadow-md">
      <div className="p-5 border-b border-gray-200 bg-blue-50 text-center">
        <h3 className="text-xl font-bold text-gray-700 tracking-wide bg-blue-100 rounded-md px-2 py-1 shadow-sm">
        𝘊𝘩𝘪𝘭𝘥 𝘐𝘮𝘮𝘶𝘯𝘪𝘻𝘢𝘵𝘪𝘰𝘯<br />𝘔𝘰𝘯𝘪𝘵𝘰𝘳𝘪𝘯𝘨 𝘚𝘺𝘴𝘵𝘦𝘮
        </h3>
        <img
          src="/public/Logocims.png"
          alt="Health Logo"
          className="mx-auto w-98 h-40 object-contain"
        />
      </div>

      <div className="flex flex-col p-4 space-y-1 flex-grow">
        <NavLink
          to="/healthWorker-dashboard"
          className={({ isActive }) =>
            `flex items-center p-3 rounded-lg transition-colors duration-200 ${
              isActive
                ? "bg-blue-100 text-[#147190] font-medium"
                : "hover:bg-gray-100"
            }`
          }
          end
        >
          <FaTachometerAlt className="mr-3" />
          <span>Dashboard</span>
        </NavLink>

        <NavLink
          to="/healthWorker-dashboard/parents"
          className={({ isActive }) =>
            `flex items-center p-3 rounded-lg transition-colors duration-200 ${
              isActive
                ? "bg-blue-100 text-[#147190] font-medium"
                : "hover:bg-gray-100"
            }`
          }
        >
          <FaUsers className="mr-3" />
          <span>Child Records</span>
        </NavLink>

        <NavLink
          to="/healthWorker-dashboard/vaccinations"
          className={({ isActive }) =>
            `flex items-center p-3 rounded-lg transition-colors duration-200 ${
              isActive
                ? "bg-blue-100 text-[#147190] font-medium"
                : "hover:bg-gray-100"
            }`
          }
        >
          <FaCalendarAlt className="mr-3" />
          <span>Vaccination Schedule</span>
        </NavLink>

        <NavLink
          to="/healthWorker-dashboard/notifications"
          className={({ isActive }) =>
            `flex items-center p-3 rounded-lg transition-colors duration-200 ${
              isActive
                ? "bg-blue-100 text-[#147190] font-medium"
                : "hover:bg-gray-100"
            }`
          }
        >
          <FaBell className="mr-3" />
          <span>Notifications</span>
        </NavLink>

        <NavLink
          to="/healthWorker-dashboard/reports-analytics"
          className={({ isActive }) =>
            `flex items-center p-3 rounded-lg transition-colors duration-200 ${
              isActive
                ? "bg-blue-100 text-[#147190] font-medium"
                : "hover:bg-gray-100"
            }`
          }
        >
          <FaChartBar className="mr-3" />
          <span>Reports & Analytics</span>
        </NavLink>

        <NavLink
          to="/healthWorker-dashboard/usermanagement"
          className={({ isActive }) =>
            `flex items-center p-3 rounded-lg transition-colors duration-200 ${
              isActive
                ? "bg-blue-100 text-[#147190] font-medium"
                : "hover:bg-gray-100"
            }`
          }
        >
          <FaUserCog className="mr-3" />
          <span>User Management</span>
        </NavLink>

        <NavLink
          to="/healthWorker-dashboard/setting"
          className={({ isActive }) =>
            `flex items-center p-3 rounded-lg transition-colors duration-200 ${
              isActive
                ? "bg-blue-100 text-[#147190] font-medium"
                : "hover:bg-gray-100"
            }`
          }
        >
          <FaCogs className="mr-3" />
          <span>Settings</span>
        </NavLink>
      </div>

      <div className="p-3 border-t border-gray-200">
        <button
          className="w-full flex items-center justify-center p-2 rounded-lg bg-red-100 text-red-600 hover:bg-red-200 transition-colors duration-200"
          onClick={logout}
        >
          <FaSignOutAlt className="mr-2" />
          Logout
        </button>
      </div>
    </div>
  );
};

export default HealthWorkerSidebar;
