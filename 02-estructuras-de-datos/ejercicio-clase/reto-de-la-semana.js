
// 1. Calificaciones aprobatorias filter()
let calificaciones = [60, 85, 92, 48, 75, 50, 98];

let aprobados = calificaciones.filter( calificacion => calificacion >= 70);

console.log("Calificaciones aprobadas:",aprobados);

console.log("----------------");

// 2. Nombres en mayusculas con map()

let nombres = ["ana", "juan", "pedro", "maría"];

let nombresMayusculas = nombres.map( nombre => nombre.toUpperCase());

console.log("Nombre con mayusculas",nombresMayusculas);
console.log("----------------");

// 3. Promedio de edades con reduce()

let edades = [25, 30, 18, 42, 28];

console.log("Promedio:",
    (edades.reduce( (total,edad) => total+=edad)/ edades.length) 
);
console.log("----------------");

// 4. Hay un número par? some()

let numeros = [1, 5, 7, 9, 11, 13, 2];

console.log(
    "Hay un numero par?",
    numeros.some( numero => numero%2==0)

);
console.log("----------------");

// 5. Todos los nombres tienen más de 3 letras con every()

let nombres2_every = ["ana", "juan", "pedro", "luisa"];

console.log( 
"Todos los nombres son mayores a 3 letras?",
    nombres2_every.every(elemento => (elemento.length>3))

);
console.log("----------------");

// 6. Buscar un nombre con include()

let nombres_include=["ana", "juan", "pedro", "maría"];

console.log(
    "Existe el nombre pedro?", nombres_include.includes("pedro")
);
console.log("----------------");

// 7. Ordenar productos por precio con sort

let productos = [
  { nombre: "Camiseta", precio: 25 },
  { nombre: "Pantalón", precio: 50 },
  { nombre: "Zapatos", precio: 80 },
  { nombre: "Calcetines", precio: 10 }
]
console.log("Productos antes de sort",productos);

productos.sort( (a,b) => b.precio - a.precio )

console.log("Productos despues de sort",productos);


console.log("----------------");

// 8. Imprimir info de usuarios con forEach

const usuarios = [
  { nombre: "Ana", edad: 30, ciudad: "Madrid" },
  { nombre: "Juan", edad: 25, ciudad: "Barcelona" },
  { nombre: "Pedro", edad: 35, ciudad: "Valencia" }
]

usuarios.forEach(
    elemento => console.log(`Nombre: ${elemento.nombre}, edad: ${elemento.edad}, ciudad: ${elemento.ciudad}`)
);
console.log("----------------");
