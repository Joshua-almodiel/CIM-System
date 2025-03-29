import mongoose from "mongoose";
import { Schema } from "mongoose";

const childSchema = new Schema({
  // Core Identification (Converted from Workers)
  parentId: { 
    type: Schema.Types.ObjectId, 
    ref: "User", 
    required: true 
  },
  childId: { 
    type: String, 
    required: true, 
    unique: true,
    match: [/^CHD-\d{4}$/, 'ID format: CHD-0001'] 
  },
  dob: { 
    type: Date, 
    required: true,
    validate: {
      validator: function(dob) {
        return dob <= new Date();
      },
      message: "Birth date cannot be in the future"
    } 
  },
  gender: { 
    type: String, 
    enum: ['male', 'female', 'other'],
    required: true 
  },

  // New Healthcare Fields
  birthWeight: { type: Number }, // in kg
  bloodType: { 
    type: String,
    enum: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-', null]
  },
  allergies: [String],
  healthCenter: { 
    type: Schema.Types.ObjectId, 
    ref: "HealthCenter",
    required: true 
  },
  immunizationRecords: [{
    vaccine: { type: Schema.Types.ObjectId, ref: "Vaccine" },
    dateAdministered: Date,
    administeredBy: { type: Schema.Types.ObjectId, ref: "User" },
    doseNumber: Number,
    lotNumber: String,
    reactionNotes: String
  }],

  // Audit Fields
  createdAt: { 
    type: Date, 
    default: Date.now,
    immutable: true 
  },
  updatedAt: { 
    type: Date, 
    default: Date.now 
  }
});

// Auto-update timestamp
childSchema.pre('save', function(next) {
  this.updatedAt = Date.now();
  next();
});

// Age calculation virtual field
childSchema.virtual('ageInMonths').get(function() {
  const today = new Date();
  const birthDate = new Date(this.dob);
  return (today.getFullYear() - birthDate.getFullYear()) * 12 + 
         (today.getMonth() - birthDate.getMonth());
});

const Child = mongoose.model("Child", childSchema);
export default Child;