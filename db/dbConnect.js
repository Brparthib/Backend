const mongoose = require("mongoose");
require("dotenv").config();

// for handling mongodb error
mongoose.set("strictQuery", false);

// MongoDB connect
mongoose
  .connect(`${process.env.MONGODB_URI}`)
  .then(() => {
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  }) 
  .catch((err) => {
    "Database Connection Failed: " + err;
  });
