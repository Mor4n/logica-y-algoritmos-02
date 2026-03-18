/*
const invitados = ["Ana", "Carlos", "Cecilia", "Daniel", "Diana", "Eduardo"];
sentarse juntos según este criterio.
Criterio: los invitados prefieren sentarse junto a personas cuyo nombre empieza con la misma letra que el suyo. */

const invitados = ["Ana","Carlos","Cecilia","Daniel","Diana","Eduardo"]

const encontrarPareja=(arr) =>{

    let izquierda = 0;
    let derecha = arr.length-1;
    
// Paso 2. Mientras que izquierda sea menor que derecha:
    while(izquierda<derecha){

    let nombre1 = arr[izquierda];
    let nombre2 = arr[derecha];
    
    console.log(`${nombre1} y ${nombre2}`);
    
    // Paso 2.2. Si la suma es igual al valor objetivo, se encontró el par y nos detenemos
    if(nombre1[0]===nombre2[0]){
        return `Par encontrado ${nombre1} y ${nombre2}`;
    }
    // Paso 2.3. Si la suma es menor que el valor objetivo, se moverá el puntero izquierda una posición a la derecha
    if(nombre1[0]<=nombre2[0]){
        derecha--;
    }
    if(nombre1[0]>= nombre2[0]){
        izquierda++;
    }

    console.log(`Izq: ${izquierda} | Der: ${derecha}`);
    
    }
    return "Sin pareja"

}

console.log(encontrarPareja(invitados));
