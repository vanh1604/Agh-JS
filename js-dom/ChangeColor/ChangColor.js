const btnChangeColor = document.getElementById("btn-change-color");

btnChangeColor.addEventListener("click", () => {
  const body = document.body;
  const colors = ["red", "green", "blue", "purple", "orange"];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  body.style.backgroundColor = randomColor;
});
