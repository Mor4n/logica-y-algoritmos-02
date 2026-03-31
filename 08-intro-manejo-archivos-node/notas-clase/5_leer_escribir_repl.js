
const fs = require("fs")
const repl = require('repl');

// const filePath = ("./ejemplo.json")

let person;

const leer = (filePath) =>{

    const content = fs.readFileSync(filePath,"utf8");
    return JSON.parse(content)
    
}   

const escribir = (filePath,persona_obj)=>{

    const person_json = JSON.stringify(persona_obj);
    fs.writeFileSync(filePath,person_json)
    
}

const r = repl.start({ prompt:"(😺)> " });

r.context.leer = leer;

r.context.escribir = escribir;