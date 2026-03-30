
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

  if (fs.existsSync(ruta)) {
    
        let informacion_archivo = fs.readFileSync(ruta,"utf8");
        notas = JSON.parse(informacion_archivo);
        notas.forEach( elemento => console.log(`${elemento["titulo"]}:  ${elemento["contenido"]}`));

  
    } 
  else {
    console.log('No hay notas guardadas.');
  }
}



//? Eliminar nota

const eliminarNota = (titulo) => {
  if (fs.existsSync(ruta)) {

    let informacion_archivo = fs.readFileSync(ruta,"utf-8");
    notas = JSON.parse(informacion_archivo);

    notas = notas.filter( elemento => elemento["titulo"]!==titulo);

    fs.writeFileSync(ruta, JSON.stringify(notas));

    console.log(`Nota con título "${titulo}" eliminada.`);
  } else {
    console.log('No hay notas para eliminar.');
  }
}

//? Ejecución de ejemplo
// agregarNota('Compras', 'Comprar leche y pan.');
// mostrarNotas();
// eliminarNota('Compras');

let titulo="";
let contenido = "";

const menu = ()=>{
    console.log(`
--------------------------------------------------------------------------------
        Lección 8 - Gestor de notas personales:
--------------------------------------------------------------------------------
        1. Crear nota
        2. Ver notas
        3. Eliminar nota
        4. Salir
        `);
    
        rl.question("Escriba una opción: ", opcion => {
        
            if(opcion=="1"){
                menuAgregarNota();

            }else if (opcion =="2"){
                menuMostrarNotas();
            }
            else if (opcion=="3"){
                menuEliminarNota();

            }
            else if (opcion=="4"){
                console.log("Gracias por usar el programa :'))) ! ");
                return;
                
            }
            else{
                console.log(`La opción ingresada es inválida, ingrese una opción entre 1 al 4`);
                
            }

        });
        
    }


const menuAgregarNota = () =>{
            console.log(`
----------------------------------------
Crear nota:
----------------------------------------
            `);

            rl.question("Ingrese el título para su nota: ", (respuesta) =>{
            titulo = respuesta;

            rl.question("Ingrese el contenido para su nota: ", (respuesta)=>{

                contenido = respuesta;

                agregarNota(titulo,contenido);
                menu();
            })

            })

            
}

const menuMostrarNotas = () =>{
            console.log(`
----------------------------------------
Ver notas:
----------------------------------------
            `);
            mostrarNotas();
            menu();

}

const menuEliminarNota = () =>{
            console.log(`
----------------------------------------
Eliminar una nota:
----------------------------------------
            `);
            rl.question("Ingrese el título de la nota a eliminar: ", (respuesta) => {
                titulo = respuesta;
                eliminarNota(titulo);
                menu();
            })
            
}


menu();