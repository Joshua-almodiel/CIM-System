import mongoose from "mongoose";
import { Schema } from "mongoose";

const VitalSchema = new Schema({
    familyNumber: {type: Schema.Types.ObjectId, ref: 'Parents', required: true},
    dateComplaints: {type: Date, required: true},
    chiefComplaints: {type: String},
    bp: {type: String},
    hr: {type: String},
    o2sat: {type: String},
    temp: {type: String},
    rr: {type: String},
    wt: {type: String},
    ht: {type: String},
    bmi: {type: String},
    createdAt: {type: Date, default: Date.now},
    updatedAt: {type: Date, default: Date.now}
})

const Vitals = mongoose.model('Vitals', VitalSchema);
export default Vitals;