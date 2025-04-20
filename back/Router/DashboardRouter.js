import express from 'express';
import Middleware from '../Middleware/Middleware.js';
import { getSummary, getDashboardStats } from '../Controller/DashboardController.js';

const router = express.Router()


router.get('/summary', Middleware, getSummary)
router.get("/stats", getDashboardStats);


export default router;