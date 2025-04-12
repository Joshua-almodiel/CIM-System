import express from 'express';
import Middleware from '../Middleware/Middleware.js';
import {addVaccination, getVaccination, getVaccinations, getVaccinationDetail, updateVaccination} from '../Controller/VaccinationsController.js'

const router = express.Router();


router.post('/add', Middleware, addVaccination)
router.get('/detail/:id', Middleware, getVaccinationDetail)
router.get('/:id/:role', Middleware, getVaccination)
router.get('/', Middleware, getVaccinations)
router.put('/:id', Middleware, updateVaccination)





export default router
