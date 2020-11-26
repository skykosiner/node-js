const express = require("express");
const port = 3000;
// Express app
const app = express();
// register view engine
app.set("vie engine", ejs);

// Port
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});

// Routes
app.get("/", (req, res) => {
  res.sendFile("./views/index.html", { root: __dirname });
});

app.get("/about", (req, res) => {
  res.sendFile("./views/about.html", { root: __dirname });
});

// redirects
app.get("/about-us", (req, res) => {
  res.redirect("/about");
});
// 404 page
app.use((req, res) => {
  res.status(404).sendFile("./views/404.html", { root: __dirname });
});
