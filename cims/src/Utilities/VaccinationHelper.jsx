import React from 'react'
import { useNavigate } from 'react-router-dom'

export const columns = [
    {
      name: "Family Number",
      selector: (row) => row.familyNumber,
      width: "150px",
    },
    {
      name: "Last Name",
      selector: (row) => row.lastName,
      width: "150px",
    },
    {
      name: "Vaccination Type",
      selector: (row) => row.vaccinationType,
      width: "250px",
    },
    {
      name: "Date",
      selector: (row) => row.startDate,
      width: "150px", 
    },
    {
      name: "Time",
      selector: (row) => row.startTime,
      width: "150px", 
    },
    {
      name: "Status",
      selector: (row) => row.status,
      width: "150px", 
    },
    {
      name: "Action",
      selector: (row) => row.action,
      width: "150px",
      center: true,
    },
  ];


export const VaccinationButtons = ({_id}) => {

    const navigate = useNavigate()

    const handleView = (id) => {
        navigate(`/healthWorker-dashboard/vaccinations/${id}`)
    }

  return (
    <div className="flex space-x-2">
        <button className="px-4 py-2 bg-[#147190] text-white rounded-lg shadow-sm hover:shadow-md transition-all duration-200 border border-red-100 hover:bg-[#148190] text-sm flex items-center" onClick={() => handleView(_id)}>
            View
        </button>
    </div>
  )
}