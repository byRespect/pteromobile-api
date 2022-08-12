const userDataSchema = require("../../mongodb/Schemas/userDataSchema");

module.exports = function (app) {
  app.get("/mobile/test", (req, res) => {
    userDataSchema.find({}).then((result) => {
      res.status(200).json({ success: true, response: result });
    });
  });
  /**
   * @swagger
   * /mobile:
   *   get:
   *     parameters:
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
   *     description: List all servers and clients
   *     responses:
   *       200:
   *         description: Success
   *     tags:
   *      - Mobile
   */
  app.get("/mobile", (req, res) => {
    const { uid } = req.headers;

    userDataSchema
      .find({ uid })
      .then((result) => {
        res.status(200).json({ success: true, response: result });
      })
      .catch((error) => {
        res.status(400).json({ success: false, response: error });
      });
  });

  /**
   * @swagger
   * /mobile:
   *   post:
   *     parameters:
   *       - name: authorization
   *         in: body
   *         required: true
   *         type: string
   *         description: Auth for pterodactyl.
   *       - name: url
   *         in: body
   *         required: true
   *         type: string
   *         description: Pterodactyl panel url.
   *       - name: name
   *         in: body
   *         required: true
   *         type: string
   *         description: Name collection name.
   *       - name: type
   *         in: body
   *         required: true
   *         type: string
   *         description: Which type ? (CLIENT,SERVER)
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
   *     description: Creat server or client
   *     responses:
   *       200:
   *         description: Success
   *     tags:
   *      - Mobile
   */
  app.post("/mobile", (req, res) => {
    const { name, url, type, authorization } = req.body;
    const { uid } = req.headers;

    userDataSchema
      .create({
        uid,
        name,
        type,
        url,
        key: authorization,
      })
      .then((result) => {
        res.status(200).json({ success: true, response: result });
      })
      .catch((error) => {
        res.status(400).json({ success: false, response: error });
      });
  });

  /**
   * @swagger
   * /mobile:
   *   delete:
   *     parameters:
   *       - name: collectionid
   *         in: body
   *         required: true
   *         type: string
   *         description: Collection id to delete.
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
   *     description: List all servers and clients
   *     responses:
   *       200:
   *         description: Success
   *     tags:
   *      - Mobile
   */
  app.delete("/mobile", (req, res) => {
    const { collectionid } = req.body;
    const { uid } = req.headers;

    userDataSchema
      .findOneAndDelete({ _id: collectionid, uid })
      .then((result) => {
        res.status(200).json({ success: true, response: result });
      })
      .catch((error) => {
        res.status(400).json({ success: false, response: error });
      });
  });
};
