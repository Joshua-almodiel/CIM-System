import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../../Context/AuthContext.jsx";
import { useNavigate } from "react-router-dom";
import {
  FaUser,
  FaIdCard,
  FaBirthdayCake,
  FaVenusMars,
  FaHardHat,
  FaHeart,
  FaCalendarAlt,
  FaPhone,
  FaHome,
  FaNotesMedical,
  FaSmoking,
  FaWineBottle,
  FaBaby,
  FaWeight,
  FaThermometerHalf,
} from "react-icons/fa";

const View = () => {
  const { id } = useParams();
  const [parent, setParent] = useState(null);
  const navigate = useNavigate();
  const { user } = useAuth();
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  useEffect(() => {
    const fetchParents = async () => {
      try {
        const responnse = await axios.get(
          `https://cim-system-gvok.vercel.app/api/parent/${id}`,
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
  }, [id]);

  const handleDelete = async () => {
    try {
      const response = await axios.delete(
        `https://cim-system-gvok.vercel.app/api/parent/${id}`,
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
      console.error("Error deleting parent:", error);
      alert("Failed to delete the record");
    }
  };

  if (!parent) {
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
          <span className="text-slate-600 font-medium">Loading Records...</span>
        </div>
        <p className="mt-2 text-sm text-gray-500">Please wait a moment.</p>
      </div>
    );
  }

  const getIcon = (label) => {
    const iconMap = {
      Created: <FaCalendarAlt className="text-xl text-[#147190]" />,
      "NASIPIT RURAL HEALTH UNIT": (
        <FaIdCard className="text-xl text-[#147190]" />
      ),
      Nickname: <FaUser className="text-xl text-[#147190]" />,
      Birthday: <FaBirthdayCake className="text-xl text-[#147190]" />,
      Gender: <FaVenusMars className="text-xl text-[#147190]" />,
      "Contact Number": <FaPhone className="text-xl text-[#147190]" />,
      Address: <FaHome className="text-xl text-[#147190]" />,
      Occupation: <FaHardHat className="text-xl text-[#147190]" />,
      "Medical History": <FaNotesMedical className="text-xl text-[#147190]" />,
      Smoking: <FaSmoking className="text-xl text-[#147190]" />,
      Alcohol: <FaWineBottle className="text-xl text-[#147190]" />,
      Obstetrics: <FaBaby className="text-xl text-[#147190]" />,
      WT: <FaWeight className="text-xl text-[#147190]" />,
      Temp: <FaThermometerHalf className="text-xl text-[#147190]" />,
    };

    return iconMap[label] || <FaHeart className="text-xl text-[#147190]" />;
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8 md:p-14">
      <div className="max-w-5xl mx-auto">
        <div className="text-left mb-12">
          <h2 className="text-4xl font-extrabold text-slate-800">
            Record Form Details
          </h2>
        </div>

        <Section title="Personal Information">
          {[
            {
              label: "Created",
              value: new Date(parent.date).toLocaleDateString(),
            },
            {
              label: "NASIPIT RURAL HEALTH UNIT",
              value: parent.kpp,
            },
            {
              label: "How many dependents?",
              value: parent.dependents,
            },
            {
              label: "Nickname",
              value: parent.userId.name,
            },
            {
              label: "Family Number",
              value: parent.familyNumber,
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
            <InfoCard
              key={index}
              label={item.label}
              value={item.value}
              icon={getIcon(item.label)}
            />
          ))}
        </Section>

        <Section title="Past Medical History">
          {[
            { label: "Allergy", value: parent.pallergy },
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
            { label: "Specify Others", value: parent.pspecifyOthers },
            { label: "None", value: parent.pnone },
            { label: "Highest Blood Pressure", value: parent.pbloodPressure },
          ].map((item, index) => (
            <InfoCard
              key={index}
              label={item.label}
              value={item.value}
              icon={getIcon("Medical History")}
            />
          ))}
        </Section>

        <Section title="Family History">
          {[
            { label: "Allergy", value: parent.fallergy },
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
            { label: "Specify Others", value: parent.fspecifyOthers },
            { label: "None", value: parent.fnone },
            { label: "Highest Blood Pressure", value: parent.fbloodPressure },
          ].map((item, index) => (
            <InfoCard
              key={index}
              label={item.label}
              value={item.value}
              icon={getIcon("Medical History")}
            />
          ))}
        </Section>

        <Section title="Personal / Social History">
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
            <InfoCard
              key={index}
              label={item.label}
              value={item.value}
              icon={getIcon(
                item.label.includes("Smok")
                  ? "Smoking"
                  : item.label.includes("Alcohol")
                  ? "Alcohol"
                  : "Medical History"
              )}
            />
          ))}
        </Section>

        <Section title="Obstetrics / Menstrual History">
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
            <InfoCard
              key={index}
              label={item.label}
              value={item.value}
              icon={getIcon("Obstetrics")}
            />
          ))}
        </Section>

        {showDeleteModal && (
          <div className="fixed inset-0 flex items-center justify-center bg-transparent bg-opacity-50 z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
              <h3 className="text-lg font-semibold mb-4 text-gray-800">
                Confirm Deletion
              </h3>
              <p className="text-sm text-gray-600 mb-6">
                Are you sure you want to delete this record? This action cannot
                be undone.
              </p>
              <div className="flex justify-end space-x-4">
                <button
                  onClick={() => setShowDeleteModal(false)}
                  className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 transition"
                >
                  Cancel
                </button>
                <button
                  onClick={() => {
                    setShowDeleteModal(false);
                    handleDelete();
                  }}
                  className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        )}

        {user.role === "healthWorker" && (
          <div className="mt-8 text-right">
            <button
              onClick={() => setShowDeleteModal(true)}
              className="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700 transition"
            >
              Delete Record
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

const Section = ({ title, children }) => (
  <div className="mb-12">
    <div className="text-center mb-8">
      <h3 className="text-2xl md:text-3xl font-bold text-[#147190] mb-2">
        {title}
      </h3>
      <div className="w-20 h-1 bg-[#147190] mx-auto"></div>
    </div>
    <div className="bg-white rounded-xl shadow-md overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-6">
        {children}
      </div>
    </div>
  </div>
);

const InfoCard = ({ label, value, icon }) => (
  <div className="flex items-start gap-4 p-4 hover:bg-blue-50 transition-colors rounded-lg">
    <div className="flex-shrink-0 mt-1">{icon}</div>
    <div className="flex-1 min-w-0">
      <p className="text-sm font-medium text-gray-500 truncate">{label}</p>
      <p className="text-base font-semibold text-gray-800 break-words">
        {value || "N/A"}
      </p>
    </div>
  </div>
);

export default View;
