const mongoose = require("mongoose");
const config = require("./config");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(config.database.uri, {
      autoIndex: true,
    });
    console.log(`MongoDB Conectado: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error al conectarse a MongoDB ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;
