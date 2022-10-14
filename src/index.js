const express = require("express");
const routes = require("./routes");
require("dotenv").config();

const app = express();

app.use(express.json());
app.use(routes);

// not found
app.use((request, response, next) => {
  const error = new Error("Not found");
  error.status = 404;
  next(error);
});

// catch all
app.use((error, request, response, next) => {
  response.status(error.status || 500);
  response.json({ error: error.message });
});

app.listen(process.env.PORT || 3334, () =>
  console.log(`
  Yep this is working 🍺 🎉 
  App listen on port: ${process.env.PORT} 🥷
  Env: ${process.env.NODE_ENV} 🦄`)
);
