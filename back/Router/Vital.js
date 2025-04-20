import express from "express";
import Middleware from "../Middleware/Middleware.js";
import { addVital, getVital, getVitals } from "../Controller/Vitals.js";
import Vitals from "../Models/Vitals.js";

const router = express.Router();

router.post("/add", Middleware, addVital);
router.get("/:id/:role", Middleware, getVital);
router.get("/:id", Middleware, getVitals);
router.put("/single/:id", Middleware, async (req, res) => {
  try {
    const updatedVital = await Vitals.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedVital)
      return res.status(404).json({ success: false, message: "Not found" });

    res.json({ success: true, vital: updatedVital });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Update failed" });
  }
});

export default router;
