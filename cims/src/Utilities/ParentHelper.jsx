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
    width: "350px",
    center: true,
  },
];

export const ParentButtons = ({ _id }) => {
  const navigate = useNavigate();

  return (
    <div className="flex space-x-2">
      <button
        className="px-1 py-1 bg-white text-[#148190] rounded-lg shadow-sm hover:shadow-md transition-all duration-200 border border-gray-200 hover:border-blue-300 text-sm flex items-center"
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
        Details
      </button>

      <button
        className="px-1 py-1 bg-[#148190] text-white rounded-lg shadow-sm hover:shadow-md transition-all duration-200 text-sm flex items-center"
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
        className="px-1 py-1 bg-green-50 text-[#148190] rounded-lg shadow-sm hover:shadow-md transition-all duration-200 border border-green-100 hover:border-green-200 text-sm flex items-center"
        onClick={() =>
          navigate(`/healthWorker-dashboard/parents/vital/${_id}`)
        }
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 mr-1.5"
          fill="currentColor"
          viewBox="0 0 24 24"
          stroke="none"
        >
          <path
            d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 
           4.42 3 7.5 3c1.74 0 3.41 0.81 4.5 2.09C13.09 3.81 
           14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 
           3.78-3.4 6.86-8.55 11.54L12 21.35z"
          />
        </svg>
        Vital
      </button>

      <button
        className="px-1 py-1 bg-[#148190] text-white rounded-lg shadow-sm hover:shadow-md transition-all duration-200 border border-red-100 hover:border-red-200 text-sm flex items-center"
        onClick={() =>
          navigate(`/healthWorker-dashboard/parents/vaccinations/${_id}`)
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
            d="M18.364 5.636l-1.414-1.414-3.182 3.182-1.415-1.414 3.182-3.182-1.414-1.414L11.939 4.99l-1.768-1.768-1.414 1.414 1.768 1.768L4 14.061V18h3.939l8.121-8.121 1.768 1.768 1.414-1.414-1.768-1.768 1.414-1.414-1.414-1.414z"
          />
        </svg>
        Vaccination
      </button>
    </div>
  );
};
