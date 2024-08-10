import * as authentication_helper from './authentication_helper.js';
export const signUp = (req,res,next)=>{
    const {
        email,
        password,
        user_name,
        height,
        weight
    }= req.body;

    const hashedPassword = authentication_helper.hashPassword(password);
    console.log("Hashed Password>>>>",hashedPassword);

}