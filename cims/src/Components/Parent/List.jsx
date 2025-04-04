import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { columns, ParentButtons } from "../../Utilities/ParentHelper.jsx";
import axios from "axios";
import DataTable from "react-data-table-component";

const List = () => {
  const [parents, setParents] = useState([]);
  const [searchParent, setSearchParent] = useState();

  const noRecord = {
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
  };

  useEffect(() => {
    const fetchParents = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/parent", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        console.log("API Response: ", response.data);
        if (response.data.success) {
          const data = response.data.parents.map((care) => ({
            familyNumber: care.familyNumber,
            lastName: care.lastName,
            firstName: care.firstName,
            middleName: care.middleName,
            sex: care.sex,
            birthday: care.dob ? new Date(care.dob).toLocaleDateString() : "N/A",
            action: <ParentButtons _id={care._id} />,
          }));

          console.log("Formatted Parent Data: ", data);

          setParents(data);
          setSearchParent(data);
        }
        console.log(response.data.parents);
      } catch (error) {
        if (error.response && !error.response.data.success) {
          alert(error.response.data.error);
        }
      }
    };
    fetchParents();
  }, []);

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

  const handleFilter = (e) => {
    const records = parents.filter((care) => {
      return care.name.toLowerCase().includes(e.target.value.toLowerCase());
    });
    setSearchParent(records);
  };

  return (
    <>
      {searchWorker ? (
        <div className="p-6 bg-gray-900 text-white">
        <div className="mb-6">
          <h3 className="text-2xl font-semibold">
            Manage Construction Workers
          </h3>
        </div>

        <div className="flex items-center justify-between mb-6">
          <input
            type="text"
            onChange={handleFilter}
            placeholder="Search workers name"
            className="px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-black-500 text-white"
          />

          <Link
            to="/manager-dashboard/add-worker"
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-200"
          >
            Add New Worker
          </Link>
        </div>
        <div>
          {searchWorker.length > 0 ? (
            <DataTable
              columns={columns}
              data={searchWorker}
              customStyles={customStyles}
              pagination
              highlightOnHover
              responsive
            />
          ) : (
            <div style={noRecord}>No Records Found</div>
          )}
        </div>
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
            Loading Workers...
          </h3>
        </div>
      )}
    </>
  );
};

export default List;
