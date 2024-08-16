import express from 'express';
import * as userController from './user_controller.js'
const router = express.Router();

// router.route('/login');
router.route('/user-details/:user_id').get(userController.getUserDetails);
router.route('/calculate-bmi/:user_id').get(userController.getBMI);
export default router;