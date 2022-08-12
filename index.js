require("dotenv").config();
const bodyParser = require("body-parser");
const cors = require("cors");
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.use(
  cors({
    cors: false,
  })
);

const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUI = require("swagger-ui-express");

const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: "Mobile Ptero Mobile API",
      version: "1.0.0",
    },
  },
  apis: [
    "./routers/client/clientRouter.js",
    "./routers/client/account/clientAccount.js",
    "./routers/client/server/clientServer.js",
    "./routers/mobile/mobileRouter.js",
  ],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerDocs));

app.use(require("./mongodb/mongoConnect"));

//app.use(require("./middleware/authMiddleWare").AuthWare);
require("./routers/routersIndex")(app);

app.listen(port, () => {
  console.log("Server is started");
});

// Export the Express API
module.exports = app;
