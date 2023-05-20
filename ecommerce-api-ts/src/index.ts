import express, { Request, Response } from "express";
import routes from "./routes/index";
import { AppDataSource } from "./data-source";

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api/", routes);

AppDataSource.initialize()
  .then(() => {
    console.log("conectado a la base de datos");

    app.listen(PORT, () => {
      console.log(`Servidor escuchando en el puerto ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Error al conectar a la base de datos: ", err);
  });
