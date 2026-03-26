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

