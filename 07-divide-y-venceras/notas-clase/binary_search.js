

const binarySearch = (arr,target,low,high) =>{
    // low, mid y high representa posiciones en el arreglo
    
    // caso base: si no se encontró el valor
    if(low>high){ 
        return -1 // "No se encontró el valor"
    }

    let mid = Math.floor((low+high)/2);

    // otro caso base: si encuentro el valor buscado
    if(arr[mid] === target){
        return mid;
    }

    // llamada recursiva
    else if(arr[mid] > target){
        // si lo pasamos tal cual (como el arr,target,low) quiere decir que esas partes se mantienen, a excepción del high, en este caso, high va a ser mid-1, vamos a pasar la mitad, pero un poco antes de la mitad por el -1
        return binarySearch(arr,target,low,mid-1);
        // Si el valor que encontramos es mayor al objetivo, necesitamos buscar en la mitad izquierda hacia abajo
    }
    // si es mayor, busco a la mitad de la derecha
    else{
        return binarySearch(arr,target,high,mid+1)
    }



}

// Busqueda binaria debe de ser con un arreglo ordenado
let myArr = [442,478,503,511,546,620,645,715];
let result = binarySearch(myArr,503, 0, myArr.length-1);
console.log(result);
