// Funciones y ambitos en JS

// Tipos de ambitos
    // Tipo global
    // Tipo local

// Ambito local y global

let globalVariable = "Soy una variable global"

function myFunction(){
    let localVariable = "Soy una variable local"
    console.log(globalVariable)
    console.log(localVariable)
}

myFunction()
console.log(globalVariable)
console.log(localVariable)
