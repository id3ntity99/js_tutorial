const prod = [
  {
    id: 1,
    img: "./Img_prod/prod_3.jpg",
    title: "Blue",
    price: 29.99,
    desc: " Lorem ipsum ",
    category: "tshirt",
  },
  {
    id: 2,
    img: "./Img_prod/prod_4.jpg",
    title: "Save Us",
    price: 29.99,
    desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus accusamus quae excepturi ut, ",
    category: "tshirt",
  },
  {
    id: 3,
    img: "./Img_prod/prod_5.jpg",
    title: "Made Will Made Will",
    price: 29.99,
    desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus accusamus quae excepturi ut, fugit corporis explicabo placeat libero repellendus accusantium laboriosam itaque provident nihil numquam officiis atque recusandae ex quo!",
    category: "tshirt",
  },
  {
    id: 4,
    img: "./Img_prod/prod_6.jpg",
    title: "Semi",
    price: 29.99,
    desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus accusamus  ",
    category: "shirt",
  },
  {
    id: 5,
    img: "./Img_prod/prod_7.jpg",
    title: "Casual",
    price: 29.99,
    desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus accusamus quae excepturi ut, fugit corporis explicabo placeat libero repellendus accusantium laboriosam itaque provident nihil numquam officiis atque recusandae ex quo!",
    category: "shirt",
  },
  {
    id: 6,
    img: "./Img_prod/prod_8.jpg",
    title: "Colorful",
    price: 29.99,
    desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus accusamus quae excepturi ut, fugit corporis explicabo placeat libero repellendus accusantium laboriosam itaque provident nihil numquam officiis atque recusandae ex quo!",
    category: "shirt",
  },
  {
    id: 7,
    img: "./Img_prod/prod_0.jpg",
    title: "Rider's",
    price: 29.99,
    desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus accusamus quae excepturi ut, fugit corporis explicabo placeat libero repellendus accusantium laboriosam itaque provident nihil numquam officiis atque recusandae ex quo!",
    category: "outers",
  },
  {
    id: 8,
    img: "./Img_prod/prod_1.jpg",
    title: "Retro",
    price: 29.99,
    desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus accusamus quae excepturi ut, fugit corporis explicabo placeat libero repellendus accusantium laboriosam itaque provident nihil numquam officiis atque recusandae ex quo!",
    category: "outers",
  },
  {
    id: 9,
    img: "./Img_prod/prod_2.jpg",
    title: "Blazer",
    price: 29.99,
    desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus accusamus quae excepturi ut, fugit corporis explicabo placeat libero repellendus accusantium laboriosam itaque provident nihil numquam officiis atque recusandae ex quo!",
    category: "outers",
  },
  {
    id: 10,
    img: "./Img_prod/prod_9.jpg",
    title: "3 Colors",
    price: 29.99,
    desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus accusamus quae excepturi ut, fugit corporis explicabo placeat libero repellendus accusantium laboriosam itaque provident nihil numquam officiis atque recusandae ex quo!",
    category: "pants",
  },
  {
    id: 11,
    img: "./Img_prod/prod_10.jpg",
    title: "Basic Destroyed",
    price: 29.99,
    desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus accusamus quae excepturi ut, fugit corporis explicabo placeat libero repellendus accusantium laboriosam itaque provident nihil numquam officiis atque recusandae ex quo!",
    category: "pants",
  },
  {
    id: 12,
    img: "./Img_prod/prod_11.jpg",
    title: "Lots of",
    price: 29.99,
    desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus accusamus quae excepturi ut, fugit corporis explicabo placeat libero repellendus accusantium laboriosam itaque provident nihil numquam officiis atque recusandae ex quo!",
    category: "pants",
  },
  {
    id: 13,
    img: "./Img_prod/prod_9.jpg",
    title: "Test Tester got Tested",
    price: 99.98,
    desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus accusamus quae excepturi ut, fugit corporis explicabo placeat libero repellendus accusantium laboriosam itaque provident nihil numquam officiis atque recusandae ex quo!",
    category: "pants",
  },
];

const filterBtns = document.querySelectorAll(".filter-btn");

window.addEventListener("DOMContentLoaded", () => {
  displayProducts(prod);

  displayButton();
});

const controlModal = () => {
  const modals = document.querySelectorAll(".modal");
  const closeModals = document.querySelectorAll(".close-modal");
  const article = document.querySelectorAll(".menu-item");
  article.forEach((menu) => {
    menu.addEventListener("click", (e) => {
      const id = e.currentTarget.dataset.id;
      modals.forEach((modal) => {
        if (modal.classList.contains(`${id}`)) {
          modal.classList.toggle("open-modal");
        }
        closeModals.forEach((closeModal) => {
          closeModal.addEventListener("click", () => {
            modal.classList.remove("open-modal");
          });
        });
      });
    });
  });
};

const displayProducts = (menu) => {
  let items = menu.map((item) => {
    return `
    <div class="item-container">
    <article class="menu-item" data-id="${item.id}">
    <img class="photo" src=${item.img}  />
    <div class="item-info">
    <header>
    <h4>${item.title}</h4>
    <h4 class="price">$${item.price}</h4>
    </header>
    <p class="item-text">
    ${item.desc.slice(0, 140)}...
    </p>
    </div>
    </article>
    <div class="${item.id} modal" > 
    <article>
      <button class="close-modal">
        <i class="fas fa-times"></i>
      </button>
      <div class="modal-container">
        <img class="modal-photo" src=${item.img} />
        <div class="modal-info">
          <h3 class="modal-title">
            Title: ${item.title}
            <div class="modal-info-underline"></div>
          </h3>
          <h3 class="modal-price">
            Price: $${item.price}
            <div class="modal-info-underline"></div>
          </h3>
          <p>
            ${item.desc}
          </p>
        </div>
      </div>
    </article>
  </div>
  </div>
    `;
  });
  const sectionCenter = document.querySelector(".section-center");
  items = items.join("");
  sectionCenter.innerHTML = items;
  controlModal();
};

const displayButton = () => {
  filterBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const getCategory = e.currentTarget.dataset.id;
      const prodCategory = prod.filter((item) => {
        if (item.category === getCategory) {
          return item;
        }
      });
      if (getCategory === "all") {
        displayProducts(prod);
      } else {
        displayProducts(prodCategory);
      }
    });
  });
};

/*
각 모달 창에 알맞은 데이터 보내기(이미지, 타이틀, 가격, 설명 등등)
close modal button 위치 옮기기 
modal 페이지 상세 정보 이미지 만들기

*/
