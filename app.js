const express = require("express");
const port = 3000;
// Express app
const app = express();
// register view engine
app.set("view engine", "ejs");

// Port
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});

// Routes
app.get("/", (req, res) => {
  res.render("index", { title: "home" });
});
app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/blogs/create", (req, res) => {
  res.render("create");
});

// 404 page
app.use((req, res) => {
  res.status(404).render("404");
});
