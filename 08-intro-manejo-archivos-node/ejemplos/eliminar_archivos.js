
const fs = require('fs'); // Importo el módulo fs

fs.unlink('./test_writeFile.txt', (err) => {

  if (err) {
    console.error('Error al eliminar el archivo:', err);
    return;
  }

  console.log('Archivo eliminado con éxito.');

});