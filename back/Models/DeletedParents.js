import mongoose from "mongoose";
import { Schema } from "mongoose";

const deletedParentsSchema = new Schema({
  originalId: { type: Schema.Types.ObjectId, required: true },
  familyNumber: { type: Number, required: true },
  lastName: { type: String, required: true },
  middleName: { type: String },
  firstName: { type: String, required: true },
  deletedAt: { type: Date, default: Date.now },
});

const DeletedParents = mongoose.model("DeletedParents", deletedParentsSchema);
export default DeletedParents;