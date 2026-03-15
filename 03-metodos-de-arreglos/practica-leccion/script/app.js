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

productosMenor100 = productos.filter( producto => producto.precio<100);

productosMenor100.forEach( producto => console.log(`Producto menor a $100: - Nombre: ${producto.nombre} - $${producto.precio} - Categoría: ${producto.categoria}`))



// Usa sort() para ordenar esos productos alfabéticamente por su nombre.

productosAlfabeticamente = productos.sort( (a,b) => a.nombre>b.nombre ? 1:-1);

productosAlfabeticamente.forEach( producto => console.log(`Producto de forma alfabetica: ${producto.nombre}`))





// Usa map() para generar un nuevo arreglo que contenga solo los nombres de los productos.

productosSoloNombres = productos.map( prod => prod.nombre);

console.log(`Arreglo con solo nombre de productos:`, productosSoloNombres);


// Muestra los resultados de la aplicación de cada métiodo en consola.

// (Oppcional) Incluye alguno de los métodos faltantes (reduce, some, every, includes, etc.) con algún caso de uso en este ejemplo, usa tu creatividad.