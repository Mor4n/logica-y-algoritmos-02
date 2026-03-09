
// app.js

import { registrarDestino, mostrarItinerario, catalogoDestinos } from "./viajes.js";

// Obtengo la lista desplegable de destinos del HTML
const listaDestinos = document.querySelector("#lista-destinos");
// obtengo la lista desplegable de cantidad de personas
const listaCantidadPersonas = document.querySelector("#lista-cantidad-personas");

// obtengo el valor de la fecha seleccionada
const inputDate = document.querySelector("#input-date");

// formulario para añadir el event listener y hacer su proceso
const formulario = document.querySelector("#formulario");


// Iniciar la aplicación
const iniciarApp = () => {

    // cargar selects o listas desplegables
    cargarListasDesplegables();

    // Ejemplo de cómo registrar destinos
    registrarDestino("Agua Prieta", "2024-06-15", "Avión", 2);
    registrarDestino("Londres", "2024-07-01", "Tren", 1);

    // Mostrar el itinerario de los viajes
    mostrarItinerario();
}

const cargarListasDesplegables = () => {

    // cargado de cada elemento del objeto de destinos en el menú desplegable

    for (const destino in catalogoDestinos) {

        listaDestinos.innerHTML += `<option value="${destino}" class="option-destino">${destino}</option>`;

    }

    // cargado de cantidad de personas con un for

    for (let i = 1; i <= 5; i++) {

        listaCantidadPersonas.innerHTML += `<option value="${i}" class="option-cantidad">${i}</option>`;


    }

}

// event listener del formulario
formulario.addEventListener("submit", (e) => {
    
    const fecha = new Date(`${inputDate.value}T00:00`).toDateString(); // Formateo de fecha 
    
    e.preventDefault();
    console.log(listaDestinos.value);
    console.log(listaCantidadPersonas.value);
    console.log(fecha);
    


})

// Ejecutar la aplicación
iniciarApp();


