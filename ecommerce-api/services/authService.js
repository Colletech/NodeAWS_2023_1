const jwt = require("jsonwebtoken");
const config = require("../config/config");

function verifyToken(token) {
  const decoded = jwt.verify(token, config.secret_key.key);

  const { userId } = decoded;

  return userId;
}

module.exports = { verifyToken };
