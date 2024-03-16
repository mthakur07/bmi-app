import React, { useState } from 'react';
import './App.css' 

function BMICalculator() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBMI] = useState(null);
  const [msg, setMsg] = useState('');

  const calculateBMI = () => {
    if (weight && height) {
      const heightMeters = height / 100;
      const bmiValue = (weight / (heightMeters * heightMeters)).toFixed(2);        
      setBMI(bmiValue);
  
  
      if (bmiValue >= 26) {
        setMsg("You are overweight.");
      } else if (bmiValue < 18.5) {
        setMsg("You are underweight.");
      } else {
        setMsg("Your weight is normal: .");
      }
    }
  };

  return (
    <div>
      <h2>BMI Calculator</h2>
      <div>
        <label htmlFor="weight">Weight (kg):</label>
        <input
          type="number"
          id="weight"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="height">Height (cm):</label>
        <input
          type="number"
          id="height"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />
      </div>
      <button onClick={calculateBMI}>Calculate BMI</button>
      {bmi && (
        <div>
          <h3>Your BMI is: {bmi}</h3>
          <h4>{msg}</h4>
        </div>
      )}
    </div>
  );
}

export default BMICalculator;
