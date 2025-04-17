import { useNavigate } from "react-router-dom";


export const columns = [
    {
      name: "ID",
      selector: (row) => row.sno,
      grow: 0.5,
      wrap: true,
    },
    {
      name: "Family Number",
      selector: (row) => row.familyNumber,
      grow: 1,
      wrap: true,
    },
    {
      name: "Last Name",
      selector: (row) => row.lastName,
      sortable: true,
      grow: 1,
      wrap: true,
    },
    {
      name: "First Name",
      selector: (row) => row.firstName,
      grow: 1,
      wrap: true,
    },
    {
      name: "Middle Name",
      selector: (row) => row.middleName,
      grow: 1,
      wrap: true,
    },
    {
      name: "Gender",
      selector: (row) => row.sex,
      grow: 0.7,
      wrap: true,
    },
    {
      name: "Birthday",
      selector: (row) => row.birthday,
      grow: 0.8,
      wrap: true,
    },
    {
      name: "Action",
      selector: (row) => row.action,
      grow: 0.8,
    },
  ];
  


export const ParentButtons = ({ _id }) => {
    const navigate = useNavigate()

    return (
        <div>
            <div className="flex space-x-2">

                <button className="px-4 py-2 bg-gray-900 text-blue-500 rounded-lg hover:bg-blue-300 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                    onClick={() => navigate(`/healthWorker-dashboard/parents/${_id}`)}>View</button>

                <button className="px-4 py-2 bg-gray-900 text-blue-500 rounded-lg hover:bg-blue-300 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                    onClick={() => navigate(`/healthWorker-dashboard/parents/edit/${_id}`)}>Edit</button>

                <button className="px-4 py-2 bg-gray-900 text-blue-500 rounded-lg hover:bg-blue-300 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                    onClick={() => navigate(`/healthWorker-dashboard/parents/salary/${_id}`)}>Salary</button>

                <button className="px-4 py-2 bg-gray-900 text-red-500 rounded-lg hover:bg-blue-300 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                    onClick={() => navigate(`/healthWorker-dashboard/parents/vaccination/${_id}`)}>Vaccination</button>
            </div>

        </div>
    )
}