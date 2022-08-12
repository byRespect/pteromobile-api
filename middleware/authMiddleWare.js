const admin = require("../firebase/authFirebase").admin;

const AuthWare = (req, res, next) => {
  const { tokenid, uid } = req.headers;
  if (typeof tokenid === "undefined" || typeof uid === "undefined") {
    res.status(200).json({ success: false, response: "ERROR AuthWare" });
  } else {
    admin
      .auth()
      .verifyIdToken(tokenid, true)
      .then((decodeToken) => {
        const check = Object.keys(decodeToken).some((key) => {
          if (key === "uid" && decodeToken[key] == uid) return true;
        });

        check === true
          ? next()
          : res
              .status(200)
              .json({ success: false, response: "ERROR AuthWare" });
      })
      .catch((error) => {
        res.status(400).json({ status: false, response: error });
      });
  }
};

module.exports = {
  AuthWare,
};
