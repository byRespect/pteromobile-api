const mongoose = require("mongoose");
var MongoDB;
module.exports = function (req, res, next) {
  MongoDB
    ? next()
    : (MongoDB = mongoose
        .connect(process.env.MONGO_CONNECT_URI)
        .then(() => {
          next();
        })
        .catch((error) => {
          console.error(error);
        }));
};
