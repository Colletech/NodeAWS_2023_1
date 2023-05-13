const authService = require("../services/authService");

const authHandler = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res
      .status(401)
      .send({ message: "No se encuentra la autorizacion en la cabecera" });
  }

  const token = authHeader.split(" ")[1];

  try {
    const user = authService.verifyToken(token);
    req.user = user;
    next();
  } catch (error) {
    res.status(401).send({ message: "El token no es valido." });
  }
};

module.exports = authHandler;
