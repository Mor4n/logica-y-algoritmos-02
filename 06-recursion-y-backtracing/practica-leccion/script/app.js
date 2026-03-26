// Lista de regalos
const gifts = ["Muñeca", "Carro de juguete", "Rompecabezas", "Lego", "Pelota"];


function findGift(gifts, giftName, index = 0) {

    // Si se llega al final del arreglo, no se encontró el regalo
    if (index === gifts.length) {
        return `${giftName} no está en la lista.`;
    }

    
    // Si encontramos el regalo, devolvemos el string 
    if(gifts[index] === giftName){
        return `${giftName} está en la posición ${index} del arreglo`
    }

    // Llamada recursiva
    return findGift(gifts, giftName, index+1)
}

// Casos de ejemplo:
// Llama a la función con los datos de entrada y muestra el resultado en la consola.
// Salida esperada:
// "Lego está en la posición 3."
let giftToFind = "Lego";
console.log(findGift(gifts, giftToFind));

// Caso cuando el regalo no está en la lista
// Salida esperada:
// "Camión no está en la lista."
giftToFind = "Camión";
console.log(findGift(gifts, giftToFind));

// otros ejemplos en consola
const ejemplo2 = ["Nintendo Switch", "Stardey Valley", "The Legend of Zelda","Pokémon"];

giftToFind ="The Legend of Zelda";
console.log(findGift(ejemplo2, giftToFind));

giftToFind = "Mario carritos";
console.log(findGift(ejemplo2, giftToFind));


let formulario_lista_regalos = document.querySelector("#formulario-lista-regalos");

let formulario_buscar_regalo = document.querySelector("#formulario-buscar-regalo");

let input_lista_regalos = document.querySelector("#input-lista-regalos");

let input_buscar_regalo = document.querySelector("#input-buscar-regalo");

let lista_regalos = document.querySelector("#lista-regalos");

let regalo_encontrado_txt = document.querySelector("#regalo-encontrado");

let boton_buscar_regalo = document.querySelector("#boton-buscar-regalo");

let regalos_lista=[];

// si la lista está vacia, desactivo el botón
if(regalos_lista.length === 0){
    boton_buscar_regalo.disabled = true;
}

formulario_lista_regalos.addEventListener("submit",(e) => {
    e.preventDefault();

    if(input_lista_regalos.value.trim() === ""){
        alert("Por favor, ingrese el nombre de un regalo a buscar, ya que no puede estar vacío");
    }


    // con el método split que usamos en la lección pasada separamos el valor del input en base a un "," 
    regalos_lista = input_lista_regalos.value.split(",");
    // console.log(regalos_lista);
    
    // con el método de trim que estuve usando para validaciones en las anteriores lecciones se elimina posibles espacios que llegue a tener un elemento del arreglo

    regalos_lista = regalos_lista.map( elemento => elemento.trim() );

    // console.log(regalos_lista);
    lista_regalos.innerHTML = "";

    regalos_lista.forEach( elemento => {
        lista_regalos.innerHTML += `<li>${elemento}</li>`
    });

    // activo el botón ya que la lista ya no está vacía
    boton_buscar_regalo.disabled = false;

});

formulario_buscar_regalo.addEventListener("submit", (e) => {
    e.preventDefault();

    if(input_buscar_regalo.value.trim() === ""){
        alert("Por favor, ingrese el nombre de un regalo a buscar, ya que no puede estar vacío");
    }

    let regalo_a_buscar = input_buscar_regalo.value.trim();
    let regalo_encontrado = findGift(regalos_lista, regalo_a_buscar);

    regalo_encontrado_txt.textContent = regalo_encontrado;


});