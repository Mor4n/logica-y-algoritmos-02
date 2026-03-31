
// importaciones
const fs = require("fs"); // importo modulo js
const readline = require("readline"); // modulo tipo Console.ReadLine() o ReadKey de c sharp

// configuración de readline
const { stdin: input, stdout: output } = require('node:process');
const rl = readline.createInterface({ input, output });

// rl.question("Ingrese el dato a mostrar: ", (respuesta)=>console.log(`Escribiste ${respuesta}`))

const ruta = "./notas.json";

//? Agregar nota al archivo
let id = 0;

const agregarNota = (titulo, contenido)=>{
    
    let notas = [];

    const fecha = new Date().toLocaleString('es-MX'); 

    if( fs.existsSync(ruta) ){
        let informacion_archivo = fs.readFileSync(ruta,"utf8");
        notas = JSON.parse(informacion_archivo);
        id = obtenerUltimoId(notas);
        id++; // le añado en 1 el id para que sea el siguiente

    }

    const nuevaNota = { id, titulo, contenido,fecha };
    notas.push(nuevaNota);

    fs.writeFileSync(ruta,JSON.stringify(notas));

    console.log('Nota agregada correctamente');

}

const obtenerUltimoId = (notas) =>{
    
    // guardo el ultimo elemento añadido
    let ultimoElemento = notas[notas.length-1]
    // devuelvo su id
    return ultimoElemento["id"]
}

//? Listar todas las notas que están guardadas

const mostrarNotas = () => {

  if (fs.existsSync(ruta)) {
    
        let informacion_archivo = fs.readFileSync(ruta,"utf8");
        notas = JSON.parse(informacion_archivo);
        notas.forEach( (elemento) => console.log(`${elemento["id"]}.- Título: ${elemento["titulo"]} - Contenido: ${elemento["contenido"]} (Nota guardada el: ${elemento["fecha"]} )`));

  
    } 
  else {
    console.log('No hay notas guardadas.');
  }
}



//? Eliminar nota

const eliminarNota = (valorAEliminar) => {
  if (fs.existsSync(ruta)) {

    let informacion_archivo = fs.readFileSync(ruta,"utf-8");
    notas = JSON.parse(informacion_archivo);

    notas = notas.filter(elemento => elemento.titulo.toLowerCase() !== valorAEliminar.toLowerCase() && elemento.id !== Number(valorAEliminar));

    // si ya no hay notas después de borrarlo
    if (notas.length === 0) {
      // elimino también el archivo
      fs.unlinkSync(ruta);
      console.log("Se eliminó la última nota y el archivo fue borrado.");
    } else {
        // si siguen quedando notas, sobreescribo el archivo
      fs.writeFileSync(ruta, JSON.stringify(notas));
      console.log(`Nota ${valorAEliminar} eliminada.`);
    }

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
                rl.close();
                return;
                
            }
            else{
                console.log(`La opción ingresada es inválida, ingrese una opción entre 1 al 4`);
                menu();
                
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

            rl.question("Ingrese el contenido para su nota: ", (respuesta2)=>{

                contenido = respuesta2;

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
            rl.question("Ingrese el id o el título de la nota a eliminar: ", (respuesta) => {
                titulo = respuesta;
                eliminarNota(titulo);
                menu();
            })
            
}


menu();