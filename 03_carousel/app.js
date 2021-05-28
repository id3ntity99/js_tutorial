const review = [
  {
    id: 1,
    img: "./assets/leonard.jpg",
    title: "Leonard Hofstadter",
    subtitle: "Physicist",
    description:
      "Although Leonard feels at home with his geek colleagues, he is reluctant to let others know about his recreational activities (such as Klingon Boggle), as he does not like to be seen as a geek and wants to be more social.",
  },
  {
    id: 2,
    img: "./assets/howord.jpeg",
    title: "Howord Wolowitz",
    subtitle: "Engineer",
    description:
      "Cheeky, tenderhearted and supposedly suave, Howard provides outrageous techniques in an attempt to get girls in the first three seasons, none of which are remotely successful.",
  },
  {
    id: 3,
    img: "./assets/raj.jpg",
    title: "Rajesh Koothrappali",
    subtitle: "Astrophysicist",
    description:
      "Originally from India, Raj is slightly clueless about American culture and idioms, and dislikes Indian food and his home country. Sheldon even disputes his knowledge of Indian customs and Hinduism, and reveals Raj's native language is English (which Raj speaks with a mainly-Indian accent with a hint of British), while he seems to speak fluent Hindi.",
  },
  {
    id: 4,
    img: "./assets/penny.jpg",
    title: "Penny Hofstadter",
    subtitle: "Waitress",
    description: "...",
  },
  {
    id: 5,
    img: "./assets/bernadette.jpg",
    title: "Bernadette Rostenkowski",
    subtitle: "Microbiologist",
    description:
      "Despite her high-pitched tone, which makes her come off as friendly and innocent, Bernadette has ironically shown signs of having a passive-aggressive and selfish personality. She has a short-temper, but is still friendly, nice, sweet, and extremely devoted towards her friends and husband,",
  },
  {
    id: 6,
    img: "./assets/amy.jpg",
    title: "Amy Farrah Fowler",
    subtitle: "Neurobiologist",
    description:
      "When we first met Amy, she seemed quite emotionless and forward speaking (much like Sheldon). After becoming friends with Penny and Bernadette and before and after becoming Sheldon's girlfriend, we see a new (more fun) side to Amy, where she becomes a far more friendly,",
  },
];

const img = document.getElementById("profileImg");
const author = document.getElementById("name");
const job = document.getElementById("job");
const info = document.getElementById("info");
const button = document.getElementById("button");
const next = document.getElementById("nextBtn");
const pre = document.getElementById("preBtn");

let currentNum = 0;
const maxNumber = review.length;

window.addEventListener("DOMContentLoaded", () => {
  showPerson(currentNum);
});

const showPerson = () => {
  const item = review[currentNum];
  img.src = item.img;
  author.textContent = item.title;
  job.textContent = item.subtitle;
  info.textContent = item.description;
};

next.addEventListener("click", () => {
  currentNum++;
  if (currentNum > maxNumber - 1) {
    currentNum = 0;
  }
  showPerson();
});

pre.addEventListener("click", () => {
  currentNum--;
  if (currentNum < maxNumber - 1) {
    currentNum = maxNumber - 1;
  }
  showPerson();
});
/*const item = review[currentItem];
  img.src = item.img;
  author.textContent = item.title;
  job.textContent = item.subtitle;
  info.textContent = item.description; */
