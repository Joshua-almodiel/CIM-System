import Parents from "../Models/Parents.js"
import Vaccinations from "../Models/Vaccinations.js";

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
      const upcomingVaccinations = await Vaccinations.countDocuments({ status: "Scheduled" });
      const processingVaccinations = await Vaccinations.countDocuments({ status: "Processing" });
      const cancelVaccinations = await Vaccinations.countDocuments({ status: "Cancel" });
      const totalChildRecords = await Parents.countDocuments();
  
      return res.status(200).json({
        success: true,
        totalVaccinations,
        upcomingVaccinations,
        processingVaccinations,
        cancelVaccinations,
      });
    } catch (error) {
      return res.status(500).json({ success: false, error: "Dashboard stats error" });
    }
  };



export {getSummary, getDashboardStats}