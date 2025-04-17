import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { columns, ParentButtons } from "../../Utilities/ParentHelper.jsx";
import axios from "axios";
import DataTable from "react-data-table-component";

const List = () => {
  const [parents, setParents] = useState([]);
  const [searchParent, setSearchParent] = useState();

  useEffect(() => {
    const fetchParents = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/parent", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        if (response.data.success) {
          let sno = 1;
          const data = response.data.parents.map((care) => ({
            _id: care._id,
            sno: sno++,
            familyNumber: care.familyNumber,
            lastName: care.lastName,
            firstName: care.firstName,
            middleName: care.middleName,
            sex: care.sex,
            birthday: care.birthday
              ? new Date(care.birthday).toLocaleDateString()
              : "N/A",
            action: <ParentButtons _id={care._id} />,
          }));
          setParents(data);
          setSearchParent(data);
        }
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
        backgroundColor: "#F8FAFC",
        "&:nth-of-type(even)": {
          backgroundColor: "#F1F5F9",
        },
        "&:hover": {
          backgroundColor: "#E2E8F0",
        },
      },
    },
    headRow: {
      style: {
        backgroundColor: "#0F172A",
        color: "#FFFFFF",
        fontSize: "0.875rem",
        fontWeight: "600",
        borderTopLeftRadius: "8px",
        borderTopRightRadius: "8px",
      },
    },
    headCells: {
      style: {
        paddingLeft: "12px",
        paddingRight: "12px",
      },
    },
    cells: {
      style: {
        paddingLeft: "12px",
        paddingRight: "12px",
        fontSize: "0.875rem",
        color: "#334155",
      },
    },
    pagination: {
      style: {
        backgroundColor: "#F8FAFC",
        borderBottomLeftRadius: "8px",
        borderBottomRightRadius: "8px",
        borderTop: "1px solid #E2E8F0",
      },
    },
  };

  const handleFilter = (e) => {
    const records = parents.filter((care) => {
      return care.lastName.toLowerCase().includes(e.target.value.toLowerCase());
    });
    setSearchParent(records);
  };

  return (
    <div className="bg-gray-50 p-4 md:p-8 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Child Records</h1>
          <p className="text-gray-600 mt-2">
            Manage all child records in the system
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
            <div className="relative w-full md:w-96">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg
                  className="h-5 w-5 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <input
                type="text"
                onChange={handleFilter}
                placeholder="Search by last name..."
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-700"
              />
            </div>

            <Link
              to="/healthWorker-dashboard/add-parent"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-150"
            >
              <svg
                className="-ml-1 mr-2 h-5 w-5"
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
              Add Family
            </Link>
          </div>

          {searchParent ? (
            searchParent.length > 0 ? (
              <div className="overflow-hidden border border-gray-200 rounded-lg">
                <div className="overflow-hidden">
                  <DataTable
                    columns={columns}
                    data={searchParent}
                    customStyles={customStyles}
                    pagination
                    highlightOnHover
                    responsive
                    striped
                    noHeader
                    persistTableHead
                  />
                </div>
              </div>
            ) : (
              <div className="text-center py-12">
                <svg
                  className="mx-auto h-12 w-12 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1"
                    d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <h3 className="mt-2 text-lg font-medium text-gray-900">
                  No records found
                </h3>
                <p className="mt-1 text-sm text-gray-500">
                  Try adjusting your search or add a new family record.
                </p>
                <div className="mt-6">
                  <Link
                    to="/healthWorker-dashboard/add-parent"
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    <svg
                      className="-ml-1 mr-2 h-5 w-5"
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
                    Add Family
                  </Link>
                </div>
              </div>
            )
          ) : (
            <div className="text-center py-12">
              <div className="inline-flex items-center justify-center">
                <svg
                  className="animate-spin -ml-1 mr-3 h-8 w-8 text-blue-500"
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
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                <span className="text-lg font-medium text-gray-700">
                  Loading family records...
                </span>
              </div>
              <p className="mt-2 text-sm text-gray-500">
                This may take a few moments.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default List;
