/**
 * Tienes una lista de invitados ordenada alfabéticamente, y tu tarea es organizar la mesa para una cena. Sin embargo, algunos invitados prefieren sentarse junto a personas cuyo nombre empieza con la misma letra que el suyo. Tu objetivo es encontrar el primer par de invitados consecutivos que puedan sentarse juntos según este criterio.
 */

const invitados = ["Ana", "Carlos", "Cecilia", "Daniel", "Diana", "Eduardo"];

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

        // como es ordenado se pondría asi
        izquierda++;
        derecha++;

        
        
    }

    return null; // Si no se encuentra ningún par
}

console.log(encontrarPareja(invitados));
// Resultado: ["Carlos", "Cecilia"]