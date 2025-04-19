import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../Context/AuthContext.jsx";

const AddVaccination = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [familyNumbers, setFamilyNumbers] = useState([]);
  const [vaccination, setVaccination] = useState({
    userId: user._id,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setVaccination((prev) => ({ ...prev, [name]: value }));
  };

  useEffect(() => {
    const fetchFamilyNumbers = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/parent/family-numbers",
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        console.log("API Response:", response.data);
        if (response.data.success) {
          setFamilyNumbers(response.data.familyNumbers);
        } else {
          console.error("Failed to fetch family numbers:", response.data.error);
        }
      } catch (error) {
        console.error("Error fetching family numbers:", error);
      }
    };

    fetchFamilyNumbers();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !vaccination.familyNumber ||
      !vaccination.vaccinationType ||
      !vaccination.startDate ||
      !vaccination.startTime ||
      !vaccination.reason
    ) {
      alert("Please fill in all required fields.");
      return;
    }
    console.log("Vaccination Data:", vaccination);

    try {
      const response = await axios.post(
        `http://localhost:5000/api/vaccination/add`,
        vaccination,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      if (response.data.success) {
        navigate(`/healthWorker-dashboard/vaccinations`);
      } else {
        console.error("Failed to add vaccination:", response.data.error);
      }
    } catch (error) {
      console.error("Error adding vaccination:", error);
      if (error.response && !error.response.data.success) {
        alert(error.response.data.error);
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white shadow-xl rounded-lg overflow-hidden">
          <div className="bg-white-200 py-4 px-6">
            <h2 className="text-2xl font-bold text-gray-700">
              Add Vaccination Record
            </h2>
            <p className="text-gray-500 mt-1">
              Please fill out all required fields completely and accurately
            </p>
          </div>

          <form className="p-6 space-y-8" onSubmit={handleSubmit}>
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-[#147190] mb-4 border-b border-blue-200 pb-2">
                Vaccination
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div>
                  <label
                    htmlFor="familyNumber"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Family Number <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="familyNumber"
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-black focus:outline-none focus:ring-[#147190] focus:border-[#148190]"
                    required
                  >
                    <option value="">Select Family Number</option>
                    {familyNumbers.map((family) => (
                      <option key={family._id} value={family._id}>
                        {family.familyNumber}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div>
                <label
                  htmlFor="vaccinationType"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Vaccination Type <span className="text-red-500">*</span>
                </label>
                <select
                  name="vaccinationType"
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-black focus:outline-none focus:ring-[#147190] focus:border-[#148190]"
                  required
                >
                  <option value="">Select Vaccination</option>
                  <option value="BCG">BCG</option>
                  <option value="HEPATITIS B">HEPATITIS B</option>
                  <option value="PENTAVALENT VACCINE">
                    PENTAVALENT VACCINE
                  </option>
                  <option value="ORAL POLIO VACCINE">ORAL POLIO VACCINE</option>
                  <option value="INACTIVATED POLIO VACCINE">
                    INACTIVATED POLIO VACCINE
                  </option>
                  <option value="PNEUMOCOCCAL CONJUGATE VACCINE">
                    PNEUMOCOCCAL CONJUGATE VACCINE
                  </option>
                </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="fromDate"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Date <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="date"
                    name="startDate"
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-black focus:outline-none focus:ring-[#147190] focus:border-[#148190]"
                    required
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="startTime"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Time <span className="text-red-500">*</span>
                </label>
                <input
                  type="time"
                  name="startTime"
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-black focus:outline-none focus:ring-[#147190] focus:border-[#148190]"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="description"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Description <span className="text-red-500">*</span>
                </label>
                <textarea
                  name="reason"
                  placeholder="Reason"
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-black focus:outline-none focus:ring-[#147190] focus:border-[#148190]"
                  rows={4}
                  required
                />
              </div>
            </div>

            <div className="mt-6">
              <button
                type="submit"
                className="w-full px-6 py-2 bg-[#147190] text-white rounded-lg hover:bg-[#148190] transition duration-200"
              >
                Add Vaccination
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddVaccination;
