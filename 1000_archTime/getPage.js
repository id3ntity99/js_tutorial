const axios = require("axios");
const cheerio = require("cheerio");

const URL = "http://www.archiworldjournal.com/news/articleList.html?page=1";
const URLs = [];
const ARTICLES = [];

function getPages($) {
  let pages = [];
  const parentEle = $(".pagination li");
  //get pages numbers
  parentEle.each((idx, val) => {
    const childOfPage = $(val).children().children().length;
    if (childOfPage === 0) {
      pages.push($(val).text());
    }
  });
  //Create new URLs with page numbers
  const result = pages.forEach((page) => {
    const newURL = `http://www.archiworldjournal.com/news/articleList.html?page=${page}`;
    URLs.push(newURL);
  });
  console.log();
}

axios.get(URL).then((res) => {
  const $ = cheerio.load(res.data);
  getPages($);
});

/* ##################   PLEASE CHECK THIS LIST   ##################
You didn't use get last page paradaigm
*/
