const { createUrlService, getUrlSiteService } = require("../services/service");

module.exports = {
  async createUrl(request, response) {
    try {
      const { url } = request.body;
      const result = createUrlService(url);
      response.send(result);
    } catch (error) {
      return response.status(400).send(error);
    }
  },
  async getUrlSite(request, response) {
    try {
      const { id } = request.params;

      const url = getUrlSiteService(id);

      if (typeof url == "undefined") {
        return response
          .status(400)
          .send("Não existe URL para essa identificação.");
      }

      return response.redirect(url);
    } catch (error) {
      return response.status(400).send(error);
    }
  },
};
