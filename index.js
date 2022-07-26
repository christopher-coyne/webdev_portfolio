let express = require("express");
let app = express();
let path = require("path");
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public/css"));

app.get("/", (req, res) => {
  res.render("index");
});

console.log("server is running and listening");
app.listen(3000);
