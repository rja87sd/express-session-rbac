"use strict";

const express = require("express");
const  mongoose = require("mongoose");
const router = require("./src/routes");
const { notFound, serverError } = require("./src/middleware/errors");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT || 3010;

main().catch((e) => console.error(e));
async function main() {
  await mongoose.connect(process.env.DB);
  console.log("Connected to mongoose.");
}

app.use(express.json());
app.use(router);
app.use(notFound)
app.use(serverError)

app.listen(PORT, () => {
  console.log(`Connected to server on port ${PORT}.`);
});
