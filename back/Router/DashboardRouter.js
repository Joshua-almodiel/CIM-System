import express from 'express';
import Middleware from '../Middleware/Middleware.js';
import { getSummary } from '../Controller/DashboardController.js';

const router = express.Router()

router.get('/summary', Middleware, getSummary)


export default router;