const mongoose = require("mongoose");
let DB_URI = "";

if (process.env.NODE_ENV === "production") {
  DB_URI = process.env.MONGODB_URI;
} else {
  DB_URI = "mongodb://localhost/subaru_cars";
}

mongoose
  .connect(MONGODB_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log("Successfully connected to MongoDB.");
  })
  .catch((e) => {
    console.error("Connection error", e.message);
  });

module.exports = mongoose;
