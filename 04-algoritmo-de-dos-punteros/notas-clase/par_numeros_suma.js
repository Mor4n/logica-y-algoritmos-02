// Quiero encontrar 2 numeros en el arreglo arr que al sumarlos dé 35

let arr = [1,5,7,33,2,86,5]

let objetivo = 35 

// Paso 1. Inicializar los 2 punteros

let izquierda = 0;
let derecha = arr.length-1;

let suma = 0;

// Paso 2. Mientras que izquierda sea menor que derecha:
    while(izquierda<derecha){

    // Paso 2.1. Calcula la suma de los elementos en las posiciones izquierda y derecha

    suma = arr[izquierda] + arr[derecha];


    // Paso 2.2. Si la suma es igual al valor objetivo, se encontró el par y nos detenemos
    if(suma==objetivo){
        console.log(`Par encontrado ${arr[izquierda]} y ${arr[derecha]}`);
        break;
        
    }
    // Paso 2.3. Si la suma es menor que el valor objetivo, se moverá el puntero izquierda una posición a la derecha
    if(suma<objetivo){
        izquierda++;
    }

    // Paso 2.4. Si la suma es mayor que el valor objetivo, se moverá el puntero derecha a una posición a la izquierda
    if(suma>objetivo){
        derecha--;
    }



    }

    