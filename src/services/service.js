const repository = require("../repositories/repository");

const crypto = require("crypto");

const createUrlService = async (url) => {
  const id = crypto.randomBytes(3).toString("HEX");
  await repository.createUrlRepository(id, url);
  return id;
};

const getUrlSiteService = async (id) => {
  const url = await repository.getUrlSiteRepository(id);
  return url;
};

module.exports = { createUrlService, getUrlSiteService };
