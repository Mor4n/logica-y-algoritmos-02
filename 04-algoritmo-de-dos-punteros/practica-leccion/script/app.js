/**
 * Tienes una lista de invitados ordenada alfabéticamente, y tu tarea es organizar la mesa para una cena. Sin embargo, algunos invitados prefieren sentarse junto a personas cuyo nombre empieza con la misma letra que el suyo. Tu objetivo es encontrar el primer par de invitados consecutivos que puedan sentarse juntos según este criterio.
 */

const invitados = ["Ana", "Carlos", "Cecilia", "Daniel", "Diana", "Eduardo"];

const invitados2 = ["Adriana", "Benjamin", "Carmelita", "Dante", "Ernesto", "Moran","Martinez","Roberto","Rodriguez","Sanchez"];

function encontrarPareja(arr) {
    let izquierda = 0;
    let derecha = 1;

    while (derecha < arr.length) {
        let nombre1 = arr[izquierda];
        let nombre2 = arr[derecha];
        console.log(` Inicial - Izq ${izquierda} | Der ${derecha}`);
        
        if(nombre1[0]===nombre2[0]){
            return [nombre1,nombre2];
        }

        // como el arreglo es ordenado (A-Z), y es tipo de encontrar el primer coincidente consecutivo, entonces creo que se puede poner asi (de uno + uno tanto izquierda como derecha para ir haciendo el reocrrido)
        izquierda++;
        derecha++;

        
        
    }

    return null; // Si no se encuentra ningún par
}


function encontrarVariasPareja(arr) {
    let izquierda = 0;
    let derecha = 1;
    let nombres = []; // arreglo para guardar nombres 

    while (derecha < arr.length) {
        let nombre1 = arr[izquierda];
        let nombre2 = arr[derecha];
        console.log(` Inicial - Izq ${izquierda} | Der ${derecha}`);
        
        if(nombre1[0]===nombre2[0]){
            nombres.push([nombre1,nombre2]);
        }
        // Si ya llegamos al final, que devuelva los nombres
        if(derecha == arr.length-1){
            return nombres;
        }


        // como el arreglo es ordenado (A-Z), y es tipo de encontrar el primer coincidente consecutivo, entonces creo que se puede poner asi (de uno + uno tanto izquierda como derecha para ir haciendo el reocrrido)
        izquierda++;
        derecha++;

        
        
    }

    return null; // Si no se encuentra ningún par
}

console.log(encontrarPareja(invitados));
// Resultado: ["Carlos", "Cecilia"]
console.log("Encontrar varias parejas:",encontrarVariasPareja(invitados2));

// Ahora con HTML

// Inicialización de variables
let arregloPersonas = [];
let formulario = document.querySelector("#formulario")
let botonAgregar = document.querySelector("#btn-agregar")
let contenedorListaPersonas = document.querySelector("#lista-personas")
let listaResultado = document.querySelector("#resultado")
let listaVariasParejas = document.querySelector("#resultado-total-parejas")

// Event listener del formulario, cuando tenga un submit se mandará a llamar la función para encontrar pareja, mandandole el arreglo
formulario.addEventListener("submit", (e) =>{
    e.preventDefault();

    // como el algoritmo de dos punteros debe estar ordenado, le hago un sort primero
    arregloPersonas.sort();
    console.log("Ordenado de a a la z",arregloPersonas);
    
    // Una sola pareja
    let resultadoPareja = encontrarPareja(arregloPersonas)
    console.log(resultadoPareja);

    // varias parejas
    let resultadoVariasParejas = encontrarVariasPareja(arregloPersonas)
    console.log("Varias parejas ", resultadoVariasParejas);

    listaResultado.innerHTML="";
    listaVariasParejas.innerHTML="";


    // Si no existió una pareja coincidente
    if(resultadoPareja===null ){
        listaResultado.innerHTML = `<p>No se encontró ninguna pareja 😿</p>`
    }
    else
        // Si existió una pareja coincidente, imprimo el resultado en lista resultado para una sola pareja
        {
    resultadoPareja.forEach( persona => {
            listaResultado.innerHTML += ` <li>${persona}</li>`
            
        });
    }

    // Varias parejas
    if(resultadoVariasParejas === null || resultadoVariasParejas.length === 0){
        listaVariasParejas.innerHTML = `<p>No se encontró ninguna pareja 😿</p>`
    }else{
        resultadoVariasParejas.forEach(pareja => {
            listaVariasParejas.innerHTML += `<li>${pareja[0]} - ${pareja[1]}</li>`
        });
    }



}

);


botonAgregar.addEventListener("click",(e)=>{
    e.preventDefault();
    // Obtengo el valor del input de persona
    let persona = document.querySelector("#input-nombre-persona");
    
    // si lo que ingresó la persona después de quitar espacios, es diferente a "" o a vacío, entonces ingresó datos
    if(persona.value.trim() !== ""){
        
        // console.log("Nombre:",persona.value);
        
        // Agrego el nombre al HTML
        contenedorListaPersonas.innerHTML+= `
        <p>${persona.value}</p>
        `

        // Lo envio al arreglo de personas
        arregloPersonas.push(persona.value)
        console.log(arregloPersonas);




        // limpio el input

        persona.value =""
    }
    // si no, quiere decir que no ingresó nada o ingresó puros espacios
    else{
        alert("El input no debería de estar vacío")
    }
    
})