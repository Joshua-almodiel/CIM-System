
import Parents from "../Models/Parents.js"
import User from "../Models/User.js"
import bcrypt from "bcryptjs"

const addParent = async (req, res) => {
    try {

        const {
            name,
            email,
            workerId,
            dob,
            gender,
            maritalStatus,
            nationality,
            site,
            salary,
            password,
            role,
        } = req.body;

        const user = await User.findOne({ email })
        if (user) {
            return res.status(400).json({ success: false, error: "Email already registered" })
        }

        const hashPassword = await bcrypt.hash(password, 10)

        const newUser = new User({
            name,
            email,
            password: hashPassword,
            role,
        })
        const saveUser = await newUser.save()

        const newParent = new Parents({
            userId: saveUser._id,
            familyNumber,
            gender,
            maritalStatus,
            nationality,
            salary
        })



        await newParent.save()
        return res.status(200).json({ success: true, message: "parent created" })

    } catch (error) {
        return res.status(500).json({ success: false, error: "server error in adding record" })
    }
}

const getParents = async (req, res) => {
    try {
        const parents = await Parents.find().populate('userId', { password: 0 }).populate('site')
        return res.status(200).json({ success: true, parents })
    } catch (error) {
        return res.status(500).json({ success: false, error: "get parents server error" })
    }
}

const getParent = async (req, res) => {
    const { id } = req.params;
    try {
        let parent;
        parent = await Parents.findById({ _id: id }).populate('userId', { password: 0 })
        if (!parent) {
            parent = await Parents.findOne({ userId: id }).populate('userId', { password: 0 })
        }
        return res.status(200).json({ success: true, parent })
    } catch (error) {
        return res.status(500).json({ success: false, error: "get parents server error" })
    }
}

const updateParent = async (req, res) => {
    try {
        const { id } = req.params;
        const {
            name,
            maritalStatus,
            nationality,
            site,
            salary,
        } = req.body;

        const parent = await Parents.findById({ _id: id })
        if (!parent) {
            return res.status(404).json({ success: false, error: "parent not found" })
        }
        const user = await User.findById({ _id: parent.userId })
        if (!user) {
            return res.status(404).json({ success: false, error: "user not found" })
        }


        const updateUser = await User.findByIdAndUpdate({ _id: parent.userId }, { name })
        const updateParent = await Parents.findByIdAndUpdate({ _id: id }, {
            maritalStatus,
            nationality,
            salary,
            site
        })

        if (!updateUser || !updateWorker) {
            return res.status(404).json({ success: false, error: "info not found" })
        }

        return res.status(200).json({ success: true, message: "parent updated successfully" })

    } catch (error) {
        return res.status(500).json({ success: false, error: "update parents server error" })
    }
}

export { addParent, getParents, getParent, updateParent }