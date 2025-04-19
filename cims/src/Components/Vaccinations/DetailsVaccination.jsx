import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import {
    FaUser,
    FaIdCard,
    FaCalendarAlt,
    FaInfoCircle,
} from "react-icons/fa";

const DetailsVaccination = () => {
    const { id } = useParams()
    const [vaccination, setVaccination] = useState(null)

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
    }, [id]);

    if (!vaccination) {
        return <div className="p-6 bg-white text-gray-700">Loading...</div>;
    }

    return (
        <div className="min-h-screen bg-gray-100 p-10">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-[#147190] mb-8 text-center">
                    Vaccination Details
                </h2>

                <div className="bg-white p-8 rounded-xl shadow-md grid grid-cols-1 md:grid-cols-2 gap-6">

                    <div className="space-y-4">
                        <div className="border border-gray-200 rounded-lg p-4 flex items-start gap-4">
                            <FaIdCard className="text-[#147190] text-xl mt-1" />
                            <div>
                                <p className="text-sm text-gray-500">Family Number</p>
                                <p className="text-lg text-gray-700 font-medium">{vaccination.familyNumber.familyNumber}</p>
                            </div>
                        </div>

                        <div className="border border-gray-200 rounded-lg p-4 flex items-start gap-4">
                            <FaInfoCircle className="text-[#147190] text-xl mt-1" />
                            <div>
                                <p className="text-sm text-gray-500">Vaccination Type</p>
                                <p className="text-lg text-gray-700 font-medium">{vaccination.vaccinationType}</p>
                            </div>
                        </div>

                        <div className="border border-gray-200 rounded-lg p-4 flex items-start gap-4">
                            <FaInfoCircle className="text-[#147190] text-xl mt-1" />
                            <div>
                                <p className="text-sm text-gray-500">Description</p>
                                <p className="text-lg text-gray-700 font-medium">{vaccination.reason}</p>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <div className="border border-gray-200 rounded-lg p-4 flex items-start gap-4">
                            <FaCalendarAlt className="text-[#147190] text-xl mt-1" />
                            <div>
                                <p className="text-sm text-gray-500">Date</p>
                                <p className="text-lg text-gray-700 font-medium">
                                    {new Date(vaccination.startDate).toLocaleDateString()}
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default DetailsVaccination;
