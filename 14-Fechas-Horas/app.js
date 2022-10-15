//Manejo de fecha y hora
let ahora= new Date();
let timestamp = ahora.getTime();
console.log(timestamp.toString());    

let fechaActual = new Date(timestamp); 
console.log(fechaActual);

//console.log(ahora.toString());
//// let fecha1= new Date('December 11, 2023 12:12:12');
//// console.log(fecha1.toString());

// console.log(`año actual: ${ahora.getFullYear()}`);
// console.log(`mes actual: ${ahora.getMonth()}`);
// console.log(`dia actual: ${ahora.getDate()}`);
// console.log(`dia en numero actual: ${ahora.getDay()}`);

// console.log(`dia en numero actual: ${ahora.getHours()}`);
// console.log(`dia en numero actual: ${ahora.getMinutes()}`);
// console.log(`dia en numero actual: ${ahora.getSeconds()}`);
// console.log(`dia en numero actual: ${ahora.getMilliseconds()}`);
