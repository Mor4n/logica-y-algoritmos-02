

let persona = {
    nombre: "Alexis",
    edad:25,
    materia:"Computacion"
}

persona.apellido ="Rivera"; // Lo permite

console.log(persona);

// Forzamos a que sea una sola cosa e inmutable
let nombre = Symbol("nombre");
let edad = Symbol("edad");
let materia = Symbol("materia");

persona2 = {}

persona2[nombre] = "Ana"
persona2[edad] = 30
persona2[materia] = "Diseño"
// persona2[apellido] = "Rodriguez" // No lo permite, restrige a que solo podemos usar las propiedades previamente declaradas como symbol

console.log(persona2);
