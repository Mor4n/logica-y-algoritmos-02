// Funciones como parametros o callback

const myfn = (otra_fn) =>{
    const retorno_de_otra_fn = otra_fn();

    return retorno_de_otra_fn;
}

const la_otra_fn = () =>{
    return "Prueba";
}

console.log(myfn(la_otra_fn));

// Funciones como parametros escritos directamente de forma interna
console.log(myfn(
    () =>{
        return "Otra cosa";
    }

));

// Es exactamente lo mismo que esto
// Se le dice función anonima porque no tiene nombre y que no fueron declaradas anteriormente
console.log(myfn(
    () => "Otra cosa simplificado"

));



// Find = Método que NO modifica el arrelgo
const numeros = [1,5,10,15];
// Callback es elemento => elemento > 9
// Este es una función anónima también

let encontrado = numeros.find ((elemento) => {
    return elemento>9;
}) 

// Que es lo mismo que esto
 encontrado = numeros.find(elemento => elemento > 9); // La función anonima regrese verdadero o falso

console.log(encontrado);

encontrado = numeros.find(()=>true);

console.log(encontrado);

// Map: Crea un nuevo arreglo con los resultados de aplicar una función a cada elemento del arerglo original
// Se puede usar cuando queremos transformar el arreglo de alguna manera
// Map -> NO modifica el arreglo original

const numeros_map = [1,2,3,4];

let dobles = numeros_map.map ( elemento => elemento*2); // Cuando encuentre un elemento ese lo multiplicaré por 2

console.log(dobles);
console.log(numeros_map); // Sigue siendo el mismo, ya que map no modifica el arreglo original

dobles = numeros_map.map(() => "holaaa"); // Modifica 
console.log(dobles);

// Es lo mismo que esto
dobles = numeros_map.map( function (){
    return "hola"
})

// Y es lo mismo que esto

const funcion_que_regresa_hola = function (){
    return "hola"
}

dobles = numeros_map.map(funcion_que_regresa_hola);
console.log(dobles);



// Filter : Es como un find pero que no se va a detener con el primer elemento que cumpla con la fcondición, sino que todos los ementos que cumplan, los va a regresar
// Crea un nuevo ARREGLO que contiene SOLO los elementos que cumplan con una condición
// Filter -> NO MODIFICA EL ARREGLO ORIGINAL

let numeros_filter = [1,2,3,4,5];

let pares = numeros_filter.filter( elemento => elemento%2===0);
console.log(pares);

 pares = numeros_filter.filter( () => true);
console.log(pares);


// forEach: Ejecuta una función por cada elemento del arreglo. NO DEVUELVE UN ARREGLO.
// Es otra forma para iterar un arreglo
// foreach -> NO MODIFICA EL ARREGLO

const nombres = ["Adriana","Alex","Reyna"];

nombres.forEach(nombre => console.log(`Hola ${nombre}`));

// Si yo hago esto mismo con map
nombres.map(nombre => console.log(`Hola ${nombre}`)); // Funcionará bien PERO te retornará [undeifned,undefined,undefined]

// Esto es porque al usar un .log de normal siempre retorna undefined

// Si quiero guardarlo, debería de hacerlo con `Hola ${nombre}` o return `Hola ${nombre}`

// Esto es igual que esto
for (let i = 0; i < nombres.length; i++) {
    console.log(`Hola ${nombres[i]}`);
    
}

// Sort() Ordena los elementos del arreglo
//! SI MODIFICA EL ARREGLO ORIGINAL

let numeros_sort = [3,1,0,4,11,21];

// Sin parametros, ordena de forma alfabetica
numeros_sort.sort(); // 0, 1, 11, 21, 3, 4

// Para que sea de forma ascendente:
numeros_sort.sort( (a,b) => a-b ); // Necesito 2 parametros: a,b
// Si el resultado de a-b es menor que cero lo pone mas a la izq, si es mayor que cero, mas a la derecha

// 3-1 = 2, (a) es mayor, se pone a la derecha y 1 a la izquierda
// 1-0 = 1, 1 se pone a la derecha y 0 a la izquierda

// 0-4 = -4, coloca el 0 a la izquierda y 4 a la derecha

// numeros_sort.sort(() => true);
console.log(numeros_sort);


// ? Avanzado...

// Truco para sacar valores aleatorios teniendo una lista
const personas = ["Juan","Manuel","Luis","Ana","Maria"];

console.log(personas.find(() => Math.random()>0.5));

console.log(personas.sort(() => Math.random()-0.5));
console.log(personas);
