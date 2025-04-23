import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Add = () => {
  const [formData, setFormData] = useState({
    name: "",
    parentId: "",
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
    date: "",
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
    email: "",
    password: "",
    role: "parent",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:5000/api/parent/add",
        formData,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      if (response.data.success) {
        navigate("/healthWorker-dashboard/parents");
      }
    } catch (error) {
      if (error.response && !error.response.data.success) {
        alert(error.response.data.error);
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white shadow-xl rounded-lg overflow-hidden">
          <div className="bg-white-200 py-4 px-6">
            <h2 className="text-2xl font-bold text-gray-700">
              PhilHealth Konsulta Registration Form
            </h2>
            <p className="text-gray-500 mt-1">
              Please fill out all required fields completely and accurately
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
                    Date <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="date"
                    name="date"
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-black focus:outline-none focus:ring-[#147190] focus:border-[#148190]"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    First Choice KPP <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="kpp"
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-black focus:outline-none focus:ring-[#147190] focus:border-[#148190]"
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
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-black focus:outline-none focus:ring-[#147190] focus:border-[#148190]"
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
                    placeholder="Enter nickname"
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-black focus:outline-none focus:ring-[#147190] focus:border-[#148190]"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Parent ID
                  </label>
                  <input
                    type="number"
                    name="parentId"
                    placeholder="Enter any ID number"
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-black focus:outline-none focus:ring-[#147190] focus:border-[#148190]"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Family Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="number"
                    name="familyNumber"
                    placeholder="Enter family number"
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-black focus:outline-none focus:ring-[#147190] focus:border-[#148190]"
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
                    placeholder="Enter last name"
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-black focus:outline-none focus:ring-[#147190] focus:border-[#148190]"
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
                    placeholder="Enter first name"
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-black focus:outline-none focus:ring-[#147190] focus:border-[#148190]"
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
                    placeholder="Enter middle name"
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-black focus:outline-none focus:ring-[#147190] focus:border-[#148190]"
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
                    placeholder="09XXXXXXXXX"
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-black focus:outline-none focus:ring-[#147190] focus:border-[#148190]"
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
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-black focus:outline-none focus:ring-[#147190] focus:border-[#148190]"
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
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-black focus:outline-none focus:ring-[#147190] focus:border-[#148190]"
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
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-black focus:outline-none focus:ring-[#147190] focus:border-[#148190]"
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
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-black focus:outline-none focus:ring-[#147190] focus:border-[#148190]"
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
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-black focus:outline-none focus:ring-[#147190] focus:border-[#148190]"
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
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-black focus:outline-none focus:ring-[#147190] focus:border-[#148190]"
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
                    placeholder="Enter religion"
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-black focus:outline-none focus:ring-[#147190] focus:border-[#148190]"
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
                    placeholder="Complete address"
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-black focus:outline-none focus:ring-[#147190] focus:border-[#148190]"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Civil Status <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="civilStatus"
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-black focus:outline-none focus:ring-[#147190] focus:border-[#148190]"
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
                    placeholder="Enter maiden name"
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-black focus:outline-none focus:ring-[#147190] focus:border-[#148190]"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    [If Married] Spouse Name
                  </label>
                  <input
                    type="text"
                    name="spouseName"
                    placeholder="Enter spouse name"
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-black focus:outline-none focus:ring-[#147190] focus:border-[#148190]"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    [If Living in] Partner's Name
                  </label>
                  <input
                    type="text"
                    name="partnerName"
                    placeholder="Enter partner's name"
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-black focus:outline-none focus:ring-[#147190] focus:border-[#148190]"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Occupation
                  </label>
                  <input
                    type="text"
                    name="occupation"
                    placeholder="Enter occupation"
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-black focus:outline-none focus:ring-[#147190] focus:border-[#148190]"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Educational Attainment{" "}
                    <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="educAttainment"
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-black focus:outline-none focus:ring-[#147190] focus:border-[#148190]"
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
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-black focus:outline-none focus:ring-[#147190] focus:border-[#148190]"
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
                            value="yes"
                            onChange={handleChange}
                            className="h-4 w-4 text-[#147190] focus:ring-[#148190] border-gray-300"
                          />
                        </td>
                        <td className="px-4 py-2 whitespace-nowrap">
                          <input
                            type="radio"
                            name="pallergy"
                            value="no"
                            onChange={handleChange}
                            className="h-4 w-4 text-[#147190] focus:ring-[#148190] border-gray-300"
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
                            onChange={handleChange}
                            className="w-full px-3 py-1 border border-gray-300 rounded-md shadow-sm text-black focus:outline-none focus:ring-[#147190] focus:border-[#148190] text-sm"
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
                            value="yes"
                            onChange={handleChange}
                            className="h-4 w-4 text-[#147190] focus:ring-[#148190] border-gray-300"
                          />
                        </td>
                        <td className="px-4 py-2 whitespace-nowrap">
                          <input
                            type="radio"
                            name="pasthma"
                            value="no"
                            onChange={handleChange}
                            className="h-4 w-4 text-[#147190] focus:ring-[#148190] border-gray-300"
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
                            value="yes"
                            onChange={handleChange}
                            className="h-4 w-4 text-[#147190] focus:ring-[#148190] border-gray-300"
                          />
                        </td>
                        <td className="px-4 py-2 whitespace-nowrap">
                          <input
                            type="radio"
                            name="pcancer"
                            value="no"
                            onChange={handleChange}
                            className="h-4 w-4 text-[#147190] focus:ring-[#148190] border-gray-300"
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
                            onChange={handleChange}
                            className="w-full px-3 py-1 border border-gray-300 rounded-md shadow-sm text-black focus:outline-none focus:ring-[#147190] focus:border-[#148190] text-sm"
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
                            value="yes"
                            onChange={handleChange}
                            className="h-4 w-4 text-[#147190] focus:ring-[#148190] border-gray-300"
                          />
                        </td>
                        <td className="px-4 py-2 whitespace-nowrap">
                          <input
                            type="radio"
                            name="pcerebrovascular"
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
                            value="yes"
                            onChange={handleChange}
                            className="h-4 w-4 text-[#147190] focus:ring-[#148190] border-gray-300"
                          />
                        </td>
                        <td className="px-4 py-2 whitespace-nowrap">
                          <input
                            type="radio"
                            name="pcoronaryArtery"
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
                            value="yes"
                            onChange={handleChange}
                            className="h-4 w-4 text-[#147190] focus:ring-[#148190] border-gray-300"
                          />
                        </td>
                        <td className="px-4 py-2 whitespace-nowrap">
                          <input
                            type="radio"
                            name="pdiabetes"
                            value="no"
                            onChange={handleChange}
                            className="h-4 w-4 text-[#147190] focus:ring-[#148190] border-gray-300"
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
                            value="yes"
                            onChange={handleChange}
                            className="h-4 w-4 text-[#147190] focus:ring-[#148190] border-gray-300"
                          />
                        </td>
                        <td className="px-4 py-2 whitespace-nowrap">
                          <input
                            type="radio"
                            name="pemphysema"
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
                            value="yes"
                            onChange={handleChange}
                            className="h-4 w-4 text-[#147190] focus:ring-[#148190] border-gray-300"
                          />
                        </td>
                        <td className="px-4 py-2 whitespace-nowrap">
                          <input
                            type="radio"
                            name="pepilepsy"
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
                            value="yes"
                            onChange={handleChange}
                            className="h-4 w-4 text-[#147190] focus:ring-[#148190] border-gray-300"
                          />
                        </td>
                        <td className="px-4 py-2 whitespace-nowrap">
                          <input
                            type="radio"
                            name="phepatitis"
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
                            value="yes"
                            onChange={handleChange}
                            className="h-4 w-4 text-[#147190] focus:ring-[#148190] border-gray-300"
                          />
                        </td>
                        <td className="px-4 py-2 whitespace-nowrap">
                          <input
                            type="radio"
                            name="phyperlipidemia"
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
                            value="yes"
                            onChange={handleChange}
                            className="h-4 w-4 text-[#147190] focus:ring-[#148190] border-gray-300"
                          />
                        </td>
                        <td className="px-4 py-2 whitespace-nowrap">
                          <input
                            type="radio"
                            name="phypertension"
                            value="no"
                            onChange={handleChange}
                            className="h-4 w-4 text-[#147190] focus:ring-[#148190] border-gray-300"
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
                            value="yes"
                            onChange={handleChange}
                            className="h-4 w-4 text-[#147190] focus:ring-[#148190] border-gray-300"
                          />
                        </td>
                        <td className="px-4 py-2 whitespace-nowrap">
                          <input
                            type="radio"
                            name="ppepticUlcer"
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
                            value="yes"
                            onChange={handleChange}
                            className="h-4 w-4 text-[#147190] focus:ring-[#148190] border-gray-300"
                          />
                        </td>
                        <td className="px-4 py-2 whitespace-nowrap">
                          <input
                            type="radio"
                            name="ppneumonia"
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
                            value="yes"
                            onChange={handleChange}
                            className="h-4 w-4 text-[#147190] focus:ring-[#148190] border-gray-300"
                          />
                        </td>
                        <td className="px-4 py-2 whitespace-nowrap">
                          <input
                            type="radio"
                            name="pthyroid"
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
                            value="yes"
                            onChange={handleChange}
                            className="h-4 w-4 text-[#147190] focus:ring-[#148190] border-gray-300"
                          />
                        </td>
                        <td className="px-4 py-2 whitespace-nowrap">
                          <input
                            type="radio"
                            name="ppulmonaryTb"
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
                            value="yes"
                            onChange={handleChange}
                            className="h-4 w-4 text-[#147190] focus:ring-[#148190] border-gray-300"
                          />
                        </td>
                        <td className="px-4 py-2 whitespace-nowrap">
                          <input
                            type="radio"
                            name="pextrapulmonaryTb"
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
                            value="yes"
                            onChange={handleChange}
                            className="h-4 w-4 text-[#147190] focus:ring-[#148190] border-gray-300"
                          />
                        </td>
                        <td className="px-4 py-2 whitespace-nowrap">
                          <input
                            type="radio"
                            name="puti"
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
                            value="yes"
                            onChange={handleChange}
                            className="h-4 w-4 text-[#147190] focus:ring-[#148190] border-gray-300"
                          />
                        </td>
                        <td className="px-4 py-2 whitespace-nowrap">
                          <input
                            type="radio"
                            name="pmentalIllness"
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
                            value="yes"
                            onChange={handleChange}
                            className="h-4 w-4 text-[#147190] focus:ring-[#148190] border-gray-300"
                          />
                        </td>
                        <td className="px-4 py-2 whitespace-nowrap">
                          <input
                            type="radio"
                            name="pothers"
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
                            value="yes"
                            onChange={handleChange}
                            className="h-4 w-4 text-[#147190] focus:ring-[#148190] border-gray-300"
                          />
                        </td>
                        <td className="px-4 py-2 whitespace-nowrap">
                          <input
                            type="radio"
                            name="pnone"
                            value="no"
                            onChange={handleChange}
                            className="h-4 w-4 text-[#147190] focus:ring-[#148190] border-gray-300"
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
                            placeholder="e.g. 120/80"
                            onChange={handleChange}
                            className="w-full px-3 py-1 border border-gray-300 rounded-md shadow-sm text-black focus:outline-none focus:ring-[#147190] focus:border-[#148190] text-sm"
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
                            value="yes"
                            onChange={handleChange}
                            className="h-4 w-4 text-[#147190] focus:ring-[#148190] border-gray-300"
                          />
                        </td>
                        <td className="px-4 py-2 whitespace-nowrap">
                          <input
                            type="radio"
                            name="fallergy"
                            value="no"
                            onChange={handleChange}
                            className="h-4 w-4 text-[#147190] focus:ring-[#148190] border-gray-300"
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
                            onChange={handleChange}
                            className="w-full px-3 py-1 border border-gray-300 rounded-md shadow-sm text-black focus:outline-none focus:ring-[#147190] focus:border-[#148190] text-sm"
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
                            value="yes"
                            onChange={handleChange}
                            className="h-4 w-4 text-[#147190] focus:ring-[#148190] border-gray-300"
                          />
                        </td>
                        <td className="px-4 py-2 whitespace-nowrap">
                          <input
                            type="radio"
                            name="fasthma"
                            value="no"
                            onChange={handleChange}
                            className="h-4 w-4 text-[#147190] focus:ring-[#148190] border-gray-300"
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
                            value="yes"
                            onChange={handleChange}
                            className="h-4 w-4 text-[#147190] focus:ring-[#148190] border-gray-300"
                          />
                        </td>
                        <td className="px-4 py-2 whitespace-nowrap">
                          <input
                            type="radio"
                            name="fcancer"
                            value="no"
                            onChange={handleChange}
                            className="h-4 w-4 text-[#147190] focus:ring-[#148190] border-gray-300"
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
                            onChange={handleChange}
                            className="w-full px-3 py-1 border border-gray-300 rounded-md shadow-sm text-black focus:outline-none focus:ring-[#147190] focus:border-[#148190] text-sm"
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
                            value="yes"
                            onChange={handleChange}
                            className="h-4 w-4 text-[#147190] focus:ring-[#148190] border-gray-300"
                          />
                        </td>
                        <td className="px-4 py-2 whitespace-nowrap">
                          <input
                            type="radio"
                            name="fcerebrovascular"
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
                            value="yes"
                            onChange={handleChange}
                            className="h-4 w-4 text-[#147190] focus:ring-[#148190] border-gray-300"
                          />
                        </td>
                        <td className="px-4 py-2 whitespace-nowrap">
                          <input
                            type="radio"
                            name="fcoronaryArtery"
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
                            value="yes"
                            onChange={handleChange}
                            className="h-4 w-4 text-[#147190] focus:ring-[#148190] border-gray-300"
                          />
                        </td>
                        <td className="px-4 py-2 whitespace-nowrap">
                          <input
                            type="radio"
                            name="fdiabetes"
                            value="no"
                            onChange={handleChange}
                            className="h-4 w-4 text-[#147190] focus:ring-[#148190] border-gray-300"
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
                            value="yes"
                            onChange={handleChange}
                            className="h-4 w-4 text-[#147190] focus:ring-[#148190] border-gray-300"
                          />
                        </td>
                        <td className="px-4 py-2 whitespace-nowrap">
                          <input
                            type="radio"
                            name="femphysema"
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
                            value="yes"
                            onChange={handleChange}
                            className="h-4 w-4 text-[#147190] focus:ring-[#148190] border-gray-300"
                          />
                        </td>
                        <td className="px-4 py-2 whitespace-nowrap">
                          <input
                            type="radio"
                            name="fepilepsy"
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
                            value="yes"
                            onChange={handleChange}
                            className="h-4 w-4 text-[#147190] focus:ring-[#148190] border-gray-300"
                          />
                        </td>
                        <td className="px-4 py-2 whitespace-nowrap">
                          <input
                            type="radio"
                            name="fhepatitis"
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
                            value="yes"
                            onChange={handleChange}
                            className="h-4 w-4 text-[#147190] focus:ring-[#148190] border-gray-300"
                          />
                        </td>
                        <td className="px-4 py-2 whitespace-nowrap">
                          <input
                            type="radio"
                            name="fhyperlipidemia"
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
                            value="yes"
                            onChange={handleChange}
                            className="h-4 w-4 text-[#147190] focus:ring-[#148190] border-gray-300"
                          />
                        </td>
                        <td className="px-4 py-2 whitespace-nowrap">
                          <input
                            type="radio"
                            name="fhypertension"
                            value="no"
                            onChange={handleChange}
                            className="h-4 w-4 text-[#147190] focus:ring-[#148190] border-gray-300"
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
                            value="yes"
                            onChange={handleChange}
                            className="h-4 w-4 text-[#147190] focus:ring-[#148190] border-gray-300"
                          />
                        </td>
                        <td className="px-4 py-2 whitespace-nowrap">
                          <input
                            type="radio"
                            name="fpepticUlcer"
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
                            value="yes"
                            onChange={handleChange}
                            className="h-4 w-4 text-[#147190] focus:ring-[#148190] border-gray-300"
                          />
                        </td>
                        <td className="px-4 py-2 whitespace-nowrap">
                          <input
                            type="radio"
                            name="fpneumonia"
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
                            value="yes"
                            onChange={handleChange}
                            className="h-4 w-4 text-[#147190] focus:ring-[#148190] border-gray-300"
                          />
                        </td>
                        <td className="px-4 py-2 whitespace-nowrap">
                          <input
                            type="radio"
                            name="fthyroid"
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
                            value="yes"
                            onChange={handleChange}
                            className="h-4 w-4 text-[#147190] focus:ring-[#148190] border-gray-300"
                          />
                        </td>
                        <td className="px-4 py-2 whitespace-nowrap">
                          <input
                            type="radio"
                            name="fpulmonaryTb"
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
                            value="yes"
                            onChange={handleChange}
                            className="h-4 w-4 text-[#147190] focus:ring-[#148190] border-gray-300"
                          />
                        </td>
                        <td className="px-4 py-2 whitespace-nowrap">
                          <input
                            type="radio"
                            name="fextrapulmonaryTb"
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
                            value="yes"
                            onChange={handleChange}
                            className="h-4 w-4 text-[#147190] focus:ring-[#148190] border-gray-300"
                          />
                        </td>
                        <td className="px-4 py-2 whitespace-nowrap">
                          <input
                            type="radio"
                            name="futi"
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
                            value="yes"
                            onChange={handleChange}
                            className="h-4 w-4 text-[#147190] focus:ring-[#148190] border-gray-300"
                          />
                        </td>
                        <td className="px-4 py-2 whitespace-nowrap">
                          <input
                            type="radio"
                            name="fmentalIllness"
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
                            value="yes"
                            onChange={handleChange}
                            className="h-4 w-4 text-[#147190] focus:ring-[#148190] border-gray-300"
                          />
                        </td>
                        <td className="px-4 py-2 whitespace-nowrap">
                          <input
                            type="radio"
                            name="fothers"
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
                            value="yes"
                            onChange={handleChange}
                            className="h-4 w-4 text-[#147190] focus:ring-[#148190] border-gray-300"
                          />
                        </td>
                        <td className="px-4 py-2 whitespace-nowrap">
                          <input
                            type="radio"
                            name="fnone"
                            value="no"
                            onChange={handleChange}
                            className="h-4 w-4 text-[#147190] focus:ring-[#148190] border-gray-300"
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
                            placeholder="e.g. 120/80"
                            onChange={handleChange}
                            className="w-full px-3 py-1 border border-gray-300 rounded-md shadow-sm text-black focus:outline-none focus:ring-[#147190] focus:border-[#148190] text-sm"
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
                            value="yes"
                            onChange={handleChange}
                            className="h-4 w-4 text-[#147190] focus:ring-[#148190] border-gray-300"
                          />
                        </td>
                        <td className="px-4 py-2 whitespace-nowrap">
                          <input
                            type="radio"
                            name="smoking"
                            value="no"
                            onChange={handleChange}
                            className="h-4 w-4 text-[#147190] focus:ring-[#148190] border-gray-300"
                          />
                        </td>
                        <td className="px-4 py-2 whitespace-nowrap">
                          <input
                            type="radio"
                            name="smoking"
                            value="quit"
                            onChange={handleChange}
                            className="h-4 w-4 text-[#147190] focus:ring-[#148190] border-gray-300"
                          />
                        </td>
                        <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700">
                          <div className="flex items-center">
                            <span>No. of Packs per year:</span>
                            <input
                              type="number"
                              name="packsPerYear"
                              onChange={handleChange}
                              className="ml-2 w-20 px-2 py-1 border border-gray-300 text-black rounded-md shadow-sm focus:outline-none focus:ring-[#147190] focus:border-[#148190] text-sm"
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
                            value="yes"
                            onChange={handleChange}
                            className="h-4 w-4 text-[#147190] focus:ring-[#148190] border-gray-300"
                          />
                        </td>
                        <td className="px-4 py-2 whitespace-nowrap">
                          <input
                            type="radio"
                            name="alcohol"
                            value="no"
                            onChange={handleChange}
                            className="h-4 w-4 text-[#147190] focus:ring-[#148190] border-gray-300"
                          />
                        </td>
                        <td className="px-4 py-2 whitespace-nowrap"></td>
                        <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700">
                          <div className="flex items-center">
                            <span>No. of Bottles per day:</span>
                            <input
                              type="number"
                              name="bottlesPerDay"
                              onChange={handleChange}
                              className="ml-2 w-20 px-2 py-1 border border-gray-300 text-black rounded-md shadow-sm focus:outline-none focus:ring-[#147190] focus:border-[#148190] text-sm"
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
                            value="yes"
                            onChange={handleChange}
                            className="h-4 w-4 text-[#147190] focus:ring-[#148190] border-gray-300"
                          />
                        </td>
                        <td className="px-4 py-2 whitespace-nowrap">
                          <input
                            type="radio"
                            name="illicitDrugs"
                            value="no"
                            onChange={handleChange}
                            className="h-4 w-4 text-[#147190] focus:ring-[#148190] border-gray-300"
                          />
                        </td>
                        <td className="px-4 py-2 whitespace-nowrap"></td>
                        <td className="px-4 py-2 whitespace-nowrap">
                          <input
                            type="text"
                            name="illicitDrugsDetails"
                            placeholder="Specify drug use"
                            onChange={handleChange}
                            className="w-full px-3 py-1 border border-gray-300 rounded-md shadow-sm text-black focus:outline-none focus:ring-[#147190] focus:border-[#148190] text-sm"
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
                            value="yes"
                            onChange={handleChange}
                            className="h-4 w-4 text-[#147190] focus:ring-[#148190] border-gray-300"
                          />
                        </td>
                        <td className="px-4 py-2 whitespace-nowrap">
                          <input
                            type="radio"
                            name="sexualHistory"
                            value="no"
                            onChange={handleChange}
                            className="h-4 w-4 text-[#147190] focus:ring-[#148190] border-gray-300"
                          />
                        </td>
                        <td className="px-4 py-2 whitespace-nowrap"></td>
                        <td className="px-4 py-2 whitespace-nowrap">
                          <input
                            type="text"
                            name="sexualHistoryDetails"
                            placeholder="Additional details"
                            onChange={handleChange}
                            className="w-full px-3 py-1 border border-gray-300 rounded-md shadow-sm text-black focus:outline-none focus:ring-[#147190] focus:border-[#148190] text-sm"
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
                            onChange={handleChange}
                            className="w-full px-3 py-1 border border-gray-300 rounded-md shadow-sm text-black focus:outline-none focus:ring-[#147190] focus:border-[#148190] text-sm"
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
                            onChange={handleChange}
                            className="w-full px-3 py-1 border border-gray-300 rounded-md shadow-sm text-black focus:outline-none focus:ring-[#147190] focus:border-[#148190] text-sm"
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
                                value="yes"
                                onChange={handleChange}
                                className="h-4 w-4 text-[#147190] focus:ring-[#148190] border-gray-300"
                              />
                              <span className="ml-2 text-sm text-gray-700">
                                Yes
                              </span>
                            </label>
                            <label className="inline-flex items-center">
                              <input
                                type="radio"
                                name="menopause"
                                value="no"
                                onChange={handleChange}
                                className="h-4 w-4 text-[#147190] focus:ring-[#148190] border-gray-300"
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
                            onChange={handleChange}
                            className="w-full px-3 py-1 border border-gray-300 rounded-md shadow-sm text-black focus:outline-none focus:ring-[#147190] focus:border-[#148190] text-sm"
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
                            onChange={handleChange}
                            className="w-full px-3 py-1 border border-gray-300 rounded-md shadow-sm text-black focus:outline-none focus:ring-[#147190] focus:border-[#148190] text-sm"
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
                            onChange={handleChange}
                            className="w-full px-3 py-1 border border-gray-300 rounded-md shadow-sm text-black focus:outline-none focus:ring-[#147190] focus:border-[#148190] text-sm"
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
                            onChange={handleChange}
                            className="w-full px-3 py-1 border border-gray-300 rounded-md shadow-sm text-black focus:outline-none focus:ring-[#147190] focus:border-[#148190] text-sm"
                          />
                        </td>
                        <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700 font-medium">
                          Full Term
                        </td>
                        <td className="px-4 py-2 whitespace-nowrap">
                          <input
                            type="number"
                            name="fullTerm"
                            onChange={handleChange}
                            className="w-full px-3 py-1 border border-gray-300 rounded-md shadow-sm text-black focus:outline-none focus:ring-[#147190] focus:border-[#148190] text-sm"
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
                            onChange={handleChange}
                            className="w-full px-3 py-1 border border-gray-300 rounded-md shadow-sm text-black focus:outline-none focus:ring-[#147190] focus:border-[#148190] text-sm"
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
                            onChange={handleChange}
                            className="w-full px-3 py-1 border border-gray-300 rounded-md shadow-sm text-black focus:outline-none focus:ring-[#147190] focus:border-[#148190] text-sm"
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
                              min="0"
                              onChange={handleChange}
                              className="w-20 px-3 py-1 border border-gray-300 rounded-md shadow-sm text-black focus:outline-none focus:ring-[#147190] focus:border-[#148190] text-sm"
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
                            onChange={handleChange}
                            className="w-full px-3 py-1 border border-gray-300 rounded-md shadow-sm text-black focus:outline-none focus:ring-[#147190] focus:border-[#148190] text-sm"
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
                            min="0"
                            onChange={handleChange}
                            className="w-20 px-3 py-1 border border-gray-300 rounded-md shadow-sm text-black focus:outline-none focus:ring-[#147190] focus:border-[#148190] text-sm"
                          />
                        </td>
                        <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700 font-medium">
                          Living
                        </td>
                        <td className="px-4 py-2 whitespace-nowrap">
                          <input
                            type="number"
                            name="living"
                            onChange={handleChange}
                            className="w-full px-3 py-1 border border-gray-300 rounded-md shadow-sm text-black focus:outline-none focus:ring-[#147190] focus:border-[#148190] text-sm"
                            min="0"
                          />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-[#147190] mb-4 border-b border-blue-200 pb-2">
                Account Information
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter email address"
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-black focus:outline-none focus:ring-[#147190] focus:border-[#148190]"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Password <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="password"
                    name="password"
                    placeholder="Create password"
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-black focus:outline-none focus:ring-[#147190] focus:border-[#148190]"
                    required
                    minLength="8"
                  />
                  <p className="mt-1 text-xs text-gray-500">
                    Password must be at least 8 characters
                  </p>
                </div>
              </div>
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                className="px-6 py-3 bg-[#147190] text-white font-medium rounded-md shadow-sm text-black hover:bg-[#02536e] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
              >
                Submit Registration
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Add;
