import mongoose from "mongoose";
import { Schema } from "mongoose";

const SalarySchema = new Schema({
    familyNumber: {type: Schema.Types.ObjectId, ref: 'Parents', required: true},
    basicSalary: {type: Number, required: true},
    bunos: {type: Number},
    advanceSalary: {type: Number},
    netSalary: {type: Number},
    payDate: {type: Date, required: true},
    createdAt: {type: Date, default: Date.now},
    updatedAt: {type: Date, default: Date.now}
})

const Salaries = mongoose.model('Salaries', SalarySchema);
export default Salaries;