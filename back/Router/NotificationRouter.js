import express from "express";
import { sendEmailNotification } from "../Controller/NotificationController.js";

const router = express.Router();

router.post("/send-email", sendEmailNotification);

export default router;