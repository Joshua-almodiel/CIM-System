import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Add = () => {
  const [formData, setFormData] = useState({
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
    dateComplaints: "",
    chiefComplaints: "",
    bp: "",
    hr: "",
    o2sat: "",
    wt: "",
    temp: "",
    rr: "",
    ht: "",
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
    <div className="p-6 bg-gray-900 text-white">
      <h2 className="text-2xl font-semibold mb-6">
        PhilHealth Konsulta Registration Form
      </h2>
      <form
        className="bg-gray-800 p-6 rounded-lg shadow-md"
        onSubmit={handleSubmit}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label htmlFor="date" className="block text-sm font-medium mb-2">
              date
            </label>
            <input
              type="date"
              name="date"
              onChange={handleChange}
              className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500 text-white"
              required
            />
          </div>

          <div>
            <label htmlFor="kpp" className="block text-sm font-medium mb-2">
              First Choice KPP: NASIPIT RURAL HEALTH UNIT and Family PLANNING
            </label>
            <select
              name="kpp"
              onChange={handleChange}
              className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500 text-white"
              required
            >
              <option value="">Select</option>
              <option value="regKonsulta">
                Register to a Konsulta Package Provider
              </option>
              <option value="regDeclared">
                Registered all my declared minor depentdents
              </option>
            </select>
          </div>

          <div>
            <label
              htmlFor="dependents"
              className="block text-sm font-medium mb-2"
            >
              How many dependents?
            </label>
            <input
              type="text"
              name="dependents"
              onChange={handleChange}
              className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500 text-white"
              required
            />
          </div>

          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2">
              Nickname
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter Nickname"
              onChange={handleChange}
              className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500 text-white"
            />
          </div>

          <div>
            <label
              htmlFor="familyNumber"
              className="block text-sm font-medium mb-2"
            >
              Family Number
            </label>
            <input
              type="number"
              name="familyNumber"
              placeholder="Enter Family Number"
              onChange={handleChange}
              className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500 text-white"
              required
            />
          </div>

          <div>
            <label
              htmlFor="lastName"
              className="block text-sm font-medium mb-2"
            >
              Last Name
            </label>
            <input
              type="text"
              name="lastName"
              placeholder="Enter Last Name"
              onChange={handleChange}
              className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500 text-white"
              required
            />
          </div>

          <div>
            <label
              htmlFor="firstName"
              className="block text-sm font-medium mb-2"
            >
              First Name
            </label>
            <input
              type="text"
              name="firstName"
              placeholder="Enter First Name"
              onChange={handleChange}
              className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500 text-white"
              required
            />
          </div>

          <div>
            <label
              htmlFor="middleName"
              className="block text-sm font-medium mb-2"
            >
              Middle Name
            </label>
            <input
              type="text"
              name="middleName"
              onChange={handleChange}
              className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500 text-white"
              required
            />
          </div>

          <div>
            <label htmlFor="contact" className="block text-sm font-medium mb-2">
              Contact Number
            </label>
            <input
              type="number"
              name="contact"
              onChange={handleChange}
              className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500 text-white"
              required
            />
          </div>

          <div>
            <label
              htmlFor="phNumber"
              className="block text-sm font-medium mb-2"
            >
              Philhealth Number
            </label>
            <input
              type="number"
              name="phNumber"
              onChange={handleChange}
              className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500 text-white"
              required
            />
          </div>

          <div>
            <label
              htmlFor="clientType"
              className="block text-sm font-medium mb-2"
            >
              Client Type
            </label>
            <select
              name="clientType"
              onChange={handleChange}
              className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500 text-white"
              required
            >
              <option value="">Select Client Type</option>
              <option value="member">Member</option>
              <option value="dependent">Dependent</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="ifMember"
              className="block text-sm font-medium mb-2"
            >
              If Member
            </label>
            <select
              name="ifMember"
              onChange={handleChange}
              className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500 text-white"
              required
            >
              <option value="">Select If Member</option>
              <option value="formal">Formal</option>
              <option value="informal">Informal</option>
            </select>
          </div>

          <div>
            <label htmlFor="sex" className="block text-sm font-medium mb-2">
              sex
            </label>
            <select
              name="sex"
              onChange={handleChange}
              className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500 text-white"
              required
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="birthday"
              className="block text-sm font-medium mb-2"
            >
              Birthday
            </label>
            <input
              type="date"
              name="birthday"
              onChange={handleChange}
              className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500 text-white"
              required
            />
          </div>

          <div>
            <label htmlFor="age" className="block text-sm font-medium mb-2">
              Age
            </label>
            <input
              type="number"
              name="age"
              onChange={handleChange}
              className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500 text-white"
              required
            />
          </div>

          <div>
            <label
              htmlFor="religion"
              className="block text-sm font-medium mb-2"
            >
              Religion
            </label>
            <input
              type="text"
              name="religion"
              onChange={handleChange}
              className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500 text-white"
              required
            />
          </div>

          <div>
            <label htmlFor="address" className="block text-sm font-medium mb-2">
              Address
            </label>
            <input
              type="text"
              name="address"
              onChange={handleChange}
              className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500 text-white"
              required
            />
          </div>

          <div>
            <label
              htmlFor="civilStatus"
              className="block text-sm font-medium mb-2"
            >
              Civil Status
            </label>
            <select
              name="civilStatus"
              onChange={handleChange}
              className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500 text-white"
              required
            >
              <option value="">Select Status</option>
              <option value="single">Single</option>
              <option value="widowed">Widow/er</option>
              <option value="separated">Separated</option>
              <option value="married">Married</option>
              <option value="annulled">Annulled</option>
              <option value="engaged">Co habitation</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="maidenName"
              className="block text-sm font-medium mb-2"
            >
              [For Married Woman] Maiden Name
            </label>
            <input
              type="text"
              name="maidenName"
              onChange={handleChange}
              className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500 text-white"
            />
          </div>

          <div>
            <label
              htmlFor="spouseName"
              className="block text-sm font-medium mb-2"
            >
              [If Married] Spouse Name
            </label>
            <input
              type="text"
              name="spouseName"
              onChange={handleChange}
              className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500 text-white"
            />
          </div>

          <div>
            <label
              htmlFor="partnerName"
              className="block text-sm font-medium mb-2"
            >
              [If Living in] Partner's Name
            </label>
            <input
              type="text"
              name="partnerName"
              onChange={handleChange}
              className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500 text-white"
            />
          </div>

          <div>
            <label
              htmlFor="occupation"
              className="block text-sm font-medium mb-2"
            >
              Occupation
            </label>
            <input
              type="text"
              name="occupation"
              onChange={handleChange}
              className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500 text-white"
            />
          </div>

          <div>
            <label
              htmlFor="educAttainment"
              className="block text-sm font-medium mb-2"
            >
              Educational Attainment
            </label>
            <select
              name="educAttainment"
              onChange={handleChange}
              className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500 text-white"
              required
            >
              <option value="">Select Attainment</option>
              <option value="noFormalEduc">No Formal Education</option>
              <option value="elem">Elementary</option>
              <option value="hs">High School</option>
              <option value="college">College</option>
              <option value="voca">Vocational</option>
              <option value="postGrad">Post Graduate</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="empStatus"
              className="block text-sm font-medium mb-2"
            >
              Employment Status
            </label>
            <select
              name="empStatus"
              onChange={handleChange}
              className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500 text-white"
              required
            >
              <option value="">Select Employment Status</option>
              <option value="student">Student</option>
              <option value="employed">Employed</option>
              <option value="unemployed">Unemployed</option>
              <option value="retired">Retired</option>
            </select>
          </div>

          <div>
            <h2>Past Medical History</h2>
            <table>
              <tr>
                <th>Condition</th>
                <th>Yes</th>
                <th>No</th>
              </tr>
              <tr>
                <td>Allergy</td>
                <td>
                  <input
                    type="radio"
                    name="pallergy"
                    value="yes"
                    onChange={handleChange}
                  />
                </td>
                <td>
                  <input
                    type="radio"
                    name="pallergy"
                    value="no"
                    onChange={handleChange}
                  />
                </td>
              </tr>
              <tr>
                <td>Asthma</td>
                <td>
                  <input
                    type="radio"
                    name="pasthma"
                    value="yes"
                    onChange={handleChange}
                  />
                </td>
                <td>
                  <input
                    type="radio"
                    name="pasthma"
                    value="no"
                    onChange={handleChange}
                  />
                </td>
              </tr>
              <tr>
                <td>&emsp;Specify Allergy:</td>
                <td colspan="2">
                  <input
                    type="text"
                    name="pspecifyAllergy"
                    onChange={handleChange}
                  />
                </td>
              </tr>
              <tr>
                <td>Cancer</td>
                <td>
                  <input
                    type="radio"
                    name="pcancer"
                    value="yes"
                    onChange={handleChange}
                  />
                </td>
                <td>
                  <input
                    type="radio"
                    name="pcancer"
                    value="no"
                    onChange={handleChange}
                  />
                </td>
              </tr>
              <tr>
                <td>&emsp;Specify Organ with Cancer:</td>
                <td colspan="2">
                  <input
                    type="text"
                    name="porganCancer"
                    onChange={handleChange}
                  />
                </td>
              </tr>
              <tr>
                <td>Cerebrovascular Disease</td>
                <td>
                  <input
                    type="radio"
                    name="pcerebrovascular"
                    value="yes"
                    onChange={handleChange}
                  />
                </td>
                <td>
                  <input
                    type="radio"
                    name="pcerebrovascular"
                    value="no"
                    onChange={handleChange}
                  />
                </td>
              </tr>
              <tr>
                <td>Coronary Artery Disease</td>
                <td>
                  <input
                    type="radio"
                    name="pcoronaryArtery"
                    value="yes"
                    onChange={handleChange}
                  />
                </td>
                <td>
                  <input
                    type="radio"
                    name="pcoronaryArtery"
                    value="no"
                    onChange={handleChange}
                  />
                </td>
              </tr>
              <tr>
                <td>Diabetes Mellitus</td>
                <td>
                  <input
                    type="radio"
                    name="pdiabetes"
                    value="yes"
                    onChange={handleChange}
                  />
                </td>
                <td>
                  <input
                    type="radio"
                    name="pdiabetes"
                    value="no"
                    onChange={handleChange}
                  />
                </td>
              </tr>
              <tr>
                <td>Emphysema</td>
                <td>
                  <input
                    type="radio"
                    name="pemphysema"
                    value="yes"
                    onChange={handleChange}
                  />
                </td>
                <td>
                  <input
                    type="radio"
                    name="pemphysema"
                    value="no"
                    onChange={handleChange}
                  />
                </td>
              </tr>
              <tr>
                <td>Epilepsy / Seizure Disorder</td>
                <td>
                  <input
                    type="radio"
                    name="pepilepsy"
                    value="yes"
                    onChange={handleChange}
                  />
                </td>
                <td>
                  <input
                    type="radio"
                    name="pepilepsy"
                    value="no"
                    onChange={handleChange}
                  />
                </td>
              </tr>
              <tr>
                <td>Hepatitis</td>
                <td>
                  <input
                    type="radio"
                    name="phepatitis"
                    value="yes"
                    onChange={handleChange}
                  />
                </td>
                <td>
                  <input
                    type="radio"
                    name="phepatitis"
                    value="no"
                    onChange={handleChange}
                  />
                </td>
              </tr>
              <tr>
                <td>Hyperlipidemia</td>
                <td>
                  <input
                    type="radio"
                    name="phyperlipidemia"
                    value="yes"
                    onChange={handleChange}
                  />
                </td>
                <td>
                  <input
                    type="radio"
                    name="phyperlipidemia"
                    value="no"
                    onChange={handleChange}
                  />
                </td>
              </tr>
              <tr>
                <td>Hypertension</td>
                <td>
                  <input
                    type="radio"
                    name="phypertension"
                    value="yes"
                    onChange={handleChange}
                  />
                </td>
                <td>
                  <input
                    type="radio"
                    name="phypertension"
                    value="no"
                    onChange={handleChange}
                  />
                </td>
              </tr>
              <tr>
                <td>Peptic Ulcer</td>
                <td>
                  <input
                    type="radio"
                    name="ppepticUlcer"
                    value="yes"
                    onChange={handleChange}
                  />
                </td>
                <td>
                  <input
                    type="radio"
                    name="ppepticUlcer"
                    value="no"
                    onChange={handleChange}
                  />
                </td>
              </tr>
              <tr>
                <td>Pneumonia</td>
                <td>
                  <input
                    type="radio"
                    name="ppneumonia"
                    value="yes"
                    onChange={handleChange}
                  />
                </td>
                <td>
                  <input
                    type="radio"
                    name="ppneumonia"
                    value="no"
                    onChange={handleChange}
                  />
                </td>
              </tr>
              <tr>
                <td>Thyroid Disease</td>
                <td>
                  <input
                    type="radio"
                    name="pthyroid"
                    value="yes"
                    onChange={handleChange}
                  />
                </td>
                <td>
                  <input
                    type="radio"
                    name="pthyroid"
                    value="no"
                    onChange={handleChange}
                  />
                </td>
              </tr>
              <tr>
                <td>Pulmonary Tuberculosis</td>
                <td>
                  <input
                    type="radio"
                    name="ppulmonaryTb"
                    value="yes"
                    onChange={handleChange}
                  />
                </td>
                <td>
                  <input
                    type="radio"
                    name="ppulmonaryTb"
                    value="no"
                    onChange={handleChange}
                  />
                </td>
              </tr>
              <tr>
                <td>&emsp;Specify Pulmonary Tuberculosis Category:</td>
                <td colspan="2">
                  <input
                    type="text"
                    name="ppulmonaryTbCategory"
                    onChange={handleChange}
                  />
                </td>
              </tr>
              <tr>
                <td>Extrapulmonary Tuberculosis</td>
                <td>
                  <input
                    type="radio"
                    name="pextrapulmonaryTb"
                    value="yes"
                    onChange={handleChange}
                  />
                </td>
                <td>
                  <input
                    type="radio"
                    name="pextrapulmonaryTb"
                    value="no"
                    onChange={handleChange}
                  />
                </td>
              </tr>
              <tr>
                <td>&emsp;Specify Extrapulmonary Tuberculosis Category:</td>
                <td colspan="2">
                  <input
                    type="text"
                    name="pextrapulmonaryTbCategory"
                    onChange={handleChange}
                  />
                </td>
              </tr>
              <tr>
                <td>Urinary Tract Infection</td>
                <td>
                  <input
                    type="radio"
                    name="puti"
                    value="yes"
                    onChange={handleChange}
                  />
                </td>
                <td>
                  <input
                    type="radio"
                    name="puti"
                    value="no"
                    onChange={handleChange}
                  />
                </td>
              </tr>
              <tr>
                <td>Mental Illness</td>
                <td>
                  <input
                    type="radio"
                    name="pmentalIllness"
                    value="yes"
                    onChange={handleChange}
                  />
                </td>
                <td>
                  <input
                    type="radio"
                    name="pmentalIllness"
                    value="no"
                    onChange={handleChange}
                  />
                </td>
              </tr>
              <tr>
                <td>Others (please specify):</td>
                <td colspan="2">
                  <input type="text" name="pothers" onChange={handleChange} />
                </td>
              </tr>
              <tr>
                <td>None</td>
                <td>
                  <input
                    type="radio"
                    name="pnone"
                    value="yes"
                    onChange={handleChange}
                  />
                </td>
                <td>
                  <input
                    type="radio"
                    name="pnone"
                    value="no"
                    onChange={handleChange}
                  />
                </td>
              </tr>
              <tr>
                <td>Highest Blood Pressure:</td>
                <td colspan="2">
                  <input
                    type="text"
                    name="pbloodPressure"
                    onChange={handleChange}
                  />
                </td>
              </tr>
            </table>
          </div>

          <div>
            <h2>Family History</h2>
            <table>
              <tr>
                <th>Condition</th>
                <th>Yes</th>
                <th>No</th>
              </tr>
              <tr>
                <td>Allergy</td>
                <td>
                  <input
                    type="radio"
                    name="fallergy"
                    value="yes"
                    onChange={handleChange}
                  />
                </td>
                <td>
                  <input
                    type="radio"
                    name="fallergy"
                    value="no"
                    onChange={handleChange}
                  />
                </td>
              </tr>
              <tr>
                <td>Asthma</td>
                <td>
                  <input
                    type="radio"
                    name="fasthma"
                    value="yes"
                    onChange={handleChange}
                  />
                </td>
                <td>
                  <input
                    type="radio"
                    name="fasthma"
                    value="no"
                    onChange={handleChange}
                  />
                </td>
              </tr>
              <tr>
                <td>&emsp;Specify Allergy:</td>
                <td colspan="2">
                  <input
                    type="text"
                    name="fspecifyAllergy"
                    onChange={handleChange}
                  />
                </td>
              </tr>
              <tr>
                <td>Cancer</td>
                <td>
                  <input
                    type="radio"
                    name="fcancer"
                    value="yes"
                    onChange={handleChange}
                  />
                </td>
                <td>
                  <input
                    type="radio"
                    name="fcancer"
                    value="no"
                    onChange={handleChange}
                  />
                </td>
              </tr>
              <tr>
                <td>&emsp;Specify Organ with Cancer:</td>
                <td colspan="2">
                  <input
                    type="text"
                    name="forganCancer"
                    onChange={handleChange}
                  />
                </td>
              </tr>
              <tr>
                <td>Cerebrovascular Disease</td>
                <td>
                  <input
                    type="radio"
                    name="fcerebrovascular"
                    value="yes"
                    onChange={handleChange}
                  />
                </td>
                <td>
                  <input
                    type="radio"
                    name="fcerebrovascular"
                    value="no"
                    onChange={handleChange}
                  />
                </td>
              </tr>
              <tr>
                <td>Coronary Artery Disease</td>
                <td>
                  <input
                    type="radio"
                    name="fcoronaryArtery"
                    value="yes"
                    onChange={handleChange}
                  />
                </td>
                <td>
                  <input
                    type="radio"
                    name="fcoronaryArtery"
                    value="no"
                    onChange={handleChange}
                  />
                </td>
              </tr>
              <tr>
                <td>Diabetes Mellitus</td>
                <td>
                  <input
                    type="radio"
                    name="fdiabetes"
                    value="yes"
                    onChange={handleChange}
                  />
                </td>
                <td>
                  <input
                    type="radio"
                    name="fdiabetes"
                    value="no"
                    onChange={handleChange}
                  />
                </td>
              </tr>
              <tr>
                <td>Emphysema</td>
                <td>
                  <input
                    type="radio"
                    name="femphysema"
                    value="yes"
                    onChange={handleChange}
                  />
                </td>
                <td>
                  <input
                    type="radio"
                    name="femphysema"
                    value="no"
                    onChange={handleChange}
                  />
                </td>
              </tr>
              <tr>
                <td>Epilepsy / Seizure Disorder</td>
                <td>
                  <input
                    type="radio"
                    name="fepilepsy"
                    value="yes"
                    onChange={handleChange}
                  />
                </td>
                <td>
                  <input
                    type="radio"
                    name="fepilepsy"
                    value="no"
                    onChange={handleChange}
                  />
                </td>
              </tr>
              <tr>
                <td>Hepatitis</td>
                <td>
                  <input
                    type="radio"
                    name="fhepatitis"
                    value="yes"
                    onChange={handleChange}
                  />
                </td>
                <td>
                  <input
                    type="radio"
                    name="fhepatitis"
                    value="no"
                    onChange={handleChange}
                  />
                </td>
              </tr>
              <tr>
                <td>Hyperlipidemia</td>
                <td>
                  <input
                    type="radio"
                    name="fhyperlipidemia"
                    value="yes"
                    onChange={handleChange}
                  />
                </td>
                <td>
                  <input
                    type="radio"
                    name="fhyperlipidemia"
                    value="no"
                    onChange={handleChange}
                  />
                </td>
              </tr>
              <tr>
                <td>Hypertension</td>
                <td>
                  <input
                    type="radio"
                    name="fhypertension"
                    value="yes"
                    onChange={handleChange}
                  />
                </td>
                <td>
                  <input
                    type="radio"
                    name="fhypertension"
                    value="no"
                    onChange={handleChange}
                  />
                </td>
              </tr>
              <tr>
                <td>Peptic Ulcer</td>
                <td>
                  <input
                    type="radio"
                    name="fpepticUlcer"
                    value="yes"
                    onChange={handleChange}
                  />
                </td>
                <td>
                  <input
                    type="radio"
                    name="fpepticUlcer"
                    value="no"
                    onChange={handleChange}
                  />
                </td>
              </tr>
              <tr>
                <td>Pneumonia</td>
                <td>
                  <input
                    type="radio"
                    name="fpneumonia"
                    value="yes"
                    onChange={handleChange}
                  />
                </td>
                <td>
                  <input
                    type="radio"
                    name="fpneumonia"
                    value="no"
                    onChange={handleChange}
                  />
                </td>
              </tr>
              <tr>
                <td>Thyroid Disease</td>
                <td>
                  <input
                    type="radio"
                    name="fthyroid"
                    value="yes"
                    onChange={handleChange}
                  />
                </td>
                <td>
                  <input
                    type="radio"
                    name="fthyroid"
                    value="no"
                    onChange={handleChange}
                  />
                </td>
              </tr>
              <tr>
                <td>Pulmonary Tuberculosis</td>
                <td>
                  <input
                    type="radio"
                    name="fpulmonaryTb"
                    value="yes"
                    onChange={handleChange}
                  />
                </td>
                <td>
                  <input
                    type="radio"
                    name="fpulmonaryTb"
                    value="no"
                    onChange={handleChange}
                  />
                </td>
              </tr>
              <tr>
                <td>&emsp;Specify Pulmonary Tuberculosis Category:</td>
                <td colspan="2">
                  <input
                    type="text"
                    name="fpulmonaryTbCategory"
                    onChange={handleChange}
                  />
                </td>
              </tr>
              <tr>
                <td>Extrapulmonary Tuberculosis</td>
                <td>
                  <input
                    type="radio"
                    name="fextrapulmonaryTb"
                    value="yes"
                    onChange={handleChange}
                  />
                </td>
                <td>
                  <input
                    type="radio"
                    name="fextrapulmonaryTb"
                    value="no"
                    onChange={handleChange}
                  />
                </td>
              </tr>
              <tr>
                <td>&emsp;Specify Extrapulmonary Tuberculosis Category:</td>
                <td colspan="2">
                  <input
                    type="text"
                    name="fextrapulmonaryTbCategory"
                    onChange={handleChange}
                  />
                </td>
              </tr>
              <tr>
                <td>Urinary Tract Infection</td>
                <td>
                  <input
                    type="radio"
                    name="futi"
                    value="yes"
                    onChange={handleChange}
                  />
                </td>
                <td>
                  <input
                    type="radio"
                    name="futi"
                    value="no"
                    onChange={handleChange}
                  />
                </td>
              </tr>
              <tr>
                <td>Mental Illness</td>
                <td>
                  <input
                    type="radio"
                    name="fmentalIllness"
                    value="yes"
                    onChange={handleChange}
                  />
                </td>
                <td>
                  <input
                    type="radio"
                    name="fmentalIllness"
                    value="no"
                    onChange={handleChange}
                  />
                </td>
              </tr>
              <tr>
                <td>Others (please specify):</td>
                <td colspan="2">
                  <input type="text" name="fothers" onChange={handleChange} />
                </td>
              </tr>
              <tr>
                <td>None</td>
                <td>
                  <input
                    type="radio"
                    name="fnone"
                    value="yes"
                    onChange={handleChange}
                  />
                </td>
                <td>
                  <input
                    type="radio"
                    name="fnone"
                    value="no"
                    onChange={handleChange}
                  />
                </td>
              </tr>
              <tr>
                <td>Highest Blood Pressure:</td>
                <td colspan="2">
                  <input
                    type="text"
                    name="fbloodPressure"
                    onChange={handleChange}
                  />
                </td>
              </tr>
            </table>
          </div>

          <div>
            <h2>Personal/Social History</h2>
            <table>
              <tr>
                <th>Category</th>
                <th>Yes</th>
                <th>No</th>
                <th>Quit</th>
                <th>Additional Information</th>
              </tr>
              <tr>
                <td>Smoking</td>
                <td>
                  <input
                    type="radio"
                    name="smoking"
                    value="yes"
                    onChange={handleChange}
                  />
                </td>
                <td>
                  <input
                    type="radio"
                    name="smoking"
                    value="no"
                    onChange={handleChange}
                  />
                </td>
                <td>
                  <input
                    type="radio"
                    name="smoking"
                    value="quit"
                    onChange={handleChange}
                  />
                </td>
                <td>
                  No. of Packs per year:{" "}
                  <input
                    type="text"
                    name="packsPerYear"
                    onChange={handleChange}
                  />
                </td>
              </tr>
              <tr>
                <td>Alcohol</td>
                <td>
                  <input
                    type="radio"
                    name="alcohol"
                    value="yes"
                    onChange={handleChange}
                  />
                </td>
                <td>
                  <input
                    type="radio"
                    name="alcohol"
                    value="no"
                    onChange={handleChange}
                  />
                </td>
                <td></td>
                <td>
                  No. of Bottles per day:{" "}
                  <input
                    type="text"
                    name="bottlesPerDay"
                    onChange={handleChange}
                  />
                </td>
              </tr>
              <tr>
                <td>Illicit Drugs</td>
                <td>
                  <input
                    type="radio"
                    name="illicitDrugs"
                    value="yes"
                    onChange={handleChange}
                  />
                </td>
                <td>
                  <input
                    type="radio"
                    name="illicitDrugs"
                    value="no"
                    onChange={handleChange}
                  />
                </td>
                <td></td>
                <td>
                  <input
                    type="text"
                    name="illicitDrugsDetails"
                    placeholder="Specify drug use"
                    onChange={handleChange}
                  />
                </td>
              </tr>
              <tr>
                <td>Sexual History Screening</td>
                <td>
                  <input
                    type="radio"
                    name="sexualHistory"
                    value="yes"
                    onChange={handleChange}
                  />
                </td>
                <td>
                  <input
                    type="radio"
                    name="sexualHistory"
                    value="no"
                    onChange={handleChange}
                  />
                </td>
                <td></td>
                <td>
                  <input
                    type="text"
                    name="sexualHistoryDetails"
                    placeholder="Additional details"
                    onChange={handleChange}
                  />
                </td>
              </tr>
            </table>
          </div>

          <div>
            <h1>Obstetrics/Menstrual History</h1>

            <table>
              <tr>
                <td>
                  <strong>Menarche</strong>
                  <input type="text" name="menarche" onChange={handleChange} />
                </td>
                <td>
                  <strong>Pregnancy History</strong>
                  <input
                    type="text"
                    name="pregnancyHistory"
                    onChange={handleChange}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <strong>Menopause</strong>
                  <span>
                    <input
                      type="radio"
                      id="menopauseYes"
                      name="menopause"
                      value="yes"
                      onChange={handleChange}
                    />
                    <label for="menopause">Yes</label>
                  </span>
                  <span>
                    <input
                      type="radio"
                      id="menopauseNo"
                      name="menopause"
                      value="no"
                      onChange={handleChange}
                    />
                    <label for="menopause">No</label>
                  </span>
                </td>
                <td>
                  <strong>Gravida</strong>
                  <input type="text" name="gravida" onChange={handleChange} />
                </td>
              </tr>
              <tr>
                <td>
                  <strong>Age of Menopause</strong>
                  <input
                    type="text"
                    name="ageOfMenopause"
                    onChange={handleChange}
                  />
                </td>
                <td>
                  <strong>Para</strong>
                  <input type="text" name="para" onChange={handleChange} />
                </td>
              </tr>
              <tr>
                <td>
                  <strong>LMP</strong>
                  <input type="text" name="lmp" onChange={handleChange} />
                </td>
                <td>
                  <strong>Full Term :</strong>
                  <input type="text" name="fullTerm" onChange={handleChange} />
                </td>
              </tr>
              <tr>
                <td>
                  <strong>Interval of Menstruation</strong>
                  <input
                    type="text"
                    name="intervalOfMenstruation"
                    onChange={handleChange}
                  />
                </td>
                <td>
                  <strong>Preterm</strong>
                  <input type="text" name="preterm" onChange={handleChange} />
                </td>
              </tr>
              <tr>
                <td>
                  <strong>Duration</strong>
                  <input
                    type="number"
                    name="duration"
                    min="0"
                    onChange={handleChange}
                  />{" "}
                  days
                </td>
                <td>
                  <strong>Abortion</strong>
                  <input type="text" name="abortion" onChange={handleChange} />
                </td>
              </tr>
              <tr>
                <td>
                  <strong>Pads per day</strong>
                  <input
                    type="number"
                    name="padsPerDay"
                    min="0"
                    onChange={handleChange}
                  />
                </td>
                <td>
                  <strong>Living</strong>
                  <input type="text" name="living" onChange={handleChange} />
                </td>
              </tr>
            </table>
          </div>

          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter Email"
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium mb-2"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              onChange={handleChange}
              className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500 text-white"
              required
            />
          </div>

          <div>
            <label
              htmlFor="dateComplaints"
              className="block text-sm font-medium mb-2"
            >
              Date
            </label>
            <input
              type="date"
              name="dateComplaints"
              onChange={handleChange}
              className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500 text-white"
              required
            />
          </div>

          <div>
            <label
              htmlFor="chiefComplaints"
              className="block text-sm font-medium mb-2"
            >
              Chief Complaints
            </label>
            <input
              type="text"
              name="chiefComplaints"
              onChange={handleChange}
              className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500 text-white"
              required
            />
          </div>

          <div>
            <div>
              <label for="bp">BP</label>
              <input type="text" id="bp" name="bp" onChange={handleChange} />
            </div>
            <div>
              <label for="hr">HR</label>
              <input type="text" id="hr" name="hr" onChange={handleChange} />
            </div>
            <div>
              <label for="o2sat">O2Sat</label>
              <input
                type="text"
                id="o2sat"
                name="o2sat"
                onChange={handleChange}
              />
            </div>
            <div>
              <label for="wt">Wt</label>
              <input type="text" id="wt" name="wt" onChange={handleChange} />
            </div>
          </div>
          <div>
            <div>
              <label for="temp">Temp</label>
              <input
                type="text"
                id="temp"
                name="temp"
                onChange={handleChange}
              />
            </div>
            <div>
              <label for="rr">RR</label>
              <input type="text" id="rr" name="rr" onChange={handleChange} />
            </div>
            <div>
              <label for="ht">Ht</label>
              <input type="text" id="ht" name="ht" onChange={handleChange} />
            </div>
          </div>
        </div>

        <div className="mt-6">
          <button
            type="submit"
            className="w-full px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-200"
          >
            Add Records
          </button>
        </div>
      </form>
    </div>
  );
};

export default Add;
