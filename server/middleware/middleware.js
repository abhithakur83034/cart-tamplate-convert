
const jwt = require("jsonwebtoken");
const secret_key = process.env.SECRET_KEY;


const verifyToken = (req, res, next) => {
  let token = req.headers["authorization"];
  if (token) {
    token = token.split(" ")[1];

    jwt.verify(token, secret_key, (error, success) => {
      if (error) {
        res.send({message:"Please provide valid token"});
      } else {
        next();
      }
    });
  } else {
    res.status(500).send({message:"Please add token with headers."});
  }
};

module.exports = { verifyToken };
