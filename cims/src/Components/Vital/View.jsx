import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useAuth } from "../../Context/AuthContext.jsx";
import { FaSyringe, FaInfoCircle } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

const View = () => {
  const [filteredVitals, setFilteredVitals] = useState([]);
  const [selectedComplaint, setSelectedComplaint] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const { id } = useParams();
  const { user } = useAuth();
  const navigate = useNavigate();

  const fetchVitals = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5000/api/vital/${id}/${user.role}`,
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      );

      if (response.data.success) {
        setFilteredVitals(response.data.vital);
      }
    } catch (error) {
      console.error("Error fetching vital:", error);
    }
  };

  useEffect(() => {
    fetchVitals();
  }, [id]);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  const handleComplaintClick = (complaint) => {
    setSelectedComplaint(complaint);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedComplaint(null);
  };

  return (
    <div className="bg-gray-50 min-h-screen p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-800">Vitals Record</h1>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
          {filteredVitals.length > 0 ? (
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                      Family Number
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                      Date Complaints
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                      Chief Complaints
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                      BP
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                      HR
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                      O2Sat
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                      Temp
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                      RR
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                      WT
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                      HT
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                      BMI
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                      {user.role === "healthWorker" && (<>Edit</>)}
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200 text-sm text-gray-700">
                  {filteredVitals.map((vital, idx) => (
                    <tr key={idx} className="hover:bg-gray-50">
                      <td className="px-4 py-4 whitespace-nowrap">
                        {vital.familyNumber.familyNumber}
                      </td>
                      <td className="px-4 py-4 whitespace-nowrap">
                        {formatDate(vital.dateComplaints)}
                      </td>
                      <td className="px-4 py-4 whitespace-nowrap text-[#148190]">
                        <button
                          onClick={() =>
                            handleComplaintClick(vital.chiefComplaints)
                          }
                          className="flex items-center hover:text-[#149190]"
                        >
                          <FaInfoCircle className="mr-1" />
                          View
                        </button>
                      </td>
                      <td className="px-4 py-4 whitespace-nowrap">
                        {vital.bp}
                      </td>
                      <td className="px-4 py-4 whitespace-nowrap">
                        {vital.hr}
                      </td>
                      <td className="px-4 py-4 whitespace-nowrap">
                        {vital.o2sat}
                      </td>
                      <td className="px-4 py-4 whitespace-nowrap">
                        {vital.temp}
                      </td>
                      <td className="px-4 py-4 whitespace-nowrap">
                        {vital.rr}
                      </td>
                      <td className="px-4 py-4 whitespace-nowrap">
                        {vital.wt}
                      </td>
                      <td className="px-4 py-4 whitespace-nowrap">
                        {vital.ht}
                      </td>
                      <td className="px-4 py-4 whitespace-nowrap">
                        {vital.bmi}
                      </td>
                      <td className="px-4 py-4 whitespace-nowrap">
                        {user.role === "healthWorker" && (
                          <button
                            onClick={() =>
                              navigate(
                                `/healthWorker-dashboard/parents/vital/edit/${vital._id}`
                              )
                            }
                            className="px-3 py-1 bg-[#147190] text-white rounded-lg hover:bg-[#148190] transition duration-200"
                          >
                            Edit
                          </button>
                        )}
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
                No Records Found
              </h3>
              <p className="text-gray-500">
                {user.role === "parent"
                  ? "You haven't submitted any vitals yet."
                  : "This parent hasn't submitted any vitals yet."}
              </p>
            </div>
          )}
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-transparent bg-opacity-40 z-50 flex items-center justify-center">
          <div className="bg-white rounded-lg shadow-lg max-w-md w-full p-6 relative">
            <button
              onClick={closeModal}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
            >
              <IoClose size={24} />
            </button>
            <h2 className="text-xl font-bold text-gray-800 mb-4">
              Chief Complaint
            </h2>
            <p className="text-gray-700 whitespace-pre-line">
              {selectedComplaint}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default View;
