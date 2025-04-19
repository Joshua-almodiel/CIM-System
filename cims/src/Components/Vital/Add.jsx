import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Add = () => {
  const [vital, setVital] = useState({
    familyNumber: "",
    dateComplaints: "",
    chiefComplaints: "",
    bp: "",
    hr: "",
    o2sat: "",
    temp: "",
    rr: "",
    wt: "",
    ht: "",
    bmi: "",
  });
  const [parents, setParents] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchParents = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/parent", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        if (response.data.success) {
          setParents(response.data.parents);
        }
      } catch (error) {
        console.error("Error fetching parents:", error);
      }
    };

    fetchParents();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setVital((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/api/vital/add",
        vital,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      if (response.data.success) {
        navigate("/healthWorker-dashboard/parents");
      }
    } catch (error) {
      console.error("Error adding vital:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white shadow-xl rounded-lg overflow-hidden">
          <div className="bg-white-200 py-4 px-6">
            <h2 className="text-2xl font-bold text-gray-700">
              Add Vital Signs Record
            </h2>
            <p className="text-gray-500 mt-1">
              Please fill out all required fields completely and accurately
            </p>
          </div>

          <form className="p-6 space-y-8" onSubmit={handleSubmit}>
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-[#147190] mb-4 border-b border-blue-200 pb-2">
                Vital Signs
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
                    {parents.length > 0 ? (
                      parents.map((parent) => (
                        <option key={parent._id} value={parent._id}>
                          {parent.familyNumber}
                        </option>
                      ))
                    ) : (
                      <option disabled>No records available</option>
                    )}
                  </select>
                </div>
              </div>

              <div>
                <label
                  htmlFor="dateComplaints"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Date Complaints <span className="text-red-500">*</span>
                </label>
                <input
                  type="date"
                  name="dateComplaints"
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-black focus:outline-none focus:ring-[#147190] focus:border-[#148190]"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="chiefComplaints"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Chief Complaints <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="chiefComplaints"
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-black focus:outline-none focus:ring-[#147190] focus:border-[#148190]"
                  required
                />
              </div>

              <div>
                <label htmlFor="bp" className="block text-sm font-medium text-gray-700 mb-1">
                  BP <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="bp"
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-black focus:outline-none focus:ring-[#147190] focus:border-[#148190]"
                />
              </div>

              <div>
                <label htmlFor="hr" className="block text-sm font-medium text-gray-700 mb-1">
                  HR <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="hr"
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-black focus:outline-none focus:ring-[#147190] focus:border-[#148190]"
                />
              </div>

              <div>
                <label
                  htmlFor="o2sat"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  O2sat <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="o2sat"
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-black focus:outline-none focus:ring-[#147190] focus:border-[#148190]"
                />
              </div>

              <div>
                <label
                  htmlFor="temp"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Temperature <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="temp"
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-black focus:outline-none focus:ring-[#147190] focus:border-[#148190]"
                />
              </div>

              <div>
                <label htmlFor="rr" className="block text-sm font-medium text-gray-700 mb-1">
                  RR <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="rr"
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-black focus:outline-none focus:ring-[#147190] focus:border-[#148190]"
                />
              </div>

              <div>
                <label htmlFor="wt" className="block text-sm font-medium text-gray-700 mb-1">
                  WT <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="wt"
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-black focus:outline-none focus:ring-[#147190] focus:border-[#148190]"
                />
              </div>

              <div>
                <label htmlFor="ht" className="block text-sm font-medium text-gray-700 mb-1">
                  HT <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="ht"
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-black focus:outline-none focus:ring-[#147190] focus:border-[#148190]"
                />
              </div>

              <div>
                <label htmlFor="bmi" className="block text-sm font-medium text-gray-700 mb-1">
                  BMI <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="bmi"
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-black focus:outline-none focus:ring-[#147190] focus:border-[#148190]"
                />
              </div>
            </div>

            <div className="mt-6">
              <button
                type="submit"
                className="w-full px-6 py-2 bg-[#147190] text-white rounded-lg hover:bg-[#148190] transition duration-200"
              >
                Add Vital
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Add;
