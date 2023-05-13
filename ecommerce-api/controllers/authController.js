const userService = require("../services/userService");
const PasswordUtil = require("../utils/password.util");
const jwt = require("jsonwebtoken");
const config = require("../config/config");

async function login(req, res, next) {
  try {
    const { username, password } = req.body;
    const user = await userService.getUserByUsername(username);

    if (!user) {
      return res.status(401).send({ message: "Usuario o Password incorrecto" });
    }

    const isPasswordValid = await PasswordUtil.comparePassword(
      password,
      user.password
    );

    if (!isPasswordValid) {
      return res.status(401).send({ message: "Usuario o Password incorrecto" });
    }

    const token = jwt.sign({ userId: user.id }, config.secret_key.key, {
      expiresIn: "1h",
    });

    res.send({ token: token });
  } catch (error) {
    next(error);
  }
}

module.exports = {
  login,
};
