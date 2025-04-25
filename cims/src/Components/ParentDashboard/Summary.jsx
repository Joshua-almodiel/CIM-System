import React, { useEffect, useState } from "react";
import { useAuth } from "../../Context/AuthContext.jsx";
import axios from "axios";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Summary = () => {
  const { user } = useAuth();
  const [stats, setStats] = useState(null);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await axios.get(
          `https://cim-system-gvok.vercel.app/api/parent/stats/${user._id}`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        if (response.data.success) {
          setStats(response.data);
        }
      } catch (error) {
        setStats({
          totalVaccinations: 0,
          upcomingVaccinations: 0,
          totalVitals: 0,
        });
      }
    };
    fetchStats();
  }, [user._id]);

  if (!stats) {
    return (
      <div className="bg-white min-h-screen text-center py-16">
        <div className="flex justify-center items-center space-x-3">
          <svg
            className="animate-spin h-6 w-6 text-blue-500"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
            ></path>
          </svg>
          <span className="text-slate-600 font-medium">Loading Stats...</span>
        </div>
        <p className="mt-2 text-sm text-gray-500">Please wait a moment.</p>
      </div>
    );
  }
  const chartData = {
    labels: ["Upcoming", "Completed", "Missed"],
    datasets: [
      {
        label: "Vaccinations",
        data: [
          stats.upcomingVaccinations || 0,
          stats.scheduledVaccinations || 0,
          stats.missedVaccinations || 0,
        ],
        backgroundColor: ["#36A2EB", "#4CAF50", "#FF6384"],
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: { display: false },
      title: { display: true, text: "Vaccination Status" },
    },
    scales: {
      y: { beginAtZero: true, ticks: { stepSize: 1 } },
    },
  };

  const capitalize = (str) => {
    if (!str) return "";
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  };

  return (
    <div className="p-10 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-bold text-gray-700 mb-4">
        Welcome, {capitalize(stats.firstName)} {capitalize(stats.lastName)}!
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
        <div className="p-6 bg-white rounded-lg shadow-lg transform hover:scale-105 transition duration-300 ease-in-out">
          <div>
            <p className="text-gray-500 text-sm">Your Total Vaccinations</p>
            <p className="text-3xl text-gray-800 font-semibold">
              {stats.totalVaccinations}
            </p>
          </div>
        </div>

        <div className="p-6 bg-white rounded-lg shadow-lg transform hover:scale-105 transition duration-300 ease-in-out">
          <div>
            <p className="text-gray-500 text-sm">Your Total Vital Signs</p>
            <p className="text-3xl text-gray-800 font-semibold">
              {stats.totalVitals}
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-lg mt-10 p-6">
        <h3 className="text-xl font-bold text-gray-700 mb-4">
          Vaccination Status Overview
        </h3>
        <Bar data={chartData} options={chartOptions} />
      </div>
    </div>
  );
};

export default Summary;
