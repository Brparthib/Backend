const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
require("./db/dbConnect.js");
require("dotenv").config();
const port = process.env.PORT || 4000;
const app = express();

// middleware
app.use(
  cors({
    origin: "*",
    credentials: true,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
  })
);
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(cookieParser());

// listening server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
