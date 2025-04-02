import express from 'express';
import ConstructionMiddleware from '../ConstructionMiddleware/ConstructionMiddleware.js';
import { getSummary } from '../ConstructionController/DashboardController.js';

const router = express.Router()

router.get('/summary', ConstructionMiddleware, getSummary)


export default router;