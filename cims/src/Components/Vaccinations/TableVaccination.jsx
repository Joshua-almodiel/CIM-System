import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { Link } from "react-router-dom";
import {
  columns,
  VaccinationButtons,
} from "../../Utilities/VaccinationHelper.jsx";
import axios from "axios";

const TableVaccination = () => {
  const [vaccinations, setVaccinations] = useState([]);
  const [searchParents, setSearchParents] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchVaccinations = async () => {
    try {
      const response = await axios.get(
        "https://cim-system-gvok.vercel.app/api/vaccination",
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
          lastName: vaccination.familyNumber?.lastName || "N/A",
          name: vaccination.familyNumber?.userId?.name || "N/A",
          vaccinationType: vaccination.vaccinationType,
          startDate: new Date(vaccination.startDate).toLocaleDateString(),
          startTime: new Date(
            `1970-01-01T${vaccination.startTime}`
          ).toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          }),
          status: vaccination.status,
          action: <VaccinationButtons _id={vaccination._id} />,
        }));
        setVaccinations(data);
        setSearchParents(data);
        setLoading(false);
      }
    } catch (error) {
      if (error.response && !error.response.data.success) {
        alert(error.response.data.error);
      }
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchVaccinations();
  }, []);

  const searchParent = (e) => {
    const filtered = vaccinations.filter((vaccination) =>
      vaccination.lastName.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setSearchParents(filtered);
  };

  const customStyles = {
    rows: {
      style: {
        backgroundColor: "#F9FAFB",
        "&:nth-of-type(even)": { backgroundColor: "#F1F5F9" },
        "&:hover": { backgroundColor: "#E2E8F0" },
      },
    },
    headRow: {
      style: {
        backgroundColor: "#1E293B",
        color: "#FFFFFF",
        fontSize: "0.875rem",
        fontWeight: "700",
        borderTopLeftRadius: "10px",
        borderTopRightRadius: "10px",
      },
    },
    cells: {
      style: {
        padding: "12px",
        fontSize: "0.875rem",
        color: "#1E293B",
      },
    },
    pagination: {
      style: {
        backgroundColor: "#F9FAFB",
        borderBottomLeftRadius: "10px",
        borderBottomRightRadius: "10px",
        borderTop: "1px solid #E2E8F0",
      },
    },
  };

  return (
    <>
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
              Loading Records...
            </span>
          </div>
          <p className="mt-2 text-sm text-gray-500">Please wait a moment.</p>
        </div>
      ) : (
        <div className="bg-slate-100 py-15 px-40 md:px-12 min-h-screen overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="mb-10">
              <h3 className="text-4xl font-extrabold text-slate-800">
                Vaccination Records
              </h3>
            </div>

            <div className="bg-white rounded-2xl shadow-md border border-slate-200 p-6 overflow-auto">
              <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
                <div className="relative w-full md:w-96">
                  <input
                    type="text"
                    placeholder="Search by Family Number"
                    onChange={searchParent}
                    className="pl-10 pr-4 py-2.5 rounded-lg border border-gray-300 w-full text-gray-700 shadow-sm focus:ring-2 focus:ring-[#147190] focus:outline-none"
                  />
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg
                      className="h-5 w-5 text-gray-400"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-4.35-4.35M16 10a6 6 0 11-12 0 6 6 0 0112 0z"
                      />
                    </svg>
                  </div>
                </div>
                <Link
                  to="/healthWorker-dashboard/add-vaccination"
                  className="bg-[#147190] hover:bg-[#148190] transition text-white font-medium text-sm px-5 py-2.5 rounded-lg shadow"
                >
                  <div className="flex items-center space-x-2">
                    <svg
                      className="h-5 w-5"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Add Vaccination</span>
                  </div>
                </Link>
              </div>

              {searchParents.length > 0 ? (
                <DataTable
                  columns={columns}
                  data={searchParents}
                  customStyles={customStyles}
                  pagination
                  highlightOnHover
                  responsive
                  fixedHeader
                />
              ) : (
                <div className="text-center py-16">
                  <h2 className="text-lg font-semibold text-slate-700">
                    No records found
                  </h2>
                  <p className="text-slate-500 mt-2">
                    Click on the Add Vaccination to add a record.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default TableVaccination;
