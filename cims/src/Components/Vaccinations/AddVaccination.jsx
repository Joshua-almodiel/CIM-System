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
    const fetchParents = async () => {
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
          navigate(`/healthWorker-dashboard/vaccinations/${user._id}`);
        }
      } catch (error) {
        if (error.response && !error.response.data.success) {
          alert(error.response.data.error);
        }
      }
    };
    fetchParents();
  };

  return (
    <div className="p-6 bg-gray-900 text-white">
      <h2 className="text-2xl font-semibold mb-6">Add Vaccination Record</h2>

      <form
        className="bg-gray-800 p-6 rounded-lg shadow-md"
        onSubmit={handleSubmit}
      >
        <div className="space-y-6">
          <div>
            <label
              htmlFor="familyNumber"
              className="block text-sm font-medium mb-2"
            >
              Family Number
            </label>
            <select
              name="familyNumber"
              onChange={handleChange}
              className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500 text-white"
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

          <div>
            <label
              htmlFor="vaccinationType"
              className="block text-sm font-medium mb-2"
            >
              Vaccination Type
            </label>
            <select
              name="vaccinationType"
              onChange={handleChange}
              className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500 text-white"
              required
            >
              <option value="">Select Vaccination</option>
              <option value="BCG">BCG</option>
              <option value="HEPATITIS B">HEPATITIS B</option>
              <option value="PENTAVALENT VACCINE">PENTAVALENT VACCINE</option>
              <option value="ORAL POLIO VACCINE">ORAL POLIO VACCINE</option>
              <option value="INACTIVATED POLIO VACCINE">
                INACTIVATED POLIO VACCINE
              </option>
              <option value="PNEUMOCOCCAL CONJUGATE VACCINE">
                PNEUMOCOCCAL CONJUGATE VACCINE
              </option>
            </select>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="fromDate"
                className="block text-sm font-medium mb-2"
              >
                Date
              </label>
              <input
                type="date"
                name="startDate"
                onChange={handleChange}
                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500 text-white"
                required
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="description"
              className="block text-sm font-medium mb-2"
            >
              Description
            </label>
            <textarea
              name="reason"
              placeholder="Reason"
              onChange={handleChange}
              className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500 text-white"
              rows={4}
              required
            />
          </div>
        </div>

        <div className="mt-6">
          <button
            type="submit"
            className="w-full px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-200"
          >
            Add Vaccination
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddVaccination;
