
// viajes.js

// Array para guardar los destinos
const destinos = [];

// Función para registrar un destino de viaje
export const registrarDestino =(destino, fecha, transporte,cantidadPersonas) => {
    // TODO: Crear un objeto con los datos del destino
    const nuevoViaje = {
        destino: destino,
        fecha: fecha,
        transporte: transporte,
        cantidadPersonas : cantidadPersonas,
        costo: calcularCosto(destino, transporte,cantidadPersonas)
    };

    destinos.push(nuevoViaje);
}

// Función para calcular el costo del viaje
const calcularCosto = (destino, transporte,cantidadPersonas) => {
    let costoBase = 0;
    let costoTotal = 0;

    // Costo base por destino
    if (destino === "Paris") {
        costoBase = 500;
    } else if (destino === "Londres") {
        costoBase = 400;
    } else if (destino === "New York") {
        costoBase = 600;
    }

    // Costo adicional por tipo de transporte
    if (transporte === "Avión") {
        costoBase += 200;
    } else if (transporte === "Tren") {
        costoBase += 100;
    }
    
    costoTotal = costoBase*cantidadPersonas; // Calculo la cantidad total

    costoTotal = calcularDescuento(destino, costoTotal, cantidadPersonas) // Se aplica el descuento


    return costoTotal;
}

// Función para mostrar el itinerario de los viajes registrados
export const mostrarItinerario = () => {
    // TODO: Recorrer el arreglo de destinos y mostrar la información de cada uno
    for (let i = 0; i < destinos.length; i++) {
        const viaje = destinos[i];
        console.log("Destino: " + viaje.destino);
        console.log("Fecha: " + viaje.fecha);
        console.log("Transporte: " + viaje.transporte);
        console.log("Costo: $" + viaje.costo);
        console.log("---------------------------");
    }
}


// Función para calcular el descuento

const calcularDescuento = (destino,costoTotal, cantidadPersonas) =>{

    // arreglo de destinos en oferta
    const ofertaDestinos = ["Paris","New York"]; 

    // si el destino seleccionado se encuentra en el arreglo de destinos en oferta, que se le aplique un descuento del 5%
    if (ofertaDestinos.includes(destino)) costoTotal = (costoTotal-(costoTotal*.05));

    // si son 2 personas o más, que haga un 5% de descuento adicional
    if (cantidadPersonas >= 2) costoTotal = (costoTotal-(costoTotal*.05)); 

    

    // devuelvo el costoTotal con el descuento aplicado
    return costoTotal;
}
