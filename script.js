const getUserInput = () => {
  let weight = parseInt(document.getElementById("weightInput").value);
  let height = parseInt(document.getElementById("heightInput").value);

  console.log(weight);
  console.log(height);

  let BMI = weight / (height * height);
  console.log(BMI);

  document.getElementById("bmiOutput").innerHTML = `${BMI}`;
};
