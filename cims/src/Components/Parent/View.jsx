import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import {
  FaUser,
  FaIdCard,
  FaBirthdayCake,
  FaVenusMars,
  FaHardHat,
  FaHeart,
} from "react-icons/fa";

const View = () => {
  const { id } = useParams();
  const [parent, setParent] = useState(null);

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
          setParent(responnse.data.parent);
        }
      } catch (error) {
        if (error.response && !error.response.data.success) {
          alert(error.response.data.error);
        }
      }
    };
    fetchParents();
  });

  if (!parent) {
    return (
      <div className="bg-white min-h-screen p-8 text-center">
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
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-gray-900 p-10">
      <h2 className="text-3xl text-[#147190] font-bold mb-10 text-center">
        Record Form Details
      </h2>

      <div className="bg-white p-6 rounded-lg shadow-sm border">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            {
              label: "Created",
              value: new Date(parent.date).toLocaleDateString(),
              icon: <FaUser className="text-xl text-gray-500" />,
            },
            {
              label: "NASIPIT RURAL HEALTH UNIT and Family PLANNING",
              value: parent.kpp,
              icon: <FaIdCard className="text-xl text-gray-500" />,
            },
            {
              label: "How many dependents?",
              value: parent.dependents,
              icon: <FaBirthdayCake className="text-xl text-gray-500" />,
            },
            {
              label: "Nickname",
              value: parent.userId.name,
              icon: <FaVenusMars className="text-xl text-gray-500" />,
            },
            {
              label: "Family Number",
              value: parent.familyNumber,
              icon: <FaHardHat className="text-xl text-gray-500" />,
            },
            { label: "Last Name", value: parent.lastName },
            { label: "First Name", value: parent.firstName },
            { label: "Middle Name", value: parent.middleName },
            { label: "Contact Number", value: parent.contact },
            { label: "PhiHealth Number", value: parent.phNumber },
            { label: "Client Type", value: parent.clientType },
            { label: "If Member", value: parent.ifMember },
            { label: "Birthday", value: parent.birthday },
            { label: "Gender", value: parent.sex },
            { label: "Address", value: parent.address },
            { label: "Civil Status", value: parent.civilStatus },
            { label: "Maiden Name", value: parent.maidenName },
            { label: "Spouse Name", value: parent.spouseName },
            { label: "Partner Name", value: parent.partnerName },
            { label: "Occupation", value: parent.occupation },
            { label: "Educational Attainment", value: parent.educAttainment },
            { label: "Employment Status", value: parent.empStatus },
          ].map((item, index) => (
            <div
              key={index}
              className="flex items-start gap-3 p-4 border rounded-lg shadow-sm bg-white"
            >
              <div className="pt-1 text-gray-500">
                {item.icon || <FaHeart className="text-xl" />}
              </div>
              <div>
                <p className="text-sm text-gray-500">{item.label}</p>
                <p className="text-base font-medium text-gray-800">
                  {item.value || "N/A"}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <h2 className="text-3xl text-[#147190] font-bold mb-10 pt-8 text-center">
        Past Medical History
      </h2>
      <div className="bg-white p-6 rounded-lg shadow-sm border">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            {
              label: "Allergy",
              value: parent.pallergy,
              icon: <FaVenusMars className="text-xl text-gray-500" />,
            },
            { label: "Asthma", value: parent.pasthma },
            { label: "Specify Allergy", value: parent.pspecifyAllergy },
            { label: "Cancer", value: parent.pcancer },
            { label: "Specify Organ with Cancer", value: parent.porganCancer },
            {
              label: "Cereobrovascular Disease",
              value: parent.pcerebrovascular,
            },
            { label: "Coronary Artery Disease", value: parent.pcoronaryArtery },
            { label: "Diabetes Mellitus", value: parent.pdiabetes },
            { label: "Emphysema", value: parent.pemphysema },
            { label: "Epilepsy/ Seizure Disorder", value: parent.pepilepsy },
            { label: "Hepatitis", value: parent.phepatitis },
            { label: "Hyperlipidemia", value: parent.phyperlipidemia },
            { label: "Hypertension", value: parent.phypertension },
            { label: "Peptic Ulcer", value: parent.ppepticUlcer },
            { label: "Pneumonia", value: parent.ppneumonia },
            { label: "Thyroid Disease", value: parent.pthyroid },
            { label: "Pulmonary Tuberculosis", value: parent.ppulmonaryTb },
            {
              label: "Specify Pulmonary Tuberculosis Category",
              value: parent.ppulmonaryTbCategory,
            },
            {
              label: "Extrapulmonary Tuberculosis",
              value: parent.pextrapulmonaryTb,
            },
            {
              label: "Specify Extrapulmonary Tuberculosis Category",
              value: parent.pextrapulmonaryTbCategory,
            },
            { label: "Urinary Tract Infection", value: parent.puti },
            { label: "Mental Illness", value: parent.pmentalIllness },
            { label: "Others", value: parent.pothers },
            { label: "None", value: parent.pnone },
            { label: "Highest Blood Pressure", value: parent.phighestBp },
          ].map((item, index) => (
            <div
              key={index}
              className="flex items-start gap-3 p-4 border rounded-lg shadow-sm bg-white"
            >
              <div className="pt-1 text-gray-500">
                {item.icon || <FaHeart className="text-xl" />}
              </div>
              <div>
                <p className="text-sm text-gray-500">{item.label}</p>
                <p className="text-base font-medium text-gray-800">
                  {item.value || "N/A"}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <h2 className="text-3xl text-[#147190] font-bold mb-10 pt-8 text-center">
        Family History
      </h2>
      <div className="bg-white p-6 rounded-lg shadow-sm border">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            {
              label: "Allergy",
              value: parent.fallergy,
              icon: <FaVenusMars className="text-xl text-gray-500" />,
            },
            { label: "Asthma", value: parent.fasthma },
            { label: "Specify Allergy", value: parent.fspecifyAllergy },
            { label: "Cancer", value: parent.fcancer },
            { label: "Specify Organ with Cancer", value: parent.forganCancer },
            {
              label: "Cereobrovascular Disease",
              value: parent.fcerebrovascular,
            },
            { label: "Coronary Artery Disease", value: parent.fcoronaryArtery },
            { label: "Diabetes Mellitus", value: parent.fdiabetes },
            { label: "Emphysema", value: parent.femphysema },
            { label: "Epilepsy/ Seizure Disorder", value: parent.fepilepsy },
            { label: "Hepatitis", value: parent.fhepatitis },
            { label: "Hyperlipidemia", value: parent.fhyperlipidemia },
            { label: "Hypertension", value: parent.fhypertension },
            { label: "Peptic Ulcer", value: parent.fpepticUlcer },
            { label: "Pneumonia", value: parent.fpneumonia },
            { label: "Thyroid Disease", value: parent.fthyroid },
            { label: "Pulmonary Tuberculosis", value: parent.fpulmonaryTb },
            {
              label: "Specify Pulmonary Tuberculosis Category",
              value: parent.fpulmonaryTbCategory,
            },
            {
              label: "Extrapulmonary Tuberculosis",
              value: parent.fextrapulmonaryTb,
            },
            {
              label: "Specify Extrapulmonary Tuberculosis Category",
              value: parent.fextrapulmonaryTbCategory,
            },
            { label: "Urinary Tract Infection", value: parent.futi },
            { label: "Mental Illness", value: parent.fmentalIllness },
            { label: "Others", value: parent.fothers },
            { label: "None", value: parent.fnone },
            { label: "Highest Blood Pressure", value: parent.fhighestBp },
          ].map((item, index) => (
            <div
              key={index}
              className="flex items-start gap-3 p-4 border rounded-lg shadow-sm bg-white"
            >
              <div className="pt-1 text-gray-500">
                {item.icon || <FaHeart className="text-xl" />}
              </div>
              <div>
                <p className="text-sm text-gray-500">{item.label}</p>
                <p className="text-base font-medium text-gray-800">
                  {item.value || "N/A"}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <h2 className="text-3xl text-[#147190] font-bold mb-10 pt-8 text-center">
        Personal / Social History
      </h2>
      <div className="bg-white p-6 rounded-lg shadow-sm border">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { label: "Smoking", value: parent.smoking },
            { label: "No. of Packs per year", value: parent.packsPerYear },
            { label: "Alcohol", value: parent.alcohol },
            { label: "Illicit Drugs", value: parent.illicitDrugs },
            {
              label: "Illicit Drugs Details",
              value: parent.illicitDrugsDetails,
            },
            { label: "Sexual History Screening", value: parent.sexualHistory },
            {
              label: "Sexual History Details",
              value: parent.sexualHistoryDetails,
            },
          ].map((item, index) => (
            <div
              key={index}
              className="flex items-start gap-3 p-4 border rounded-lg shadow-sm bg-white"
            >
              <div className="pt-1 text-gray-500">
                {item.icon || <FaHeart className="text-xl" />}
              </div>
              <div>
                <p className="text-sm text-gray-500">{item.label}</p>
                <p className="text-base font-medium text-gray-800">
                  {item.value || "N/A"}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <h2 className="text-3xl text-[#147190] font-bold mb-10 pt-8 text-center">
        Obstetrics / Menstrual History
      </h2>
      <div className="bg-white p-6 rounded-lg shadow-sm border">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { label: "Menarche", value: parent.menarche },
            { label: "Menopause", value: parent.menopause },
            { label: "Age of Menopause", value: parent.ageOfMenopause },
            { label: "LMP", value: parent.lmp },
            {
              label: "Interval of Menstruation",
              value: parent.intervalOfMenstruation,
            },
            { label: "Duration", value: parent.duration },
            { label: "Pads per day", value: parent.padsPerDay },
            { label: "Pregnancy History", value: parent.pregnancyHistory },
            { label: "Gravida", value: parent.gravida },
            { label: "Para", value: parent.para },
            { label: "Full Term", value: parent.fullTerm },
            { label: "PreTerm", value: parent.preTerm },
            { label: "Abortion", value: parent.abortion },
            { label: "Living", value: parent.living },
          ].map((item, index) => (
            <div
              key={index}
              className="flex items-start gap-3 p-4 border rounded-lg shadow-sm bg-white"
            >
              <div className="pt-1 text-gray-500">
                {item.icon || <FaHeart className="text-xl" />}
              </div>
              <div>
                <p className="text-sm text-gray-500">{item.label}</p>
                <p className="text-base font-medium text-gray-800">
                  {item.value || "N/A"}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <h2 className="text-3xl text-[#147190] font-bold mb-10 pt-8 text-center">Vital Signs</h2>
      <div className="bg-white p-6 rounded-lg shadow-sm border">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            {
              label: "Created Complaints",
              value: new Date(parent.dateComplaints).toLocaleDateString(),
            },
            { label: "Chief Complaints", value: parent.chiefComplaints },
            { label: "BP", value: parent.bp },
            { label: "HR", value: parent.hr },
            { label: "O2Sat", value: parent.o2sat },
            { label: "WT", value: parent.wt },
            { label: "Temp", value: parent.temp },
            { label: "RR", value: parent.rr },
            { label: "HT", value: parent.ht },
            { label: "BMI", value: parent.bmi },
          ].map((item, index) => (
            <div
              key={index}
              className="flex items-start gap-3 p-4 border rounded-lg shadow-sm bg-white"
            >
              <div className="pt-1 text-gray-500">
                {item.icon || <FaHeart className="text-xl" />}
              </div>
              <div>
                <p className="text-sm text-gray-500">{item.label}</p>
                <p className="text-base font-medium text-gray-800">
                  {item.value || "N/A"}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default View;
