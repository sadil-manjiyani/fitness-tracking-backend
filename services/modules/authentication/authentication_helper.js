import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
export async function hashPassword(password) {
    const saltRounds = 10; 
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    return hashedPassword;
  }

  export function decodeJWT(token) {
    try {
      console.log("Token is ", token);
      const decoded = jwt.decode(token, { complete: true });
      console.log('Decoded Token:', decoded);
      return {"status":true,"data":decoded};
    } catch (err) {
      console.error('Error decoding token:', err);
      return {"status":false,"data":null};
      
    }
  }  