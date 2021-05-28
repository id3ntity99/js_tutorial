const hero = document.querySelector("#hero");
const button = document.getElementById("btn");
const colorName = document.getElementById("colorName");

const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"];

const getRandomNumber = () => {
  return Math.floor(Math.random() * hex.length);
};

button.addEventListener("click", () => {
  let hexCode = "#";
  for (let i = 0; i < 6; i++) {
    hexCode += hex[getRandomNumber()];
  }
  hero.style.backgroundColor = hexCode;
  colorName.textContent = hexCode;
});
