import * as authenticationController from './authentication_controller.js'; 
import express from 'express';
const router = express.Router();

router.route('/login').post(authenticationController.login);
router.route('/signup').post(authenticationController.signUp);


export default router;