const body = document.getElementsByTagName("body")[0];
const colorInput = document.getElementById("colorInput");
const colorInput2 = document.getElementById("colorInput2");
const startColorDisplay = document.getElementById("startColorDisplay");
const endColorDisplay = document.getElementById("endColorDisplay");
let startColor = colorInput.value;
let endColor = colorInput2.value;
let gradient = `linear-gradient(to right, ${startColor}, ${endColor})`;

const updateGradient = () => {
  gradient = `linear-gradient(to right, ${startColor}, ${endColor})`;
  body.style.background = gradient;
};

updateGradient();

colorInput.addEventListener("change", function() {
  startColor = this.value;
  updateGradient();
  startColorDisplay.textContent = startColor;
});

colorInput2.addEventListener("change", function() {
  endColor = this.value;
  updateGradient();
  endColorDisplay.textContent = endColor;
});
