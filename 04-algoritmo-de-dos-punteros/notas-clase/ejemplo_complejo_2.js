
// En este ejercicio, la Sra. Bennet ha decidido que la pareja perfecta debe sumar
// exactamente 100 puntos de Influencia Social, pero para que el matrimonio no sea
// aburrido, la diferencia entre sus niveles de Prejuicio debe ser máxima.

// Restricción 1. Influencia social (100 puntos)

// Restricción 2. Prejuicio

const personajes = [
    {nombre: "Elizabeth Bennet",influencia:10,prejuicio:95},
    {nombre:"Sr. Collins",influencia:20,prejuicio:10},
    {nombre:"Sr. Wickham",influencia:30,prejuicio:80},
    {nombre:"Sr. Bingley",influencia:70,prejuicio:5},
    {nombre:"Sr. Darcy",influencia:80,prejuicio:90},
    {nombre:"Lady Catherine de Bourgh",influencia:90,prejuicio:100}
]

const objetivo = 100; // Objetivo de influencia


// 2. Inicializar 2 punteros
let izquierda = 0;
let derecha = personajes.length-1;
let sumaInf = 0; // Suma de influencia
let sumaPrejAntes = 0; // Suma de prejuicio para la segunda restriccion, haciendo referencia a acumulador de reducer

let pareja = []; // Arreglo con 2 nombres

// Paso 2. Mientras que izquierda sea menor que derecha:
    while(izquierda<derecha){

    // Paso 2.1. Calcula la suma de los elementos en las posiciones izquierda y derecha

        // suma = arr[izquierda] + arr[derecha];   
        sumaInf = personajes[izquierda].influencia + personajes[derecha].influencia;

    // Paso 2.2. Si la suma es igual al valor objetivo, se encontró el par y nos detenemos
    if(sumaInf==objetivo){
        // console.log(`Par encontrado ${invitados[izquierda].nombre} y ${invitados[derecha].nombre}`);
        // break;
        
        // Si dos personajes coinciden con su numero de influencia, ahora verifico si cumplen con la segunda restricción
        let sumaPrej = personajes[izquierda].prejuicio+ personajes[derecha].prejuicio
        
        if(sumaPrejAntes < sumaPrej){
            sumaPrejAntes = sumaPrej
            pareja = [personajes[izquierda].nombre, personajes[derecha].nombre]
        }
        izquierda++;
        derecha--;


    }
    // Paso 2.3. Si la suma es menor que el valor objetivo, se moverá el puntero izquierda una posición a la derecha
    else if(sumaInf<objetivo){
        izquierda++;
    }

    // Paso 2.4. Si la suma es mayor que el valor objetivo, se moverá el puntero derecha a una posición a la izquierda
    else{
        // (sumaInf>objetivo)
        derecha--;
    }

    console.log(`Izq: ${izquierda} | Derecha: ${derecha}`);
    

    }

    
    console.log(`La mejor pareja son: ${pareja[0]} y ${pareja[1]}`);
    console.log(`Valor de prejuicio: ${pareja[0]} y ${pareja[1]}`);
    