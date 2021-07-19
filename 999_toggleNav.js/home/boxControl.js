let contact = {
  header: "Contact",
  contents: {
    phoneNum: "123-4567",
    location: "Ellison St 123-4,Super Tower, Metro City",
  },
};

const boxes = document.querySelectorAll(".box");
const toggle = document.querySelector(".toggle-frame");
const menu = toggle.querySelectorAll("div");

function boxControl(box) {
  const icon = box.querySelector("i");
  const title = box.querySelector(".title");
  title.classList.toggle("show-text");
  title.classList.toggle("hidden");
  icon.classList.toggle("hide-icon");
  box.classList.toggle("wide");
  box.classList.toggle("hover");
}

function eventHandler(box) {
  box.addEventListener("click", () => boxControl(box));
}

boxes.forEach((box) => {
  eventHandler(box);
});

//각 박스에 알맞은 데이터 할당.
