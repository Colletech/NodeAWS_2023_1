const userService = require("../services/userService");

async function createUser(req, res, next) {
  try {
    const { username, password, email } = req.body;
    const newUser = await userService.createUser({
      username,
      password,
      email,
    });

    res.send(newUser);
  } catch (error) {
    next(error);
  }
}

module.exports = {
  createUser,
}
