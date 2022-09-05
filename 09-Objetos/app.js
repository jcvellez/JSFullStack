// let miLibro = {
//     titulo:'El libro de JS',
//     autor:'juankvellez',
//     paginas:400,
//     publicado: false
// }
//console.log(miLibro);



//EJERCICIO
// let persona = {
//     nombre:'juankvellez',
//     edad:35,
//     ciudad: 'Guayaquil'
// }

// persona.edad=30;
// console.log(persona);



//Funciones co objetos
// let miLibroA = {
//     titulo:'El libro de JS',
//     autor:'juankvellez',
//     paginas:400,
//     publicado: false
// }

// let miLibroB = {
//     titulo:'El libro de JS',
//     autor:'juankvellez',
//     paginas:400,
//     publicado: false
// }

// let getResumen = (libro)=>{
//     return {
//         resumen:`${libro.titulo} escrito por ${libro.autor} `,
//         resumenPaginas: `${libro.titulo} tiene ${libro.paginas} pagina`
//     }
// };

// let miLibro = getResumen(miLibroB);
// console.log(miLibro);



//Referencia a objetos
// let persona = {
//     nombre: 'juankvellez',
//     edad: 35,
//     sueldo: 1500
// }

// let cambiarSueldo = (obj, monto) => {
//     return obj.sueldo = monto;    
// }

// let cambio = cambiarSueldo(persona, 1800);
// console.log(persona);



//Metodos
// let persona = {
//     nombre: 'juankvellez',
//     edad: 35,
//     sueldo: 1500,
//     sueldoComision: function(comi){
//         return this.sueldo + comi;
//     }
// }
// persona.sueldo = persona.sueldoComision(300);

// console.log(persona);



//Objetos String
let nombre = 'juankvellez';
console.log(nombre.length);