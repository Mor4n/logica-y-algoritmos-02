
// 1. Calificaciones aprobatorias
let calificaciones = [60, 85, 92, 48, 75, 50, 98];

let aprobados = calificaciones.filter( calificacion => calificacion >= 70);

console.log(aprobados);

// 2. Nombres en mayusculas

let nombres = ["ana", "juan", "pedro", "maría"];

let nombresMayusculas = nombres.map( nombre => nombre.toUpperCase());

console.log(nombresMayusculas);

// 3. Promedio de edades

let edades = [25, 30, 18, 42, 28];

