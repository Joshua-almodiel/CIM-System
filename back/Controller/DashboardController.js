import Parents from "../Models/Parents.js"
import ConstructionLeaves from "../Models/ConstructionLeaves.js"

const getSummary = async (req, res) => {
    try{
        const totalParents = await Parents.countDocuments()

        const totalSalaries = await Parents.aggregate([
            {$group: {_id: null, totalSalary: {$sum : "$salary"}}}
        ])

        const parentAppliedForLeave = await ConstructionLeaves.distinct('familyNumber')

        const leaveStatus = await ConstructionLeaves.aggregate([
            {$group: {
                _id: "$status",
                count: {$sum: 1}
            }}
        ])

        const leaveSummary = {
            appliedFor: parentAppliedForLeave.length,
            approved: leaveStatus.find(item => item._id === "Approved")?.count || 0,
            rejected: leaveStatus.find(item => item._id === "Rejected")?.count || 0,
            pending: leaveStatus.find(item => item._id === "Pending")?.count || 0,
        }

        return res.status(200).json({
            success: true,
            totalParents,
            totalSalary: totalSalaries[0]?.totalSalary || 0,
            leaveSummary
        })

    } catch(error) {
        return res.status(500).json({success: false, error: "dashboard summary error"})
    }
}



export {getSummary}