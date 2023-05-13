const errorHandler = (err, req, res, next) => {
  console.error(err.stack);

  // Obtener el codigo de estado y el mensaje de error
  const statusCode = err.statusCode || 500;
  const message = err.message || "Ha ocurrido un error en el servidor";

  res.status(statusCode).send({
    error: {
      code: statusCode,
      message,
    },
  });
};

module.exports = errorHandler;
