

const lista_compras_contenedor = document.querySelector("#lista-compras-contenedor");
const seccion_productos = document.querySelector("#seccion-productos");
const contenedor_productos = document.querySelector("#compras-tbody");
const vaciar_lista = document.querySelector("#vaciar-lista");
let listaProductos = [];


// agregar producto al arreglo

const agregarProducto = (producto) =>{

    // verifico con some de los ejercicios que hicimos
    const estaDuplicado = listaProductos.some( productoLista => productoLista.nombre == producto.nombre);
        
    // si está duplicado mando una alerta, si no, lo agrego
    if(estaDuplicado){
        alert(`Producto ${producto.nombre} está duplicado`)
    }
    else{
        listaProductos.push(producto);
        console.log(listaProductos);
        mostrarProductos();
    }

    
    

}


const mostrarProductos= () =>{
    // limpio lo que tiene el html para evitar que se duplique
    contenedor_productos.innerHTML=``;

    // inserto los productos a la lista
    listaProductos.forEach( producto => contenedor_productos.innerHTML +=`
        <tr>
        
            <td>
            <img src="${producto.imagen}" class="lista-producto-imagen">
            </td>
            <td>
            <p class="lista-producto-nombre"> ${producto.nombre} </p>
            </td>
            <td>
            <p class="lista-producto-precio" >${producto.precio} </p>
            </td>

        </tr>
        `);

}



// extraer info del producto

const extraerDatos = (producto) => {
    console.log(producto);

    const producto_info = {
        imagen: producto.querySelector("img").src,
        nombre: producto.querySelector(".producto-titulo").textContent,
        precio: producto.querySelector(".producto-precio").textContent,
    }
    
    agregarProducto(producto_info);
    

}

// se llama a esta función cuando se dé clic en el botón de agregar a la lista

const obtenerProducto = (e) =>{

    // console.log(`Hola desde ${e.target.classList}`);
    // que se ejecute lo siguiente solo cuando el producto que presionemos, tenga la clase de producto agregar ( o sea el botón, si presionamos la imagen o un texto del producto, que no pase nada)
    if(e.target.classList.contains("producto-agregar")){
        const htmlProducto = e.target.parentElement; // de estar en el elemento botón, vamos atrás un nodo HTML y nos quedamos con el card-producto

        extraerDatos(htmlProducto);
        
    }

}



const iniciarEvents = () =>{
    
    // a cada producto del listado, si se da clic, va a poderse agregar a la lista
    seccion_productos.addEventListener("click", obtenerProducto);
    
}

iniciarEvents();
