
let formulario = document.querySelector("#formulario");
let input = document.querySelector("#input-oracion");
let spanPalabraLarga = document.querySelector("#palabraLarga");

function findLongestWord(text) {
  // TODO: Dividir el texto en palabras y almacenarlas en una variable
  
  const words = text.split(" "); // divido las palabras del texto en base a los espacios con el metodo split, este metodo lo guardará en un arreglo cada palabra

  let longestWord = ""; // Inicializar la palabra más larga

  // TODO: Recorrer el arreglo de palabras con un ciclo
    for (let i = 0; i < words.length; i++) {
      let actualWord = words[i]; // guardo la palabra actual en una variable mejor

    // TODO: Comparar la longitud de la palabra actual con la más larga
    if (actualWord.length > longestWord.length) {

      // Actualizar la palabra más larga
      longestWord = words[i];

    }
}

  // TODO: Retornar la palabra más larga encontrada
    return longestWord;
}

// Ejemplo de uso
const text =
  "JavaScript es un lenguaje de programación increíble para aprender.";
// TODO: Llama a la función y muestra el resultado
console.log(findLongestWord(text)); // Resultado esperado: "programación"


// funcion para obtener la palabra del formulario
formulario.addEventListener("submit", (e)=>{
    e.preventDefault();
    
    if(input.value.trim() === ""){
      alert("Por favor, ingrese una palabra, ya que el input está vacío")
    }else{
      let palabraMasLarga = findLongestWord(input.value);

      spanPalabraLarga.innerHTML=`${palabraMasLarga}`
    }


})

