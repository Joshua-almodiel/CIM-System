import express from 'express';
import Middleware from '../Middleware/Middleware.js';
import { addSalary, getSalary} from '../Controller/Salaries.js'

const router = express.Router();


router.post('/add', Middleware, addSalary)
router.get('/:id/:role', Middleware, getSalary)





export default router
