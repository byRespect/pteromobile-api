module.exports = function (app) {
  require("./client/clientRouter")(app);
  require("./mobile/mobileRouter")(app);
};
