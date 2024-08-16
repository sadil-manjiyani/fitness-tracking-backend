export const calculateBMI= (weight,height)=>{

    if (weight <= 0 || height <= 0) {
        throw new Error("Weight and height must be positive numbers.");
      }

      const heightMeters = height / 100; 
    
      const bmi = weight / (heightMeters * heightMeters);
      return parseFloat(bmi.toFixed(2));
}