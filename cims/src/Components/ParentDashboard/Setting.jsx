import React, { useState } from "react";
import { useAuth } from "../../Context/AuthContext.jsx";
import axios from "axios";

const Setting = () => {
  const { user } = useAuth();
  const [status, setStatus] = useState("");
  const [setting, setSetting] = useState({
    userId: user._id,
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSetting({ ...setting, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("")
    if (setting.newPassword !== setting.confirmPassword) {
      setError("Password not matched");
    } else {
      try {
        const response = await axios.put(
          "http://localhost:5000/api/setting/change-password",
          setting,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        if (response.data.success) {
          setError("");
          setStatus("Password Changed Successfully!")
        }
      } catch (error) {
        if (error.response && !error.response.data.success) {
          setError(error.response.data.error);
          setStatus("Failed to change password!");
        }
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white shadow-xl rounded-lg overflow-hidden">
          <div className="bg-white-200 py-4 px-6">
          <h2 className="text-2xl font-bold text-gray-700">Change Password</h2>
          </div>
          {error && <p className="text-red-500 mb-4"></p>}

          <form
            onSubmit={handleSubmit} className="p-6 space-y-8"
          >
            <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="text-lg font-semibold text-[#147190] mb-4 border-b border-blue-200 pb-2">
                Change Your Password for Secure
              </h3>
            <div className="space-y-6">
              <div>
                <label
                  htmlFor="oldPassword"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Old Password <span className="text-red-500">*</span>
                </label>
                <input
                  type="password"
                  name="oldPassword"
                  placeholder="Current Password"
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-black focus:outline-none focus:ring-[#147190] focus:border-[#148190]"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="newPassword"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  New Password
                </label>
                <input
                  type="password"
                  name="newPassword"
                  placeholder="New Password"
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-black focus:outline-none focus:ring-[#147190] focus:border-[#148190]"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="confirmPassword"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Confirm Password
                </label>
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-black focus:outline-none focus:ring-[#147190] focus:border-[#148190]"
                  required
                />
              </div>
            </div>
            
            </div>
            <div className="mt-6">
              <button
                type="submit"
                className="w-full px-6 py-2 bg-[#147190] text-white rounded-lg hover:bg-[#148190] transition duration-200"
              >
                Change Password
              </button>
            </div>
          </form>

          {status && (
            <div
              className={`mt-4 px-4 py-3 rounded-md text-sm flex items-center gap-2 ${
                status === "Password Changed Successfully!"
                  ? "bg-green-100 text-green-800"
                  : "bg-red-100 text-red-800"
              }`}
            >
              {status === "Password Changed Successfully!" ? (
                <svg
                  className="w-5 h-5 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              ) : (
                <svg
                  className="w-5 h-5 text-red-600"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
              <span>{status}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Setting;
