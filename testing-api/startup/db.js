const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

module.exports = () => {
  mongoose
    .connect(process.env.CONNECTION_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("MongoDB Connected"));
};
