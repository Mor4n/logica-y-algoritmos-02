
import { registrarDestino, mostrarItinerario, catalogoDestinos } from "./viajes.js";

// Obtengo la lista desplegable de destinos del HTML
const listaDestinos = document.querySelector("#lista-destinos");
// obtengo la lista desplegable de cantidad de personas
const listaCantidadPersonas = document.querySelector("#lista-cantidad-personas");

// obtengo el valor de la fecha seleccionada
const inputDate = document.querySelector("#input-date");

// formulario para añadir el event listener y hacer su proceso
const formulario = document.querySelector("#formulario");


// Función para el cargado de datos de los <select> del HTML
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
    
    e.preventDefault();

    // obtengo valor del radiobutton seleccionado
    const inputTransporte = document.querySelector('input[name="transporte"]:checked');

    // verificación que esté todo con datos
    if(listaDestinos.selectedIndex==0|| inputDate.value==""||
        listaCantidadPersonas.selectedIndex==0 || !inputTransporte

     ){
        return alert("Por favor, seleccione todos los campos para registrar su boleto");
    }

    // Formateo de fecha 
    const fecha = new Date(`${inputDate.value}T00:00`).toDateString(); 

    

    registrarDestino(listaDestinos.value, fecha,inputTransporte.value,listaCantidadPersonas.value);

    // reinicio los valores

    inputDate.value ="";
    listaDestinos.selectedIndex = 0;
    listaCantidadPersonas.selectedIndex = 0;
    inputTransporte.checked = false;
    

    mostrarItinerario();

})


// cargar selects o listas desplegables al inicio de la página
cargarListasDesplegables();



