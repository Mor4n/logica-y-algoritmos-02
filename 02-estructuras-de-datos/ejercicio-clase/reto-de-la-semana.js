
// 1. Calificaciones aprobatorias filter()
let calificaciones = [60, 85, 92, 48, 75, 50, 98];

let aprobados = calificaciones.filter( calificacion => calificacion >= 70);

console.log(aprobados);

// 2. Nombres en mayusculas con map()

let nombres = ["ana", "juan", "pedro", "maría"];

let nombresMayusculas = nombres.map( nombre => nombre.toUpperCase());

console.log(nombresMayusculas);

// 3. Promedio de edades con reduce()

let edades = [25, 30, 18, 42, 28];

console.log("Promedio:",
    (edades.reduce( (total,edad) => total+=edad)/ edades.length) 
);

// 4. Hay un número par? some()

let numeros = [1, 5, 7, 9, 11, 13, 2];

console.log(
    "Hay un numero par?",
    numeros.some( numero => numero%2==0)

);

// 5. Todos los nombres tienen más de 3 letras con every()

let nombres2_every = ["ana", "juan", "pedro", "luisa"];

console.log( 
"Todos los nombres son mayores a 3 letras?",
    nombres2_every.every(elemento => (elemento.length>3))

);

// 6. Buscar un nombre con include()

let nombres_include=["ana", "juan", "pedro", "maría"];

console.log(
    "Existe el nombre pedro?", nombres_include.includes("pedro")
);

// 7.