import Parents from "../Models/Parents.js"
import Vaccinations from "../Models/Vaccinations.js";
import Vitals from "../Models/Vitals.js";

const getSummary = async (req, res) => {
    try{
        const totalParents = await Parents.countDocuments()


        return res.status(200).json({
            success: true,
            totalParents
        })

    } catch(error) {
        return res.status(500).json({success: false, error: "dashboard summary error"})
    }
}

const getDashboardStats = async (req, res) => {
    try {
      const totalVaccinations = await Vaccinations.countDocuments();
      const processingVaccinations = await Vaccinations.countDocuments({ status: "Processing" });
      const totalChildRecords = await Parents.countDocuments();
      const totalVitalSigns = await Vitals.countDocuments();
      const totalVaccinated = await Vaccinations.countDocuments({ status: "Scheduled" });
  
      return res.status(200).json({
        success: true,
        totalVaccinations,
        processingVaccinations,
        totalChildRecords,
        totalVitalSigns,
        totalVaccinated,
      });
    } catch (error) {
      return res.status(500).json({ success: false, error: "Dashboard stats error" });
    }
  };



export {getSummary, getDashboardStats}