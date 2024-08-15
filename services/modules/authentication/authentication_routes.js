import * as authenticationController from './authentication_controller.js'; 
import express from 'express';
const router = express.Router();

router.route('/login').post(authenticationController.login);

export default router;