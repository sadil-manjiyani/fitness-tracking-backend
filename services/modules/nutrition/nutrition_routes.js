import express from 'express';
import * as nutritionController from './nutrition_controller.js'
const router = express.Router();

router.route('/food-items').get(nutritionController.getAllFoodItems);
router.route('/track-food').post(nutritionController.trackFood);
router.route('/track-water').post(nutritionController.trackWater);
router.route('/user-session-details').get(nutritionController.getUserSessionDetails);
export default router;