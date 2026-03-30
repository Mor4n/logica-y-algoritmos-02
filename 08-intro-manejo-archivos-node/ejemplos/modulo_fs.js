
// File system: fs nos da una API para interactuar con el sistema de archivos, con ello se puede escribir, leer, eliminar y renombrar archivos o directorios

const fs = require('fs'); // Importo el módulo fs

const rutaDeArchivo = './test.txt'; 

// verificar si el archivo existe
//? Con existsSync puedes comprobar si existe el archivo
if (fs.existsSync(rutaDeArchivo)) { 
  console.log('El archivo existe.');
} else {
  console.log('El archivo no existe.');
}