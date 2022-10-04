const express = require("express");
const cors = require("cors");
const path = require("path");
const bodyParser = require("body-parser");
require("dotenv").config();

const app = express();
const routes = require("./routes");

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use(routes);

app.listen(process.env.PORT || 3334, () =>
  console.log(`
  Yep this is working 🍺 🎉 
  App listen on port: ${process.env.PORT} 🥷
  Env: ${process.env.NODE_ENV} 🦄`)
);
