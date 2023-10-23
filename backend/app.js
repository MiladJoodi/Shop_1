const express = require("express");
const path = require("path");

const authRoutes = require("./routes/v1/auth");
const courseRoutes = require("./routes/v1/course");
const menuRoutes = require("./routes/v1/menu");
const categoryRoutes = require("./routes/v1/category");
const articlesRoutes = require("./routes/v1/article");
const bodyParser = require('body-parser')
const cors = require("cors");

const app = express();

app.use(cors())
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(
  "/courses/covers",
  express.static(path.join(__dirname, "public", "course", "covers"))
);

app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));


app.use("/v1/auth", authRoutes);
app.use("/v1/courses", courseRoutes);
app.use("/v1/menus", menuRoutes);
app.use("/v1/category", categoryRoutes);
app.use("/v1/articles", articlesRoutes);

module.exports = app;
