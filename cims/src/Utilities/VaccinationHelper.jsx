import React from 'react'
import { useNavigate } from 'react-router-dom'


export const columns = [
    {
      name: "Family Number",
      selector: (row) => row.familyNumber,
      width: "150px",
    },
    {
      name: "Vaccination Type",
      selector: (row) => row.vaccinationType,
      width: "200px",
    },
    {
      name: "Date",
      selector: (row) => row.days,
      width: "180px", 
    },
    {
      name: "Action",
      selector: (row) => row.action,
      width: "150px",
    },
  ];


export const VaccinationButtons = ({_id}) => {

    const navigate = useNavigate()

    const handleView = (id) => {
        navigate(`/healthWorker-dashboard/vaccinations/${id}`)
    }

  return (
    <div className="flex space-x-2">
        <button className="px-4 py-2 bg-gray-900 text-blue-500 rounded-lg hover:bg-blue-300 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50" onClick={() => handleView(_id)}>
            View
        </button>
    </div>
  )
}