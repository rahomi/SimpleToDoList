// require express dependencie
const express = require("express");

const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");

//models
const TodoTask = require("./models/TodoTask.js");

// access the css
app.use("/static", express.static("public"));

app.use(express.urlencoded({ extended: true }));

// view engine configuration
app.set("view engine", "ejs");

// get method
app.get("/", (req, res) => {
  res.render("todo.ejs");
});

// post method
app.post("/", async (req, res) => {
  const todoTask = new TodoTask({
    content: req.body.content,
  });
  try {
    await todoTask.save();
    res.redirect("/");
  } catch (err) {
    res.redirect("/");
    console.log("POST Failed! :" + err);
  }
});
// database
dotenv.config();
//console.log(process.env);

//connection to db
mongoose.connect(process.env.DB_CONNECT, {}, () => {
  console.log("Connected to db!");

  // dedicating a port number and telling our express app to listen to that port
  app.listen(3000, () => console.log("Server Up and running"));
});
