const getUserInput = () => {
  let weight = parseInt(document.getElementById("weightInput").value);
  let height = parseInt(document.getElementById("heightInput").value);

  console.log(Math.pow(height, 2));

  let BMI = weight / Math.pow(height, 2);
  console.log(BMI);

  document.getElementById("bmiOutput").innerHTML = `${BMI}`;
};
