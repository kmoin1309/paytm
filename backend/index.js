// backend/routes/index.js
const express = require("express");
const cors = require("cors");

app.use(cors());

app.use(express.json());

const mainRouter = require("./routes/index");

const app = express();

app.listen(3000);

