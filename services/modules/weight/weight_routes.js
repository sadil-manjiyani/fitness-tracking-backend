import express from 'express';
import * as weightController from './weight_controller.js'
const router = express.Router();

// router.route('/login');
router.route('/track-weight').post(weightController.trackWeight);
export default router;