import express from 'express';
import * as nutritionController from './nutrition_controller.js'
const router = express.Router();

router.route('/food-items').get(nutritionController.getAllFoodItems);

export default router;