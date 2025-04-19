import Parents from "../Models/Parents.js";
import Vitals from "../Models/Vitals.js";

const addVital = async (req, res) => {

    try {
        const { familyNumber, dateComplaints, chiefComplaints, bp, hr, o2sat, temp, rr, wt, ht, bmi } = req.body;

        const newVital = new Vitals({
            familyNumber,
            dateComplaints,
            chiefComplaints,
            bp,
            hr,
            o2sat,
            temp,
            rr,
            wt,
            ht,
            bmi
        })

        await newVital.save()

        return res.status(200).json({ success: true })

    } catch (error) {
        return res.status(400).json({ success: false, error: "Vitals add server error" })
    }

}

const getVital = async (req, res) => {
    try {
        const {id, role} = req.params;

        let vital
        if(role === "healthWorker") {
            vital = await Vitals.find({familyNumber: id}).populate('familyNumber', 'familyNumber')
        } else {
            const parent = await Parents.findOne({userId: id})
            vital = await Vitals.find({familyNumber: parent._id}).populate('familyNumber', 'familyNumber')
            console.log(vital)
        }

        return res.status(200).json({success: true, vital})
    } catch (error) {
        return res.status(400).json({ success: false, error: "Vital get server error" })
    } 
}



export { addVital, getVital, }