import Parents from "../Models/Parents.js"

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



export {getSummary}