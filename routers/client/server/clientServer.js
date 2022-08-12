const axios = require("axios").default;
module.exports = function (app) {
  /**
   * @swagger
   * /account/servers:
   *   get:
   *     parameters:
   *       - name: url
   *         in: query
   *         required: true
   *         type: string
   *         description: Required for pterodactyl host.
   *       - name: identifier
   *         in: query
   *         required: true
   *         type: string
   *         description: Server identifier.
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
   *     description: Retrieves information about the specified server
   *     responses:
   *       200:
   *         description: Success
   *     tags:
   *      - Client/Server
   */
  app.get("/account/servers", (req, res) => {
    console.log(req.query);
    console.log(req.headers);
    const { url, identifier } = req.query;
    const { authorization } = req.headers;

    axios
      .get(`${url}/api/client/servers/${identifier}`, {
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

  /**
   * @swagger
   * /account/servers/websocket:
   *   get:
   *     parameters:
   *       - name: url
   *         in: query
   *         required: true
   *         type: string
   *         description: Required for pterodactyl host.
   *       - name: identifier
   *         in: query
   *         required: true
   *         type: string
   *         description: Server identifier.
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
   *     description: Generates credentials to establish a websocket
   *     responses:
   *       200:
   *         description: Success
   *     tags:
   *      - Client/Server
   */
  app.get("/account/servers/websocket", (req, res) => {
    const { url, identifier } = req.query;
    const { authorization } = req.headers;

    axios
      .get(`${url}/api/client/servers/${identifier}/websocket`, {
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

  /**
   * @swagger
   * /account/servers/resources:
   *   get:
   *     parameters:
   *       - name: url
   *         in: query
   *         required: true
   *         type: string
   *         description: Required for pterodactyl host.
   *       - name: identifier
   *         in: query
   *         required: true
   *         type: string
   *         description: Server identifier.
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
   *     description: Retrieves resource utilization of the specified server
   *     responses:
   *       200:
   *         description: Success
   *     tags:
   *      - Client/Server
   */
  app.get("/account/servers/resources", (req, res) => {
    const { url, identifier } = req.query;
    const { authorization } = req.headers;

    axios
      .get(`${url}/api/client/servers/${identifier}/resources`, {
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

  /**
   * @swagger
   * /account/servers/command:
   *   post:
   *     parameters:
   *       - name: url
   *         in: query
   *         required: true
   *         type: string
   *         description: Required for pterodactyl host.
   *       - name: identifier
   *         in: body
   *         required: true
   *         type: string
   *         description: Server identifier.
   *       - name: command
   *         in: body
   *         required: true
   *         type: string
   *         description: Command to send
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
   *     description: Sends a command to the server. The server must be online to send a command to it. You will get HTTP 502 is the server if not online.
   *     responses:
   *       200:
   *         description: Success
   *     tags:
   *      - Client/Server
   */
  app.post("/account/servers/command", (req, res) => {
    const { url } = req.query;
    const { identifier, command } = req.body;
    const { authorization } = req.headers;

    axios
      .post(`${url}/api/client/servers/${identifier}/command`, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${authorization}`,
        },
        data: {
          command,
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
   * /account/servers/power:
   *   post:
   *     parameters:
   *       - name: url
   *         in: query
   *         required: true
   *         type: string
   *         description: Required for pterodactyl host.
   *       - name: identifier
   *         in: body
   *         required: true
   *         type: string
   *         description: Server identifier.
   *       - name: signal
   *         in: body
   *         required: true
   *         type: string
   *         description: Power signal to send
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
   *     description: Sends a power signal to the server. [start, stop, restart, kill]
   *     responses:
   *       200:
   *         description: Success
   *     tags:
   *      - Client/Server
   */
  app.post("/account/servers/power", (req, res) => {
    const { url } = req.query;
    const { identifier, signal } = req.body;
    const { authorization } = req.headers;

    axios
      .post(`${url}/api/client/servers/${identifier}/power`, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${authorization}`,
        },
        data: {
          signal,
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
};
