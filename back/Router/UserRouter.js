import express from 'express';
import { login, verify, getAllUserEmails, registerHealthWorker } from '../Controller/AuthController.js'
import Middleware from '../Middleware/Middleware.js'

const router = express.Router();

router.post('/login', login);
router.get('/verify', Middleware, verify);
router.get('/emails', Middleware, getAllUserEmails);
router.post('/register', Middleware, registerHealthWorker);

export default router;
