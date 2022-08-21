// let nombre = 'Juan Carlos';
// let apellido = 'Velez';

// let nombyape= `${nombre} ${apellido}`;
// console.log(`\n${nombyape}`.repeat(5));
// console.log(nombyape.includes('#'));
// console.log(nombyape.startsWith('J'));
// console.log(nombyape.endsWith('z'));



//FUNCIONES FLECHA
//const years= [2000, 2008, 2005, 2012];
//ES6
//let edad6= years.map((el,i)=>`${i+1} ${el}`);
// console.log(edad6);

// const personas=[
//     {
//         nombre:'Pablo',
//         edad: 20
//     },
//     {
//         nombre:'Ana',
//         edad: 25
//     },
//     {
//         nombre:'Carlos',
//         edad: 30
//     },
//     {
//         nombre:'Pepe',
//         edad: 35
//     }
// ];

// let miFiltro= personas.filter( (persona)=> persona.edad < 35 );

// console.log(miFiltro);




//Destructuracion o Destruccion
// let datos = ['Pablo', 25];
// let nombre = datos[0];
// console.log(nombre);
//cuando es un arreglo
// let [nombre,edad] = ['Pablo', 25];
// console.log(nombre);
// console.log(edad);
//cuando es un objeto
// let persona = {
//     nombre:'Juank',
//     edad: 30
// }

// let {nombre,edad}= persona;
// console.log(edad);
// console.log(nombre);

//FUNCION PARA SABER SI ES MAYOR DE EDAD
// const calcularMayoriaEdad = (year)=> {
//   const edad= new Date().getFullYear() - year;
//   const mayoria= edad >= 18 ? true : false;
//   return [edad,mayoria];
// }; 

// const [edad,mayoria] = calcularMayoriaEdad(1990);
// console.log(`Tiene ${edad} años`);
// console.log(`Es mayor de edad: ${mayoria}`);




//MAPS
// const datos = new Map();
// datos.set('nombre','Juank');
// datos.set('edad','36');
// datos.set(1,'jcvellez@live.com');

// console.log(datos.get('nombre'));
// console.log(datos.get(1));

// datos.forEach( (value, key,)=>{
//   console.log( `${key} : ${value}` );
// });




//Spread Oprator
let suma = function (a,b,c,d) {
  return a+b+c+d;
};
//asi se hacia en ES5
let ope1= suma(40,30,12,70);
console.log(ope1);

//Asi se hace en ES6
let valores = [10, 20, 30, 40];
let ope2 = suma(...valores);
console.log(ope2);

let array1 = ['persona1','persona2','persona3'];
let array2 = ['gente1','gente2','gente3'];

let arrayAll= [...array1, ...array2];
console.log(arrayAll);