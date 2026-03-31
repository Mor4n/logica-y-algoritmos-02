
const repl = require('repl');

const suma = (a,b) =>{
    return a+b;
}

// Paso 1 - Iniciar el repl
// Puedo definir como quiero mi prompt (como el > de node)
const r = repl.start({ prompt:"(😺)> " });

// Paso 2 - Incluir las funciones a utilizar en mi repl
r.context.suma = suma; // en el contexto va a haber una propiedad usma y corresponde a la funcion que está afuera de suma


