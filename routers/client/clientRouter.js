const axios = require("axios").default;
module.exports = function (app) {
  /**
   * @swagger
   * /:
   *   get:
   *     parameters:
   *       - name: url
   *         in: query
   *         required: true
   *         type: string
   *         description: Required for pterodactyl host.
   *       - name: tokenid
   *         in: header
   *         required: false
   *         type: string
   *         description: Reqiured in header for firebase auth.
   *       - name: uid
   *         in: header
   *         required: false
   *         type: string
   *         description: Reqiured in header for firebase auth.
   *       - name: Authorization
   *         in: header
   *         required: true
   *         type: string
   *         description: Required for pterodactyl.
   *     description: List all servers
   *     responses:
   *       200:
   *         description: Success
   *     tags:
   *      - Client
   */
  app.get("/", (req, res) => {
    //res.status(200).json({ success: true });
    const { url } = req.query;
    const { authorization } = req.headers;

    axios
      .get(`${url}/api/client`, {
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${authorization}`,
        },
      })
      .then((result) => {
        res.status(200).json({ success: true, response: result.data });
      })
      .catch((error) => {
        console.error(error);
        res.status(400).json({ success: false, response: error });
      });
  });

  /**
   * @swagger
   * /permissions:
   *   get:
   *     parameters:
   *       - name: url
   *         in: query
   *         required: true
   *         type: string
   *         description: Required for pterodactyl host.
   *       - name: tokenid
   *         in: header
   *         required: false
   *         type: string
   *         description: Reqiured in header for firebase auth.
   *       - name: uid
   *         in: header
   *         required: false
   *         type: string
   *         description: Reqiured in header for firebase auth.
   *       - name: Authorization
   *         in: header
   *         required: true
   *         type: string
   *         description: Required for pterodactyl.
   *     description: Retries all available permissions
   *     responses:
   *       200:
   *         description: Success
   *     tags:
   *      - Client
   */
  app.get("/permissions", (req, res) => {
    const { url } = req.query;
    const { authorization } = req.headers;

    axios
      .get(`${url}/api/client/permissions`, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${authorization}`,
        },
      })
      .then((result) => {
        res.status(200).json({ success: true, response: result.data });
      })
      .catch((error) => {
        console.error(error);
        res.status(400).json({ success: false, response: error });
      });
  });

  require("./account/clientAccount")(app);
  require("./server/clientServer")(app);
};
