function calculateBMI() {
    const weight = document.getElementById("weight").value;
    const height = document.getElementById("height").value;
  
 
    if (!weight || !height) {
      alert("Please enter both weight and height.");
      return;
    }

    const heightInMeters = height / 100;
  
    const bmi = weight / (heightInMeters * heightInMeters);
  
    const bmiResult = document.getElementById("result");
    bmiResult.textContent = `Your BMI is: ${bmi.toFixed(1)}`;
  
    let category;
    if (bmi < 18.5) {
      category = "Underweight";
    } else if (bmi >= 18.5 && bmi < 25) {
      category = "Normal weight";
    } else if (bmi >= 25 && bmi < 30) {
      category = "Overweight";
    } else {
      category = "Obese";
    }
  
    bmiResult.textContent += ` - Category: ${category}`;
  }
  