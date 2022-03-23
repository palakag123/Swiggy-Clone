const express = require("express");
const env = require("dotenv");
const { router } = require("./routes/restaurants.routes");

env.config();
const app = express();

const port = process.env.PORT || 4000;
const host = process.env.HOST || "localhost";

app.use("/", router);

app.listen(port, host, () => {
  // eslint-disable-next-line no-console
  console.log(`server listening at http://${host}:${port}`);
});
