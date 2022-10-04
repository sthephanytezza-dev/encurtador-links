const repository = require("../repositories/repository");

const crypto = require("crypto");

const createUrlService = (url) => {
  const id = crypto.randomBytes(3).toString("HEX");
  repository.createUrlRepository(id, url);
  return id;
};

const getUrlSiteService = (id) => {
  const url = repository.getUrlSiteRepository(id);
  return url;
};

module.exports = { createUrlService, getUrlSiteService };
