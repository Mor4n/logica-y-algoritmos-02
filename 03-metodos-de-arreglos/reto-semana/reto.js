

const avengers = [
    { name: "Iron man", age: 48, movies: ["Iron man", "Avengers", "End game"] },
    { name: "Captain America", age: 101, movies: ["Captain America", "Avengers", "End game"] },
    { name: "Thor", age: 1500, movies: ["Thor", "Avengers", "End game"] },
    { name: "Hulk", age: 49, movies: ["Hulk", "Avengers", "End game"] },
]

// 1. En el arreglo se encuentra ironman?

// buscar como hacer para que lo pueda encontrar siendo minuscula o mayusscula el ==
const incluyeIronMan = avengers.some( elemento => elemento.name=="Iron Man");
console.log(incluyeIronMan);

//2. Si existe Thor en movies

let personaje = { name: "Thor", age: 1500, movies: ["Thor", "Avengers", "End game"] };
const existeThor =  personaje.movies.includes("Thor");
console.log("Incluye thor",existeThor);

// de otra forma es
let formaDiccionario = avengers.some(  (personaje)=> personaje.movies.includes("Thor")  );
console.log(formaDiccionario);


// 3. Cual es el avenger mas viejo
// persona
let masViejo = avengers.reduce( (anteriorCharacterEdad, character)=> {
    
    if( anteriorCharacterEdad.age > character.age){
        return anteriorCharacterEdad;
    }
    else{
        return character;
    }

},)

console.log(masViejo.name);


masViejo = avengers.reduce( (anteriorCharacterEdad, character)=> anteriorCharacterEdad.age > character.age ? anteriorCharacterEdad:character);