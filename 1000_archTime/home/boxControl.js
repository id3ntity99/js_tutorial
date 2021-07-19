const footer = document.querySelector("footer");
const minimize = document.querySelector(".minimize");
const boxes = document.querySelectorAll(".box");

minimize.addEventListener("click", () => {
  footer.classList.toggle("min");
});
