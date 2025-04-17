import express from 'express';
import Middleware from '../Middleware/Middleware.js';
import {addParent, getParents, getParent, updateParent, getAllFamilyNumbers} from '../Controller/ParentsController.js'

const router = express.Router();


router.get('/', Middleware, getParents)
router.post('/add', Middleware, addParent)
router.get('/family-numbers', Middleware, getAllFamilyNumbers)
router.get('/:id', Middleware, getParent)
router.put('/:id', Middleware, updateParent)



export default router
