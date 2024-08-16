import { sendResponse } from '../../../helpers/response_helper.js';
import { decodeJWT } from '../authentication/authentication_helper.js';
import * as userHelper from './user_helper.js';

export const getUserDetails = async (req,res,next)=>{
    try{
        let auth_token = req.headers.authorization;
        console.log("AUTH FROM headers", auth_token);
        let decodedResponse = decodeJWT(auth_token);
        if(!decodedResponse.status){
            return sendResponse(res,[],"Cannot Get user Details",404);
        }
        let user_id = decodedResponse.data.payload.user_id;
        console.log("user Id is>>>>", user_id);
    

        let [user_details] = await req.app.knexConnection('u_user').where({"user_id": user_id});

        if(!user_details){
            return sendResponse(res,[],"User Not Found",404);
        }else{
            return sendResponse(res,user_details,"success");
        }
    }catch(error){
        console.log("Error while getting user details", error);
        return sendResponse(res,[],"Unexpected server error",500);
    }
}

export const getBMI = async (req,res,next)=> {
    
    try{
        let user_id = req.params.user_id;
    let [user_details] = await req.app.knexConnection('u_user').where({"user_id": user_id});

        if(!user_details){
            return sendResponse(res,[],"User Not Found",404);
        }
        const bmi_data = userHelper.calculateBMI(user_details.weight_kg,user_details.height_cm);
        return sendResponse(res,bmi_data,"success",200);
        
    }catch(error){
        console.log("Error while getting user details", error);
        return sendResponse(res,[],"Unexpected server error",500);
    }

}

