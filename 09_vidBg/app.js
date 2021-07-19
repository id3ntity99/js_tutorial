const btn = document.querySelector(".switch-btn");
const vid = document.querySelector(".video-container");

btn.addEventListener("click", () => {
  if (!btn.classList.contains("slide")) {
    btn.classList.add("slide");
    vid.pause();
  } else {
    btn.classList.remove("slide");
    vid.play();
  }
});

// preloader loading
const preloader = document.querySelector(".preloader");
window.addEventListener("load", () => {
  preloader.classList.add("hide-preloader");
});
