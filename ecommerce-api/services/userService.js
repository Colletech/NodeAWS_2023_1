const User = require("../models/User");
const { error } = require("../schema/customerSchema");
const PasswordUtil = require("../utils/password.util");

async function createUser(userData) {
  const { password } = userData;

  const hashedPassword = await PasswordUtil.hashPassword(password);

  userData.password = hashedPassword;

  const user = new User(userData);

  await user.save();

  return user;
}

async function getUserByUsername(username){
  const user = await User.findOne({username})
  
  return user;
}

module.exports = {
    createUser,
    getUserByUsername,
}
