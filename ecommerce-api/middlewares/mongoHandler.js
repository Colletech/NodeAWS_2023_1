const mongoose = require("mongoose");

const mongoHandler = (err, req, res, next) => {
  
  if (err instanceof mongoose.Error.CastError && err.path === "_id") {
    return res.status(400).send({ message: "Invalid ID" });
  }

  next(err);
};

module.exports = mongoHandler;
