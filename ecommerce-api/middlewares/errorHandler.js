const errorHandler = (err, req, res, next) => {
  console.log(err.stack);
  res.status(500).send("Error no controlado");
};

module.exports = errorHandler;
