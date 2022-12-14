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
    let a = height * weight;
    result.innerHTML = `${a}`;

    /*console.log(Math.pow(height, 2));

    let BMI = weight / Math.pow(height, 2);
    console.log(BMI);
    result.innerHTML = `${BMI}`;*/
  }
}
