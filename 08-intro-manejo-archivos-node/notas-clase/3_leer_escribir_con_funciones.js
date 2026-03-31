
const fs = require("fs")

const filePath = require("./ejemplo.json")

let person;

const leer = () =>{

    const content = fs.readFileSync(filePath,"utf8");
    person = JSON.parse(content)
    console.log(person);
    
}   

const escribir = (persona_obj)=>{

    const person_json = JSON.stringify(persona_obj);
    fs.writeFileSync(filePath,person_json)
    
}

// leer
leer()
// escribir
person.age = person.age+1
escribir(person);
// leer
leer()