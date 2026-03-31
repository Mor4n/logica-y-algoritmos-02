
const fs = require('fs'); // Importo el módulo fs

// Node.js tiene métodos síncronos y asíncronos para leer archivos. 
// Usar métodos asíncronos es ideal para aplicaciones modernas ya que no bloquean el flujo del programa

// readFile se usa para leer el archivo de manera asíncrona, con ello, el programa puede continuar con otras tareas mientras espera la respuesta
fs.readFile('./test.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Error al leer el archivo:', err);
    return;
  }

  console.log('Contenido del archivo:', data);
});

