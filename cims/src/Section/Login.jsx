import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../Context/AuthContext.jsx";
import { FaEnvelope, FaLock } from "react-icons/fa";

function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState(null);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://cim-system-gvok.vercel.app/api/auth/login",
        { email, password }
      );
      if (response.data.success) {
        if (response.data.user.role === "healthWorker") {
          login(response.data.user);
          localStorage.setItem("token", response.data.token);
          navigate("/healthWorker-dashboard");
        } else {
          setError("Only health workers can log in here.");
        }
      }
    } catch (error) {
      if (error.response && !error.response.data.success) {
        setError(error.response.data.error);
      } else {
        setError("Something went wrong");
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-300 flex items-center justify-center text-white">
      <div className="bg-white p-10 rounded-xl shadow-xl w-full max-w-md">
        <h1 className="text-4xl font-extrabold text-center mb-3 tracking-wide text-[#147190] drop-shadow-sm">
          Child Immunization Monitoring
        </h1>
        <p className="text-center text-sm text-gray-600 mb-4">
          Only Health Worker
        </p>

        {error && (
          <p className="text-red-500 text-sm text-center mb-4">{error}</p>
        )}

        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label className="block text-sm mb-1">Email</label>
            <div className="flex items-center bg-gray-300 border border-gray-300 rounded-lg px-3">
              <FaEnvelope className="text-[#147190] mr-2" />
              <input
                type="email"
                placeholder="you@example.com"
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-white px-2 py-2 text-black focus:outline-none"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm mb-1">Password</label>
            <div className="flex items-center bg-gray-300 border border-gray-300 rounded-lg px-3">
              <FaLock className="text-[#147190] mr-2" />
              <input
                type="password"
                placeholder="••••••••"
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-white px-2 py-2 text-black focus:outline-none"
                required
              />
            </div>
          </div>

          <div className="flex justify-between text-sm text-gray-400">
            <Link to="/parent-login" className="text-gray-400 hover:text-gray-600">
              Are you a parents?
            </Link>
          </div>

          <button
            type="submit"
            className="w-full bg-[#147190] hover:bg-[#148190] transition duration-200 text-white font-semibold py-2 rounded-lg"
          >
            Log In
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
