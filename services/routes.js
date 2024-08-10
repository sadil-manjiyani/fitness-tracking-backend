import express from 'express';
import authenticationRoutes from './modules/authentication/authentication_routes.js';
import nutritionRoutes from './modules/nutrition/nutrition_routes.js'
import weightRoutes from './modules/weight/weight_routes.js';
import dashboardRoutes from './modules/dashboard/dashboard_routes.js';
const router = express.Router();

router.use('/', authenticationRoutes);
router.use('/nutrition',nutritionRoutes);
router.use('/weight',weightRoutes);
router.use('/admin',dashboardRoutes);
router.get('/',(req,res)=>{
    return res.send("Hello World")});
export default router;
