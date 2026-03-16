//arreglo de objetos con al menos 5 productos, cada uno con las propiedades nombre, precio y categoría.

const productos = [
    { nombre: "Doritos Flamin' Hot", precio: 29, categoria: "Comida" },
    { nombre: "Audifonos Logitech", precio: 1699, categoria: "Electrónica" },
    { nombre: "Botella de agua", precio: 7, categoria: "Comida" },
    { nombre: "Office 2025", precio: 1000, categoria: "Software" },
    { nombre: "Sony Vegas Pro 2017", precio: 1999, categoria: "Software" },
    { nombre: "Hollow Knight", precio: 200, categoria: "Videojuego" },
    { nombre: "Tabletop Simulator", precio: 49, categoria: "Videojuego" },
];


// Usa filter() para obtener los productos que cuesten menos de $100.

let productosMenor100 = productos.filter( producto => producto.precio<100);

productosMenor100.forEach( producto => console.log(`Producto menor a $100: - Nombre: ${producto.nombre} - $${producto.precio} - Categoría: ${producto.categoria}`))



// Usa sort() para ordenar esos productos alfabéticamente por su nombre.

let productosAlfabeticamente = productos.sort( (a,b) => a.nombre>b.nombre ? 1:-1);

productosAlfabeticamente.forEach( producto => console.log(`Producto de forma alfabetica: ${producto.nombre}`))





// Usa map() para generar un nuevo arreglo que contenga solo los nombres de los productos.

let productosSoloNombres = productos.map( prod => prod.nombre);

console.log(`Arreglo con solo nombre de productos:`, productosSoloNombres);


// Muestra los resultados de la aplicación de cada métiodo en consola.

// (Oppcional) Incluye alguno de los métodos faltantes (reduce, some, every, includes, etc.) con algún caso de uso en este ejemplo, usa tu creatividad.

// Con some
let productosSome = productos.some( prod => prod.nombre === "Botella de agua");

console.log(`(Some) Existe el producto "Botella de agua?" ${productosSome}`);

productosSome = productos.some(prod => prod.categoria==="Software");

console.log(`(some) Existe algún producto con la categoría "Software"? ${productosSome}`);

productosSome = productos.some(prod => prod.categoria==="Limpieza");

console.log(`(some) Existe algún producto con la categoría "Limpieza"? ${productosSome}`);

// Con every
let productosEvery = productos.every( prod => prod.categoria =="Videojuego");

console.log(`(Every) Todos los productos son de la categoría "Videojuego"? ${productosEvery}`);



// Map

// si no es de la categoria software, entonces lo que quiero que haga es:
// copio el objeto con el spread operator , actualizo el precio del producto especificando la propiedad producto
// si es de la categoría de software, con el spread operator copio el objeto tal cual sin aplicarle el descuento porque el descuento es todo excepto software
let productosMitadPrecio = productos.map( prod => (prod.categoria!="Software") ? {...prod,precio: prod.precio-(prod.precio*.50)}: {...prod})

console.log("Oferta a mitad de precio de productos que no son de la categoría software:",productosMitadPrecio);

// reduce

let totalProductosSoftware = productos.reduce((total,producto) =>  (producto.categoria=="Software") ? total+producto.precio : total ,0)
console.log(`(Reduce) Precio total de los productos de la categoría Software ${totalProductosSoftware}`);

//? NOTA PARA QUE NO LO VUELVA A OLVIDAR: SI USO { } TENGO QUE HACER RETURN SI O SI
// a diferencia del de arriba
totalProductos = productos.reduce((total,producto) => { return (producto.categoria=="Software") ?  total+ producto.precio-(producto.precio*.50) : total},0)

console.log(`(Reduce) Precio total con 50% descuento de los productos de la categoría Software ${totalProductos}`);

let productosALaVenta = productos.reduce( (cadena,producto) => cadena+producto.nombre+" | ","")
console.log(`(Reduce) Tenemos los siguientes productos a la venta ${productosALaVenta}`);

// reduce para encontrar el producto más caro de la categoría

let productoMasCaroPorCategoria = productos.reduce((totalProductos, productos) => {

});