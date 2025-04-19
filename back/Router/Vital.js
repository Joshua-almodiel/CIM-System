import express from 'express';
import Middleware from '../Middleware/Middleware.js';
import { addVital, getVital, updateVital} from '../Controller/Vitals.js'

const router = express.Router();


router.post('/add', Middleware, addVital)
router.get('/:id/:role', Middleware, getVital)
router.put('/edit/:id', Middleware, updateVital)





export default router
