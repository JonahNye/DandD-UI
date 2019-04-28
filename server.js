const express = require("express");
const app = express();

const routes = require("./routes/routes.js");

app.use(express.json());
app.use(express.static("./public"));
app.use("/", routes);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`listening on port: ${port}`));