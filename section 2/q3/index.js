const axios = require("axios");
const cheerio = require("cheerio");

if (process.argv.length < 3) return "Input Fund Name";

const getNavOfFund = fund => {
  return new Promise(async (resolve, reject) => {
    try {
      const { data } = await axios.get("https://codequiz.azurewebsites.net/", {
        withCredentials: true,
        headers: {
          Cookie: "hasCookie=true;"
        }
      });
      const $ = cheerio.load(data);

      $("table tr:contains('" + fund + "') td:nth-child(2)").each(
        async (i, el) => {
          const result = $(el).text();
          resolve(result);
        }
      );
      resolve("Fund not found");
    } catch (error) {
      reject(error);
      throw error;
    }
  });
};

getNavOfFund(process.argv[2]).then(postTitles => console.log(postTitles));