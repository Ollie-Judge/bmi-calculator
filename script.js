window.onload = () => {
  let button = document.getElementById("submitButton");

  button.addEventListener("click", calculateBMI);
};

function calculateBMI() {
  let height = parseInt(document.getElementById("heightInput").value);

  let weight = parseInt(document.getElementById("weightInput").value);

  let result = document.getElementById("bmiOutput");

  if (height === "" || isNaN(height))
    result.innerHTML = "Provide a valid Height!";
  else if (weight === "" || isNaN(weight))
    result.innerHTML = "Provide a valid Weight!";
  else {
    console.log(Math.pow(height, 2));

    let BMI = weight / Math.pow(height, 2);
    console.log(BMI);
    result.innerHTML = `${BMI}`;

    let a = 1.8;
    let b = 65;

    let bmiTest = 65 / Math.pow(1.8, 2);

    console.log(bmiTest);
  }
}
