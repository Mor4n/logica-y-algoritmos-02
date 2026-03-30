

// Node.js tiene métodos como writeFile y appendFile. 
// writeFile: sobrescribe el contenido existente
// appendFile: agrega texto al final del archivo


const fs = require('fs'); // Importo el módulo fs

const { setTimeout } = require('timers/promises');

// Crea o sobreescribe un archivo llamado test_writeFile.txt, con el texto de "Hola, Node.js!"
fs.writeFile('./test_writeFile.txt', 'Hola, Node.js! archivo creado o sobreescrito con writeFile', (err) => {

  if (err) { 
    // manejo de errores
    console.error('Error al escribir en el archivo:', err);

    return;
  }

  console.log('Archivo escrito con éxito.');
});


// Espero un momento porque quiero que se ejecute primero lo de arriba y luego esto
esperarTiempo = async() => {

    await setTimeout(500); // Espera medio segundo

        // Añadir al final de un archivo con appendFile
    fs.appendFile('./test_writeFile.txt', '\nTexto añadido al final del archivo con appendFile: Hola, Node.js!', (err) => {

    if (err) { 
        // manejo de errores
        console.error('Error al actualizar en el archivo:', err);

        return;
    }

    console.log('Archivo actualizado con éxito.');
    });

}

esperarTiempo()