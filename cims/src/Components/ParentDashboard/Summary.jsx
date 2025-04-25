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

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Summary = () => {
  const { user } = useAuth();
  const [stats, setStats] = useState(null);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/parent/stats/${user._id}`,
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
        setStats({ totalVaccinations: 0, upcomingVaccinations: 0, totalVitals: 0 });
      }
    };
    fetchStats();
  }, [user._id]);

  if (!stats) {
    return (
      <div className="p-6 bg-gray-100 min-h-screen flex items-center justify-center">
        <span className="text-gray-500">Loading your stats...</span>
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

  return (
    <div className="p-10 bg-gray-100 min-h-screen">

      

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
        <h3 className="text-xl font-bold text-gray-700 mb-4">Vaccination Status Overview</h3>
        <Bar data={chartData} options={chartOptions} />
      </div>
    </div>
  );
};

export default Summary;