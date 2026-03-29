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

