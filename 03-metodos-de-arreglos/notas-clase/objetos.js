

let carritoCompras = {
    productos: [],
    agregarProducto: function (producto){
        this.productos.push(producto); // Se pone this porque "de este objeto, "
    },
    eliminarProducto: function (indice){
        this.productos.splice(indice,1); // Splice hace un corte
    }
// En lugar de carritoCompras.productos.push(producto)
// Hago this.productos.push(producto), ya que dentro del mismo objeto, no tengo forma de decirle carritoCompras.push
// Entonces hace el recorrido en el objeto hasta buscar la propiedad productos y en este caso hace push.
// Entonces, this hace referencia al carritoCompras
};


carritoCompras.agregarProducto("Sandía");
carritoCompras.agregarProducto("Peras");
carritoCompras.agregarProducto("Manzanas");

console.log(carritoCompras.productos);

carritoCompras.eliminarProducto(1); // Elimino peras
console.log(carritoCompras.productos);


// Ejemplo splice

let arr = [1,2,3,4,5,6];

arr.splice(3); // borra desde el indice 3 hasta el final, dejando []1,2,3]
 arr = [1,2,3,4,5,6];
arr.splice(3,1); // El índice 3 viene siendo el valor "4", 1 viene siendo el elemento que voy a borrar, que es 4
// Entonces queda [1,2,3,5,6]

