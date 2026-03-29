function findMax(arr) {
    // Agregar la condición del caso base
    if (arr.length===1) {
        return arr[0];
    }

    // Dividir el arreglo en dos mitades
    const mid = Math.floor(arr.length/2);
    const left = arr.slice(0,mid);
    const right = arr.slice(mid);

    console.log(`Mitad: ${mid} | Izquierda: ${left} | Derecha ${right}`);
    

    // Llamar recursivamente a la función para ambas mitades
    const leftMax = findMax(left);
    const rightMax = findMax(right);


    // Combinar las soluciones comparando los máximos
    return leftMax > rightMax ? leftMax : rightMax; 
}
// Ejemplo de entrada
const numbers = [3, 8, 2, 10, 5, 7];
console.log(findMax(numbers)); // Salida esperada: 10

// declaración de selectores de HTML
let formulario = document.querySelector("#formulario")
let span_resultado = document.querySelector("#resultado")

formulario.addEventListener("submit",(e)=>{
    e.preventDefault();
    
    let input_arreglo = document.querySelector("#input-arreglo").value

    if(input_arreglo.trim()==""){
        alert("Por favor, ingrese números en el input")
    }

    // uso split que se usó en las lecciones pasadas para separar el valor del input en base al ","
    let arreglo = input_arreglo.split(",");

    // ahora lo que quiero es que por ejemplo, si el usuario pone "1, 2, 3,4, 5", se borren los espacios, para eso debo transformar el arreglo y para ello usaré el map, para a cada elemento del arreglo, aplicarle una operación, en este caso, el trim para quitar espacios
    arreglo = arreglo.map( elemento => parseFloat(elemento.trim())) // el parseFloat se tuvo que poner para convertir el texto a flotante 

    // console.log(arreglo);

    let resultadoMaximo = findMax(arreglo);
    console.log(`El número máximo es: ${resultadoMaximo}`);
    

    span_resultado.innerHTML = `${resultadoMaximo}`
    


})

