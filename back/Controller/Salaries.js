import Parents from "../Models/Parents.js";
import Salaries from "../Models/Salaries.js";

const addSalary = async (req, res) => {

    try {
        const { parentId, basicSalary, bunos, advanceSalary, payDate } = req.body;

        const totalSalary = parseInt(basicSalary) + parseInt(bunos) - parseInt(advanceSalary)

        const newSalary = new Salaries({
            parentId,
            basicSalary,
            bunos,
            advanceSalary,
            netSalary: totalSalary,
            payDate
        })

        await newSalary.save()

        return res.status(200).json({ success: true })

    } catch (error) {
        return res.status(400).json({ success: false, error: "salary add server error" })
    }

}

const getSalary = async (req, res) => {
    try {
        const {id, role} = req.params;

        let salary
        if(role === "healthWorker") {
            salary = await Salaries.find({parentId: id}).populate('parentId', 'parentId')
        } else {
            const parent = await Parents.findOne({userId: id})
            salary = await Salaries.find({parentId: parent._id}).populate('parentId', 'parentId')
            console.log(salary)
        }

        return res.status(200).json({success: true, salary})
    } catch (error) {
        return res.status(400).json({ success: false, error: "salary get server error" })
    } 
}

export { addSalary, getSalary }