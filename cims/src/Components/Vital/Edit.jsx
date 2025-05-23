import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const Edit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [vital, setVital] = useState({
    bp: "",
    hr: "",
    o2sat: "",
    temp: "",
    rr: "",
    wt: "",
    ht: "",
    bmi: "",
    chiefComplaints: "",
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchVital = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          console.warn("No token found.");
          return;
        }

        const res = await axios.get(`https://cim-system-gvok.vercel.app/api/vital/${id}`, {
          headers: { Authorization: `Bearer ${token}` }
        });
        

        if (res.data.success && res.data.vital) {
          const { bp, hr, o2sat, temp, rr, wt, ht, bmi, chiefComplaints } = res.data.vital;
          setVital({
            bp: bp || "",
            hr: hr || "",
            o2sat: o2sat || "",
            temp: temp || "",
            rr: rr || "",
            wt: wt || "",
            ht: ht || "",
            bmi: bmi || "",
            chiefComplaints: chiefComplaints || "",
          });
        } else {
          console.error("Vital data is missing or invalid");
        }
      } catch (err) {
        console.error("Failed to fetch vital:", err);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchVital();
    }
  }, [id]);

  const handleChange = (e) => {
    setVital({ ...vital, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.put(
        `https://cim-system-gvok.vercel.app/api/vital/single/${id}`,
        vital,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      if (res.data.success) {
        navigate(-1);
      }
    } catch (err) {
      console.error("Failed to update vital:", err);
    }
  };

  if (loading) {
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
                <span className="text-slate-600 font-medium">
                  Loading...
                </span>
              </div>
              <p className="mt-2 text-sm text-gray-500">
                Please wait a moment.
              </p>
            </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white shadow-xl rounded-lg overflow-hidden">
          <div className="bg-white-200 py-4 px-6">
            <h2 className="text-2xl font-bold text-gray-700">Edit Vital Sign</h2>
            <p className="text-gray-500 mt-1">
              Please update all required fields completely and accurately
            </p>
          </div>

          <form onSubmit={handleSubmit} className="p-6 space-y-8">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-[#147190] mb-4 border-b border-blue-200 pb-2">
                Vital Signs
              </h3>
              {[
                { label: "BP", name: "bp" },
                { label: "HR", name: "hr" },
                { label: "O2Sat", name: "o2sat" },
                { label: "Temperature", name: "temp" },
                { label: "RR", name: "rr" },
                { label: "Weight", name: "wt" },
                { label: "Height", name: "ht" },
                { label: "BMI", name: "bmi" },
              ].map((field) => (
                <div key={field.name}>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    {field.label} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name={field.name}
                    value={vital[field.name]}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-black focus:outline-none focus:ring-[#147190] focus:border-[#148190]"
                  />
                </div>
              ))}
              <div className="col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Chief Complaints
                </label>
                <textarea
                  name="chiefComplaints"
                  value={vital.chiefComplaints}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-black focus:outline-none focus:ring-[#147190] focus:border-[#148190]"
                  rows={3}
                ></textarea>
              </div>
              <div className="col-span-2 text-right">
                <button
                  type="submit"
                  className="bg-[#147190] text-white px-5 py-2 rounded hover:bg-[#148190]"
                >
                  Update
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Edit;
