let express = require("express");
let app = express();
let path = require("path");
const pageData = require("./data/pageData.json");
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public/css"));
app.use(express.static(__dirname + "/public/assets"));
app.use(express.static(__dirname + "/views"));

app.get("/", (req, res) => {
  res.render("index", { pageData });
});

console.log("server is running and listening");
app.listen(3011);
