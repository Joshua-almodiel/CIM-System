import express from 'express';
import Middleware from '../Middleware/Middleware.js';
import { getDashboardStats } from '../Controller/ReportsAndAnalytics.js';

const router = express.Router()


router.get("/stats", Middleware, getDashboardStats);


export default router;