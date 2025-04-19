import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const Edit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
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
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchVital = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/vital/${id}`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        if (response.data.success) {
          const vitalData = response.data.vital;
          setVital({
            ...vitalData,
          });
        }
        setLoading(false);
      } catch (error) {
        if (error.response && !error.response.data.success) {
          alert(error.response.data.error);
        }
        setLoading(false);
      }
    };
    fetchVital();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setVital({ ...vital, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        `http://localhost:5000/api/vital/${id}`,
        vital,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      if (response.data.success) {
        navigate("/healthWorker-dashboard/parents/vital");
      }
    } catch (error) {
      if (error.response && !error.response.data.success) {
        alert(error.response.data.error);
      }
    }
  };

  if (loading) {
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
          Loading Record...
        </h3>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white shadow-xl rounded-lg overflow-hidden">
          <div className="bg-white-200 py-4 px-6">
            <h2 className="text-2xl font-bold text-gray-700">
              Edit Vital Record
            </h2>
            <p className="text-gray-500 mt-1">
              Please update all required fields completely and accurately
            </p>
          </div>

          <form onSubmit={handleSubmit} className="p-6 space-y-8">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-[#147190] mb-4 border-b border-blue-200 pb-2">
                Vital Signs
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div>
                <label
                  htmlFor="dateComplaints"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Date of Complaints <span className="text-red-500">*</span>
                </label>
                <input
                  type="date"
                  name="dateComplaints"
                  value={vital.dateComplaints}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-black focus:outline-none focus:ring-[#147190] focus:border-[#148190]"
                  required
                />
                </div>
              </div>

              <div>
                <label
                  htmlFor="chiefComplaints"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Chief Complaints
                </label>
                <textarea
                  name="chiefComplaints"
                  value={vital.chiefComplaints}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-black focus:outline-none focus:ring-[#147190] focus:border-[#148190]"
                  rows="3"
                  required
                ></textarea>
              </div>

              <div>
                <label htmlFor="bp" className="block text-sm font-medium text-gray-700 mb-1">
                  Blood Pressure (BP)
                </label>
                <input
                  type="text"
                  name="bp"
                  value={vital.bp}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-black focus:outline-none focus:ring-[#147190] focus:border-[#148190]"
                  required
                />
              </div>

              <div>
                <label htmlFor="hr" className="block text-sm font-medium text-gray-700 mb-1">
                  Heart Rate (HR)
                </label>
                <input
                  type="text"
                  name="hr"
                  value={vital.hr}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-black focus:outline-none focus:ring-[#147190] focus:border-[#148190]"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="o2sat"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Oxygen Saturation (O2 Sat)
                </label>
                <input
                  type="text"
                  name="o2sat"
                  value={vital.o2sat}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-black focus:outline-none focus:ring-[#147190] focus:border-[#148190]"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="temp"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Temperature (°C)
                </label>
                <input
                  type="text"
                  name="temp"
                  value={vital.temp}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-black focus:outline-none focus:ring-[#147190] focus:border-[#148190]"
                  required
                />
              </div>

              <div>
                <label htmlFor="rr" className="block text-sm font-medium text-gray-700 mb-1">
                  Respiratory Rate (RR)
                </label>
                <input
                  type="text"
                  name="rr"
                  value={vital.rr}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-black focus:outline-none focus:ring-[#147190] focus:border-[#148190]"
                  required
                />
              </div>

              <div>
                <label htmlFor="wt" className="block text-sm font-medium text-gray-700 mb-1">
                  Weight (kg)
                </label>
                <input
                  type="text"
                  name="wt"
                  value={vital.wt}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-black focus:outline-none focus:ring-[#147190] focus:border-[#148190]"
                  required
                />
              </div>

              <div>
                <label htmlFor="ht" className="block text-sm font-medium text-gray-700 mb-1">
                  Height (cm)
                </label>
                <input
                  type="text"
                  name="ht"
                  value={vital.ht}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-black focus:outline-none focus:ring-[#147190] focus:border-[#148190]"
                  required
                />
              </div>

              <div>
                <label htmlFor="bmi" className="block text-sm font-medium text-gray-700 mb-1">
                  Body Mass Index (BMI)
                </label>
                <input
                  type="text"
                  name="bmi"
                  value={vital.bmi}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-black focus:outline-none focus:ring-[#147190] focus:border-[#148190]"
                  required
                />
              </div>
            </div>

            <div className="mt-6">
              <button
                type="submit"
                className="w-full px-6 py-2 bg-[#147190] text-white rounded-lg hover:bg-[#148190] transition duration-200"
              >
                Update Vital Record
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Edit;
