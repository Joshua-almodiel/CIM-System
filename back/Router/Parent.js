import express from 'express';
import Middleware from '../Middleware/Middleware.js';
import {addParent, getParents, getParent, updateParent, getAllFamilyNumbers, deleteParent} from '../Controller/ParentsController.js'

const router = express.Router();


router.get('/', Middleware, getParents)
router.post('/add', Middleware, addParent)
router.get('/family-numbers', Middleware, getAllFamilyNumbers)
router.get('/:id', Middleware, getParent)
router.put('/:id', Middleware, updateParent)
router.delete('/:id', Middleware, deleteParent);


export default router
