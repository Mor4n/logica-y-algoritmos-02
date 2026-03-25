
// una función que se llama a si misma
function fn(numero){ // 2: llega n=1
    console.log(numero);
    
    if(numero> 5){ 
        return numero;
    }
    // Si no es mayor que 5 el n, ocurre recursión
    else{
        // La primera vez será fn (0+1 o sea 1)
        return fn(numero+1)

    
    }

}


fn(0)