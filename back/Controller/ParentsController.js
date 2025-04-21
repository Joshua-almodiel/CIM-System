import Parents from "../Models/Parents.js";
import User from "../Models/User.js";
import Vitals from "../Models/Vitals.js";
import Vaccinations from "../Models/Vaccinations.js";
import bcrypt from "bcryptjs";

const addParent = async (req, res) => {
  try {
    const {
      name,
      parentId,
      familyNumber,
      lastName,
      firstName,
      middleName,
      contact,
      phNumber,
      clientType,
      ifMember,
      sex,
      birthday,
      address,
      civilStatus,
      maidenName,
      spouseName,
      partnerName,
      occupation,
      educAttainment,
      empStatus,
      date,
      kpp,
      dependents,
      religion,
      age,
      pallergy,
      pasthma,
      pspecifyAllergy,
      pcancer,
      porganCancer,
      pcerebrovascular,
      pcoronaryArtery,
      pdiabetes,
      pemphysema,
      pepilepsy,
      phepatitis,
      phyperlipidemia,
      phypertension,
      ppepticUlcer,
      ppneumonia,
      pthyroid,
      ppulmonaryTb,
      ppulmonaryTbCategory,
      pextrapulmonaryTb,
      pextrapulmonaryTbCategory,
      puti,
      pmentalIllness,
      pothers,
      pnone,
      pbloodPressure,
      fallergy,
      fasthma,
      fspecifyAllergy,
      fcancer,
      forganCancer,
      fcerebrovascular,
      fcoronaryArtery,
      fdiabetes,
      femphysema,
      fepilepsy,
      fhepatitis,
      fhyperlipidemia,
      fhypertension,
      fpepticUlcer,
      fpneumonia,
      fthyroid,
      fpulmonaryTb,
      fpulmonaryTbCategory,
      fextrapulmonaryTb,
      fextrapulmonaryTbCategory,
      futi,
      fmentalIllness,
      fothers,
      fnone,
      fbloodPressure,
      smoking,
      packsPerYear,
      alcohol,
      bottlesPerDay,
      illicitDrugs,
      illicitDrugsDetails,
      sexualHistory,
      sexualHistoryDetails,
      menarche,
      pregnancyHistory,
      menopause,
      gravida,
      ageOfMenopause,
      para,
      lmp,
      fullTerm,
      preTerm,
      abortion,
      living,
      intervalOfMenstruation,
      duration,
      padsPerDay,
      email,
      password,
      role,
    } = req.body;

    const user = await User.findOne({ email });
    if (user) {
      return res
        .status(400)
        .json({ success: false, error: "Email already registered" });
    }

    const hashPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      name,
      email,
      password: hashPassword,
      role,
    });
    const saveUser = await newUser.save();

    const newParent = new Parents({
      userId: saveUser._id,
      parentId,
      familyNumber,
      lastName,
      firstName,
      middleName,
      contact,
      phNumber,
      clientType,
      ifMember,
      sex,
      birthday,
      address,
      civilStatus,
      maidenName,
      spouseName,
      partnerName,
      occupation,
      educAttainment,
      empStatus,
      date,
      kpp,
      dependents,
      religion,
      age,
      pallergy,
      pasthma,
      pspecifyAllergy,
      pcancer,
      porganCancer,
      pcerebrovascular,
      pcoronaryArtery,
      pdiabetes,
      pemphysema,
      pepilepsy,
      phepatitis,
      phyperlipidemia,
      phypertension,
      ppepticUlcer,
      ppneumonia,
      pthyroid,
      ppulmonaryTb,
      ppulmonaryTbCategory,
      pextrapulmonaryTb,
      pextrapulmonaryTbCategory,
      puti,
      pmentalIllness,
      pothers,
      pnone,
      pbloodPressure,
      fallergy,
      fasthma,
      fspecifyAllergy,
      fcancer,
      forganCancer,
      fcerebrovascular,
      fcoronaryArtery,
      fdiabetes,
      femphysema,
      fepilepsy,
      fhepatitis,
      fhyperlipidemia,
      fhypertension,
      fpepticUlcer,
      fpneumonia,
      fthyroid,
      fpulmonaryTb,
      fpulmonaryTbCategory,
      fextrapulmonaryTb,
      fextrapulmonaryTbCategory,
      futi,
      fmentalIllness,
      fothers,
      fnone,
      fbloodPressure,
      smoking,
      packsPerYear,
      alcohol,
      bottlesPerDay,
      illicitDrugs,
      illicitDrugsDetails,
      sexualHistory,
      sexualHistoryDetails,
      menarche,
      pregnancyHistory,
      menopause,
      gravida,
      ageOfMenopause,
      para,
      lmp,
      fullTerm,
      preTerm,
      abortion,
      living,
      intervalOfMenstruation,
      duration,
      padsPerDay,
    });

    await newParent.save();
    return res.status(200).json({ success: true, message: "parent created" });
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, error: "server error in adding record" });
  }
};

const getParents = async (req, res) => {
  try {
    const parents = await Parents.find().populate("userId", { password: 0 });
    return res.status(200).json({ success: true, parents });
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, error: "get parents server error" });
  }
};

const getParent = async (req, res) => {
  const { id } = req.params;
  try {
    let parent;
    parent = await Parents.findById({ _id: id }).populate("userId", {
      password: 0,
    });
    if (!parent) {
      parent = await Parents.findOne({ userId: id }).populate("userId", {
        password: 0,
      });
    }
    return res.status(200).json({ success: true, parent });
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, error: "get parents server error" });
  }
};

