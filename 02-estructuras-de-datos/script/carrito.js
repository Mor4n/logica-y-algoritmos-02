

const lista_compras_contenedor = document.querySelector("#lista-compras-contenedor");
const listado_productos = document.querySelector("#seccion-productos");
const contenedor_productos = document.querySelector("#compras-tbody");
const vaciar_lista = document.querySelector("#vaciar-lista");



const agregarProducto = (e) =>{

    // console.log(`Hola desde ${e.target.classList}`);
    // que se ejecute lo siguiente solo cuando el producto que presionemos, tenga la clase de producto agregar ( o sea el botón, si presionamos la imagen o un texto del producto, que no pase nada)
    if(e.target.classList.contains("producto-agregar")){
        console.log("Agregado");
        
    }

}


const iniciarEvents = () =>{
    
    // a cada producto del listado, si se da clic, va a poderse agregar a la lista
    listado_productos.addEventListener("click", agregarProducto);
    
}

iniciarEvents();
