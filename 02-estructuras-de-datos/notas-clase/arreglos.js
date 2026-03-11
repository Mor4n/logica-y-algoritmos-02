
// Primera parte

let mountains = ["Everest", "Fuji","Nanga Parbar"];

console.log(mountains[0]); // Everest
console.log(mountains[1]); // Fuji
console.log(mountains[2]); // Nanga Parbar

mountains.push("Popocatepetl"); // Lo añade al final del array

console.log(mountains);

let indiceFuji = mountains.indexOf("Fuji"); // Posición de Fuji

console.log("Posición del monte fuji en el array",indiceFuji);

let algoQueNoExiste = mountains.indexOf("Iztazihutl"); // Va a da r -1 porque no existe

console.log("Iztazihutl (No existe)",algoQueNoExiste);


// Ciclo for para recorrer un arreglo

const numeros = [10,20,30,40];

console.log("------------------------");


// for ( inicialización de variable para contar; condición a cumplir -hasta donde-; operación del contador i = i+1 usualmente para incremento )
for (let i = 0; i < numeros.length; i++) {
    
    console.log(i,"-",numeros[i]);
    

}
