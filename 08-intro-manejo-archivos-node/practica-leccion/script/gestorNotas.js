
const fs = require("fs"); // importo modulo js

const readline = require("readline"); // modulo tipo Console.ReadLine() o ReadKey de c sharp

const { stdin: input, stdout: output } = require('node:process');

const rl = readline.createInterface({ input, output });

rl.question("Ingrese el dato a mostrar: ", (respuesta)=>console.log(`Escribiste ${respuesta}`))
