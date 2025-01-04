const express = require("express");

const dotenv = require("dotenv");
const { default: mongoose } = require("mongoose");
dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

mongoose
  .connect(
    'mongosh "mongodb+srv://duantotnghiep.9ezwm.mongodb.net/" --apiVersion 1 --username duantotnghiep'
  )
  .then(() => {
    console.log("Connect Db success!");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(port, () => {
  console.log("Server is runing in port: ", +port);
});
