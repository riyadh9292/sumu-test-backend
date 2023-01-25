const express = require("express");
const dotenv = require("dotenv").config();
const app = express();
const cors = require("cors");
const { default: mongoose } = require("mongoose");

app.use(cors());

mongoose
  .connect(
    `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.y5siwts.mongodb.net/${process.env.MONGO_DB}?retryWrites=true&w=majority`
  )
  .then(() => {
    app.listen(process.env.PORT || 4000);
    console.log("mongodb connect successfull");
  })
  .catch((err) => {
    console.log(err);
    console.log(
      `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.y5siwts.mongodb.net/?retryWrites=true&w=majority`
    );
  });
