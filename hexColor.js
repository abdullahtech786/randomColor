/** @format */

const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const myColor = document.querySelector(".color");
const myButton = document.getElementById("btn");
myButton.addEventListener("click", function () {
  let hexColor = "#";
  for (i = 0; i < 6; i++) {
    let getRandomColor = Math.floor(Math.random() * hex.length);
    hexColor += hex[getRandomColor];
  }
  document.body.style.backgroundColor = hexColor;
  myColor.innerHTML = hexColor;
});
