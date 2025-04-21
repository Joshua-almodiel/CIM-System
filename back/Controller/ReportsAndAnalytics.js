import Parents from "../Models/Parents.js"
import Vaccinations from "../Models/Vaccinations.js";

const getDashboardStats = async (req, res) => {
    try {;
      const totalDeleteRecord = await Parents.countDocuments();
      const totalCancelled = await Vaccinations.countDocuments({ status: "Cancel" });
  
      return res.status(200).json({
        success: true,
        totalDeleteRecord,
        totalCancelled,
      });
    } catch (error) {
      return res.status(500).json({ success: false, error: "Dashboard stats error" });
    }
  };



export { getDashboardStats}