/** @format */
const colors = [
  "#130f40",
  "#4a69bd",
  "#6ab04c",
  "#f15025",
  "#78e08f",
  "#82ccdd",
  "#079992",
  "#b71540",
];
const color = document.querySelector(".color");
const btn = document.getElementById("btn");
btn.addEventListener("click", function () {
  const randonColor = Math.floor(Math.random() * colors.length);
  console.log(randonColor);
  document.body.style.backgroundColor = colors[randonColor];
  color.innerHTML = colors[randonColor];
});
