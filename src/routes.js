const express = require("express");
const UrlController = require("./controllers/UrlController");

const routes = express.Router();

routes.post("/url", UrlController.createUrl);
routes.get("/url/:id", UrlController.getUrlSite);

module.exports = routes;
