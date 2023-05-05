require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/database');

const app = express();

// Conectarse a la base de datos
connectDB();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));

const PORT = process.env.PORT || 5050;

app.listen(PORT, ()=> {
    console.log(`Servidor inicializado en el puerto ${PORT}`)
});