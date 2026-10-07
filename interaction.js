const slider = document.getElementById("size-slider");
const square = document.getElementById("square");

function changeSize() {
  square.style.width = slider.value + "px";
  square.style.height = slider.value + "px";
}

slider.addEventListener("input", changeSize);