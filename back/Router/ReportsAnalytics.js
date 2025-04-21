import express from 'express';
import Middleware from '../Middleware/Middleware.js';
import { getDashboardStats } from '../Controller/DashboardController.js';

const router = express.Router()


router.get("/stats", getDashboardStats);


export default router;