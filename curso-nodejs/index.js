const express = require('express')
const sumar = require('./operadores');
const app = express();

// Configuracion de la aplicacion 

app.get('/', (req, res) => {
    const suma = sumar(4,9)
    res.send(suma.toString())
})


app.listen(3000, () => {
    console.log("Servidor iniciado en el puerto 3000")
})

