import Vaccinations from "../Models/Vaccinations.js";
import DeletedParents from "../Models/DeletedParents.js";

const getDashboardStats = async (req, res) => {
  try {
    const totalDeleteRecord = await DeletedParents.countDocuments();
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

export { getDashboardStats };
