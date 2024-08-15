import { sendResponse } from '../../../helpers/response_helper.js';
import * as authentication_helper from './authentication_helper.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

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

export const login = async (req,res,next) => {

  console.log("Req.body>>", req.body);
   
    const { user_email, user_password } = req.body;
    
    if (!user_email || !user_password) {
        return sendResponse(res,[],"Insufficient Data",422);
    };
    
    try {
      // Check if the user exists
      const user = await req.app.knexConnection('u_user').where({ user_email }).first();
  
      if (!user) {
        return sendResponse(res, null, 'User not found',404);
      }
  
      // Check if the password is correct
      const isMatch = await bcrypt.compare(user_password, user.user_password);
  
      if (!isMatch) {
        return sendResponse(res, null, 'Invalid credentials',401);
      }
  
      // Generate a JWT token
      const token = jwt.sign(
        { user_id: user.user_id, user_email: user.user_email },
        process.env.JWT_SECRET,
        { expiresIn: '90d' } 
      );
  
      // Send the token in the response
      sendResponse(res, { token }, 'Login successful');
    } catch (error) {
      console.error('Login error:', error);
      sendResponse(res, null, 'Server error',500);
    }

}