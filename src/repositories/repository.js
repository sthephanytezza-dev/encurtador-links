const fs = require("fs");
const dados = require("../data/urls.json");

const createUrlRepository = (id, url) => {
  fs.readFile("./src/data/urls.json", function (err, data) {
    if (err) throw err;

    let urls = JSON.parse(data);
    urls[id] = url;

    fs.writeFileSync("./src/data/urls.json", JSON.stringify(urls), (err) => {
      if (err) throw err;

      console.log("Done writing");
    });
  });
};

const getUrlSiteRepository = (id) => {
  const getLink = (id) => {
    return dados[id];
  };

  return getLink(id);
};

module.exports = { createUrlRepository, getUrlSiteRepository };
