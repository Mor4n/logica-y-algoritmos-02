

const lista_compras_contenedor = document.querySelector("#lista-compras-contenedor");
const listado_productos = document.querySelector("#seccion-productos");
const contenedor_productos = document.querySelector("#compras-tbody");
const vaciar_lista = document.querySelector("#vaciar-lista");



const agregarProducto = (e) =>{

    // console.log(`Hola desde ${e.target.classList}`);
    // que se ejecute lo siguiente solo cuando el producto que presionemos, tenga la clase de producto agregar ( o sea el botón, si presionamos la imagen o un texto del producto, que no pase nada)
    if(e.target.classList.contains("producto-agregar")){
        const htmlProducto = e.target.parentElement; // de estar en el elemento botón, vamos atrás un nodo HTML y nos quedamos con el card-producto

        extraerDatos(htmlProducto);
        
    }

}

// extraer info del producto

const extraerDatos = (producto) => {
    console.log(producto);

    const producto_info = {
        imagen: producto.querySelector("img").src,
        nombre: producto.querySelector(".producto-titulo").textContent,
        precio: producto.querySelector(".producto-precio").textContent,
    }
    console.log(producto_info);
    

}



const iniciarEvents = () =>{
    
    // a cada producto del listado, si se da clic, va a poderse agregar a la lista
    listado_productos.addEventListener("click", agregarProducto);
    
}

iniciarEvents();
