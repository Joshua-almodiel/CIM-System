import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Add = () => {
  const [salary, setSalary] = useState({
    workerId: null,
    basicSalary: 0,
    bunos: 0,
    advanceSalary: 0,
    payDate: null,
  });
  const [parents, setParents] = useState([]);
  const navigate = useNavigate();



  const handleChange = (e) => {
    const { name, value } = e.target;
    setSalary((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `http://localhost:5000/api/salary/add`,
        salary,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      console.log(response.data);
      if (response.data.success) {
        navigate("/healthWorker-dashboard/parents");
      }
    } catch (error) {
      if (error.response && !error.response.data.success) {
        alert(error.response.data.error);
      }
    }
  };

  return (
    <>
      {parents ? (
        <div className="p-6 bg-gray-900 text-white">
          <h2 className="text-2xl font-semibold mb-6">Add Salary</h2>
          <form
            className="bg-gray-800 p-6 rounded-lg shadow-md"
            onSubmit={handleSubmit}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

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
                  <option value="">Select Parents</option>
                  {parents.length > 0 ? (
                    parents.map((care) => (
                      <option key={care._id} value={care._id}>
                        {care.familyNumber}
                      </option>
                    ))
                  ) : (
                    <option disabled>No parents available</option>
                  )}
                </select>
              </div>

              <div>
                <label
                  htmlFor="basicSalary"
                  className="block text-sm font-medium mb-2"
                >
                  Basic Salary
                </label>
                <input
                  type="number"
                  name="basicSalary"
                  onChange={handleChange}
                  placeholder="Basic Salary"
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500 text-white"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="allowances"
                  className="block text-sm font-medium mb-2"
                >
                  Bunos
                </label>
                <input
                  type="number"
                  name="bunos"
                  placeholder="Bunos"
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500 text-white"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="advanceSalary"
                  className="block text-sm font-medium mb-2"
                >
                  Advance Salary
                </label>
                <input
                  type="number"
                  name="advanceSalary"
                  placeholder="Advance Salary"
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500 text-white"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="payDate"
                  className="block text-sm font-medium mb-2"
                >
                  Pay Date
                </label>
                <input
                  type="date"
                  name="payDate"
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500 text-white"
                  required
                />
              </div>
            </div>

            <div className="mt-6">
              <button
                type="submit"
                className="w-full px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-200"
              >
                Add Salary
              </button>
            </div>
          </form>
        </div>
      ) : (
        <div className="p-8 text-center">
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
            Loading Salaries...
          </h3>
        </div>
      )}
    </>
  );
};

export default Add;
