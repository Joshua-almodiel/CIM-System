import { useNavigate } from "react-router-dom";

export const columns = [
  {
    name: "ID",
    selector: (row) => row.sno,
    width: "100px",
    wrap: true,
  },
  {
    name: "Family Number",
    selector: (row) => row.familyNumber,
    width: "140px",
    wrap: true,
  },
  {
    name: "Last Name",
    selector: (row) => row.lastName,
    sortable: true,
    width: "120px",
    wrap: true,
  },
  {
    name: "First Name",
    selector: (row) => row.firstName,
    width: "120px",
    wrap: true,
  },
  {
    name: "Middle Name",
    selector: (row) => row.middleName,
    width: "120px",
    wrap: true,
  },
  {
    name: "Gender",
    selector: (row) => row.sex,
    width: "100px",
    wrap: true,
  },
  {
    name: "Birthday",
    selector: (row) => row.birthday,
    width: "100px",
    wrap: true,
  },
  {
    name: "Action",
    selector: (row) => row.action,
    width: "340px",
    center: true,
  },
];

export const ParentButtons = ({ _id }) => {
  const navigate = useNavigate();

  return (
    <div className="flex space-x-2">
      <button
        className="px-1 py-1 bg-white text-blue-600 rounded-lg shadow-sm hover:shadow-md transition-all duration-200 border border-gray-200 hover:border-blue-300 text-sm flex items-center"
        onClick={() => navigate(`/healthWorker-dashboard/parents/${_id}`)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 mr-1.5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
          />
        </svg>
        View
      </button>

      <button
        className="px-1 py-1 bg-blue-600 text-white rounded-lg shadow-sm hover:shadow-md transition-all duration-200 text-sm flex items-center"
        onClick={() => navigate(`/healthWorker-dashboard/parents/edit/${_id}`)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 mr-1.5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
          />
        </svg>
        Edit
      </button>

      <button
        className="px-1 py-1 bg-green-50 text-green-700 rounded-lg shadow-sm hover:shadow-md transition-all duration-200 border border-green-100 hover:border-green-200 text-sm flex items-center"
        onClick={() =>
          navigate(`/healthWorker-dashboard/parents/salary/${_id}`)
        }
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 mr-1.5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        Salary
      </button>

      <button
        className="px-1 py-1 bg-red-50 text-red-600 rounded-lg shadow-sm hover:shadow-md transition-all duration-200 border border-red-100 hover:border-red-200 text-sm flex items-center"
        onClick={() =>
          navigate(`/healthWorker-dashboard/parents/vaccination/${_id}`)
        }
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 mr-1.5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        Vaccination
      </button>
    </div>
  );
};
