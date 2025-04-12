
import Vaccinations from "../Models/Vaccinations.js";
import Parents from "../Models/Parents.js";

const addLeave = async (req, res) => {
    try {
        const { userId, leaveType, startDate, endDate, reason } = req.body;
        const parent = await Parents.findOne({ userId });

        const newLeave = new ConstructionLeaves({
            familyNumber: parent._id, leaveType, startDate, reason
        })

        await newLeave.save()

        return res.status(200).json({ success: true })

    } catch (error) {
        return res.status(400).json({ success: false, error: "Leave add server error" })
    }

}

const getVaccination = async (req, res) => {
    try {
        const { id, role } = req.params;
        let vaccinations
        if(role === "healthWorker") {
            vaccinations = await Vaccinations.find({ familyNumber: id })
        } else {
            const parent = await Parents.findOne({ userId: id })
            vaccinations = await Vaccinations.find({ familyNumber: parent._id })
        }

        return res.status(200).json({ success: true, vaccinations })

    } catch (error) {
        return res.status(400).json({ success: false, error: "Vaccine add server error" })
    }
}

const getVaccinations = async (req, res) => {
    try {
        const vaccinations = await Vaccinations.find().populate({
            path: "familyNumber",
            populate: [
                {
                    path: 'userId',
                    select: 'name'
                }
            ]
        });

        console.log(vaccinations)

        return res.status(200).json({ success: true, leaves })

    } catch (error) {
        return res.status(400).json({ success: false, error: "Leave get server error" })
    }
}

const getVaccinationDetail = async (req, res) => {
    try {
        const { id } = req.params;
        const vaccination = await Vaccinations.findById({ _id: id }).populate({
            path: "familyNumber",
            populate: [
                {
                    path: 'userId',
                    select: 'name'
                }
            ]
        });

        return res.status(200).json({ success: true, vaccination })

    } catch (error) {
        return res.status(400).json({ success: false, error: "Vaccination get server error" })
    }
}

const updateVaccination = async (req, res) => {
    try {
        const { id } = req.params;
        const leave = await Vaccinations.findByIdAndUpdate({ _id: id }, { status: req.body.status });
        if (!leave) {
            return res.status(400).json({ success: false, error: "Leave not found" })
        }
        return res.status(200).json({ success: true })
    } catch (error) {
        return res.status(400).json({ success: false, error: "Leave add server error" })
    }
}

export { addLeave, getVaccination, getVaccinations, getLeaveDetail, updateLeave }