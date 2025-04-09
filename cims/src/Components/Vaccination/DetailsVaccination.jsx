import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import {
    FaUser,
    FaIdCard,
    FaCalendarAlt,
    FaHardHat,
    FaInfoCircle,
    FaCheckCircle,
    FaTimesCircle,
} from "react-icons/fa";

const Detailsvaccination = () => {
    const { id } = useParams()
    const [vaccination, setVaccination] = useState(null)
    const navigate = useNavigate()

    useEffect(() => {
        const fetchVaccinations = async () => {
            try {
                const responnse = await axios.get(`http://localhost:5000/api/vaccination/detail/${id}`,
                    {
                        headers: {
                            Authorization: `Bearer ${localStorage.getItem('token')}`
                        },
                    })
                if (responnse.data.success) {
                    setVaccination(responnse.data.vaccination)
                }
            } catch (error) {
                if (error.response && !error.response.data.success) {
                    alert(error.response.data.error)
                }
            }
        };
        fetchVaccinations();
    });


    const changeStatus = async (id, status) => {
        try {
            const response = await axios.put(`http://localhost:5000/api/vaccination/${id}`, { status },
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`
                    },
                })
            if (response.data.success) {
                navigate('/healthWorker-dashboard/vaccinations')
            }
        } catch (error) {
            if (error.response && !error.response.data.success) {
                alert(error.response.data.error)
            }
        }
    }

    if (!vaccination) {
        return <div className="p-6 bg-gray-900 text-white">Loading...</div>;
    }

    return (
        <div className="p-6 bg-gray-900 text-white min-h-screen">
            <h2 className="text-2xl font-semibold mb-6">Vaccination Details</h2>

            <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-6">

                        <div className="bg-gradient-to-r from-gray-600 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                            <div className="flex items-center space-x-4">
                                <FaUser className="text-2xl text-white" />
                                <div>
                                    <p className="text-sm text-gray-200">Nickname</p>
                                    <p className="text-lg font-semibold">{vaccination.familyNumber.userId.name}</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gradient-to-r from-gray-600 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                            <div className="flex items-center space-x-4">
                                <FaIdCard className="text-2xl text-white" />
                                <div>
                                    <p className="text-sm text-gray-200">Family Number</p>
                                    <p className="text-lg font-semibold">{vaccination.familyNumber.familyNumber}</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gradient-to-r from-gray-600 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                            <div className="flex items-center space-x-4">
                                <FaInfoCircle className="text-2xl text-white" />
                                <div>
                                    <p className="text-sm text-gray-200">Vaccination Type</p>
                                    <p className="text-lg font-semibold">{vaccination.vaccinationType}</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gradient-to-r from-gray-600 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                            <div className="flex items-center space-x-4">
                                <FaInfoCircle className="text-2xl text-white" />
                                <div>
                                    <p className="text-sm text-gray-200">Description</p>
                                    <p className="text-lg font-semibold">{vaccination.reason}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-6">

                        <div className="bg-gradient-to-r from-gray-600 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                            <div className="flex items-center space-x-4">
                                <FaCalendarAlt className="text-2xl text-white" />
                                <div>
                                    <p className="text-sm text-gray-200">Start Date</p>
                                    <p className="text-lg font-semibold">
                                        {new Date(vaccination.startDate).toLocaleDateString()}
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gradient-to-r from-gray-600 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                            <div className="flex items-center space-x-4">
                                {vaccination.status === "Pending" ? (
                                    <>
                                        <button
                                            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-200"
                                            onClick={() => changeStatus(vaccination._id, "Approved")}
                                        >
                                            Approve
                                        </button>
                                        <button
                                            className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition duration-200"
                                            onClick={() => changeStatus(vaccination._id, "Rejected")}
                                        >
                                            Reject
                                        </button>
                                    </>
                                ) : (
                                    <>
                                        <FaCheckCircle className="text-2xl text-white" />
                                        <div>
                                            <p className="text-sm text-gray-200">Status</p>
                                            <p className="text-lg font-semibold">{vaccination.status}</p>
                                        </div>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Detailsvaccination