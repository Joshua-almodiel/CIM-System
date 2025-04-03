import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const Edit = () => {
  const [parent, setParent] = useState({
    name: '',
    familyNumber: '',
    lastName: '',
    firstName: '',
    middleName: '',
    contact: '',
    phNumber: '',
    clientType: '',
    ifMember: '',
    sex: '',
    birthday: '',
    address: '',
    civilStatus: '',
    maidenName: '',
    spouseName: '',
    partnerName: '',
    occupation: '',
    educAttainment: '',
    empStatus: '',
    date: '',
    kpp: '',
    dependents: '',
    religion: '',
    age: '',
    pallergy: '',
    pasthma: '',
    pspecifyAllergy: '',
    pcancer: '',
    porganCancer: '',
    pcerebrovascular: '',
    pcoronaryArtery: '',
    pdiabetes: '',
    pemphysema: '',
    pepilepsy: '',
    phepatitis: '',
    phyperlipidemia: '',
    phypertension: '',
    ppepticUlcer: '',
    ppneumonia: '',
    pthyroid: '',
    ppulmonaryTb: '',
    ppulmonaryTbCategory: '',
    pextrapulmonaryTb: '',
    pextrapulmonaryTbCategory: '',
    puti: '',
    pmentalIllness: '',
    pothers: '',
    pnone: '',
    pbloodPressure: '',
    fallergy: '',
    fasthma: '',
    fspecifyAllergy: '',
    fcancer: '',
    forganCancer: '',
    fcerebrovascular: '',
    fcoronaryArtery: '',
    fdiabetes: '',
    femphysema: '',
    fepilepsy: '',
    fhepatitis: '',
    fhyperlipidemia: '',
    fhypertension: '',
    fpepticUlcer: '',
    fpneumonia: '',
    fthyroid: '',
    fpulmonaryTb: '',
    fpulmonaryTbCategory: '',
    fextrapulmonaryTb: '',
    fextrapulmonaryTbCategory: '',
    futi: '',
    fmentalIllness: '',
    fothers: '',
    fnone: '',
    fbloodPressure: '',
    smoking: '',
    packsPerYear: '',
    alcohol: '',
    bottlesPerDay: '',
    illicitDrugs: '',
    illicitDrugsDetails: '',
    sexualHistory: '',
    sexualHistoryDetails: '',
    menarche: '',
    pregnancyHistory: '',
    menopause: '',
    gravida: '',
    ageOfMenopause: '',
    para: '',
    lmp: '',
    fullTerm: '',
    preTerm: '',
    abortion: '',
    living: '',
    intervalOfMenstruation: '',
    duration: '',
    padsPerDay: '',
    dateComplaints: '',
    chiefComplaints: '',
    bp: '',
    hr: '',
    o2sat: '',
    wt: '',
    temp: '',
    rr: '',
    ht: '',
  });
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const fetchParents = async () => {
      try {
        const responnse = await axios.get(
          `http://localhost:5000/api/parent/${id}`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        if (responnse.data.success) {
          const parent = responnse.data.parent;
          setParent((prev) => ({
            ...prev,
            name: parent.userId.name,
            familyNumber: parent.familyNumber,
            lastName: parent.lastName,
            firstName: parent.firstName,
            middleName: parent.middleName,
            contact: parent.contact,
            phNumber: parent.phNumber,
            clientType: parent.clientType,
            ifMember: parent.ifMember,
            sex: parent.sex,
            birthday: parent.birthday,
            address: parent.address,
            civilStatus: parent.civilStatus,
            maidenName: parent.maidenName,
            spouseName: parent.spouseName,
            partnerName: parent.partnerName,
            occupation: parent.occupation,
            educAttainment: parent.educAttainment,
            empStatus: parent.empStatus,
            date: parent.date,
            kpp: parent.kpp,
            dependents: parent.dependents,
            religion: parent.religion,
            age: parent.age,
            pallergy: parent.pallergy,
            pasthma: parent.pasthma,
            pspecifyAllergy: parent.pspecifyAllergy,
            pcancer: parent.pcancer,
            porganCancer: parent.porganCancer,
            pcerebrovascular: parent.pcerebrovascular,
            pcoronaryArtery: parent.pcoronaryArtery,
            pdiabetes: parent.pdiabetes,
            pemphysema: parent.pemphysema,
            pepilepsy: parent.pepilepsy,
            phepatitis: parent.phepatitis,
            phyperlipidemia: parent.phyperlipidemia,
            phypertension: parent.phypertension,
            ppepticUlcer: parent.ppepticUlcer,
            ppneumonia: parent.ppneumonia,
            pthyroid: parent.pthyroid,
            ppulmonaryTb: parent.ppulmonaryTb,
            ppulmonaryTbCategory: parent.ppulmonaryTbCategory,
            pextrapulmonaryTb: parent.pextrapulmonaryTb,
            pextrapulmonaryTbCategory: parent.pextrapulmonaryTbCategory,
            puti: parent.puti,
            pmentalIllness: parent.pmentalIllness,
            pothers: parent.pothers,
            pnone: parent.pnone,
            pbloodPressure: parent.pbloodPressure,
            fallergy: parent.fallergy,
            fasthma: parent.fasthma,
            fspecifyAllergy: parent.fspecifyAllergy,
            fcancer: parent.fcancer,
            forganCancer: parent.forganCancer,
            fcerebrovascular: parent.fcerebrovascular,
            fcoronaryArtery: parent.fcoronaryArtery,
            fdiabetes: parent.fdiabetes,
            femphysema: parent.femphysema,
            fepilepsy: parent.fepilepsy,
            fhepatitis: parent.fhepatitis,
            fhyperlipidemia: parent.fhyperlipidemia,
            fhypertension: parent.fhypertension,
            fpepticUlcer: parent.fpepticUlcer,
            fpneumonia: parent.fpneumonia,
            fthyroid: parent.fthyroid,
            fpulmonaryTb: parent.fpulmonaryTb,
            fpulmonaryTbCategory: parent.fpulmonaryTbCategory,
            fextrapulmonaryTb: parent.fextrapulmonaryTb,
            fextrapulmonaryTbCategory: parent.fextrapulmonaryTbCategory,
            futi: parent.futi,
            fmentalIllness: parent.fmentalIllness,
            fothers: parent.fothers,
            fnone: parent.fnone,
            fbloodPressure: parent.fbloodPressure,
            smoking: parent.smoking,
            packsPerYear: parent.packsPerYear,
            alcohol: parent.alcohol,
            bottlesPerDay: parent.bottlesPerDay,
            illicitDrugs: parent.illicitDrugs,
            illicitDrugsDetails: parent.illicitDrugsDetails,
            sexualHistory: parent.sexualHistory,
            sexualHistoryDetails: parent.sexualHistoryDetails,
            menarche: parent.menarche,
            pregnancyHistory: parent.pregnancyHistory,
            menopause: parent.menopause,
            gravida: parent.gravida,
            ageOfMenopause: parent.ageOfMenopause,
            para: parent.para,
            lmp: parent.lmp,
            fullTerm: parent.fullTerm,
            preTerm: parent.preTerm,
            abortion: parent.abortion,
            living: parent.living,
            intervalOfMenstruation: parent.intervalOfMenstruation,
            duration: parent.duration,
            padsPerDay: parent.padsPerDay,
            dateComplaints: parent.dateComplaints,
            chiefComplaints: parent.chiefComplaints,
            bp: parent.bp,
            hr: parent.hr,
            o2sat: parent.o2sat,
            wt: parent.wt,
            temp: parent.temp,
            rr: parent.rr,
            ht: parent.ht,
          }));
        }
      } catch (error) {
        if (error.response && !error.response.data.success) {
          alert(error.response.data.error);
        }
      }
    };
    fetchParents();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setParent((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(parent);
    try {
      const response = await axios.put(
        `http://localhost:5000/api/parent/${id}`,
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

  return (
    <>
      {parent ? (
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
                value={parent.date}
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
                value={parent.kpp}
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
                value={parent.dependents}
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
                value={parent.name}
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
                value={parent.familyNumber}
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
                value={parent.lastName}
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
                value={parent.firstName}
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
                value={parent.middleName}
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
                value={parent.contact}
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
                value={parent.phNumber}
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
                value={parent.clientType}
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
                value={parent.ifMember}
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
                value={parent.sex}
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
                value={parent.birthday}
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
                value={parent.age}
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
                value={parent.religion}
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
                value={parent.address}
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
                value={parent.civilStatus}
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
                value={parent.maidenName}
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
                value={parent.spouseName}
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
                value={parent.partnerName}
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
                value={parent.occupation}
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
                value={parent.educAttainment}
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
                value={parent.empStatus}
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
                      checked={parent.pallergy === "yes"}
                      onChange={handleChange}
                    />
                  </td>
                  <td>
                    <input
                      type="radio"
                      name="pallergy"
                      value="no"
                      checked={parent.pallergy === "no"}
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
                      checked={parent.pasthma === "yes"}
                      onChange={handleChange}
                    />
                  </td>
                  <td>
                    <input
                      type="radio"
                      name="pasthma"
                      value="no"
                      checked={parent.pasthma === "no"}
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
                      value={parent.pspecifyAllergy}
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
                      checked={parent.pcancer === "yes"}
                      onChange={handleChange}
                    />
                  </td>
                  <td>
                    <input
                      type="radio"
                      name="pcancer"
                      value="no"
                      checked={parent.pcancer === "no"}
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
                      value={parent.porganCancer}
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
                      checked={parent.pcerebrovascular === "yes"}
                      onChange={handleChange}
                    />
                  </td>
                  <td>
                    <input
                      type="radio"
                      name="pcerebrovascular"
                      value="no"
                      checked={parent.pcerebrovascular === "no"}
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
                      checked={parent.pcoronaryArtery === "yes"}
                      onChange={handleChange}
                    />
                  </td>
                  <td>
                    <input
                      type="radio"
                      name="pcoronaryArtery"
                      value="no"
                      checked={parent.pcoronaryArtery === "no"}
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
                      checked={parent.pdiabetes === "yes"}
                      onChange={handleChange}
                    />
                  </td>
                  <td>
                    <input
                      type="radio"
                      name="pdiabetes"
                      value="no"
                      checked={parent.pdiabetes === "no"}
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
                      checked={parent.pemphysema === "yes"}
                      onChange={handleChange}
                    />
                  </td>
                  <td>
                    <input
                      type="radio"
                      name="pemphysema"
                      value="no"
                      checked={parent.pemphysema === "no"}
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
                      checked={parent.pepilepsy === "yes"}
                      onChange={handleChange}
                    />
                  </td>
                  <td>
                    <input
                      type="radio"
                      name="pepilepsy"
                      value="no"
                      checked={parent.pepilepsy === "no"}
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
                      checked={parent.phepatitis === "yes"}
                      onChange={handleChange}
                    />
                  </td>
                  <td>
                    <input
                      type="radio"
                      name="phepatitis"
                      value="no"
                      checked={parent.phepatitis === "no"}
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
                      checked={parent.phyperlipidemia === "yes"}
                      onChange={handleChange}
                    />
                  </td>
                  <td>
                    <input
                      type="radio"
                      name="phyperlipidemia"
                      value="no"
                      checked={parent.phyperlipidemia === "no"}
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
                      checked={parent.phypertension === "yes"}
                      onChange={handleChange}
                    />
                  </td>
                  <td>
                    <input
                      type="radio"
                      name="phypertension"
                      value="no"
                      checked={parent.phypertension === "no"}
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
                      checked={parent.ppepticUlcer === "yes"}
                      onChange={handleChange}
                    />
                  </td>
                  <td>
                    <input
                      type="radio"
                      name="ppepticUlcer"
                      value="no"
                      checked={parent.ppepticUlcer === "no"}
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
                      checked={parent.ppneumonia === "yes"}
                      onChange={handleChange}
                    />
                  </td>
                  <td>
                    <input
                      type="radio"
                      name="ppneumonia"
                      value="no"
                      checked={parent.ppneumonia === "no"}
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
                      checked={parent.pthyroid === "yes"}
                      onChange={handleChange}
                    />
                  </td>
                  <td>
                    <input
                      type="radio"
                      name="pthyroid"
                      value="no"
                      checked={parent.pthyroid === "no"}
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
                      checked={parent.ppulmonaryTb === "yes"}
                      onChange={handleChange}
                    />
                  </td>
                  <td>
                    <input
                      type="radio"
                      name="ppulmonaryTb"
                      value="no"
                      checked={parent.ppulmonaryTb === "no"}
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
                      value={parent.ppulmonaryTbCategory}
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
                      checked={parent.pextrapulmonaryTb === "yes"}
                      onChange={handleChange}
                    />
                  </td>
                  <td>
                    <input
                      type="radio"
                      name="pextrapulmonaryTb"
                      value="no"
                      checked={parent.pextrapulmonaryTb === "no"}
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
                      value={parent.pextrapulmonaryTbCategory}
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
                      checked={parent.puti === "yes"}
                      onChange={handleChange}
                    />
                  </td>
                  <td>
                    <input
                      type="radio"
                      name="puti"
                      value="no"
                      checked={parent.puti === "no"}
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
                      checked={parent.pmentalIllness === "yes"}
                      onChange={handleChange}
                    />
                  </td>
                  <td>
                    <input
                      type="radio"
                      name="pmentalIllness"
                      value="no"
                      checked={parent.pmentalIllness === "no"}
                      onChange={handleChange}
                    />
                  </td>
                </tr>
                <tr>
                  <td>Others (please specify):</td>
                  <td colspan="2">
                    <input type="text" name="pothers"
                    value={parent.pothers} onChange={handleChange} />
                  </td>
                </tr>
                <tr>
                  <td>None</td>
                  <td>
                    <input
                      type="radio"
                      name="pnone"
                      value="yes"
                      checked={parent.pnone === "yes"}
                      onChange={handleChange}
                    />
                  </td>
                  <td>
                    <input
                      type="radio"
                      name="pnone"
                      value="no"
                      checked={parent.pnone === "no"}
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
                      value={parent.pbloodPressure}
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
                      checked={parent.fallergy === "yes"}
                      onChange={handleChange}
                    />
                  </td>
                  <td>
                    <input
                      type="radio"
                      name="fallergy"
                      value="no"
                      checked={parent.fallergy === "no"}
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
                      checked={parent.fasthma === "yes"}
                      onChange={handleChange}
                    />
                  </td>
                  <td>
                    <input
                      type="radio"
                      name="fasthma"
                      value="no"
                      checked={parent.fasthma === "no"}
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
                      value={parent.fspecifyAllergy}
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
                      checked={parent.fcancer === "yes"}
                      onChange={handleChange}
                    />
                  </td>
                  <td>
                    <input
                      type="radio"
                      name="fcancer"
                      value="no"
                      checked={parent.fcancer === "no"}
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
                      value={parent.forganCancer}
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
                      checked={parent.fcerebrovascular === "yes"}
                      onChange={handleChange}
                    />
                  </td>
                  <td>
                    <input
                      type="radio"
                      name="fcerebrovascular"
                      value="no"
                      checked={parent.fcerebrovascular === "no"}
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
                      checked={parent.fcoronaryArtery === "yes"}
                      onChange={handleChange}
                    />
                  </td>
                  <td>
                    <input
                      type="radio"
                      name="fcoronaryArtery"
                      value="no"
                      checked={parent.fcoronaryArtery === "no"}
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
                      checked={parent.fdiabetes === "yes"}
                      value="yes"
                      onChange={handleChange}
                    />
                  </td>
                  <td>
                    <input
                      type="radio"
                      name="fdiabetes"
                      value="no"
                      checked={parent.fdiabetes === "no"}
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
                      checked={parent.femphysema === "yes"}
                      onChange={handleChange}
                    />
                  </td>
                  <td>
                    <input
                      type="radio"
                      name="femphysema"
                      value="no"
                      checked={parent.femphysema === "no"}
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
                      checked={parent.fepilepsy === "yes"}
                      onChange={handleChange}
                    />
                  </td>
                  <td>
                    <input
                      type="radio"
                      name="fepilepsy"
                      value="no"
                      checked={parent.fepilepsy === "no"}
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
                      checked={parent.fhepatitis === "yes"}
                      onChange={handleChange}
                    />
                  </td>
                  <td>
                    <input
                      type="radio"
                      name="fhepatitis"
                      value="no"
                      checked={parent.fhepatitis === "no"}
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
                      checked={parent.fhyperlipidemia === "yes"}
                      onChange={handleChange}
                    />
                  </td>
                  <td>
                    <input
                      type="radio"
                      name="fhyperlipidemia"
                      value="no"
                      checked={parent.fhyperlipidemia === "no"}
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
                      checked={parent.fhypertension === "yes"}
                      onChange={handleChange}
                    />
                  </td>
                  <td>
                    <input
                      type="radio"
                      name="fhypertension"
                      value="no"
                      checked={parent.fhypertension === "no"}
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
                      checked={parent.fpepticUlcer === "yes"}
                      onChange={handleChange}
                    />
                  </td>
                  <td>
                    <input
                      type="radio"
                      name="fpepticUlcer"
                      value="no"
                      checked={parent.fpepticUlcer === "no"}
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
                      checked={parent.fpneumonia === "yes"}
                      onChange={handleChange}
                    />
                  </td>
                  <td>
                    <input
                      type="radio"
                      name="fpneumonia"
                      value="no"
                      checked={parent.fpneumonia === "no"}
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
                      checked={parent.fthyroid === "yes"}
                      onChange={handleChange}
                    />
                  </td>
                  <td>
                    <input
                      type="radio"
                      name="fthyroid"
                      value="no"
                      checked={parent.fthyroid === "no"}
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
                      checked={parent.fpulmonaryTb === "yes"}
                      onChange={handleChange}
                    />
                  </td>
                  <td>
                    <input
                      type="radio"
                      name="fpulmonaryTb"
                      value="no"
                      checked={parent.fpulmonaryTb === "no"}
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
                      value={parent.fpulmonaryTbCategory}
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
                      checked={parent.fpulmonaryTb === "yes"}
                      onChange={handleChange}
                    />
                  </td>
                  <td>
                    <input
                      type="radio"
                      name="fextrapulmonaryTb"
                      value="no"
                      checked={parent.fpulmonaryTb === "no"}
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
                      value={parent.fextrapulmonaryTbCategory}
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
                      checked={parent.futi === "yes"}
                      onChange={handleChange}
                    />
                  </td>
                  <td>
                    <input
                      type="radio"
                      name="futi"
                      value="no"
                      checked={parent.futi === "no"}
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
      ) : (
        <div className="p-8 text-center">
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
            Loading Record...
          </h3>
        </div>
      )}
    </>
  );
};

export default Edit;
