import express from 'express';
import Middleware from '../Middleware/Middleware.js';
import { addVital, getVital } from '../Controller/Vitals.js'

const router = express.Router();


router.post('/add', Middleware, addVital)
router.get('/:id/:role', Middleware, getVital)





export default router
