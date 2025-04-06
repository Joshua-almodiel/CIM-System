import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import {
    FaUser,
    FaIdCard,
    FaBirthdayCake,
    FaVenusMars,
    FaHardHat,
    FaHeart,
} from "react-icons/fa";


const View = () => {
    const { id } = useParams()
    const [parent, setParent] = useState(null)

    useEffect(() => {
        const fetchParents = async () => {
            try {
                const responnse = await axios.get(`http://localhost:5000/api/parent/${id}`,
                    {
                        headers: {
                            Authorization: `Bearer ${localStorage.getItem('token')}`
                        },
                    })
                if (responnse.data.success) {
                    setParent(responnse.data.worker)
                }
            } catch (error) {
                if (error.response && !error.response.data.success) {
                    alert(error.response.data.error)
                }
            }
        };
        fetchParents();
    });

    if (!parent) {
        return <div className="p-8 text-center">
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
          Loading Record Details...
        </h3>
      </div>;
    }

    return (
        <div className="p-6 bg-gray-900 text-white">

            <h2 className="text-2xl font-semibold mb-6">Record Form Details</h2>
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-6">

                        <div className="bg-gradient-to-r from-gray-600 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">

                            <div className="flex items-center space-x-4">
                                <FaUser className="text-2xl text-white" />
                                <div>
                                    <p className="text-sm text-gray-200">Created</p>
                                    <p className="text-lg font-semibold">{new Date(parent.date).toLocaleDateString()}</p>
                                </div>
                            </div>

                        </div>

                        <div className="bg-gradient-to-r from-gray-600 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                            <div className="flex items-center space-x-4">
                                <FaIdCard className="text-2xl text-white" />
                                <div>
                                    <p className="text-sm text-gray-200">NASIPIT RURAL HEALTH UNIT and Family PLANNING</p>
                                    <p className="text-lg font-semibold">{parent.kpp}</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gradient-to-r from-gray-600 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                            <div className="flex items-center space-x-4">
                                <FaBirthdayCake className="text-2xl text-white" />
                                <div>
                                    <p className="text-sm text-gray-200">How many dependents?</p>
                                    <p className="text-lg font-semibold">
                                    {parent.dependents}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <div className="bg-gradient-to-r from-gray-600 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                            <div className="flex items-center space-x-4">
                                <FaVenusMars className="text-2xl text-white" />
                                <div>
                                    <p className="text-sm text-gray-200">Nickname</p>
                                    <p className="text-lg font-semibold">{parent.userId.name}</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gradient-to-r from-gray-600 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                            <div className="flex items-center space-x-4">
                                <FaHardHat className="text-2xl text-white" />
                                <div>
                                    <p className="text-sm text-gray-200">Family Number</p>
                                    <p className="text-lg font-semibold">{parent.familyNumber}</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gradient-to-r from-gray-600 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                            <div className="flex items-center space-x-4">
                                <FaHeart className="text-2xl text-white" />
                                <div>
                                    <p className="text-sm text-gray-200">Last Name</p>
                                    <p className="text-lg font-semibold">{parent.lastName}</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gradient-to-r from-gray-600 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                            <div className="flex items-center space-x-4">
                                <FaHeart className="text-2xl text-white" />
                                <div>
                                    <p className="text-sm text-gray-200">First Name</p>
                                    <p className="text-lg font-semibold">{parent.firstName}</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gradient-to-r from-gray-600 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                            <div className="flex items-center space-x-4">
                                <FaHeart className="text-2xl text-white" />
                                <div>
                                    <p className="text-sm text-gray-200">Middle Name</p>
                                    <p className="text-lg font-semibold">{parent.middleName}</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gradient-to-r from-gray-600 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                            <div className="flex items-center space-x-4">
                                <FaHeart className="text-2xl text-white" />
                                <div>
                                    <p className="text-sm text-gray-200">Contact Number</p>
                                    <p className="text-lg font-semibold">{parent.contact}</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gradient-to-r from-gray-600 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                            <div className="flex items-center space-x-4">
                                <FaHeart className="text-2xl text-white" />
                                <div>
                                    <p className="text-sm text-gray-200">PhiHealth Number</p>
                                    <p className="text-lg font-semibold">{parent.phNumber}</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gradient-to-r from-gray-600 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                            <div className="flex items-center space-x-4">
                                <FaHeart className="text-2xl text-white" />
                                <div>
                                    <p className="text-sm text-gray-200">Client Type</p>
                                    <p className="text-lg font-semibold">{parent.clientType}</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gradient-to-r from-gray-600 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                            <div className="flex items-center space-x-4">
                                <FaHeart className="text-2xl text-white" />
                                <div>
                                    <p className="text-sm text-gray-200">If Member</p>
                                    <p className="text-lg font-semibold">{parent.ifMember}</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gradient-to-r from-gray-600 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                            <div className="flex items-center space-x-4">
                                <FaHeart className="text-2xl text-white" />
                                <div>
                                    <p className="text-sm text-gray-200">Birthday</p>
                                    <p className="text-lg font-semibold">{parent.birthday}</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gradient-to-r from-gray-600 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                            <div className="flex items-center space-x-4">
                                <FaHeart className="text-2xl text-white" />
                                <div>
                                    <p className="text-sm text-gray-200">Gender</p>
                                    <p className="text-lg font-semibold">{parent.sex}</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gradient-to-r from-gray-600 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                            <div className="flex items-center space-x-4">
                                <FaHeart className="text-2xl text-white" />
                                <div>
                                    <p className="text-sm text-gray-200">Address</p>
                                    <p className="text-lg font-semibold">{parent.address}</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gradient-to-r from-gray-600 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                            <div className="flex items-center space-x-4">
                                <FaHeart className="text-2xl text-white" />
                                <div>
                                    <p className="text-sm text-gray-200">Civil Status</p>
                                    <p className="text-lg font-semibold">{parent.civilStatus}</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gradient-to-r from-gray-600 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                            <div className="flex items-center space-x-4">
                                <FaHeart className="text-2xl text-white" />
                                <div>
                                    <p className="text-sm text-gray-200">Maiden Name</p>
                                    <p className="text-lg font-semibold">{parent.maidenName}</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gradient-to-r from-gray-600 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                            <div className="flex items-center space-x-4">
                                <FaHeart className="text-2xl text-white" />
                                <div>
                                    <p className="text-sm text-gray-200">Spouse Name</p>
                                    <p className="text-lg font-semibold">{parent.spouseName}</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gradient-to-r from-gray-600 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                            <div className="flex items-center space-x-4">
                                <FaHeart className="text-2xl text-white" />
                                <div>
                                    <p className="text-sm text-gray-200">Partner Name</p>
                                    <p className="text-lg font-semibold">{parent.partnerName}</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gradient-to-r from-gray-600 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                            <div className="flex items-center space-x-4">
                                <FaHeart className="text-2xl text-white" />
                                <div>
                                    <p className="text-sm text-gray-200">Occupation</p>
                                    <p className="text-lg font-semibold">{parent.occupation}</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gradient-to-r from-gray-600 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                            <div className="flex items-center space-x-4">
                                <FaHeart className="text-2xl text-white" />
                                <div>
                                    <p className="text-sm text-gray-200">Educational Attaintment</p>
                                    <p className="text-lg font-semibold">{parent.educAttainment}</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gradient-to-r from-gray-600 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                            <div className="flex items-center space-x-4">
                                <FaHeart className="text-2xl text-white" />
                                <div>
                                    <p className="text-sm text-gray-200">Employment Status</p>
                                    <p className="text-lg font-semibold">{parent.empStatus}</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <h2 className="text-2xl font-semibold mb-6">Past Medical History</h2>
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                    <div className="space-y-6">
                        <div className="bg-gradient-to-r from-gray-600 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                            <div className="flex items-center space-x-4">
                                <FaVenusMars className="text-2xl text-white" />
                                <div>
                                    <p className="text-sm text-gray-200">Allergy</p>
                                    <p className="text-lg font-semibold">{parent.pallergy}</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gradient-to-r from-gray-600 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                            <div className="flex items-center space-x-4">
                                <FaHardHat className="text-2xl text-white" />
                                <div>
                                    <p className="text-sm text-gray-200">Asthma</p>
                                    <p className="text-lg font-semibold">{parent.pasthma}</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gradient-to-r from-gray-600 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                            <div className="flex items-center space-x-4">
                                <FaHeart className="text-2xl text-white" />
                                <div>
                                    <p className="text-sm text-gray-200">Specify Allergy</p>
                                    <p className="text-lg font-semibold">{parent.pspecifyAllergy}</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gradient-to-r from-gray-600 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                            <div className="flex items-center space-x-4">
                                <FaHeart className="text-2xl text-white" />
                                <div>
                                    <p className="text-sm text-gray-200">Cancer</p>
                                    <p className="text-lg font-semibold">{parent.pcancer}</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gradient-to-r from-gray-600 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                            <div className="flex items-center space-x-4">
                                <FaHeart className="text-2xl text-white" />
                                <div>
                                    <p className="text-sm text-gray-200">Specify Organ with Cancer</p>
                                    <p className="text-lg font-semibold">{parent.porganCancer}</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gradient-to-r from-gray-600 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                            <div className="flex items-center space-x-4">
                                <FaHeart className="text-2xl text-white" />
                                <div>
                                    <p className="text-sm text-gray-200">Cereobrovascular Disease</p>
                                    <p className="text-lg font-semibold">{parent.pcerebrovascular}</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gradient-to-r from-gray-600 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                            <div className="flex items-center space-x-4">
                                <FaHeart className="text-2xl text-white" />
                                <div>
                                    <p className="text-sm text-gray-200">Coronary Artery Disease</p>
                                    <p className="text-lg font-semibold">{parent.pcoronaryArtery}</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gradient-to-r from-gray-600 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                            <div className="flex items-center space-x-4">
                                <FaHeart className="text-2xl text-white" />
                                <div>
                                    <p className="text-sm text-gray-200">Diabetes Mellitus</p>
                                    <p className="text-lg font-semibold">{parent.pdiabetes}</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gradient-to-r from-gray-600 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                            <div className="flex items-center space-x-4">
                                <FaHeart className="text-2xl text-white" />
                                <div>
                                    <p className="text-sm text-gray-200">Emphysema</p>
                                    <p className="text-lg font-semibold">{parent.pemphysema}</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gradient-to-r from-gray-600 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                            <div className="flex items-center space-x-4">
                                <FaHeart className="text-2xl text-white" />
                                <div>
                                    <p className="text-sm text-gray-200">Epilepsy/ Seizure Disorder</p>
                                    <p className="text-lg font-semibold">{parent.pepilepsy}</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gradient-to-r from-gray-600 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                            <div className="flex items-center space-x-4">
                                <FaHeart className="text-2xl text-white" />
                                <div>
                                    <p className="text-sm text-gray-200">Hepatitis</p>
                                    <p className="text-lg font-semibold">{parent.phepatitis}</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gradient-to-r from-gray-600 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                            <div className="flex items-center space-x-4">
                                <FaHeart className="text-2xl text-white" />
                                <div>
                                    <p className="text-sm text-gray-200">Hyperlipidemia</p>
                                    <p className="text-lg font-semibold">{parent.phyperlipidemia}</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gradient-to-r from-gray-600 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                            <div className="flex items-center space-x-4">
                                <FaHeart className="text-2xl text-white" />
                                <div>
                                    <p className="text-sm text-gray-200">Hypertension</p>
                                    <p className="text-lg font-semibold">{parent.phypertension}</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gradient-to-r from-gray-600 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                            <div className="flex items-center space-x-4">
                                <FaHeart className="text-2xl text-white" />
                                <div>
                                    <p className="text-sm text-gray-200">Peptic Ulcer</p>
                                    <p className="text-lg font-semibold">{parent.ppepticUlcer}</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gradient-to-r from-gray-600 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                            <div className="flex items-center space-x-4">
                                <FaHeart className="text-2xl text-white" />
                                <div>
                                    <p className="text-sm text-gray-200">Pneumonia</p>
                                    <p className="text-lg font-semibold">{parent.ppneumonia}</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gradient-to-r from-gray-600 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                            <div className="flex items-center space-x-4">
                                <FaHeart className="text-2xl text-white" />
                                <div>
                                    <p className="text-sm text-gray-200">Thyroid Disease</p>
                                    <p className="text-lg font-semibold">{parent.pthyroid}</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gradient-to-r from-gray-600 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                            <div className="flex items-center space-x-4">
                                <FaHeart className="text-2xl text-white" />
                                <div>
                                    <p className="text-sm text-gray-200">Pulmonary Tuberculosis</p>
                                    <p className="text-lg font-semibold">{parent.ppulmonaryTb}</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gradient-to-r from-gray-600 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                            <div className="flex items-center space-x-4">
                                <FaHeart className="text-2xl text-white" />
                                <div>
                                    <p className="text-sm text-gray-200">Specify Pulmonary Tuberculosis Category</p>
                                    <p className="text-lg font-semibold">{parent.ppulmonaryTbCategory}</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gradient-to-r from-gray-600 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                            <div className="flex items-center space-x-4">
                                <FaHeart className="text-2xl text-white" />
                                <div>
                                    <p className="text-sm text-gray-200">Extrapulmonary Tuberculosis</p>
                                    <p className="text-lg font-semibold">{parent.pextrapulmonaryTb}</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gradient-to-r from-gray-600 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                            <div className="flex items-center space-x-4">
                                <FaHeart className="text-2xl text-white" />
                                <div>
                                    <p className="text-sm text-gray-200">Specify Extrapulmonary Tuberculosis Category</p>
                                    <p className="text-lg font-semibold">{parent.pextrapulmonaryTbCategory}</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gradient-to-r from-gray-600 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                            <div className="flex items-center space-x-4">
                                <FaHeart className="text-2xl text-white" />
                                <div>
                                    <p className="text-sm text-gray-200">Urinary Tract Infection</p>
                                    <p className="text-lg font-semibold">{parent.puti}</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gradient-to-r from-gray-600 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                            <div className="flex items-center space-x-4">
                                <FaHeart className="text-2xl text-white" />
                                <div>
                                    <p className="text-sm text-gray-200">Mental illness </p>
                                    <p className="text-lg font-semibold">{parent.pmentalIllness}</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gradient-to-r from-gray-600 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                            <div className="flex items-center space-x-4">
                                <FaHeart className="text-2xl text-white" />
                                <div>
                                    <p className="text-sm text-gray-200">Others </p>
                                    <p className="text-lg font-semibold">{parent.pothers}</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gradient-to-r from-gray-600 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                            <div className="flex items-center space-x-4">
                                <FaHeart className="text-2xl text-white" />
                                <div>
                                    <p className="text-sm text-gray-200">None</p>
                                    <p className="text-lg font-semibold">{parent.pnone}</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gradient-to-r from-gray-600 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                            <div className="flex items-center space-x-4">
                                <FaHeart className="text-2xl text-white" />
                                <div>
                                    <p className="text-sm text-gray-200">Highest Blood Pressure</p>
                                    <p className="text-lg font-semibold">{parent.pbloodPressure}</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <h2 className="text-2xl font-semibold mb-6">Family History</h2>
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                    <div className="space-y-6">
                        <div className="bg-gradient-to-r from-gray-600 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                            <div className="flex items-center space-x-4">
                                <FaVenusMars className="text-2xl text-white" />
                                <div>
                                    <p className="text-sm text-gray-200">Allergy</p>
                                    <p className="text-lg font-semibold">{parent.fallergy}</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gradient-to-r from-gray-600 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                            <div className="flex items-center space-x-4">
                                <FaHardHat className="text-2xl text-white" />
                                <div>
                                    <p className="text-sm text-gray-200">Asthma</p>
                                    <p className="text-lg font-semibold">{parent.fasthma}</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gradient-to-r from-gray-600 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                            <div className="flex items-center space-x-4">
                                <FaHeart className="text-2xl text-white" />
                                <div>
                                    <p className="text-sm text-gray-200">Specify Allergy</p>
                                    <p className="text-lg font-semibold">{parent.fspecifyAllergy}</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gradient-to-r from-gray-600 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                            <div className="flex items-center space-x-4">
                                <FaHeart className="text-2xl text-white" />
                                <div>
                                    <p className="text-sm text-gray-200">Cancer</p>
                                    <p className="text-lg font-semibold">{parent.fcancer}</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gradient-to-r from-gray-600 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                            <div className="flex items-center space-x-4">
                                <FaHeart className="text-2xl text-white" />
                                <div>
                                    <p className="text-sm text-gray-200">Specify Organ with Cancer</p>
                                    <p className="text-lg font-semibold">{parent.forganCancer}</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gradient-to-r from-gray-600 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                            <div className="flex items-center space-x-4">
                                <FaHeart className="text-2xl text-white" />
                                <div>
                                    <p className="text-sm text-gray-200">Cereobrovascular Disease</p>
                                    <p className="text-lg font-semibold">{parent.fcerebrovascular}</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gradient-to-r from-gray-600 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                            <div className="flex items-center space-x-4">
                                <FaHeart className="text-2xl text-white" />
                                <div>
                                    <p className="text-sm text-gray-200">Coronary Artery Disease</p>
                                    <p className="text-lg font-semibold">{parent.fcoronaryArtery}</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gradient-to-r from-gray-600 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                            <div className="flex items-center space-x-4">
                                <FaHeart className="text-2xl text-white" />
                                <div>
                                    <p className="text-sm text-gray-200">Diabetes Mellitus</p>
                                    <p className="text-lg font-semibold">{parent.fdiabetes}</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gradient-to-r from-gray-600 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                            <div className="flex items-center space-x-4">
                                <FaHeart className="text-2xl text-white" />
                                <div>
                                    <p className="text-sm text-gray-200">Emphysema</p>
                                    <p className="text-lg font-semibold">{parent.femphysema}</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gradient-to-r from-gray-600 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                            <div className="flex items-center space-x-4">
                                <FaHeart className="text-2xl text-white" />
                                <div>
                                    <p className="text-sm text-gray-200">Epilepsy/ Seizure Disorder</p>
                                    <p className="text-lg font-semibold">{parent.fepilepsy}</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gradient-to-r from-gray-600 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                            <div className="flex items-center space-x-4">
                                <FaHeart className="text-2xl text-white" />
                                <div>
                                    <p className="text-sm text-gray-200">Hepatitis</p>
                                    <p className="text-lg font-semibold">{parent.fhepatitis}</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gradient-to-r from-gray-600 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                            <div className="flex items-center space-x-4">
                                <FaHeart className="text-2xl text-white" />
                                <div>
                                    <p className="text-sm text-gray-200">Hyperlipidemia</p>
                                    <p className="text-lg font-semibold">{parent.fhyperlipidemia}</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gradient-to-r from-gray-600 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                            <div className="flex items-center space-x-4">
                                <FaHeart className="text-2xl text-white" />
                                <div>
                                    <p className="text-sm text-gray-200">Hypertension</p>
                                    <p className="text-lg font-semibold">{parent.fhypertension}</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gradient-to-r from-gray-600 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                            <div className="flex items-center space-x-4">
                                <FaHeart className="text-2xl text-white" />
                                <div>
                                    <p className="text-sm text-gray-200">Peptic Ulcer</p>
                                    <p className="text-lg font-semibold">{parent.fpepticUlcer}</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gradient-to-r from-gray-600 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                            <div className="flex items-center space-x-4">
                                <FaHeart className="text-2xl text-white" />
                                <div>
                                    <p className="text-sm text-gray-200">Pneumonia</p>
                                    <p className="text-lg font-semibold">{parent.fpneumonia}</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gradient-to-r from-gray-600 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                            <div className="flex items-center space-x-4">
                                <FaHeart className="text-2xl text-white" />
                                <div>
                                    <p className="text-sm text-gray-200">Thyroid Disease</p>
                                    <p className="text-lg font-semibold">{parent.fthyroid}</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gradient-to-r from-gray-600 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                            <div className="flex items-center space-x-4">
                                <FaHeart className="text-2xl text-white" />
                                <div>
                                    <p className="text-sm text-gray-200">Pulmonary Tuberculosis</p>
                                    <p className="text-lg font-semibold">{parent.fpulmonaryTb}</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gradient-to-r from-gray-600 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                            <div className="flex items-center space-x-4">
                                <FaHeart className="text-2xl text-white" />
                                <div>
                                    <p className="text-sm text-gray-200">Specify Pulmonary Tuberculosis Category</p>
                                    <p className="text-lg font-semibold">{parent.fpulmonaryTbCategory}</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gradient-to-r from-gray-600 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                            <div className="flex items-center space-x-4">
                                <FaHeart className="text-2xl text-white" />
                                <div>
                                    <p className="text-sm text-gray-200">Extrapulmonary Tuberculosis</p>
                                    <p className="text-lg font-semibold">{parent.fextrapulmonaryTb}</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gradient-to-r from-gray-600 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                            <div className="flex items-center space-x-4">
                                <FaHeart className="text-2xl text-white" />
                                <div>
                                    <p className="text-sm text-gray-200">Specify Extrapulmonary Tuberculosis Category</p>
                                    <p className="text-lg font-semibold">{parent.fextrapulmonaryTbCategory}</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gradient-to-r from-gray-600 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                            <div className="flex items-center space-x-4">
                                <FaHeart className="text-2xl text-white" />
                                <div>
                                    <p className="text-sm text-gray-200">Urinary Tract Infection</p>
                                    <p className="text-lg font-semibold">{parent.futi}</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gradient-to-r from-gray-600 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                            <div className="flex items-center space-x-4">
                                <FaHeart className="text-2xl text-white" />
                                <div>
                                    <p className="text-sm text-gray-200">Mental illness </p>
                                    <p className="text-lg font-semibold">{parent.fmentalIllness}</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gradient-to-r from-gray-600 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                            <div className="flex items-center space-x-4">
                                <FaHeart className="text-2xl text-white" />
                                <div>
                                    <p className="text-sm text-gray-200">Others </p>
                                    <p className="text-lg font-semibold">{parent.fothers}</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gradient-to-r from-gray-600 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                            <div className="flex items-center space-x-4">
                                <FaHeart className="text-2xl text-white" />
                                <div>
                                    <p className="text-sm text-gray-200">None</p>
                                    <p className="text-lg font-semibold">{parent.fnone}</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gradient-to-r from-gray-600 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                            <div className="flex items-center space-x-4">
                                <FaHeart className="text-2xl text-white" />
                                <div>
                                    <p className="text-sm text-gray-200">Highest Blood Pressure</p>
                                    <p className="text-lg font-semibold">{parent.pbloodPressure}</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <h2 className="text-2xl font-semibold mb-6">Personal / Social History</h2>
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                    <div className="space-y-6">
                        <div className="bg-gradient-to-r from-gray-600 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                            <div className="flex items-center space-x-4">
                                <FaVenusMars className="text-2xl text-white" />
                                <div>
                                    <p className="text-sm text-gray-200">Smoking</p>
                                    <p className="text-lg font-semibold">{parent.smoking}</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gradient-to-r from-gray-600 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                            <div className="flex items-center space-x-4">
                                <FaVenusMars className="text-2xl text-white" />
                                <div>
                                    <p className="text-sm text-gray-200">No. of Packs per year</p>
                                    <p className="text-lg font-semibold">{parent.packsPerYear}</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gradient-to-r from-gray-600 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                            <div className="flex items-center space-x-4">
                                <FaHardHat className="text-2xl text-white" />
                                <div>
                                    <p className="text-sm text-gray-200">Alcohol</p>
                                    <p className="text-lg font-semibold">{parent.alcohol}</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gradient-to-r from-gray-600 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                            <div className="flex items-center space-x-4">
                                <FaHeart className="text-2xl text-white" />
                                <div>
                                    <p className="text-sm text-gray-200">No. of Bottle per year</p>
                                    <p className="text-lg font-semibold">{parent.bottlesPerDay}</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gradient-to-r from-gray-600 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                            <div className="flex items-center space-x-4">
                                <FaHeart className="text-2xl text-white" />
                                <div>
                                    <p className="text-sm text-gray-200">Illicit Drugs</p>
                                    <p className="text-lg font-semibold">{parent.illicitDrugs}</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gradient-to-r from-gray-600 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                            <div className="flex items-center space-x-4">
                                <FaHeart className="text-2xl text-white" />
                                <div>
                                    <p className="text-sm text-gray-200">Illicit Drugs Details</p>
                                    <p className="text-lg font-semibold">{parent.illicitDrugsDetails}</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gradient-to-r from-gray-600 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                            <div className="flex items-center space-x-4">
                                <FaHeart className="text-2xl text-white" />
                                <div>
                                    <p className="text-sm text-gray-200">Sexual History Screening</p>
                                    <p className="text-lg font-semibold">{parent.sexualHistory}</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gradient-to-r from-gray-600 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                            <div className="flex items-center space-x-4">
                                <FaHeart className="text-2xl text-white" />
                                <div>
                                    <p className="text-sm text-gray-200">Sexual History Details</p>
                                    <p className="text-lg font-semibold">{parent.sexualHistoryDetails}</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <h2 className="text-2xl font-semibold mb-6">Obstetrics / Menstrual History</h2>
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                    <div className="space-y-6">
                        <div className="bg-gradient-to-r from-gray-600 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                            <div className="flex items-center space-x-4">
                                <FaVenusMars className="text-2xl text-white" />
                                <div>
                                    <p className="text-sm text-gray-200">Menarche</p>
                                    <p className="text-lg font-semibold">{parent.menarche}</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gradient-to-r from-gray-600 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                            <div className="flex items-center space-x-4">
                                <FaHardHat className="text-2xl text-white" />
                                <div>
                                    <p className="text-sm text-gray-200">Menopause</p>
                                    <p className="text-lg font-semibold">{parent.menopause}</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gradient-to-r from-gray-600 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                            <div className="flex items-center space-x-4">
                                <FaHeart className="text-2xl text-white" />
                                <div>
                                    <p className="text-sm text-gray-200">Age of Menopause</p>
                                    <p className="text-lg font-semibold">{parent.ageOfMenopause}</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gradient-to-r from-gray-600 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                            <div className="flex items-center space-x-4">
                                <FaHeart className="text-2xl text-white" />
                                <div>
                                    <p className="text-sm text-gray-200">LMP</p>
                                    <p className="text-lg font-semibold">{parent.lmp}</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gradient-to-r from-gray-600 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                            <div className="flex items-center space-x-4">
                                <FaHeart className="text-2xl text-white" />
                                <div>
                                    <p className="text-sm text-gray-200">Interval of Menstruation</p>
                                    <p className="text-lg font-semibold">{parent.intervalOfMenstruation}</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gradient-to-r from-gray-600 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                            <div className="flex items-center space-x-4">
                                <FaHeart className="text-2xl text-white" />
                                <div>
                                    <p className="text-sm text-gray-200">Duration</p>
                                    <p className="text-lg font-semibold">{parent.duration}</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gradient-to-r from-gray-600 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                            <div className="flex items-center space-x-4">
                                <FaHeart className="text-2xl text-white" />
                                <div>
                                    <p className="text-sm text-gray-200">Pads per day</p>
                                    <p className="text-lg font-semibold">{parent.padsPerDay}</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gradient-to-r from-gray-600 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                            <div className="flex items-center space-x-4">
                                <FaHeart className="text-2xl text-white" />
                                <div>
                                    <p className="text-sm text-gray-200">Pregnancy History</p>
                                    <p className="text-lg font-semibold">{parent.pregnancyHistory}</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gradient-to-r from-gray-600 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                            <div className="flex items-center space-x-4">
                                <FaHeart className="text-2xl text-white" />
                                <div>
                                    <p className="text-sm text-gray-200">Gravida</p>
                                    <p className="text-lg font-semibold">{parent.gravida}</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gradient-to-r from-gray-600 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                            <div className="flex items-center space-x-4">
                                <FaHeart className="text-2xl text-white" />
                                <div>
                                    <p className="text-sm text-gray-200">Para</p>
                                    <p className="text-lg font-semibold">{parent.para}</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gradient-to-r from-gray-600 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                            <div className="flex items-center space-x-4">
                                <FaHeart className="text-2xl text-white" />
                                <div>
                                    <p className="text-sm text-gray-200">Full Term</p>
                                    <p className="text-lg font-semibold">{parent.fullTerm}</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gradient-to-r from-gray-600 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                            <div className="flex items-center space-x-4">
                                <FaHeart className="text-2xl text-white" />
                                <div>
                                    <p className="text-sm text-gray-200">PreTerm</p>
                                    <p className="text-lg font-semibold">{parent.preTerm}</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gradient-to-r from-gray-600 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                            <div className="flex items-center space-x-4">
                                <FaHeart className="text-2xl text-white" />
                                <div>
                                    <p className="text-sm text-gray-200">Abortion</p>
                                    <p className="text-lg font-semibold">{parent.abortion}</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gradient-to-r from-gray-600 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                            <div className="flex items-center space-x-4">
                                <FaHeart className="text-2xl text-white" />
                                <div>
                                    <p className="text-sm text-gray-200">Living</p>
                                    <p className="text-lg font-semibold">{parent.living}</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <h2 className="text-2xl font-semibold mb-6">Vital Signs</h2>
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-6">

                        <div className="bg-gradient-to-r from-gray-600 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">

                            <div className="flex items-center space-x-4">
                                <FaUser className="text-2xl text-white" />
                                <div>
                                    <p className="text-sm text-gray-200">Created Complaints</p>
                                    <p className="text-lg font-semibold">{new Date(parent.dateComplaints).toLocaleDateString()}</p>
                                </div>
                            </div>

                        </div>

                        <div className="bg-gradient-to-r from-gray-600 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                            <div className="flex items-center space-x-4">
                                <FaIdCard className="text-2xl text-white" />
                                <div>
                                    <p className="text-sm text-gray-200">Chief Complaints</p>
                                    <p className="text-lg font-semibold">{parent.chiefComplaints}</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gradient-to-r from-gray-600 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                            <div className="flex items-center space-x-4">
                                <FaBirthdayCake className="text-2xl text-white" />
                                <div>
                                    <p className="text-sm text-gray-200">BP</p>
                                    <p className="text-lg font-semibold">
                                    {parent.bp}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <div className="bg-gradient-to-r from-gray-600 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                            <div className="flex items-center space-x-4">
                                <FaVenusMars className="text-2xl text-white" />
                                <div>
                                    <p className="text-sm text-gray-200">HR</p>
                                    <p className="text-lg font-semibold">{parent.hr}</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gradient-to-r from-gray-600 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                            <div className="flex items-center space-x-4">
                                <FaHardHat className="text-2xl text-white" />
                                <div>
                                    <p className="text-sm text-gray-200">O2Sat</p>
                                    <p className="text-lg font-semibold">{parent.o2sat}</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gradient-to-r from-gray-600 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                            <div className="flex items-center space-x-4">
                                <FaHeart className="text-2xl text-white" />
                                <div>
                                    <p className="text-sm text-gray-200">WT</p>
                                    <p className="text-lg font-semibold">{parent.wt}</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gradient-to-r from-gray-600 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                            <div className="flex items-center space-x-4">
                                <FaHeart className="text-2xl text-white" />
                                <div>
                                    <p className="text-sm text-gray-200">Temp</p>
                                    <p className="text-lg font-semibold">{parent.temp}</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gradient-to-r from-gray-600 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                            <div className="flex items-center space-x-4">
                                <FaHeart className="text-2xl text-white" />
                                <div>
                                    <p className="text-sm text-gray-200">RR</p>
                                    <p className="text-lg font-semibold">{parent.rr}</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gradient-to-r from-gray-600 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                            <div className="flex items-center space-x-4">
                                <FaHeart className="text-2xl text-white" />
                                <div>
                                    <p className="text-sm text-gray-200">HT</p>
                                    <p className="text-lg font-semibold">{parent.ht}</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gradient-to-r from-gray-600 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                            <div className="flex items-center space-x-4">
                                <FaHeart className="text-2xl text-white" />
                                <div>
                                    <p className="text-sm text-gray-200">BMI</p>
                                    <p className="text-lg font-semibold">{parent.bmi}</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    );
}

export default View