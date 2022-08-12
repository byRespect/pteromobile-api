const axios = require("axios").default;
module.exports = function (app) {
  /**
   * @swagger
   * /account:
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
   *     description: Retrieves information about the account
   *     responses:
   *       200:
   *         description: Success
   *     tags:
   *      - Client/Account
   */
  app.get("/account", (req, res) => {
    const { url } = req.query;
    const { authorization } = req.headers;

    axios
      .get(`${url}/api/client/account`, {
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
   * /account/email:
   *   put:
   *     parameters:
   *       - name: url
   *         in: query
   *         required: true
   *         type: string
   *         description: Required for pterodactyl host.
   *       - name: email
   *         in: body
   *         required: true
   *         type: string
   *         description: New email.
   *       - name: password
   *         in: body
   *         required: true
   *         type: string
   *         description: Existing password.
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
   *     description: Updates the email address of the account
   *     responses:
   *       200:
   *         description: Success
   *     tags:
   *      - Client/Account
   */
  app.put("/account/email", (req, res) => {
    const { url } = req.query;
    const { email, password } = req.body;
    const { authorization } = req.headers;

    axios
      .put(`${url}/api/client/account/email`, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${authorization}`,
        },
        data: {
          email,
          password,
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
   * /account/password:
   *   put:
   *     parameters:
   *       - name: url
   *         in: query
   *         required: true
   *         type: string
   *         description: Required for pterodactyl host.
   *       - name: current_password
   *         in: body
   *         required: true
   *         type: string
   *         description: Existing password.
   *       - name: password
   *         in: body
   *         required: true
   *         type: string
   *         description: New password.
   *       - name: password_confirmation
   *         in: body
   *         required: true
   *         type: string
   *         description: Confirm new password.
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
   *     description: Updates the password of the account
   *     responses:
   *       200:
   *         description: Success
   *     tags:
   *      - Client/Account
   */
  app.put("/account/password", (req, res) => {
    const { url } = req.query;
    const { current_password, password, password_confirmation } = req.body;
    const { authorization } = req.headers;

    axios
      .put(`${url}/api/client/account`, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${authorization}`,
        },
        data: {
          current_password,
          password,
          password_confirmation,
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
   * /account/api-keys:
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
   *     description: Retries a list of API keys
   *     responses:
   *       200:
   *         description: Success
   *     tags:
   *      - Client/Account
   */
  app.get("/account/api-keys", (req, res) => {
    const { url } = req.query;
    const { authorization } = req.headers;

    axios
      .get(`${url}/api/client/account/api-keys`, {
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
   * /account/api-keys:
   *   post:
   *     parameters:
   *       - name: url
   *         in: query
   *         required: true
   *         type: string
   *         description: Required for pterodactyl host.
   *       - name: description
   *         in: body
   *         required: true
   *         type: string
   *         description: Note for the API key.
   *       - name: allowed_ips
   *         in: body
   *         required: false
   *         type: object
   *         description: List of allowed IPs
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
   *     description: Retries a list of API keys
   *     responses:
   *       200:
   *         description: Success
   *     tags:
   *      - Client/Account
   */
  app.post("/account/api-keys", (req, res) => {
    const { url } = req.query;
    const { authorization } = req.headers;

    axios
      .post(`${url}/api/client/account/api-keys`, {
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
   * /account/api-keys:
   *   delete:
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
   *         description: Identifier for key
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
   *     description: Deletes the specified API key
   *     responses:
   *       200:
   *         description: Success
   *     tags:
   *      - Client/Account
   */
  app.delete("/account/api-keys", (req, res) => {
    const { url } = req.query;
    const { identifier } = req.body;
    const { authorization } = req.headers;

    axios
      .delete(`${url}/api/client/account/api-keys/${identifier}`, {
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
};
