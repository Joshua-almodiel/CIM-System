import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const Edit = () => {
  const [parent, setParent] = useState({
    name: "",
    familyNumber: "",
    lastName: "",
    firstName: "",
    middleName: "",
    contact: "",
    phNumber: "",
    clientType: "",
    ifMember: "",
    sex: "",
    birthday: "",
    address: "",
    civilStatus: "",
    maidenName: "",
    spouseName: "",
    partnerName: "",
    occupation: "",
    educAttainment: "",
    empStatus: "",
    kpp: "",
    dependents: "",
    religion: "",
    age: "",
    pallergy: "",
    pasthma: "",
    pspecifyAllergy: "",
    pcancer: "",
    porganCancer: "",
    pcerebrovascular: "",
    pcoronaryArtery: "",
    pdiabetes: "",
    pemphysema: "",
    pepilepsy: "",
    phepatitis: "",
    phyperlipidemia: "",
    phypertension: "",
    ppepticUlcer: "",
    ppneumonia: "",
    pthyroid: "",
    ppulmonaryTb: "",
    ppulmonaryTbCategory: "",
    pextrapulmonaryTb: "",
    pextrapulmonaryTbCategory: "",
    puti: "",
    pmentalIllness: "",
    pothers: "",
    pspecifyOthers: "",
    pnone: "",
    pbloodPressure: "",
    fallergy: "",
    fasthma: "",
    fspecifyAllergy: "",
    fcancer: "",
    forganCancer: "",
    fcerebrovascular: "",
    fcoronaryArtery: "",
    fdiabetes: "",
    femphysema: "",
    fepilepsy: "",
    fhepatitis: "",
    fhyperlipidemia: "",
    fhypertension: "",
    fpepticUlcer: "",
    fpneumonia: "",
    fthyroid: "",
    fpulmonaryTb: "",
    fpulmonaryTbCategory: "",
    fextrapulmonaryTb: "",
    fextrapulmonaryTbCategory: "",
    futi: "",
    fmentalIllness: "",
    fothers: "",
    fspecifyOthers: "",
    fnone: "",
    fbloodPressure: "",
    smoking: "",
    packsPerYear: "",
    alcohol: "",
    bottlesPerDay: "",
    illicitDrugs: "",
    illicitDrugsDetails: "",
    sexualHistory: "",
    sexualHistoryDetails: "",
    menarche: "",
    pregnancyHistory: "",
    menopause: "",
    gravida: "",
    ageOfMenopause: "",
    para: "",
    lmp: "",
    fullTerm: "",
    preTerm: "",
    abortion: "",
    living: "",
    intervalOfMenstruation: "",
    duration: "",
    padsPerDay: "",
  });
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const fetchParents = async () => {
      try {
        const response = await axios.get(
          `https://cim-system-gvok.vercel.app/api/parent/${id}`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        if (response.data.success) {
          const parentData = response.data.parent;
          setParent({
            ...parentData,
            birthday: parentData.birthday
              ? new Date(parentData.birthday).toISOString().split("T")[0]
              : "",
            name: parentData.userId?.name || "",
            lmp: parentData.lmp
              ? new Date(parentData.lmp).toISOString().split("T")[0]
              : "",
          });
        }
        setLoading(false);
      } catch (error) {
        if (error.response && !error.response.data.success) {
          alert(error.response.data.error);
        }
        setLoading(false);
      }
    };
    fetchParents();
  }, [id]);

  const handleChange = (e) => {
    const { name, value, type } = e.target;

    if (type === "radio") {
      setParent((prev) => ({ ...prev, [name]: value }));
    } else {
      setParent((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(parent);
    try {
      const response = await axios.put(
        `https://cim-system-gvok.vercel.app/api/parent/${id}`,
        parent,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      console.log(response.data);
      if (response.data.success) {
        navigate("/healthWorker-dashboard/parents");
      }
    } catch (error) {
      if (error.response && !error.response.data.success) {
        alert(error.response.data.error);
      }
    }
  };

  if (loading) {
    return (
      <div className="bg-white min-h-screen text-center py-16">
              <div className="flex justify-center items-center space-x-3">
                <svg
                  className="animate-spin h-6 w-6 text-blue-500"
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
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                  ></path>
                </svg>
                <span className="text-slate-600 font-medium">
                  Loading...
                </span>
              </div>
              <p className="mt-2 text-sm text-gray-500">
                Please wait a moment.
              </p>
            </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white shadow-xl rounded-lg overflow-hidden">
          <div className="bg-white-200 py-4 px-6">
            <h2 className="text-2xl font-bold text-gray-700">
              Edit PhilHealth Konsulta Record
            </h2>
            <p className="text-gray-500 mt-1">
              Please update all required fields completely and accurately
            </p>
          </div>

          <form onSubmit={handleSubmit} className="p-6 space-y-8">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-[#147190] mb-4 border-b border-blue-200 pb-2">
                Personal Information
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    First Choice KPP <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="kpp"
                    value={parent.kpp}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-black focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    required
                  >
                    <option value="">Select KPP</option>
                    <option value="Register to a Konsulta Package Provider">
                      Register to a Konsulta Package Provider
                    </option>
                    <option value="Registered all my declared minor dependents">
                      Registered all my declared minor dependents
                    </option>
                  </select>
                  <p className="mt-1 text-xs text-gray-500">
                    NASIPIT RURAL HEALTH UNIT and Family PLANNING
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Number of Dependents <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="number"
                    name="dependents"
                    value={parent.dependents}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-black focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    required
                    min="0"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Nickname
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={parent.name}
                    placeholder="Enter nickname"
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-black focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Family Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="number"
                    name="familyNumber"
                    value={parent.familyNumber}
                    placeholder="Enter family number"
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-black focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Last Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={parent.lastName}
                    placeholder="Enter last name"
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-black focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    First Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={parent.firstName}
                    placeholder="Enter first name"
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-black focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Middle Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="middleName"
                    value={parent.middleName}
                    placeholder="Enter middle name"
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-black focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Contact Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="number"
                    name="contact"
                    value={parent.contact}
                    placeholder="09XXXXXXXXX"
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-black focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    required
                    pattern="[0-9]{11}"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    PhilHealth Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="number"
                    name="phNumber"
                    value={parent.phNumber}
                    placeholder="XX-XXXXXXXXX-X"
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-black focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    required
                    pattern="[0-9]{2}-[0-9]{9}-[0-9]{1}"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Client Type <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="clientType"
                    value={parent.clientType}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-black focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    required
                  >
                    <option value="">Select client type</option>
                    <option value="Member">Member</option>
                    <option value="Dependent">Dependent</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    If Member <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="ifMember"
                    value={parent.ifMember}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-black focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    required
                  >
                    <option value="">Select member type</option>
                    <option value="Formal">Formal</option>
                    <option value="Informal">Informal</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Sex <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="sex"
                    value={parent.sex}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-black focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    required
                  >
                    <option value="">Select gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Birthday <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="date"
                    name="birthday"
                    value={parent.birthday}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-black focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Age <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="number"
                    name="age"
                    value={parent.age}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-black focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    required
                    min="0"
                    max="120"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Religion <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="religion"
                    value={parent.religion}
                    placeholder="Enter religion"
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-black focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="address"
                    value={parent.address}
                    placeholder="Complete address"
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-black focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Civil Status <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="civilStatus"
                    value={parent.civilStatus}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-black focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    required
                  >
                    <option value="">Select status</option>
                    <option value="Single">Single</option>
                    <option value="Widow/er">Widow/er</option>
                    <option value="Separated">Separated</option>
                    <option value="Married">Married</option>
                    <option value="Annulled">Annulled</option>
                    <option value="Co habitation">Co habitation</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    [For Married Woman] Maiden Name
                  </label>
                  <input
                    type="text"
                    name="maidenName"
                    value={parent.maidenName}
                    placeholder="Enter maiden name"
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-black focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    [If Married] Spouse Name
                  </label>
                  <input
                    type="text"
                    name="spouseName"
                    value={parent.spouseName}
                    placeholder="Enter spouse name"
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-black focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    [If Living in] Partner's Name
                  </label>
                  <input
                    type="text"
                    name="partnerName"
                    value={parent.partnerName}
                    placeholder="Enter partner's name"
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-black focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Occupation
                  </label>
                  <input
                    type="text"
                    name="occupation"
                    value={parent.occupation}
                    placeholder="Enter occupation"
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-black focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Educational Attainment{" "}
                    <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="educAttainment"
                    value={parent.educAttainment}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-black focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    required
                  >
                    <option value="">Select attainment</option>
                    <option value="No Formal Education">
                      No Formal Education
                    </option>
                    <option value="Elementary">Elementary</option>
                    <option value="High School">High School</option>
                    <option value="College">College</option>
                    <option value="Vocational">Vocational</option>
                    <option value="Post Graduate">Post Graduate</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Employment Status <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="empStatus"
                    value={parent.empStatus}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-black focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    required
                  >
                    <option value="">Select employment status</option>
                    <option value="Student">Student</option>
                    <option value="Employed">Employed</option>
                    <option value="Unemployed">Unemployed</option>
                    <option value="Retired">Retired</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-[#147190] mb-4 border-b border-blue-200 pb-2">
                  Past Medical History
                </h3>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-blue-100">
                      <tr>
                        <th className="px-4 py-2 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                          Condition
                        </th>
                        <th className="px-4 py-2 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                          Yes
                        </th>
                        <th className="px-4 py-2 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                          No
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      <tr>
                        <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700">
                          Allergy
                        </td>
                        <td className="px-4 py-2 whitespace-nowrap">
                          <input
                            type="radio"
                            name="pallergy"
                            checked={parent.pallergy === "yes"}
                            value="yes"
                            onChange={handleChange}
                            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                          />
                        </td>
                        <td className="px-4 py-2 whitespace-nowrap">
                          <input
                            type="radio"
                            name="pallergy"
                            checked={parent.pallergy === "no"}
                            value="no"
                            onChange={handleChange}
                            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                          />
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700 pl-8">
                          Specify Allergy:
                        </td>
                        <td colSpan="2" className="px-4 py-2">
                          <input
                            type="text"
                            name="pspecifyAllergy"
                            value={parent.pspecifyAllergy}
                            onChange={handleChange}
                            className="w-full px-3 py-1 border border-gray-300 rounded-md shadow-sm text-black focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-sm"
                          />
                        </td>
                      </tr>

                      <tr>
                        <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700">
                          Asthma
                        </td>
                        <td className="px-4 py-2 whitespace-nowrap">
                          <input
                            type="radio"
                            name="pasthma"
                            checked={parent.pasthma === "yes"}
                            value="yes"
                            onChange={handleChange}
                            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                          />
                        </td>
                        <td className="px-4 py-2 whitespace-nowrap">
                          <input
                            type="radio"
                            name="pasthma"
                            checked={parent.pasthma === "no"}
                            value="no"
                            onChange={handleChange}
                            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                          />
                        </td>
                      </tr>

                      <tr>
                        <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700">
                          Cancer
                        </td>
                        <td className="px-4 py-2 whitespace-nowrap">
                          <input
                            type="radio"
                            name="pcancer"
                            checked={parent.pcancer === "yes"}
                            value="yes"
                            onChange={handleChange}
                            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                          />
                        </td>
                        <td className="px-4 py-2 whitespace-nowrap">
                          <input
                            type="radio"
                            name="pcancer"
                            checked={parent.pcancer === "no"}
                            value="no"
                            onChange={handleChange}
                            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                          />
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700 pl-8">
                          Specify Organ with Cancer:
                        </td>
                        <td colSpan="2" className="px-4 py-2">
                          <input
                            type="text"
                            name="porganCancer"
                            value={parent.porganCancer}
                            onChange={handleChange}
                            className="w-full px-3 py-1 border border-gray-300 rounded-md shadow-sm text-black focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-sm"
                          />
                        </td>
                      </tr>

                      <tr>
                        <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700">
                          Cerebrovascular Diseace
                        </td>
                        <td className="px-4 py-2 whitespace-nowrap">
                          <input
                            type="radio"
                            name="pcerebrovascular"
                            checked={parent.pcerebrovascular === "yes"}
                            value="yes"
                            onChange={handleChange}
                            className="h-4 w-4 text-[#147190] focus:ring-[#148190] border-gray-300"
                          />
                        </td>
                        <td className="px-4 py-2 whitespace-nowrap">
                          <input
                            type="radio"
                            name="pcerebrovascular"
                            checked={parent.pcerebrovascular === "no"}
                            value="no"
                            onChange={handleChange}
                            className="h-4 w-4 text-[#147190] focus:ring-[#148190] border-gray-300"
                          />
                        </td>
                      </tr>

                      <tr>
                        <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700">
                          Coronary Artery Disease
                        </td>
                        <td className="px-4 py-2 whitespace-nowrap">
                          <input
                            type="radio"
                            name="pcoronaryArtery"
                            checked={parent.pcoronaryArtery === "yes"}
                            value="yes"
                            onChange={handleChange}
                            className="h-4 w-4 text-[#147190] focus:ring-[#148190] border-gray-300"
                          />
                        </td>
                        <td className="px-4 py-2 whitespace-nowrap">
                          <input
                            type="radio"
                            name="pcoronaryArtery"
                            checked={parent.pcoronaryArtery === "no"}
                            value="no"
                            onChange={handleChange}
                            className="h-4 w-4 text-[#147190] focus:ring-[#148190] border-gray-300"
                          />
                        </td>
                      </tr>

                      <tr>
                        <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700">
                          Diabetes Mellitus
                        </td>
                        <td className="px-4 py-2 whitespace-nowrap">
                          <input
                            type="radio"
                            name="pdiabetes"
                            checked={parent.pdiabetes === "yes"}
                            value="yes"
                            onChange={handleChange}
                            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                          />
                        </td>
                        <td className="px-4 py-2 whitespace-nowrap">
                          <input
                            type="radio"
                            name="pdiabetes"
                            checked={parent.pdiabetes === "no"}
                            value="no"
                            onChange={handleChange}
                            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                          />
                        </td>
                      </tr>

                      <tr>
                        <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700">
                          Emphysema
                        </td>
                        <td className="px-4 py-2 whitespace-nowrap">
                          <input
                            type="radio"
                            name="pemphysema"
                            checked={parent.pemphysema === "yes"}
                            value="yes"
                            onChange={handleChange}
                            className="h-4 w-4 text-[#147190] focus:ring-[#148190] border-gray-300"
                          />
                        </td>
                        <td className="px-4 py-2 whitespace-nowrap">
                          <input
                            type="radio"
                            name="pemphysema"
                            checked={parent.pemphysema === "no"}
                            value="no"
                            onChange={handleChange}
                            className="h-4 w-4 text-[#147190] focus:ring-[#148190] border-gray-300"
                          />
                        </td>
                      </tr>

                      <tr>
                        <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700">
                          Epilepsy / Seizure Disorder
                        </td>
                        <td className="px-4 py-2 whitespace-nowrap">
                          <input
                            type="radio"
                            name="pepilepsy"
                            checked={parent.pepilepsy === "yes"}
                            value="yes"
                            onChange={handleChange}
                            className="h-4 w-4 text-[#147190] focus:ring-[#148190] border-gray-300"
                          />
                        </td>
                        <td className="px-4 py-2 whitespace-nowrap">
                          <input
                            type="radio"
                            name="pepilepsy"
                            checked={parent.pepilepsy === "no"}
                            value="no"
                            onChange={handleChange}
                            className="h-4 w-4 text-[#147190] focus:ring-[#148190] border-gray-300"
                          />
                        </td>
                      </tr>

                      <tr>
                        <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700">
                          Hepatitis
                        </td>
                        <td className="px-4 py-2 whitespace-nowrap">
                          <input
                            type="radio"
                            name="phepatitis"
                            checked={parent.phepatitis === "yes"}
                            value="yes"
                            onChange={handleChange}
                            className="h-4 w-4 text-[#147190] focus:ring-[#148190] border-gray-300"
                          />
                        </td>
                        <td className="px-4 py-2 whitespace-nowrap">
                          <input
                            type="radio"
                            name="phepatitis"
                            checked={parent.phepatitis === "no"}
                            value="no"
                            onChange={handleChange}
                            className="h-4 w-4 text-[#147190] focus:ring-[#148190] border-gray-300"
                          />
                        </td>
                      </tr>

                      <tr>
                        <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700">
                          Hyperlipidemia
                        </td>
                        <td className="px-4 py-2 whitespace-nowrap">
                          <input
                            type="radio"
                            name="phyperlipidemia"
                            checked={parent.phyperlipidemia === "yes"}
                            value="yes"
                            onChange={handleChange}
                            className="h-4 w-4 text-[#147190] focus:ring-[#148190] border-gray-300"
                          />
                        </td>
                        <td className="px-4 py-2 whitespace-nowrap">
                          <input
                            type="radio"
                            name="phyperlipidemia"
                            checked={parent.phyperlipidemia === "no"}
                            value="no"
                            onChange={handleChange}
                            className="h-4 w-4 text-[#147190] focus:ring-[#148190] border-gray-300"
                          />
                        </td>
                      </tr>

                      <tr>
                        <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700">
                          Hypertension
                        </td>
                        <td className="px-4 py-2 whitespace-nowrap">
                          <input
                            type="radio"
                            name="phypertension"
                            checked={parent.phypertension === "yes"}
                            value="yes"
                            onChange={handleChange}
                            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                          />
                        </td>
                        <td className="px-4 py-2 whitespace-nowrap">
                          <input
                            type="radio"
                            name="phypertension"
                            checked={parent.phypertension === "no"}
                            value="no"
                            onChange={handleChange}
                            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                          />
                        </td>
                      </tr>

                      <tr>
                        <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700">
                          Peptic Ulcer
                        </td>
                        <td className="px-4 py-2 whitespace-nowrap">
                          <input
                            type="radio"
                            name="ppepticUlcer"
                            checked={parent.ppepticUlcer === "yes"}
                            value="yes"
                            onChange={handleChange}
                            className="h-4 w-4 text-[#147190] focus:ring-[#148190] border-gray-300"
                          />
                        </td>
                        <td className="px-4 py-2 whitespace-nowrap">
                          <input
                            type="radio"
                            name="ppepticUlcer"
                            checked={parent.ppepticUlcer === "no"}
                            value="no"
                            onChange={handleChange}
                            className="h-4 w-4 text-[#147190] focus:ring-[#148190] border-gray-300"
                          />
                        </td>
                      </tr>

                      <tr>
                        <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700">
                          Pneumonia
                        </td>
                        <td className="px-4 py-2 whitespace-nowrap">
                          <input
                            type="radio"
                            name="ppneumonia"
                            checked={parent.ppneumonia === "yes"}
                            value="yes"
                            onChange={handleChange}
                            className="h-4 w-4 text-[#147190] focus:ring-[#148190] border-gray-300"
                          />
                        </td>
                        <td className="px-4 py-2 whitespace-nowrap">
                          <input
                            type="radio"
                            name="ppneumonia"
                            checked={parent.ppneumonia === "no"}
                            value="no"
                            onChange={handleChange}
                            className="h-4 w-4 text-[#147190] focus:ring-[#148190] border-gray-300"
                          />
                        </td>
                      </tr>

                      <tr>
                        <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700">
                          Thyroid Disease
                        </td>
                        <td className="px-4 py-2 whitespace-nowrap">
                          <input
                            type="radio"
                            name="pthyroid"
                            checked={parent.pthyroid === "yes"}
                            value="yes"
                            onChange={handleChange}
                            className="h-4 w-4 text-[#147190] focus:ring-[#148190] border-gray-300"
                          />
                        </td>
                        <td className="px-4 py-2 whitespace-nowrap">
                          <input
                            type="radio"
                            name="pthyroid"
                            checked={parent.pthyroid === "no"}
                            value="no"
                            onChange={handleChange}
                            className="h-4 w-4 text-[#147190] focus:ring-[#148190] border-gray-300"
                          />
                        </td>
                      </tr>

                      <tr>
                        <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700">
                          Pulmonary Tuberculosis
                        </td>
                        <td className="px-4 py-2 whitespace-nowrap">
                          <input
                            type="radio"
                            name="ppulmonaryTb"
                            checked={parent.ppulmonaryTb === "yes"}
                            value="yes"
                            onChange={handleChange}
                            className="h-4 w-4 text-[#147190] focus:ring-[#148190] border-gray-300"
                          />
                        </td>
                        <td className="px-4 py-2 whitespace-nowrap">
                          <input
                            type="radio"
                            name="ppulmonaryTb"
                            checked={parent.ppulmonaryTb === "no"}
                            value="no"
                            onChange={handleChange}
                            className="h-4 w-4 text-[#147190] focus:ring-[#148190] border-gray-300"
                          />
                        </td>
                      </tr>

                      <tr>
                        <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700">
                          Specify Pulmonary Tuberculosis Category:
                        </td>
                        <td colSpan="2" className="px-4 py-2">
                          <input
                            type="text"
                            name="ppulmonaryTbCategory"
                            value={parent.ppulmonaryTbCategory}
                            onChange={handleChange}
                            className="w-full px-3 py-1 border border-gray-300 rounded-md shadow-sm text-black focus:outline-none focus:ring-[#147190] focus:border-[#148190] text-sm"
                          />
                        </td>
                      </tr>

                      <tr>
                        <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700">
                          Extrapulmonary Tuberculosis
                        </td>
                        <td className="px-4 py-2 whitespace-nowrap">
                          <input
                            type="radio"
                            name="pextrapulmonaryTb"
                            checked={parent.pextrapulmonaryTb === "yes"}
                            value="yes"
                            onChange={handleChange}
                            className="h-4 w-4 text-[#147190] focus:ring-[#148190] border-gray-300"
                          />
                        </td>
                        <td className="px-4 py-2 whitespace-nowrap">
                          <input
                            type="radio"
                            name="pextrapulmonaryTb"
                            checked={parent.pextrapulmonaryTb === "no"}
                            value="no"
                            onChange={handleChange}
                            className="h-4 w-4 text-[#147190] focus:ring-[#148190] border-gray-300"
                          />
                        </td>
                      </tr>

                      <tr>
                        <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700">
                          Specify Extrapulmonary Tuberculosis Category:
                        </td>
                        <td colSpan="2" className="px-4 py-2">
                          <input
                            type="text"
                            name="pextrapulmonaryTbCategory"
                            value={parent.pextrapulmonaryTbCategory}
                            onChange={handleChange}
                            className="w-full px-3 py-1 border border-gray-300 rounded-md shadow-sm text-black focus:outline-none focus:ring-[#147190] focus:border-[#148190] text-sm"
                          />
                        </td>
                      </tr>

                      <tr>
                        <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700">
                          Urinary Tract Infection
                        </td>
                        <td className="px-4 py-2 whitespace-nowrap">
                          <input
                            type="radio"
                            name="puti"
                            checked={parent.puti === "yes"}
                            value="yes"
                            onChange={handleChange}
                            className="h-4 w-4 text-[#147190] focus:ring-[#148190] border-gray-300"
                          />
                        </td>
                        <td className="px-4 py-2 whitespace-nowrap">
                          <input
                            type="radio"
                            name="puti"
                            checked={parent.puti === "no"}
                            value="no"
                            onChange={handleChange}
                            className="h-4 w-4 text-[#147190] focus:ring-[#148190] border-gray-300"
                          />
                        </td>
                      </tr>

                      <tr>
                        <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700">
                          Mental Illness
                        </td>
                        <td className="px-4 py-2 whitespace-nowrap">
                          <input
                            type="radio"
                            name="pmentalIllness"
                            checked={parent.pmentalIllness === "yes"}
                            value="yes"
                            onChange={handleChange}
                            className="h-4 w-4 text-[#147190] focus:ring-[#148190] border-gray-300"
                          />
                        </td>
                        <td className="px-4 py-2 whitespace-nowrap">
                          <input
                            type="radio"
                            name="pmentalIllness"
                            checked={parent.pmentalIllness === "no"}
                            value="no"
                            onChange={handleChange}
                            className="h-4 w-4 text-[#147190] focus:ring-[#148190] border-gray-300"
                          />
                        </td>
                      </tr>

                      <tr>
                        <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700">
                          Others
                        </td>
                        <td className="px-4 py-2 whitespace-nowrap">
                          <input
                            type="radio"
                            name="pothers"
                            checked={parent.pothers === "yes"}
                            value="yes"
                            onChange={handleChange}
                            className="h-4 w-4 text-[#147190] focus:ring-[#148190] border-gray-300"
                          />
                        </td>
                        <td className="px-4 py-2 whitespace-nowrap">
                          <input
                            type="radio"
                            name="pothers"
                            checked={parent.pothers === "no"}
                            value="no"
                            onChange={handleChange}
                            className="h-4 w-4 text-[#147190] focus:ring-[#148190] border-gray-300"
                          />
                        </td>
                      </tr>

                      <tr>
                        <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700">
                          Others please specify:
                        </td>
                        <td colSpan="2" className="px-4 py-2">
                          <input
                            type="text"
                            name="pspecifyOthers"
                            value={parent.pspecifyOthers}
                            onChange={handleChange}
                            className="w-full px-3 py-1 border border-gray-300 rounded-md shadow-sm text-black focus:outline-none focus:ring-[#147190] focus:border-[#148190] text-sm"
                          />
                        </td>
                      </tr>

                      <tr>
                        <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700">
                          None
                        </td>
                        <td className="px-4 py-2 whitespace-nowrap">
                          <input
                            type="radio"
                            name="pnone"
                            checked={parent.pnone === "yes"}
                            value="yes"
                            onChange={handleChange}
                            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                          />
                        </td>
                        <td className="px-4 py-2 whitespace-nowrap">
                          <input
                            type="radio"
                            name="pnone"
                            checked={parent.pnone === "no"}
                            value="no"
                            onChange={handleChange}
                            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                          />
                        </td>
                      </tr>

                      <tr>
                        <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700">
                          Highest Blood Pressure:
                        </td>
                        <td colSpan="2" className="px-4 py-2">
                          <input
                            type="text"
                            name="pbloodPressure"
                            value={parent.pbloodPressure}
                            placeholder="e.g. 120/80"
                            onChange={handleChange}
                            className="w-full px-3 py-1 border border-gray-300 rounded-md shadow-sm text-black focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-sm"
                          />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-[#147190] mb-4 border-b border-blue-200 pb-2">
                  Family Medical History
                </h3>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-blue-100">
                      <tr>
                        <th className="px-4 py-2 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                          Condition
                        </th>
                        <th className="px-4 py-2 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                          Yes
                        </th>
                        <th className="px-4 py-2 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                          No
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      <tr>
                        <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700">
                          Allergy
                        </td>
                        <td className="px-4 py-2 whitespace-nowrap">
                          <input
                            type="radio"
                            name="fallergy"
                            checked={parent.fallergy === "yes"}
                            value="yes"
                            onChange={handleChange}
                            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                          />
                        </td>
                        <td className="px-4 py-2 whitespace-nowrap">
                          <input
                            type="radio"
                            name="fallergy"
                            checked={parent.fallergy === "no"}
                            value="no"
                            onChange={handleChange}
                            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                          />
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700 pl-8">
                          Specify Allergy:
                        </td>
                        <td colSpan="2" className="px-4 py-2">
                          <input
                            type="text"
                            name="fspecifyAllergy"
                            value={parent.fspecifyAllergy}
                            onChange={handleChange}
                            className="w-full px-3 py-1 border border-gray-300 rounded-md shadow-sm text-black focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-sm"
                          />
                        </td>
                      </tr>

                      <tr>
                        <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700">
                          Asthma
                        </td>
                        <td className="px-4 py-2 whitespace-nowrap">
                          <input
                            type="radio"
                            name="fasthma"
                            checked={parent.fasthma === "yes"}
                            value="yes"
                            onChange={handleChange}
                            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                          />
                        </td>
                        <td className="px-4 py-2 whitespace-nowrap">
                          <input
                            type="radio"
                            name="fasthma"
                            checked={parent.fasthma === "no"}
                            value="no"
                            onChange={handleChange}
                            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                          />
                        </td>
                      </tr>

                      <tr>
                        <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700">
                          Cancer
                        </td>
                        <td className="px-4 py-2 whitespace-nowrap">
                          <input
                            type="radio"
                            name="fcancer"
                            checked={parent.fcancer === "yes"}
                            value="yes"
                            onChange={handleChange}
                            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                          />
                        </td>
                        <td className="px-4 py-2 whitespace-nowrap">
                          <input
                            type="radio"
                            name="fcancer"
                            checked={parent.fcancer === "no"}
                            value="no"
                            onChange={handleChange}
                            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                          />
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700 pl-8">
                          Specify Organ with Cancer:
                        </td>
                        <td colSpan="2" className="px-4 py-2">
                          <input
                            type="text"
                            name="forganCancer"
                            value={parent.forganCancer}
                            onChange={handleChange}
                            className="w-full px-3 py-1 border border-gray-300 rounded-md shadow-sm text-black focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-sm"
                          />
                        </td>
                      </tr>

                      <tr>
                        <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700">
                          Cerebrovascular Disease
                        </td>
                        <td className="px-4 py-2 whitespace-nowrap">
                          <input
                            type="radio"
                            name="fcerebrovascular"
                            checked={parent.fcerebrovascular === "yes"}
                            value="yes"
                            onChange={handleChange}
                            className="h-4 w-4 text-[#147190] focus:ring-[#148190] border-gray-300"
                          />
                        </td>
                        <td className="px-4 py-2 whitespace-nowrap">
                          <input
                            type="radio"
                            name="fcerebrovascular"
                            checked={parent.fcerebrovascular === "no"}
                            value="no"
                            onChange={handleChange}
                            className="h-4 w-4 text-[#147190] focus:ring-[#148190] border-gray-300"
                          />
                        </td>
                      </tr>

                      <tr>
                        <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700">
                          Coronary Artery Disease
                        </td>
                        <td className="px-4 py-2 whitespace-nowrap">
                          <input
                            type="radio"
                            name="fcoronaryArtery"
                            checked={parent.fcoronaryArtery === "yes"}
                            value="yes"
                            onChange={handleChange}
                            className="h-4 w-4 text-[#147190] focus:ring-[#148190] border-gray-300"
                          />
                        </td>
                        <td className="px-4 py-2 whitespace-nowrap">
                          <input
                            type="radio"
                            name="fcoronaryArtery"
                            checked={parent.fcoronaryArtery === "no"}
                            value="no"
                            onChange={handleChange}
                            className="h-4 w-4 text-[#147190] focus:ring-[#148190] border-gray-300"
                          />
                        </td>
                      </tr>

                      <tr>
                        <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700">
                          Diabetes Mellitus
                        </td>
                        <td className="px-4 py-2 whitespace-nowrap">
                          <input
                            type="radio"
                            name="fdiabetes"
                            checked={parent.fdiabetes === "yes"}
                            value="yes"
                            onChange={handleChange}
                            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                          />
                        </td>
                        <td className="px-4 py-2 whitespace-nowrap">
                          <input
                            type="radio"
                            name="fdiabetes"
                            checked={parent.fdiabetes === "no"}
                            value="no"
                            onChange={handleChange}
                            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                          />
                        </td>
                      </tr>

                      <tr>
                        <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700">
                          Emphysema
                        </td>
                        <td className="px-4 py-2 whitespace-nowrap">
                          <input
                            type="radio"
                            name="femphysema"
                            checked={parent.femphysema === "yes"}
                            value="yes"
                            onChange={handleChange}
                            className="h-4 w-4 text-[#147190] focus:ring-[#148190] border-gray-300"
                          />
                        </td>
                        <td className="px-4 py-2 whitespace-nowrap">
                          <input
                            type="radio"
                            name="femphysema"
                            checked={parent.femphysema === "no"}
                            value="no"
                            onChange={handleChange}
                            className="h-4 w-4 text-[#147190] focus:ring-[#148190] border-gray-300"
                          />
                        </td>
                      </tr>

                      <tr>
                        <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700">
                          Epilepsy / Seizure Disorder
                        </td>
                        <td className="px-4 py-2 whitespace-nowrap">
                          <input
                            type="radio"
                            name="fepilepsy"
                            checked={parent.fepilepsy === "yes"}
                            value="yes"
                            onChange={handleChange}
                            className="h-4 w-4 text-[#147190] focus:ring-[#148190] border-gray-300"
                          />
                        </td>
                        <td className="px-4 py-2 whitespace-nowrap">
                          <input
                            type="radio"
                            name="fepilepsy"
                            checked={parent.fepilepsy === "no"}
                            value="no"
                            onChange={handleChange}
                            className="h-4 w-4 text-[#147190] focus:ring-[#148190] border-gray-300"
                          />
                        </td>
                      </tr>

                      <tr>
                        <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700">
                          Hepatitis
                        </td>
                        <td className="px-4 py-2 whitespace-nowrap">
                          <input
                            type="radio"
                            name="fhepatitis"
                            checked={parent.fhepatitis === "yes"}
                            value="yes"
                            onChange={handleChange}
                            className="h-4 w-4 text-[#147190] focus:ring-[#148190] border-gray-300"
                          />
                        </td>
                        <td className="px-4 py-2 whitespace-nowrap">
                          <input
                            type="radio"
                            name="fhepatitis"
                            checked={parent.fhepatitis === "no"}
                            value="no"
                            onChange={handleChange}
                            className="h-4 w-4 text-[#147190] focus:ring-[#148190] border-gray-300"
                          />
                        </td>
                      </tr>

                      <tr>
                        <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700">
                          Hyperlipidemia
                        </td>
                        <td className="px-4 py-2 whitespace-nowrap">
                          <input
                            type="radio"
                            name="fhyperlipidemia"
                            checked={parent.fhyperlipidemia === "yes"}
                            value="yes"
                            onChange={handleChange}
                            className="h-4 w-4 text-[#147190] focus:ring-[#148190] border-gray-300"
                          />
                        </td>
                        <td className="px-4 py-2 whitespace-nowrap">
                          <input
                            type="radio"
                            name="fhyperlipidemia"
                            checked={parent.fhyperlipidemia === "no"}
                            value="no"
                            onChange={handleChange}
                            className="h-4 w-4 text-[#147190] focus:ring-[#148190] border-gray-300"
                          />
                        </td>
                      </tr>

                      <tr>
                        <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700">
                          Hypertension
                        </td>
                        <td className="px-4 py-2 whitespace-nowrap">
                          <input
                            type="radio"
                            name="fhypertension"
                            checked={parent.fhypertension === "yes"}
                            value="yes"
                            onChange={handleChange}
                            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                          />
                        </td>
                        <td className="px-4 py-2 whitespace-nowrap">
                          <input
                            type="radio"
                            name="fhypertension"
                            checked={parent.fhypertension === "no"}
                            value="no"
                            onChange={handleChange}
                            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                          />
                        </td>
                      </tr>

                      <tr>
                        <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700">
                          Peptic Ulcer
                        </td>
                        <td className="px-4 py-2 whitespace-nowrap">
                          <input
                            type="radio"
                            name="fpepticUlcer"
                            checked={parent.fpepticUlcer === "yes"}
                            value="yes"
                            onChange={handleChange}
                            className="h-4 w-4 text-[#147190] focus:ring-[#148190] border-gray-300"
                          />
                        </td>
                        <td className="px-4 py-2 whitespace-nowrap">
                          <input
                            type="radio"
                            name="fpepticUlcer"
                            checked={parent.fpepticUlcer === "no"}
                            value="no"
                            onChange={handleChange}
                            className="h-4 w-4 text-[#147190] focus:ring-[#148190] border-gray-300"
                          />
                        </td>
                      </tr>

                      <tr>
                        <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700">
                          Pneumonia
                        </td>
                        <td className="px-4 py-2 whitespace-nowrap">
                          <input
                            type="radio"
                            name="fpneumonia"
                            checked={parent.fpneumonia === "yes"}
                            value="yes"
                            onChange={handleChange}
                            className="h-4 w-4 text-[#147190] focus:ring-[#148190] border-gray-300"
                          />
                        </td>
                        <td className="px-4 py-2 whitespace-nowrap">
                          <input
                            type="radio"
                            name="fpneumonia"
                            checked={parent.fpneumonia === "no"}
                            value="no"
                            onChange={handleChange}
                            className="h-4 w-4 text-[#147190] focus:ring-[#148190] border-gray-300"
                          />
                        </td>
                      </tr>

                      <tr>
                        <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700">
                          Thyroid Disease
                        </td>
                        <td className="px-4 py-2 whitespace-nowrap">
                          <input
                            type="radio"
                            name="fthyroid"
                            checked={parent.fthyroid === "yes"}
                            value="yes"
                            onChange={handleChange}
                            className="h-4 w-4 text-[#147190] focus:ring-[#148190] border-gray-300"
                          />
                        </td>
                        <td className="px-4 py-2 whitespace-nowrap">
                          <input
                            type="radio"
                            name="fthyroid"
                            checked={parent.fthyroid === "no"}
                            value="no"
                            onChange={handleChange}
                            className="h-4 w-4 text-[#147190] focus:ring-[#148190] border-gray-300"
                          />
                        </td>
                      </tr>

                      <tr>
                        <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700">
                          Pulmonary Tuberculosis
                        </td>
                        <td className="px-4 py-2 whitespace-nowrap">
                          <input
                            type="radio"
                            name="fpulmonaryTb"
                            checked={parent.fpulmonaryTb === "yes"}
                            value="yes"
                            onChange={handleChange}
                            className="h-4 w-4 text-[#147190] focus:ring-[#148190] border-gray-300"
                          />
                        </td>
                        <td className="px-4 py-2 whitespace-nowrap">
                          <input
                            type="radio"
                            name="fpulmonaryTb"
                            checked={parent.fpulmonaryTb === "no"}
                            value="no"
                            onChange={handleChange}
                            className="h-4 w-4 text-[#147190] focus:ring-[#148190] border-gray-300"
                          />
                        </td>
                      </tr>

                      <tr>
                        <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700">
                          Specify Pulmonary Tuberculosis Category:
                        </td>
                        <td colSpan="2" className="px-4 py-2">
                          <input
                            type="text"
                            name="fpulmonaryTbCategory"
                            value={parent.fpulmonaryTbCategory}
                            onChange={handleChange}
                            className="w-full px-3 py-1 border border-gray-300 rounded-md shadow-sm text-black focus:outline-none focus:ring-[#147190] focus:border-[#148190] text-sm"
                          />
                        </td>
                      </tr>

                      <tr>
                        <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700">
                          Extrapulmonary Tuberculosis
                        </td>
                        <td className="px-4 py-2 whitespace-nowrap">
                          <input
                            type="radio"
                            name="fextrapulmonaryTb"
                            checked={parent.fextrapulmonaryTb === "yes"}
                            value="yes"
                            onChange={handleChange}
                            className="h-4 w-4 text-[#147190] focus:ring-[#148190] border-gray-300"
                          />
                        </td>
                        <td className="px-4 py-2 whitespace-nowrap">
                          <input
                            type="radio"
                            name="fextrapulmonaryTb"
                            checked={parent.fextrapulmonaryTb === "no"}
                            value="no"
                            onChange={handleChange}
                            className="h-4 w-4 text-[#147190] focus:ring-[#148190] border-gray-300"
                          />
                        </td>
                      </tr>

                      <tr>
                        <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700">
                          Specify Extrapulmonary Tuberculosis Category:
                        </td>
                        <td colSpan="2" className="px-4 py-2">
                          <input
                            type="text"
                            name="fextrapulmonaryTbCategory"
                            value={parent.fextrapulmonaryTbCategory}
                            onChange={handleChange}
                            className="w-full px-3 py-1 border border-gray-300 rounded-md shadow-sm text-black focus:outline-none focus:ring-[#147190] focus:border-[#148190] text-sm"
                          />
                        </td>
                      </tr>

                      <tr>
                        <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700">
                          Urinary Tract Infection
                        </td>
                        <td className="px-4 py-2 whitespace-nowrap">
                          <input
                            type="radio"
                            name="futi"
                            checked={parent.futi === "yes"}
                            value="yes"
                            onChange={handleChange}
                            className="h-4 w-4 text-[#147190] focus:ring-[#148190] border-gray-300"
                          />
                        </td>
                        <td className="px-4 py-2 whitespace-nowrap">
                          <input
                            type="radio"
                            name="futi"
                            checked={parent.futi === "no"}
                            value="no"
                            onChange={handleChange}
                            className="h-4 w-4 text-[#147190] focus:ring-[#148190] border-gray-300"
                          />
                        </td>
                      </tr>

                      <tr>
                        <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700">
                          Mental Illness
                        </td>
                        <td className="px-4 py-2 whitespace-nowrap">
                          <input
                            type="radio"
                            name="fmentalIllness"
                            checked={parent.fmentalIllness === "yes"}
                            value="yes"
                            onChange={handleChange}
                            className="h-4 w-4 text-[#147190] focus:ring-[#148190] border-gray-300"
                          />
                        </td>
                        <td className="px-4 py-2 whitespace-nowrap">
                          <input
                            type="radio"
                            name="fmentalIllness"
                            checked={parent.fmentalIllness === "no"}
                            value="no"
                            onChange={handleChange}
                            className="h-4 w-4 text-[#147190] focus:ring-[#148190] border-gray-300"
                          />
                        </td>
                      </tr>

                      <tr>
                        <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700">
                          Others
                        </td>
                        <td className="px-4 py-2 whitespace-nowrap">
                          <input
                            type="radio"
                            name="fothers"
                            checked={parent.fothers === "yes"}
                            value="yes"
                            onChange={handleChange}
                            className="h-4 w-4 text-[#147190] focus:ring-[#148190] border-gray-300"
                          />
                        </td>
                        <td className="px-4 py-2 whitespace-nowrap">
                          <input
                            type="radio"
                            name="fothers"
                            checked={parent.fothers === "no"}
                            value="no"
                            onChange={handleChange}
                            className="h-4 w-4 text-[#147190] focus:ring-[#148190] border-gray-300"
                          />
                        </td>
                      </tr>

                      <tr>
                        <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700">
                          Others please specify:
                        </td>
                        <td colSpan="2" className="px-4 py-2">
                          <input
                            type="text"
                            name="fspecifyOthers"
                            value={parent.fspecifyOthers}
                            onChange={handleChange}
                            className="w-full px-3 py-1 border border-gray-300 rounded-md shadow-sm text-black focus:outline-none focus:ring-[#147190] focus:border-[#148190] text-sm"
                          />
                        </td>
                      </tr>

                      <tr>
                        <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700">
                          None
                        </td>
                        <td className="px-4 py-2 whitespace-nowrap">
                          <input
                            type="radio"
                            name="fnone"
                            checked={parent.fnone === "yes"}
                            value="yes"
                            onChange={handleChange}
                            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                          />
                        </td>
                        <td className="px-4 py-2 whitespace-nowrap">
                          <input
                            type="radio"
                            name="fnone"
                            checked={parent.fnone === "no"}
                            value="no"
                            onChange={handleChange}
                            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                          />
                        </td>
                      </tr>

                      <tr>
                        <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700">
                          Highest Blood Pressure:
                        </td>
                        <td colSpan="2" className="px-4 py-2">
                          <input
                            type="text"
                            name="fbloodPressure"
                            value={parent.fbloodPressure}
                            placeholder="e.g. 120/80"
                            onChange={handleChange}
                            className="w-full px-3 py-1 border border-gray-300 rounded-md shadow-sm text-black focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-sm"
                          />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-[#147190] mb-4 border-b border-blue-200 pb-2">
                  Personal/Social History
                </h3>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-blue-100">
                      <tr>
                        <th className="px-4 py-2 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                          Category
                        </th>
                        <th className="px-4 py-2 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                          Yes
                        </th>
                        <th className="px-4 py-2 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                          No
                        </th>
                        <th className="px-4 py-2 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                          Quit
                        </th>
                        <th className="px-4 py-2 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                          Additional Information
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      <tr>
                        <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700">
                          Smoking
                        </td>
                        <td className="px-4 py-2 whitespace-nowrap">
                          <input
                            type="radio"
                            name="smoking"
                            checked={parent.smoking === "yes"}
                            value="yes"
                            onChange={handleChange}
                            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                          />
                        </td>
                        <td className="px-4 py-2 whitespace-nowrap">
                          <input
                            type="radio"
                            name="smoking"
                            checked={parent.smoking === "no"}
                            value="no"
                            onChange={handleChange}
                            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                          />
                        </td>
                        <td className="px-4 py-2 whitespace-nowrap">
                          <input
                            type="radio"
                            name="smoking"
                            checked={parent.smoking === "quit"}
                            value="quit"
                            onChange={handleChange}
                            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                          />
                        </td>
                        <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700">
                          <div className="flex items-center">
                            <span>No. of Packs per year:</span>
                            <input
                              type="number"
                              name="packsPerYear"
                              value={parent.packsPerYear}
                              onChange={handleChange}
                              className="ml-2 w-20 px-2 py-1 border border-gray-300 text-black rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-sm"
                              min="0"
                            />
                          </div>
                        </td>
                      </tr>

                      <tr>
                        <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700">
                          Alcohol
                        </td>
                        <td className="px-4 py-2 whitespace-nowrap">
                          <input
                            type="radio"
                            name="alcohol"
                            checked={parent.alcohol === "yes"}
                            value="yes"
                            onChange={handleChange}
                            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                          />
                        </td>
                        <td className="px-4 py-2 whitespace-nowrap">
                          <input
                            type="radio"
                            name="alcohol"
                            checked={parent.alcohol === "no"}
                            value="no"
                            onChange={handleChange}
                            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                          />
                        </td>
                        <td className="px-4 py-2 whitespace-nowrap"></td>
                        <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700">
                          <div className="flex items-center">
                            <span>No. of Bottles per day:</span>
                            <input
                              type="number"
                              name="bottlesPerDay"
                              value={parent.bottlesPerDay}
                              onChange={handleChange}
                              className="ml-2 w-20 px-2 py-1 border border-gray-300 text-black rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-sm"
                              min="0"
                            />
                          </div>
                        </td>
                      </tr>

                      <tr>
                        <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700">
                          Illicit Drugs
                        </td>
                        <td className="px-4 py-2 whitespace-nowrap">
                          <input
                            type="radio"
                            name="illicitDrugs"
                            checked={parent.illicitDrugs === "yes"}
                            value="yes"
                            onChange={handleChange}
                            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                          />
                        </td>
                        <td className="px-4 py-2 whitespace-nowrap">
                          <input
                            type="radio"
                            name="illicitDrugs"
                            checked={parent.illicitDrugs === "no"}
                            value="no"
                            onChange={handleChange}
                            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                          />
                        </td>
                        <td className="px-4 py-2 whitespace-nowrap"></td>
                        <td className="px-4 py-2 whitespace-nowrap">
                          <input
                            type="text"
                            name="illicitDrugsDetails"
                            value={parent.illicitDrugsDetails}
                            placeholder="Specify drug use"
                            onChange={handleChange}
                            className="w-full px-3 py-1 border border-gray-300 rounded-md shadow-sm text-black focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-sm"
                          />
                        </td>
                      </tr>

                      <tr>
                        <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700">
                          Sexual History Screening
                        </td>
                        <td className="px-4 py-2 whitespace-nowrap">
                          <input
                            type="radio"
                            name="sexualHistory"
                            checked={parent.sexualHistory === "yes"}
                            value="yes"
                            onChange={handleChange}
                            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                          />
                        </td>
                        <td className="px-4 py-2 whitespace-nowrap">
                          <input
                            type="radio"
                            name="sexualHistory"
                            checked={parent.sexualHistory === "no"}
                            value="no"
                            onChange={handleChange}
                            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                          />
                        </td>
                        <td className="px-4 py-2 whitespace-nowrap"></td>
                        <td className="px-4 py-2 whitespace-nowrap">
                          <input
                            type="text"
                            name="sexualHistoryDetails"
                            value={parent.sexualHistoryDetails}
                            placeholder="Additional details"
                            onChange={handleChange}
                            className="w-full px-3 py-1 border border-gray-300 rounded-md shadow-sm text-black focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-sm"
                          />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-[#147190] mb-4 border-b border-blue-200 pb-2">
                  Obstetrics/Menstrual History (For Females Only)
                </h3>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <tbody className="bg-white divide-y divide-gray-200">
                      <tr>
                        <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700 font-medium">
                          Menarche
                        </td>
                        <td className="px-4 py-2 whitespace-nowrap">
                          <input
                            type="number"
                            name="menarche"
                            value={parent.menarche}
                            onChange={handleChange}
                            className="w-full px-3 py-1 border border-gray-300 rounded-md shadow-sm text-black focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-sm"
                            placeholder="Age at first period"
                          />
                        </td>
                        <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700 font-medium">
                          Pregnancy History
                        </td>
                        <td className="px-4 py-2 whitespace-nowrap">
                          <input
                            type="text"
                            name="pregnancyHistory"
                            value={parent.pregnancyHistory}
                            onChange={handleChange}
                            className="w-full px-3 py-1 border border-gray-300 rounded-md shadow-sm text-black focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-sm"
                          />
                        </td>
                      </tr>

                      <tr>
                        <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700 font-medium">
                          Menopause
                        </td>
                        <td className="px-4 py-2 whitespace-nowrap">
                          <div className="flex items-center space-x-4">
                            <label className="inline-flex items-center">
                              <input
                                type="radio"
                                name="menopause"
                                checked={parent.menopause === "yes"}
                                value="yes"
                                onChange={handleChange}
                                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                              />
                              <span className="ml-2 text-sm text-gray-700">
                                Yes
                              </span>
                            </label>
                            <label className="inline-flex items-center">
                              <input
                                type="radio"
                                name="menopause"
                                checked={parent.menopause === "no"}
                                value="no"
                                onChange={handleChange}
                                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                              />
                              <span className="ml-2 text-sm text-gray-700">
                                No
                              </span>
                            </label>
                          </div>
                        </td>
                        <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700 font-medium">
                          Gravida
                        </td>
                        <td className="px-4 py-2 whitespace-nowrap">
                          <input
                            type="number"
                            name="gravida"
                            value={parent.gravida}
                            onChange={handleChange}
                            className="w-full px-3 py-1 border border-gray-300 rounded-md shadow-sm text-black focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-sm"
                            min="0"
                          />
                        </td>
                      </tr>

                      <tr>
                        <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700 font-medium">
                          Age of Menopause
                        </td>
                        <td className="px-4 py-2 whitespace-nowrap">
                          <input
                            type="number"
                            name="ageOfMenopause"
                            value={parent.ageOfMenopause}
                            onChange={handleChange}
                            className="w-full px-3 py-1 border border-gray-300 rounded-md shadow-sm text-black focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-sm"
                            min="0"
                            max="100"
                          />
                        </td>
                        <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700 font-medium">
                          Para
                        </td>
                        <td className="px-4 py-2 whitespace-nowrap">
                          <input
                            type="number"
                            name="para"
                            value={parent.para}
                            onChange={handleChange}
                            className="w-full px-3 py-1 border border-gray-300 rounded-md shadow-sm text-black focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-sm"
                            min="0"
                          />
                        </td>
                      </tr>

                      <tr>
                        <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700 font-medium">
                          LMP
                        </td>
                        <td className="px-4 py-2 whitespace-nowrap">
                          <input
                            type="date"
                            name="lmp"
                            value={parent.lmp}
                            onChange={handleChange}
                            className="w-full px-3 py-1 border border-gray-300 rounded-md shadow-sm text-black focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-sm"
                          />
                        </td>
                        <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700 font-medium">
                          Full Term
                        </td>
                        <td className="px-4 py-2 whitespace-nowrap">
                          <input
                            type="number"
                            name="fullTerm"
                            value={parent.fullTerm}
                            onChange={handleChange}
                            className="w-full px-3 py-1 border border-gray-300 rounded-md shadow-sm text-black focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-sm"
                            min="0"
                          />
                        </td>
                      </tr>

                      <tr>
                        <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700 font-medium">
                          Interval of Menstruation
                        </td>
                        <td className="px-4 py-2 whitespace-nowrap">
                          <input
                            type="text"
                            name="intervalOfMenstruation"
                            value={parent.intervalOfMenstruation}
                            onChange={handleChange}
                            className="w-full px-3 py-1 border border-gray-300 rounded-md shadow-sm text-black focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-sm"
                            placeholder="e.g. 28 days"
                          />
                        </td>
                        <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700 font-medium">
                          Preterm
                        </td>
                        <td className="px-4 py-2 whitespace-nowrap">
                          <input
                            type="number"
                            name="preTerm"
                            value={parent.preTerm}
                            onChange={handleChange}
                            className="w-full px-3 py-1 border border-gray-300 rounded-md shadow-sm text-black focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-sm"
                            min="0"
                          />
                        </td>
                      </tr>

                      <tr>
                        <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700 font-medium">
                          Duration
                        </td>
                        <td className="px-4 py-2 whitespace-nowrap">
                          <div className="flex items-center">
                            <input
                              type="number"
                              name="duration"
                              value={parent.duration}
                              min="0"
                              onChange={handleChange}
                              className="w-20 px-3 py-1 border border-gray-300 rounded-md shadow-sm text-black focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-sm"
                            />
                            <span className="ml-2 text-sm text-gray-700">
                              days
                            </span>
                          </div>
                        </td>
                        <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700 font-medium">
                          Abortion
                        </td>
                        <td className="px-4 py-2 whitespace-nowrap">
                          <input
                            type="number"
                            name="abortion"
                            value={parent.abortion}
                            onChange={handleChange}
                            className="w-full px-3 py-1 border border-gray-300 rounded-md shadow-sm text-black focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-sm"
                            min="0"
                          />
                        </td>
                      </tr>

                      <tr>
                        <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700 font-medium">
                          Pads per day
                        </td>
                        <td className="px-4 py-2 whitespace-nowrap">
                          <input
                            type="number"
                            name="padsPerDay"
                            value={parent.padsPerDay}
                            min="0"
                            onChange={handleChange}
                            className="w-20 px-3 py-1 border border-gray-300 rounded-md shadow-sm text-black focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-sm"
                          />
                        </td>
                        <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700 font-medium">
                          Living
                        </td>
                        <td className="px-4 py-2 whitespace-nowrap">
                          <input
                            type="number"
                            name="living"
                            value={parent.living}
                            onChange={handleChange}
                            className="w-full px-3 py-1 border border-gray-300 rounded-md shadow-sm text-black focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-sm"
                            min="0"
                          />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                className="px-6 py-3 bg-[#147190] text-white font-medium rounded-md shadow-sm text-black hover:bg-[#02536e] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
              >
                Save Changes
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Edit;
