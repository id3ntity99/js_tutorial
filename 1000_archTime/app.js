const axios = require("axios");
const cheerio = require("cheerio");

const URL = "http://www.archiworldjournal.com/news/articleList.html?page=1";
const ARTICLES = [];

function getLinksAndTitles($) {
  const links = $(".links");
  links.each((idx, val) => {
    const link = $(val).attr("href");
    //Delete empty str
    if (link === "") {
      return;
    }
    const newURL = "http://www.archiworldjournal.com" + `${link}`;
    const title = $(val).text();
    ARTICLES.push({ "Article link": newURL, "Article Title": title });
  });
  console.log(ARTICLES);
}

axios.get(URL).then((res) => {
  const $ = cheerio.load(res.data);
  getLinksAndTitles($);
});

/* ##################   PLEASE CHECK THIS LIST   ##################
Code Cleaning Required
*/
