import React from "react";
import { NavLink } from "react-router-dom";
import {
  FaBaby,
  FaCalendarCheck,
  FaHeartbeat,
  FaBookOpen,
  FaHome,
  FaUserCog,
  FaUserFriends,
  FaSignOutAlt,
} from "react-icons/fa";
import { useAuth } from "../../Context/AuthContext.jsx";

const Sidebar = () => {
  const { user, logout } = useAuth();

  return (
    <div className="fixed inset-y-0 flex flex-col bg-white text-gray-800 w-64 border-r border-gray-200 shadow-md">
      <div className="p-5 border-b border-gray-200 bg-blue-50 text-center">
        <h3 className="text-xl font-bold text-gray-700 tracking-wide bg-blue-100 rounded-md px-3 py-1 shadow-sm">
          𝘊𝘩𝘪𝘭𝘥 𝘐𝘮𝘮𝘶𝘯𝘪𝘻𝘢𝘵𝘪𝘰𝘯
          <br />
          𝘔𝘰𝘯𝘪𝘵𝘰𝘳𝘪𝘯𝘨 𝘚𝘺𝘴𝘵𝘦𝘮
        </h3>
        <img
          src="/public/Logocims.png"
          alt="Health Logo"
          className="mx-auto w-98 h-40 object-contain"
        />
      </div>

      <div className="flex flex-col p-4 space-y-1 flex-grow">
        <NavLink
          to="/parent-dashboard"
          className={({ isActive }) =>
            `flex items-center p-3 rounded-lg transition-colors duration-200 ${
              isActive
                ? "bg-blue-100 text-[#147190] font-medium"
                : "hover:bg-gray-100"
            }`
          }
          end
        >
          <FaHome className="mr-3" />
          <span>Dashboard</span>
        </NavLink>

        <NavLink
          to={`/parent-dashboard/profile/${user._id}`}
          className={({ isActive }) =>
            `flex items-center p-3 rounded-lg transition-colors duration-200 ${
              isActive
                ? "bg-blue-100 text-[#147190] font-medium"
                : "hover:bg-gray-100"
            }`
          }
        >
          <FaBaby className="mr-3" />
          <span>My Child's Records</span>
        </NavLink>

        <NavLink
          to={`/parent-dashboard/vital/${user._id}`}
          className={({ isActive }) =>
            `flex items-center p-3 rounded-lg transition-colors duration-200 ${
              isActive
                ? "bg-blue-100 text-[#147190] font-medium"
                : "hover:bg-gray-100"
            }`
          }
        >
          <FaHeartbeat className="mr-3" />
          <span>Vital Signs</span>
        </NavLink>

        <NavLink
          to={`/parent-dashboard/vaccinations/${user._id}`}
          className={({ isActive }) =>
            `flex items-center p-3 rounded-lg transition-colors duration-200 ${
              isActive
                ? "bg-blue-100 text-[#147190] font-medium"
                : "hover:bg-gray-100"
            }`
          }
        >
          <FaCalendarCheck className="mr-3" />
          <span>Vaccination Schedule</span>
        </NavLink>

        <NavLink
          to={"/parent-dashboard/tips-guidelines"}
          className={({ isActive }) =>
            `flex items-center p-3 rounded-lg transition-colors duration-200 ${
              isActive
                ? "bg-blue-100 text-[#147190] font-medium"
                : "hover:bg-gray-100"
            }`
          }
        >
          <FaBookOpen className="mr-3" />
          <span>Health Tips & Guidelines</span>
        </NavLink>

        <NavLink
          to="/parent-dashboard/setting"
          className={({ isActive }) =>
            `flex items-center p-3 rounded-lg transition-colors duration-200 ${
              isActive
                ? "bg-blue-100 text-[#147190] font-medium"
                : "hover:bg-gray-100"
            }`
          }
        >
          <FaUserCog className="mr-3" />
          <span>Settings</span>
        </NavLink>

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
    </div>
  );
};

export default Sidebar;
