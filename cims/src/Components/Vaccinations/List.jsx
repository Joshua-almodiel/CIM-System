import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../../Context/AuthContext.jsx";
import { FaSyringe, FaInfoCircle } from "react-icons/fa";

const List = () => {
  const [vaccinations, setVaccinations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedDescription, setSelectedDescription] = useState("");
  const [showDescription, setShowDescription] = useState(false);
  let sno = 1;
  const { id } = useParams();
  const { user } = useAuth();

  const fetchVaccinations = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        `https://cim-system-gvok.vercel.app/api/vaccination/${id}/${user.role}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      if (response.data.success) {
        let sno = 1;
        const data = response.data.vaccinations.map((vaccination) => ({
          _id: vaccination._id,
          sno: sno++,
          familyNumber: vaccination.familyNumber?.familyNumber || "N/A",
          lastName: vaccination.familyNumber?.lastName || "N/A", // Map lastName here
          vaccinationType: vaccination.vaccinationType,
          startDate: new Date(vaccination.startDate).toLocaleDateString(),
          startTime: new Date(
            `1970-01-01T${vaccination.startTime}`
          ).toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          }),
          reason: vaccination.reason,
          status: vaccination.status,
        }));
        setVaccinations(data);
      }
    } catch (error) {
      alert(error.response?.data?.error || "Failed to fetch Vaccinations");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchVaccinations();
  }, [id, user.role]);

  const handleViewDescription = (description) => {
    setSelectedDescription(description);
    setShowDescription(true);
  };

  const formatTime = (timeStr) => {
    if (!timeStr) return "Invalid Time";
    const [hours, minutes] = timeStr.split(":");
    const date = new Date();
    date.setHours(parseInt(hours), parseInt(minutes), 0);
    return date.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
  };
  

  return (
    <div className="bg-gray-50 min-h-screen p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-800">
            Vaccination Records
          </h1>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
          {loading ? (
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
              <span className="text-slate-600 font-medium">
                Loading Vaccination Records...
              </span>
            </div>
            <p className="mt-2 text-sm text-gray-500">
              Please wait a moment.
            </p>
          </div>
          ) : vaccinations.length > 0 ? (
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                      No.
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                      Family Number
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                      Last Name
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                      Vaccination Type
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                      Date
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                      Time
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                      Description
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {vaccinations.map((vaccination) => (
                    <tr key={vaccination._id} className="hover:bg-gray-50">
                      <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">
                        {sno++}
                      </td>
                      <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">
                        {vaccination.familyNumber}
                      </td>
                      <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">
                        {vaccination.lastName}
                      </td>
                      <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {vaccination.vaccinationType}
                      </td>
                      <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">
                        {new Date(vaccination.startDate).toLocaleDateString()}
                      </td>
                      <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">
                      {formatTime(vaccination.startTime)}
                      </td>
                      <td className="px-4 py-4 whitespace-nowrap text-sm text-[#148190]">
                        <button
                          onClick={() =>
                            handleViewDescription(vaccination.reason)
                          }
                          className="flex items-center hover:text-[#149190]"
                        >
                          <FaInfoCircle className="mr-1" />
                          View
                        </button>
                      </td>
                      <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {vaccination.status}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="p-8 text-center">
              <div className="mx-auto w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                <FaSyringe className="text-xl text-gray-400" />
              </div>
              <h3 className="text-lg font-medium text-gray-700 mb-1">
                No Vaccinations Found
              </h3>
              <p className="text-gray-500">
                {user.role === "parent"
                  ? "You haven't registered for any vaccinations yet."
                  : "This parent hasn't registered for any vaccinations yet."}
              </p>
            </div>
          )}
        </div>
      </div>

      {showDescription && (
        <div className="fixed inset-0 bg-transparent bg-opacity-30 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full">
            <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
              <h3 className="text-lg font-medium text-gray-900">
                Vaccination Details
              </h3>
              <button
                onClick={() => setShowDescription(false)}
                className="text-gray-400 hover:text-gray-500"
              >
                ✕
              </button>
            </div>
            <div className="p-6">
              <p className="text-gray-700 whitespace-pre-line">
                {selectedDescription || "No description available"}
              </p>
            </div>
            <div className="px-6 py-3 border-t border-gray-200 flex justify-end">
              <button
                onClick={() => setShowDescription(false)}
                className="px-4 py-2 bg-[#148190] text-white rounded-md hover:bg-[#148190]"
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

export default List;
