import Parents from "../Models/Parents.js"

const getSummary = async (req, res) => {
    try{
        const totalParents = await Parents.countDocuments()

        const totalSalaries = await Parents.aggregate([
            {$group: {_id: null, totalSalary: {$sum : "$salary"}}}
        ])

        return res.status(200).json({
            success: true,
            totalParents,
            totalSalary: totalSalaries[0]?.totalSalary || 0
        })

    } catch(error) {
        return res.status(500).json({success: false, error: "dashboard summary error"})
    }
}



export {getSummary}