
// 1
let contactos = [
    {
        nombre: "Reyna",
        puesto: "CEO",
        empresa: "Paradox",
        correo:"reyna@gmail.com",
        numero:6334353530,
    },
    {
        nombre: "Alexs",
        puesto: "Marketing",
        empresa: "Paradox",
        correo:"alexs@gmail.com",
        numero:6735433738,
    },{
        nombre: "Sofia",
        puesto: "Programadora",
        empresa: "Paradox",
        correo:"sofia@gmail.com",
        numero:6234353565,
    }
];

// 2. 
const generarTarjeta = (contacto) =>{
    return `
    **********************
    *   ${contacto.nombre}            *
    *   ${contacto.puesto}     *
    *   ${contacto.empresa}          *
    *   ${contacto.correo}  *
    *   ${contacto.numero}       *
    **********************
    `
    
};

// 3.

for (let i = 0; i < contactos.length; i++) {
    
    
    console.log(generarTarjeta(contactos[i]));
    
    
}
