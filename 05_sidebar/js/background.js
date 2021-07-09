const images = [
  "img1.jpg",
  "img2.jpg",
  "img3.jpg",
  "img4.jpg",
  "img5.jpg",
  "img6.jpg",
  "img7.jpg",
  "img8.jpg",
];

const chosenImage = images[Math.floor(Math.random() * images.length)];
const bgImage = `url('img/${chosenImage}')`;

document.body.style.backgroundImage = bgImage;
document.body.className = "backgroud_img";
