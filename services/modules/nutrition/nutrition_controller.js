import { sendResponse } from "../../../helpers/response_helper.js"

export const getAllFoodItems = async (req,res,next)=> {

    try {
        let searchText = req.query.searchText;
        console.log("Seatch Text", searchText);

        let food_data_query; 
        
        if(searchText && searchText !=""){
            food_data_query = await req.app.knexConnection('m_food_items').where("food_name","like",`%${searchText}%`);
        }else{
            food_data_query= await req.app.knexConnection('m_food_items').limit(10);
        }

        let food_data = await food_data_query;
        
        return sendResponse(res,food_data,"success",200);
    } catch (error) {
        console.log("Error While Inserting nutrients",error);
        return sendResponse(res,[],"error in tracking nutrients",502);
    }

}

export const trackFood = async (req,res,next)=> {
    const {
        food_id,
        serving_size,
        serving_measurment_id,
        session_id
    } = req.body;

    console.log("Reqbidy", req.body);

try{
    console.log(req.app.knexConnection('m_food_items')
    .where({food_id}).orderBy('created_at','DESC').limit(1).toString())
    let [food_data] = await req.app.knexConnection('m_food_items')
    .where({food_id}).orderBy('created_at','DESC').limit(1);
    //assuming quantity in gms
    let calories = (food_data.calories * serving_size)/100;
    let fats = (food_data.fats * serving_size)/100;
    let carbs= (food_data.carbs * serving_size)/100;
    let fiber=(food_data.fiber * serving_size)/100;
    let sugar =(food_data.sugar * serving_size)/100;


    const insertData = {
        food_id,
        serving_size,
        serving_measurment_id,
        calories,
        fat_g: fats,
        carbs_g: carbs,
        fiber_g: fiber,
        sugar_g:sugar,
        session_id
    };

    console.log("Data to Insert", insertData);

    let insert_id = await req.app.knexConnection('m_nutrition').insert(insertData);
    return sendResponse(res,insert_id,"successfully tracked",200);

}catch(error){
    console.log("Error While Inserting nutrients",error);
    return sendResponse(res,[],"error in tracking nutrients",502);
}
}


export const trackWater = async () => {
    try {
        const {}= req.body;

        const dataToInsert ={};
        let water_intake_id = await req.app.knexConnection('m_water_intake').insert(dataToInsert); 
        return sendResponse(res,water_intake_id,"success",200);
    } catch (error) {
        console.log("Error in tracking water", error);
        return sendResponse(res,[],'Error in Tracking Water',error);
    }
}