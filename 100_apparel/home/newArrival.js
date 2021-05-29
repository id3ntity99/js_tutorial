let newArrival = [
  {
    id: 1,
    title: "Solar",
    price: 299.99,
    img: "./Img_home/newArrival_1.jpg",
  },
  {
    id: 2,
    title: "Rainbow",
    price: 199.99,
    img: "./Img_home/newArrival_2.jpg",
  },
  {
    id: 3,
    title: "705 Total Black",
    img: "./Img_home/newArrival_3.jpg",
  },
];

const sectionCenter = document.querySelector(".new-arrival");

let displayItem = newArrival.map((item) => {
  return `<article class="new-item">
  <img src=${item.img} class="new-arrival-photo" />
  <header class="new-item-info">
    <h4 class="item-name">${item.title}</h4>
    <h4 class="item-price">$${item.price}</h4>
  </header>
</article>`;
});

displayItem = displayItem.join("");
sectionCenter.innerHTML = displayItem;
