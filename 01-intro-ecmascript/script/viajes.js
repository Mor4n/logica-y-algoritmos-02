

// Array para guardar los destinos
const destinos = [];

// objeto de catalogo de destinos con precios
export const catalogoDestinos = {
    "Paris": 500,
    "Londres": 400,
    "New York": 600,
    "Agua Prieta": 50,
    "Hermosillo": 150,
    "Ciudad de México": 350,

}

// objeto de tipos de transporte
const tiposTransporte = {
    "Avión": 200,
    "Tren": 100,
}


// Función para registrar un destino de viaje
export const registrarDestino = (destino, fecha, transporte, cantidadPersonas) => {
    // TODO: Crear un objeto con los datos del destino
    const nuevoViaje = {
        destino: destino,
        fecha: fecha,
        transporte: transporte,
        cantidadPersonas: cantidadPersonas,
        costo: calcularCosto(destino, transporte, cantidadPersonas)
    };

    destinos.push(nuevoViaje);
}

// Función para calcular el costo del viaje
const calcularCosto = (destino, transporte, cantidadPersonas) => {
    let costoBase = 0;
    let costoTotal = 0;

    // Costo base por destino

    costoBase = catalogoDestinos[destino]; // del objeto catalogoDestinos, obtengo el precio al buscar la clave que sea de destino


    // Costo adicional por tipo de transporte

    costoBase += tiposTransporte[transporte]; // igualmente, del objeto tipoTransporte obtengo el valor al encontrar el transporte coincidente, esto se suma al costo base

    costoTotal = costoBase * cantidadPersonas; // Calculo la cantidad total

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
        console.log("Personas: " + viaje.cantidadPersonas);
        console.log("Costo: $" + viaje.costo);
        console.log("---------------------------");
    }
}


// Función para calcular el descuento

const calcularDescuento = (destino, costoTotal, cantidadPersonas) => {

    // arreglo de destinos en oferta
    const ofertaDestinos = ["Paris", "New York"];

    // arreglo de destinos en méxico
    const destinosNacionales = ["Agua Prieta", "Hermosillo", "Ciudad de México"];

    // si el destino seleccionado se encuentra en el arreglo de destinos en oferta, que se le aplique un descuento del 10%
    if (ofertaDestinos.includes(destino)) {

        return costoTotal = (costoTotal - (costoTotal * .10));

    }

    // si el destino es dentro del país que tenga un descuento adicional del 7%
    else if (destinosNacionales.includes(destino)) {

        return costoTotal = (costoTotal - (costoTotal * 0.07));

    }

    // si son 2 personas o más, que haga un 5% de descuento adicional
    else if (cantidadPersonas >= 2) {

        return costoTotal = (costoTotal - (costoTotal * .05));

    }

    // devuelvo el costoTotal si ninguno de los anteriores se cumple
    return costoTotal;
}
