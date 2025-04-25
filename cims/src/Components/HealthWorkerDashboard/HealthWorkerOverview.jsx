import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  FaSyringe,
  FaClock,
  FaCheckCircle,
  FaUsers,
  FaTrash,
} from "react-icons/fa";
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

const HealthWorkerOverview = () => {
  const [stats, setStats] = useState(null);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await axios.get(
          "https://cim-system-gvok.vercel.app/api/dashboard/stats",
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        setStats(response.data);
      } catch (error) {
        console.error("Error fetching stats:", error);
      }
    };

    fetchStats();
  }, []);

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
          <span className="text-slate-600 font-medium">Loading Records...</span>
        </div>
        <p className="mt-2 text-sm text-gray-500">Please wait a moment.</p>
      </div>
    );
  }

  const chartData = {
    labels: ["Total Vaccinations", "Upcoming"],
    datasets: [
      {
        label: "Vaccination Stats",
        data: [stats.totalVaccinations, stats.processingVaccinations],
        backgroundColor: ["#4CAF50", "#FFC107"],
      },
    ],
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-3xl font-bold text-gray-700 mb-6">
        Dashboard Overview
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-4 bg-white rounded-lg shadow-md flex items-center">
          <FaUsers className="text-4xl text-[#147190] mr-4" />
          <div>
            <p className="text-gray-600">Total Child Records</p>
            <p className="text-2xl text-gray-700 font-bold">
              {stats.totalChildRecords}
            </p>
          </div>
        </div>

        <div className="p-4 bg-white rounded-lg shadow-md flex items-center">
          <FaUsers className="text-4xl text-[#147190] mr-4" />
          <div>
            <p className="text-gray-600">Total Vital Signs Records</p>
            <p className="text-2xl text-gray-700 font-bold">
              {stats.totalVitalSigns}
            </p>
          </div>
        </div>

        <div className="p-4 bg-white rounded-lg shadow-md flex items-center">
          <FaTrash className="text-4xl text-[#147190] mr-4" />
          <div>
            <p className="text-gray-600">Total Vaccinated Individuals</p>
            <p className="text-2xl text-gray-700 font-bold">
              {stats.totalVaccinated}
            </p>
          </div>
        </div>
      </div>

      <div className="mt-10 bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-bold text-gray-700 mb-4">
          Vaccination Statistics
        </h3>
        <Bar data={chartData} />
      </div>
    </div>
  );
};

export default HealthWorkerOverview;
