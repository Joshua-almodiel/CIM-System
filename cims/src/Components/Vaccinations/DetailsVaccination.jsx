import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import {
  FaUser,
  FaIdCard,
  FaCalendarAlt,
  FaInfoCircle,
  FaRegClock,
} from "react-icons/fa";

const DetailsVaccination = () => {
  const { id } = useParams();
  const [vaccination, setVaccination] = useState(null);
  const [showDescription, setShowDescription] = useState(false);

  useEffect(() => {
    const fetchVaccinations = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/vaccination/detail/${id}`,
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

  if (!vaccination) {
    return <div className="p-6 bg-white text-gray-700">Loading...</div>;
  }

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
