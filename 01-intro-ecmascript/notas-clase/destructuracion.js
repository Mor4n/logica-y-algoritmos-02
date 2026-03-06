
let objeto = {
    nombre:"Brayan",
    edad:25,
    materia:"Computacion"

}

// destructurado


let {nombre,edad,materia} = objeto; 
// Podemos traernos las propiedades que queramos
// let {edad} = objeto;

console.log(nombre);
console.log(edad);
console.log(materia);

// destructuración de arreglos

let arreglo = ["Pera","Sandia","Mandarina","Manzana","Uva"];

let [fruta_1] = arreglo;
console.log(fruta_1); // Pera, el que está en la posición inicial

let [ , , , fruta_4] = arreglo; // Salto con " ," en este caso salto 3 posiciones
console.log(fruta_4); //Manzana
