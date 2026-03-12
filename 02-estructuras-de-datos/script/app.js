
let listaDeCompras =[];

// funcion que agrega un nuevo producto al final de la lista
//Asegúrate de que no haya productos duplicados en la lista.

const agregarProducto=(producto) =>{
    if(listaDeCompras.includes(producto)){
        return console.log(`Producto "${producto}" de añadirse estaría duplicado, por lo tanto se omitirá`);
    }
    listaDeCompras.push(producto);
    console.log(`Añadido: ${producto}`);
    
};

// funcion que agrega que elimina un producto de la lista.
const eliminarProducto =(producto)=>{
    // reemplazo el contenido del arreglo, dejo pasar todo elemento al arreglo excepto el producto que se quiere sacar
    listaDeCompras = listaDeCompras.filter( elemento => elemento != producto);
    console.log(`${producto} eliminado`);
    

}

// imprime todos los productos de la lista
const mostrarLista = () =>{
    console.log("---Lista de productos---");
    
    listaDeCompras.forEach( producto => console.log(`Nombre: ${producto}`)
    );

}


agregarProducto("Atun");
agregarProducto("Fresa");
agregarProducto("Atun"); // No lo va a meter
agregarProducto("Sandía");
agregarProducto("Mandarina");

mostrarLista();

// eliminar producto

eliminarProducto("Sandía");

mostrarLista();
