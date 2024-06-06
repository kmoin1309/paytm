// backend/index.js
const express = require("express");
const rootRouter = require("./routes/index");
const userRouter = require("./user");
const router = require("..");



router.use("user",userRouter);

module.exports = router;

