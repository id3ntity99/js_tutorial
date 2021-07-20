const axios = require("axios");
const cheerio = require("cheerio");

const URL = "http://www.archiworldjournal.com/news/articleList.html";
const LINKS = [];

axios.get(URL).then((res) => {
  const $ = cheerio.load(res.data);
  //=======Get links from each articles.======
  const getLinks = $(".links");
  getLinks.each((idx, val) => {
    const link = $(val).attr("href");
    if (link === "") {
      return;
    }
    //Delete empty str
    const newURL = "http://www.archiworldjournal.com" + `${link}`;
    LINKS.push({ "Article link": newURL });
  });
  //=======Get links from each articles.======
  console.log(LINKS);
});

/*  const title = $(".links").text();
  //Get titles of each articels

  const date = $(".list-dated").text();
  //Get date and name of reporter */
