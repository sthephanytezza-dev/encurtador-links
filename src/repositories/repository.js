const fs = require("fs");
const { url } = require("inspector");
const dados = require("../data/urls.json");
const knex = require("../database");

const createUrlRepository = async (id, url, next) => {
  // fs.readFile("./src/data/urls.json", function (err, data) {
  //   if (err) throw err;

  //   let urls = JSON.parse(data);
  //   urls[id] = url;

  //   fs.writeFileSync("./src/data/urls.json", JSON.stringify(urls), (err) => {
  //     if (err) throw err;

  //     console.log("Done writing");
  //   });
  // });
  try {
    await knex("urls").insert({ id, url });
  } catch (error) {
    next(error);
  }
};
const getUrlSiteRepository = async (id, next) => {
  try {
    const url = await knex("urls").select("url").where({ id: id });
    return url[0].url;
  } catch (error) {
    next(error);
  }
  // const getLink = (id) => {
  //   return dados[id];
  // };
  // return getLink(id);
};

module.exports = { createUrlRepository, getUrlSiteRepository };
