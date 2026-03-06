

function funcion_tradicional(){
    return this; // se refiere a la función como tal
}

function_flecha = () => {
    return this; // se refiere al objeto (en caso de que exista)
}


console.log(funcion_tradicional()); // regresa objeto global
console.log(funcion_flecha()); 


objeto = {
    name: "Objeto",
    funcion_tradicional: function(){
        return this
    },
    funcion_flecha: () =>{
        return this
    }
}

console.log(objeto.funcion_tradicional()); // "Objeto"
console.log(objeto.funcion_flecha()); // "{}"
