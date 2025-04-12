import express from 'express';
import { login, verify } from '../Controller/AuthController.js'
import Middleware from '../Middleware/Middleware.js'

const router = express.Router();

router.post('/login', login);
router.get('/verify', Middleware, verify);


export default router;
