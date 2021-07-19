const menuToggle = document.querySelector("#menu-toggle");
const active = document.querySelectorAll(".active-element");

// Using For
menuToggle.addEventListener("click", () => {
  /*
  //Using "for" because IE11 doesn't support "forEach"
  for (activated = 0; activated < active.length; activated++) {
    active[activated].classList.toggle("active");
  }
  */
  active.forEach((e) => {
    e.classList.toggle("active");
  });
});
