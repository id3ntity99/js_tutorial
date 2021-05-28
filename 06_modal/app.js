const openBtn = document.querySelector(".modal_btn");
const overlay = document.querySelector(".modal-overlay");
const closeBtn = document.querySelector(".close-btn");

openBtn.addEventListener("click", () => {
  //overlay.classList.toggle("open-modal"); //Use classList.toggle
  if (overlay.classList.contains("open-modal")) {
    overlay.classList.remove("open-modal");
  } else {
    overlay.classList.add("open-modal");
  }
});

closeBtn.addEventListener("click", () => {
  //overlay.classList.toggle("open-modal"); //Use classList.toggle
  if (overlay.classList.contains("open-modal")) {
    overlay.classList.remove("open-modal");
  } else {
    overlay.classList.add("open-modal");
  }
});
