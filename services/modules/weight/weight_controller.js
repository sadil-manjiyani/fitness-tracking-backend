import {sendResponse} from '../../../helpers/response_helper.js';
export const trackWeight = async (req,res,next)=> {
    const {
        weight
    }= req.body;

    try {
        let weight_id=await req.app.knexConnection('m_weight_data').insert({
            weight_kg:weight,
            date:new Date()
        });
        
        return sendResponse(res,weight_id,"Weight Tracked successfully");
    } catch (error) {
        console.log("Error in Tracking weight",error);
        return sendResponse(res,[],"Error in tracking weight",502);
    }
} 

export const getWeight = async (req,res,next)=>{
    try {
        let weight_data = await req.app.knexConnection('m_weight_data');
        return sendResponse(res,weight_data,"success",200);
    } catch (error) {
        console.log("Error While getting weight data", error);
        return sendResponse(res,[],"Error in Getting weight",502);
    }
}