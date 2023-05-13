const bcrypt = require("bcrypt");

const saltRounds = 10;

async function hashPassword(password) {
  return bcrypt.hash(password, saltRounds);
}

async function comparePassword(password, hashedPassword) {
  return bcrypt.compare(password, hashedPassword);
}

module.exports = {
  hashPassword,
  comparePassword,
};
