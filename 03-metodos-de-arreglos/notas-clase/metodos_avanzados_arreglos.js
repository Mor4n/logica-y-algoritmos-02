
// Every

// Comprueba si TODOS los elementos del arreglo cumplen con una condición
// Se usa cuando se necesite saber si todos los elementos del arreglo cumplen con algo

let numeros =  [2,4,5,6];
let numeros2 =  [2,4,6,8];

const todosPares = numeros.every( num => num%2==0);
const todosPares2 = numeros2.every( num => num%2==0);

console.log(`(every) Todos los numeros del arreglo son pares? arreglo 1: ${todosPares} arreglo2: ${todosPares2}`);

let arr = ["A","B","C"];

const todosStrings = arr.every(ele => typeof ele==="string");

console.log(`(every) Todos son true? ${todosStrings}`);

// Some: Con que uno tenga la característica, toma que es true
// Comprueba que si al menos un elemento del arreglo cumple con la condición
// Se usa cuando se necesite saber si ALGÚN elemento del arreglo cumplen con algo

numeros = [1,2,3,4,5];
const hayPares = numeros.some(num => num%2===0);
console.log(`(some) Hay algún par? ${hayPares}`);

arr = ["A","B","C"];

const hayNumeros = arr.every(ele => typeof ele==="number");

console.log(`(some) Hay algún numero? ${hayNumeros}`);


// Includes: Si incluye lo pedido como parámetro
// Función: Determina si un arreglo incluye un determinado elemento.
// Cuándo usarlo: Cuando necesitas saber si un elemento específico existe en el arreglo.

let nombres =["Reyna","Juan","Benja"];

let incluyeBenja = nombres.includes("Benja")
console.log(`(Includes) El arreglo incluye Benja? ${incluyeBenja}`);

// Es equivalente con some, aunque es un poquito más de código
incluyeBenja = nombres.some( ele => ele==="Benja")
console.log(`(Some) El arreglo incluye Benja? ${incluyeBenja}`);

// Reduce: Reduce un arreglo a un solo valor
/*
Cuándo usarlo: Cuando necesitas realizar un cálculo acumulativo sobre los elementos del arreglo, como sumar todos los números o encontrar el valor máximo.
*/

numeros = [1,2,3,4];
// acumulador,numero como parametros => se suma el valor del acumulador + numero, 0 es el valor inicial del acumulador

const suma = numeros.reduce((acumulador, numero) => acumulador+numero, 0)
console.log(`Reduce: ${suma}`);
// se puede hacer con función normal en lugar de arrow
numeros.reduce ( function (acumulador,elemento){
    return acumulador+elemento
},0);

const funcion_de_acumulacion = (acumulador,elemento) =>{
    return acumulador+elemento;
}


// Es equivalente a

let acumulador = 0;
for (let i = 0; i < numeros.length; i++) {

    acumulador = acumulador + numeros[i];

}
console.log(`For ${acumulador}`);


// Ejemplo de reduce, imitando a "join"

//join es esto

let arreglo = ["A","B","C"].join(); // "A,B,C"
let arreglo2 = ["A","B","C"].join("|"); // "A|B|C"

// Podemos hacerlo con reduce

arr = ["A","B","C","D"];

result = arr.reduce( ( acumulador, elemento ) => acumulador+=elemento ,""); 

console.log(`(Reduce) Imitando join ${result}`);// ABCD

result = arr.reduce( ( acumulador, elemento ) => acumulador+=elemento+"," ,""); 

console.log(`(Reduce) Imitando join con comas ${result}`);// A,B,C,D,

// Usar reduce para sacar el valor máximo

arr = [1,4,8,2,99,3,7];
// Comparamos el valor maximo que tenia antes con ternario para que sea en una linea
let max = arr.reduce((antes ,elemento) =>  antes > elemento ? antes : elemento,0);
console.log(` Maximo con ternario: ${max}`);


// 
max = arr.reduce((antes ,elemento) => {
    if(antes > elemento){
        return antes;
    }else{
        return elemento;
    }
},0);
console.log(` Maximo con if else: ${max}`);