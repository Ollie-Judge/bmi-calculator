window.onload = () => {
  let button = document.getElementById("submitButton");

  button.addEventListener("click", calculateBMI);
};

function calculateBMI() {
  let height = parseFloat(document.getElementById("heightInput").value);

  let weight = parseFloat(document.getElementById("weightInput").value);

  let result = document.getElementById("bmiOutput");

  if (height === "" || isNaN(height))
    result.innerHTML = "Provide a valid Height!";
  else if (weight === "" || isNaN(weight))
    result.innerHTML = "Provide a valid Weight!";
  else {
    let BMI = weight / Math.pow(height, 2);
    console.log(BMI);
    result.innerHTML = `${BMI}`;
  }
}
