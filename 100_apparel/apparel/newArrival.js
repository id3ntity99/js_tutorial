const newArrival = [
  {
    id: 1,
    title: "Solar",
    price: 299.99,
    img: "./Img_home/newArrival_1.jpg",
    desc: " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde pariatur ipsa tempore velit mollitia deserunt maiores. Iste ducimus voluptatum, perferendis incidunt sapiente eaque enim cupiditate quis excepturi corrupti. Voluptates, quam.",
  },
  {
    id: 2,
    title: "Rainbow",
    price: 199.99,
    img: "./Img_home/newArrival_2.jpg",
    desc: " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde pariatur ipsa tempore velit mollitia deserunt maiores. Iste ducimus voluptatum, perferendis incidunt sapiente eaque enim cupiditate quis excepturi corrupti. Voluptates, quam.",
  },
  {
    id: 3,
    title: "Original",
    price: 39.99,
    img: "./Img_home/newArrival_3.jpg",
    desc: " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde pariatur ipsa tempore velit mollitia deserunt maiores. Iste ducimus voluptatum, perferendis incidunt sapiente eaque enim cupiditate quis excepturi corrupti. Voluptates, quam.",
  },
  {
    id: 4,
    title: "Veteran Aviator",
    price: 89.99,
    img: "./Img_home/newArrival_4.jpg",
    desc: " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde pariatur ipsa tempore velit mollitia deserunt maiores. Iste ducimus voluptatum, perferendis incidunt sapiente eaque enim cupiditate quis excepturi corrupti. Voluptates, quam.",
  },
  {
    id: 5,
    title: "Jelly",
    img: "./Img_home/newArrival_5.jpg",
    price: 120.99,
    desc: " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde pariatur ipsa tempore velit mollitia deserunt maiores. Iste ducimus voluptatum, perferendis incidunt sapiente eaque enim cupiditate quis excepturi corrupti. Voluptates, quam.",
  },
];

const sectionCenter = document.querySelector(".section-center");

let displayItem = newArrival.map((item) => {
  return `<article class="menu-item">
  <img src=${item.img} class="photo" />
  <div class="item-info">
    <header>
      <h4 class="item-name">${item.title}</h4>
      <h4 class="item-price">$${item.price}</h4>
    </header>
    <p>${item.desc.slice(0, 140)}...</p>
  </div>
</article>`;
});

displayItem = displayItem.join("");
sectionCenter.innerHTML = displayItem;
