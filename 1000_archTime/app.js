const axios = require("axios");
const cheerio = require("cheerio");

axios.get("https://kr.indeed.com/jobs?q=javascript&l=").then((res) => {
  const $ = cheerio.load(res.data);
  const title = $(".jobTitle span").text();
  console.log(title);
});
