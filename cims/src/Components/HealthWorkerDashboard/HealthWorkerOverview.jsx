import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaSyringe, FaClock, FaCheckCircle, FaUsers, FaTrash } from "react-icons/fa";
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

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const HealthWorkerOverview = () => {
  const [stats, setStats] = useState(null);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/dashboard/stats", {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        });
        setStats(response.data);
      } catch (error) {
        console.error("Error fetching stats:", error);
      }
    };

    fetchStats();
  }, []);

  if (!stats) {
    return (
      <div className="bg-white min-h-screen p-8 text-center">
        <svg
          className="w-16 h-16 mx-auto text-gray-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1}
            d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <h3 className="mt-4 text-lg font-medium text-gray-300">
          Loading...
        </h3>
      </div>
    );
  }

  const chartData = {
    labels: ["Total Vaccinations", "Upcoming"],
    datasets: [
      {
        label: "Vaccination Stats",
        data: [stats.totalVaccinations, stats.upcomingVaccinations],
        backgroundColor: ["#4CAF50", "#FFC107"],
      },
    ],
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-3xl font-bold text-gray-700 mb-6">Dashboard Overview</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        <div className="p-4 bg-white rounded-lg shadow-md flex items-center">
          <FaUsers className="text-4xl text-[#147190] mr-4" />
          <div>
            <p className="text-gray-600">Total Child Records</p>
            <p className="text-2xl text-gray-700 font-bold">{stats.totalChildRecords}</p>
          </div>
        </div>

        <div className="p-4 bg-white rounded-lg shadow-md flex items-center">
          <FaUsers className="text-4xl text-[#147190] mr-4" />
          <div>
            <p className="text-gray-600">Total Vital Signs Records</p>
            <p className="text-2xl text-gray-700 font-bold">{stats.totalVitalSigns}</p>
          </div>
        </div>

        <div className="p-4 bg-white rounded-lg shadow-md flex items-center">
          <FaTrash className="text-4xl text-[#147190] mr-4" />
          <div>
            <p className="text-gray-600">Deleted Child Records</p>
            <p className="text-2xl text-gray-700 font-bold">{stats.deletedChildRecords}</p>
          </div>
        </div>


      </div>

      <div className="mt-10 bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-bold text-gray-700 mb-4">Vaccination Statistics</h3>
        <Bar data={chartData} />
      </div>
    </div>
  );
};

export default HealthWorkerOverview;