// Objetos en JS

const persona = {
    nombre: "Juan",
    edad: 28,
    saludar: function() {
        console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años`)
    }
}


// console.log(persona.nombre)
// console.log(persona["edad"])
persona.saludar()

persona.edad = 29 // Modificar una propiedad existente
persona["apellido"] = 'Perez' // Agregar una nueva propiedad 

// console.log(persona)

delete persona.edad // Eliminar una propiedad existente

// console.log(persona)

for (let propiedad in persona){
    console.log(`${propiedad}: ${persona[propiedad]}`)
}