import express from 'express';
import Middleware from '../Middleware/Middleware.js';
import { changePassword } from '../Controller/SettingController.js'

const router = express.Router();


router.put('/change-password', Middleware, changePassword)





export default router
