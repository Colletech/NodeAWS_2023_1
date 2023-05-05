var operador_mensaje = "esta es una suma";

function sumar(a,b) {
    console.log(operador_mensaje)
    operador_mensaje = "suma???"
    console.log(operador_mensaje)
    return a + b;
}

module.exports = sumar;

