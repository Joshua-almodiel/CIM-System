import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import {
  FaIdCard,
  FaCalendarAlt,
  FaInfoCircle,
  FaRegClock,
  FaCheckCircle,
  FaClock,
  FaTimesCircle,
} from "react-icons/fa";

const DetailsVaccination = () => {
  const { id } = useParams();
  const [vaccination, setVaccination] = useState(null);
  const [showDescription, setShowDescription] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchVaccinations = async () => {
      try {
        const response = await axios.get(
          `https://cim-system-gvok.vercel.app/api/vaccination/detail/${id}`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        if (response.data.success) {
          setVaccination(response.data.vaccination);
        }
      } catch (error) {
        if (error.response && !error.response.data.success) {
          alert(error.response.data.error);
        }
      }
    };
    fetchVaccinations();
  }, [id]);

  const changeStatus = async (id, status) => {
    try {
      const response = await axios.put(
        `https://cim-system-gvok.vercel.app/api/vaccination/${id}`,
        { status },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      if (response.data.success) {
        navigate("/healthWorker-dashboard/vaccinations");
      }
    } catch (error) {
      if (error.response && !error.response.data.success) {
        alert(error.response.data.error);
      }
    }
  };

  const statusStyles = {
    Processing: {
      label: "Mark as Scheduled",
      next: "Scheduled",
      color: "bg-[#147190] hover:bg-[#148190]",
      icon: <FaClock className="text-white text-2xl" />,
    },
    Scheduled: {
      label: "Scheduled",
      color: "bg-[#147190]",
      icon: <FaCheckCircle className="text-white text-2xl" />,
    },
    Cancel: {
      label: "Cancelled",
      color: "bg-red-400",
      icon: <FaTimesCircle className="text-white text-2xl" />,
    },
  };

  if (!vaccination) {
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
          <span className="text-slate-600 font-medium">Loading Vaccination...</span>
        </div>
        <p className="mt-2 text-sm text-gray-500">Please wait a moment.</p>
      </div>
    );
  }

  const currentStatus = vaccination.status;
  const statusConfig = statusStyles[currentStatus] || {
    label: currentStatus,
    color: "bg-gray-400",
    icon: <FaClock className="text-white text-2xl" />,
  };

  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-[#147190] mb-8 text-center">
          Vaccination Details
        </h2>

        <div className="bg-white p-8 rounded-xl shadow-md grid grid-cols-1 md:grid-cols-1 gap-6">
          <div className="space-y-4">
            <div className="border border-gray-200 rounded-lg p-4 flex items-start gap-4">
              <FaIdCard className="text-[#147190] text-xl mt-1" />
              <div>
                <p className="text-sm text-gray-500">Family Number</p>
                <p className="text-lg text-gray-700 font-medium">
                  {vaccination.familyNumber.familyNumber}
                </p>
              </div>
            </div>

            <div className="border border-gray-200 rounded-lg p-4 flex items-start gap-4">
              <FaInfoCircle className="text-[#147190] text-xl mt-1" />
              <div>
                <p className="text-sm text-gray-500">Vaccination Type</p>
                <p className="text-lg text-gray-700 font-medium">
                  {vaccination.vaccinationType}
                </p>
              </div>
            </div>

            <div className="border border-gray-200 rounded-lg p-4 flex items-start gap-4">
              <FaInfoCircle className="text-[#147190] text-xl mt-1" />
              <div>
                <p className="text-sm text-gray-500">Description</p>
                <button
                  onClick={() => setShowDescription(true)}
                  className="text-[#148190] hover:text-[#149190] flex items-center gap-1"
                >
                  <FaInfoCircle /> View
                </button>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="border border-gray-200 rounded-lg p-4 flex items-start gap-4">
              <FaCalendarAlt className="text-[#147190] text-xl mt-1" />
              <div>
                <p className="text-sm text-gray-500">Date</p>
                <p className="text-lg text-gray-700 font-medium">
                  {new Date(vaccination.startDate).toLocaleDateString()}
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="border border-gray-200 rounded-lg p-4 flex items-start gap-4">
              <FaRegClock className="text-[#147190] text-xl mt-1" />
              <div>
                <p className="text-sm text-gray-500">Time</p>
                <p className="text-lg text-gray-700 font-medium">
                  {new Date(
                    `1970-01-01T${vaccination.startTime}`
                  ).toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </p>
              </div>
            </div>
          </div>

          <div
            className={`p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ${statusConfig.color}`}
          >
            <div className="flex items-center space-x-4">
              {statusConfig.icon}
              <div className="flex flex-col text-white">
                <p className="text-sm">Status</p>
                <p className="text-lg font-semibold">{currentStatus}</p>
              </div>
              {currentStatus === "Processing" && (
                <div className="ml-auto flex space-x-2">
                  <button
                    onClick={() =>
                      changeStatus(
                        vaccination._id,
                        statusStyles[currentStatus].next
                      )
                    }
                    className="px-4 py-2 bg-white text-[#147190] font-semibold rounded-lg hover:bg-gray-100 transition duration-200"
                  >
                    {statusStyles[currentStatus].label}
                  </button>
                  <button
                    onClick={() => changeStatus(vaccination._id, "Cancel")}
                    className="px-4 py-2 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600 transition duration-200"
                  >
                    Cancel
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {showDescription && (
        <div className="fixed inset-0 bg-transparent bg-opacity-30 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full">
            <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
              <h3 className="text-lg font-medium text-gray-900">
                Vaccination Description
              </h3>
              <button
                onClick={() => setShowDescription(false)}
                className="text-gray-400 hover:text-gray-500 text-xl"
              >
                ✕
              </button>
            </div>
            <div className="p-6">
              <p className="text-gray-700 whitespace-pre-line">
                {vaccination.reason || "No description available."}
              </p>
            </div>
            <div className="px-6 py-3 border-t border-gray-200 flex justify-end">
              <button
                onClick={() => setShowDescription(false)}
                className="px-4 py-2 bg-[#148190] text-white rounded-md hover:bg-[#149190]"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DetailsVaccination;
