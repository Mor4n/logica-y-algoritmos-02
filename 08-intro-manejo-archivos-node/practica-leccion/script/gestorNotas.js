
// importaciones
const fs = require("fs"); // importo modulo js
const readline = require("readline"); // modulo tipo Console.ReadLine() o ReadKey de c sharp

// configuración de readline
const { stdin: input, stdout: output } = require('node:process');
const { info } = require("node:console");
const rl = readline.createInterface({ input, output });

// rl.question("Ingrese el dato a mostrar: ", (respuesta)=>console.log(`Escribiste ${respuesta}`))

const ruta = "./notas.json";

//? Agregar nota al archivo

const agregarNota = (titulo, contenido)=>{
    
    let notas = [];

    if( fs.existsSync(ruta) ){
        let informacion_archivo = fs.readFileSync(ruta,"utf8");
        notas = JSON.parse(informacion_archivo);

    }

    const nuevaNota = { titulo, contenido };
    notas.push(nuevaNota);

    fs.writeFileSync(ruta,JSON.stringify(notas));

    console.log('Nota agregada correctamente');

}

//? Listar todas las notas que están guardadas

const mostrarNotas = () => {

  if (fs.existsSync(filePath)) {
    
        let informacion_archivo = fs.readFileSync(ruta,"utf8");
        notas = JSON.parse(informacion_archivo);
        notas.forEach( elemento => console.log(`${elemento["titulo"]}:  ${elemento["contenido"]}`));

  
    } 
  else {
    console.log('No hay notas guardadas.');
  }
}