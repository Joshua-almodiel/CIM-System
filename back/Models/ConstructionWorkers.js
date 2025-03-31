import mongoose from "mongoose";
import { Schema } from "mongoose";

const workersSchema = new Schema({
    userId: { type: Schema.Types.ObjectId, ref: "ConstructionUser", required: true },
    workerId: { type: String, required: true, unique: true },
    dob: { type: Date },
    gender: { type: String },
    birthWeight: { type: Number },
    bloodType: { type: String, enum: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-', null]},



    maritalStatus: { type: String },
    nationality: { type: String },
    site: { type: Schema.Types.ObjectId, ref: "Site", required: true },
    salary: { type: Number, required: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
});

const ConstructionWorkers = mongoose.model("ConstructionWorkers", workersSchema);
export default ConstructionWorkers;