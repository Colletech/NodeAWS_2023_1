require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/database");
const customerRoutes = require("./routes/customerRoutes");
const userRoutes = require("./routes/userRoutes");
const authRoutes = require("./routes/authRoutes");
const errorHandler = require("./middlewares/errorHandler");
const mongoHandler = require("./middlewares/mongoHandler");

const app = express();

// Conectarse a la base de datos
connectDB();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(mongoHandler);

app.use("/api/customers", customerRoutes);
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);

app.use(errorHandler);


const PORT = process.env.PORT || 5050;

app.listen(PORT, () => {
  console.log(`Servidor inicializado en el puerto ${PORT}`);
});