const updateParent = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      name,
      parentId,
      familyNumber,
      lastName,
      firstName,
      middleName,
      contact,
      phNumber,
      clientType,
      ifMember,
      sex,
      birthday,
      address,
      civilStatus,
      maidenName,
      spouseName,
      partnerName,
      occupation,
      educAttainment,
      empStatus,
      date,
      kpp,
      dependents,
      religion,
      age,
      pallergy,
      pasthma,
      pspecifyAllergy,
      pcancer,
      porganCancer,
      pcerebrovascular,
      pcoronaryArtery,
      pdiabetes,
      pemphysema,
      pepilepsy,
      phepatitis,
      phyperlipidemia,
      phypertension,
      ppepticUlcer,
      ppneumonia,
      pthyroid,
      ppulmonaryTb,
      ppulmonaryTbCategory,
      pextrapulmonaryTb,
      pextrapulmonaryTbCategory,
      puti,
      pmentalIllness,
      pothers,
      pnone,
      pbloodPressure,
      fallergy,
      fasthma,
      fspecifyAllergy,
      fcancer,
      forganCancer,
      fcerebrovascular,
      fcoronaryArtery,
      fdiabetes,
      femphysema,
      fepilepsy,
      fhepatitis,
      fhyperlipidemia,
      fhypertension,
      fpepticUlcer,
      fpneumonia,
      fthyroid,
      fpulmonaryTb,
      fpulmonaryTbCategory,
      fextrapulmonaryTb,
      fextrapulmonaryTbCategory,
      futi,
      fmentalIllness,
      fothers,
      fnone,
      fbloodPressure,
      smoking,
      packsPerYear,
      alcohol,
      bottlesPerDay,
      illicitDrugs,
      illicitDrugsDetails,
      sexualHistory,
      sexualHistoryDetails,
      menarche,
      pregnancyHistory,
      menopause,
      gravida,
      ageOfMenopause,
      para,
      lmp,
      fullTerm,
      preTerm,
      abortion,
      living,
      intervalOfMenstruation,
      duration,
      padsPerDay,
    } = req.body;

    const parent = await Parents.findById({ _id: id });
    if (!parent) {
      return res
        .status(404)
        .json({ success: false, error: "parent not found" });
    }
    const user = await User.findById({ _id: parent.userId });
    if (!user) {
      return res.status(404).json({ success: false, error: "user not found" });
    }

    const updateUser = await User.findByIdAndUpdate(
      { _id: parent.userId },
      { name }
    );
    const updateParent = await Parents.findByIdAndUpdate(
      { _id: id },
      {
        name,
        parentId,
        familyNumber,
        lastName,
        firstName,
        middleName,
        contact,
        phNumber,
        clientType,
        ifMember,
        sex,
        birthday,
        address,
        civilStatus,
        maidenName,
        spouseName,
        partnerName,
        occupation,
        educAttainment,
        empStatus,
        date,
        kpp,
        dependents,
        religion,
        age,
        pallergy,
        pasthma,
        pspecifyAllergy,
        pcancer,
        porganCancer,
        pcerebrovascular,
        pcoronaryArtery,
        pdiabetes,
        pemphysema,
        pepilepsy,
        phepatitis,
        phyperlipidemia,
        phypertension,
        ppepticUlcer,
        ppneumonia,
        pthyroid,
        ppulmonaryTb,
        ppulmonaryTbCategory,
        pextrapulmonaryTb,
        pextrapulmonaryTbCategory,
        puti,
        pmentalIllness,
        pothers,
        pnone,
        pbloodPressure,
        fallergy,
        fasthma,
        fspecifyAllergy,
        fcancer,
        forganCancer,
        fcerebrovascular,
        fcoronaryArtery,
        fdiabetes,
        femphysema,
        fepilepsy,
        fhepatitis,
        fhyperlipidemia,
        fhypertension,
        fpepticUlcer,
        fpneumonia,
        fthyroid,
        fpulmonaryTb,
        fpulmonaryTbCategory,
        fextrapulmonaryTb,
        fextrapulmonaryTbCategory,
        futi,
        fmentalIllness,
        fothers,
        fnone,
        fbloodPressure,
        smoking,
        packsPerYear,
        alcohol,
        bottlesPerDay,
        illicitDrugs,
        illicitDrugsDetails,
        sexualHistory,
        sexualHistoryDetails,
        menarche,
        pregnancyHistory,
        menopause,
        gravida,
        ageOfMenopause,
        para,
        lmp,
        fullTerm,
        preTerm,
        abortion,
        living,
        intervalOfMenstruation,
        duration,
        padsPerDay,
      }
    );

    if (!updateUser || !updateParent) {
      return res.status(404).json({ success: false, error: "info not found" });
    }

    return res
      .status(200)
      .json({ success: true, message: "parent updated successfully" });
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, error: "update parents server error" });
  }
};

const getAllFamilyNumbers = async (req, res) => {
  try {
    const parents = await Parents.find({}, "familyNumber");
    return res.status(200).json({ success: true, familyNumbers: parents });
  } catch (error) {
    return res.status(500).json({ success: false, error: "Failed to fetch family numbers" });
  }
};

const deleteParent = async (req, res) => {
  try {
    const { id } = req.params;

    const parent = await Parents.findById(id);
    if (!parent) {
      return res.status(404).json({ success: false, error: "Parent not found" });
    }

    const user = await User.findByIdAndDelete(parent.userId);
    if (!user) {
      return res.status(404).json({ success: false, error: "Associated user not found" });
    }

    await Vitals.deleteMany({ familyNumber: id });
    await Vaccinations.deleteMany({ familyNumber: id });
    await Parents.findByIdAndDelete(id);

    return res.status(200).json({ success: true, message: "Parent, associated user, and related records deleted successfully" });
  } catch (error) {
    return res.status(500).json({ success: false, error: "Error deleting parent record" });
  }
};


export { addParent, getParents, getParent, updateParent, getAllFamilyNumbers, deleteParent };
