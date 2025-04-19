import Vaccinations from "../Models/Vaccinations.js";
import Parents from "../Models/Parents.js";

const addVaccination = async (req, res) => {
  try {
    const { familyNumber, vaccinationType, startDate, startTime, reason } = req.body;

    const newVaccination = new Vaccinations({
      familyNumber,
      vaccinationType,
      startDate,
      startTime,
      reason,
    });

    await newVaccination.save();

    return res.status(200).json({ success: true });
  } catch (error) {
    return res
      .status(400)
      .json({ success: false, error: "Vaccination add server error" });
  }
};

const getVaccination = async (req, res) => {
    try {
      const { id, role } = req.params;
      let vaccinations;
  
      if (role === "healthWorker") {
        vaccinations = await Vaccinations.find({ familyNumber: id }).populate("familyNumber", "familyNumber");
      } else {
        const parent = await Parents.findOne({ userId: id });
        vaccinations = await Vaccinations.find({ familyNumber: parent._id }).populate("familyNumber", "familyNumber");
      }
  
      return res.status(200).json({ success: true, vaccinations });
    } catch (error) {
      return res
        .status(400)
        .json({ success: false, error: "Vaccine fetch server error" });
    }
  };

const getVaccinations = async (req, res) => {
  try {
    const vaccinations = await Vaccinations.find().populate({
      path: "familyNumber",
      populate: [
        {
          path: "userId",
          select: "name",
        },
      ],
    });

    console.log(vaccinations);

    return res.status(200).json({ success: true, vaccinations });
  } catch (error) {
    return res
      .status(400)
      .json({ success: false, error: "Vaccination get server error" });
  }
};

const getVaccinationDetail = async (req, res) => {
  try {
    const { id } = req.params;
    const vaccination = await Vaccinations.findById({ _id: id }).populate({
      path: "familyNumber",
      populate: [
        {
          path: "userId",
          select: "name",
        },
      ],
    });

    return res.status(200).json({ success: true, vaccination });
  } catch (error) {
    return res
      .status(400)
      .json({ success: false, error: "Vaccination get server error" });
  }
};

const updateVaccination = async (req, res) => {
  try {
    const { id } = req.params;
    const vaccination = await Vaccinations.findByIdAndUpdate({ _id: id });
    if (!vaccination) {
      return res
        .status(400)
        .json({ success: false, error: "Vaccination not found" });
    }
    return res.status(200).json({ success: true });
  } catch (error) {
    return res
      .status(400)
      .json({ success: false, error: "Vaccination add server error" });
  }
};

export {
  addVaccination,
  getVaccination,
  getVaccinations,
  getVaccinationDetail,
  updateVaccination,
};
