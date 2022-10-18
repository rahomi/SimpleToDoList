// require express dependencie
const express = require("express");
const app = express();

// access the css
app.use("/static", express.static("public"));

// view engine configuration
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("todo.ejs");
});

// dedicating a port number and telling our express app to listen to that port
app.listen(3000, () => console.log("Server Up and running"));
