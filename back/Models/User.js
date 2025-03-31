import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  // Core Fields (Converted from CWMS)
  fullName: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, "Invalid email"],
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
  },
  role: {
    type: String,
    enum: ["admin", "healthworker", "parent"],
    required: true,
  },

  // New Healthcare-Specific Fields
  healthCenter: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "HealthCenter",
  },
  children: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Child",
    },
  ],

  createdAt: {
    type: Date,
    default: Date.now,
    immutable: true,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
  lastLogin: Date,
  isActive: {
    type: Boolean,
    default: true,
  },
});

// Auto-update timestamp
userSchema.pre("save", function (next) {
  this.updatedAt = Date.now();
  next();
});

const User = mongoose.model("User", userSchema);
export default User;
