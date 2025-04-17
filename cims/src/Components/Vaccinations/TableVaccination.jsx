import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { Link } from "react-router-dom";
import { columns, VaccinationButtons } from "../../Utilities/VaccinationHelper.jsx";
import axios from "axios";

const TableVaccination = () => {
  const [vaccinations, setVaccinations] = useState([]);
  const [searchParents, setSearchParents] = useState([]);

  const noRecords = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    color: "white",
    backgroundColor: "#1F2937",
    fontSize: "1.5rem",
    fontWeight: "500",
    padding: "2rem",
    borderRadius: "0.5rem",
  }

  const fetchVaccinations = async () => {
    try {
      const responnse = await axios.get("http://localhost:5000/api/vaccination", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      console.log(responnse);
      if (responnse.data.success) {
        let sno = 1;
        const data = await responnse.data.vaccinations.map((vaccination) => ({
          _id: vaccination._id,
          sno: sno++,
          familyNumber: vaccination.familyNumber.familyNumber,
          name: vaccination.familyNumber.userId.name,
          vaccinationType: vaccination.vaccinationType,
          days: new Date(vaccination.startDate).getDate(),
          action: <VaccinationButtons _id={vaccination._id} />,
        }));
        setVaccinations(data);
        setSearchParents(data);
      }
      console.log(responnse.data.vaccinations);
    } catch (error) {
      if (error.response && !error.response.data.success) {
        alert(error.response.data.error);
      }
    }
  };

  useEffect(() => {
    fetchVaccinations();
  }, []);

  const searchParent = (e) => {
    const data = vaccinations.filter((vaccination) =>
      vaccination.familyNumber.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setSearchParents(data);
  };


  const customStyles = {
    rows: {
      style: {
        backgroundColor: "#1F2937",
        color: "#FFFFFF",
      },
    },
    headRow: {
      style: {
        backgroundColor: "#1F2937",
        color: "#FFFFFF",
        fontSize: "0.875rem",
        fontWeight: "600",
      },
    },
    pagination: {
      style: {
        backgroundColor: "#1F2937",
        color: "#FFFFFF",
      },
    },
  };

  return (
    <>
      {setSearchParents ? (
        <div className="p-6 bg-gray-900 text-white overflow-hidden">
          <div className="mb-6">
            <h3 className="text-2xl font-semibold">Manage Vaccination Records</h3>
          </div>

          <div className="flex items-left justify-between mb-6">
                    <Link
                        to="/healthWorker-dashboard/add-vaccination"
                        className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-200"
                    >
                        Appy for leave
                    </Link>
            </div>

          <div className="flex items-center justify-between mb-6">
            <input
              type="text"
              placeholder="Search by Family Number"
              onChange={searchParent}
              className="w-full max-w-md px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500 text-white"
            />
          </div>

          {searchParents.length > 0 ? (
            <DataTable
              columns={columns}
              data={searchParents}
              customStyles={customStyles}
              pagination
              highlightOnHover
              responsive
            />
          ) : (
            <div style={noRecords}>No Records Found</div>
          )}
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
            Loading Parents Records...
          </h3>
        </div>
      )}
    </>
  );
};

export default TableVaccination;
