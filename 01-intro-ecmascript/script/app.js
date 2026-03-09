
// app.js

import { registrarDestino, mostrarItinerario, catalogoDestinos } from "./viajes.js";

// Obtengo la lista desplegable de HTML
const listaDestinos = document.querySelector("#lista-destinos");

const formulario = document.querySelector("#formulario");


// Iniciar la aplicación
const iniciarApp = () => {

    // cargado de cada del objeto de destinos en el menú desplegable

    for (const destino in catalogoDestinos) {

        listaDestinos.innerHTML += `<option value="${destino}" class="option-destino">${destino}</option>`;

    }



    // Ejemplo de cómo registrar destinos
    registrarDestino("Agua Prieta", "2024-06-15", "Avión",2);
    registrarDestino("Londres", "2024-07-01", "Tren",1);

    // Mostrar el itinerario de los viajes
    mostrarItinerario();
}

// event listener del formulario
formulario.addEventListener("submit" ,(e) =>{


    e.preventDefault();
    console.log(listaDestinos.value);
    

})

// Ejecutar la aplicación
iniciarApp();


