const value = document.querySelector("#counter");
const btns = document.querySelectorAll(".button");

let count = 0;

btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const styles = e.currentTarget.classList;
    if (styles.contains("decrease")) {
      count--;
    } else if (styles.contains("increase")) {
      count++;
    } else {
      count = 0;
    }

    if (count === 0) {
      value.style.color = "#FCCE00";
    } else if (count < 0) {
      value.style.color = "red";
    } else {
      value.style.color = "#19ce60";
    }
    value.textContent = count;
  });
});
