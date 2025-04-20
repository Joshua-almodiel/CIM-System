import mongoose from "mongoose";
import { Schema } from "mongoose";

const vaccinationSchema = new Schema({
    familyNumber: {type: Schema.Types.ObjectId, ref: "Parents", required: true},
    vaccinationType: {type: String, enum: ["BCG", "HEPATITIS B", "PENTAVALENT VACCINE", "ORAL POLIO VACCINE", "INACTIVATED POLIO VACCINE", "PNEUMOCOCCAL CONJUGATE VACCINE"], required: true},
    startDate: {type: Date, required: true},
    startTime: { type: String, required: true },
    reason: {type: String, required: true},
    status: {type: String, enum: ["Processing", "Scheduled", "Cancel"], default: "Processing"},
    appliedAt: {type: Date, default: Date.now},
    updatedAt: {type: Date, default: Date.now}
})

const Vaccinations = mongoose.model("Vaccinations", vaccinationSchema);
export default Vaccinations;