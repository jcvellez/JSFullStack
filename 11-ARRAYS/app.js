let ceviche = ["pescado","mani","chifle"];

// ceviche.push('ultimo'); //agregas al ultimo 
// ceviche.pop(); //borras al ultimo
// ceviche.unshift('primero'); //agregas al inicio
// ceviche.shift(); //borras al inicio

// //ceviche.splice(1,1); //(borra en una posic especifica ,la cantidad q le pongas)
// ceviche.splice(1,0,"limon");
// console.log(ceviche);

// ceviche.forEach(function(item, index) {
//     console.log(`${index} : ${item}`);
// });

//busquedas en un arreglo

const ingredientes = [
    {
        codigo:1,
        titulo:'pescado'
    },
    {
        codigo:2,
        titulo:'mani'
    },
    {
        codigo:3,
        titulo:'chifle'
    }
];

let index= ingredientes.findIndex(function(ing) {
    //console.log(ing);    
    return ing.titulo === "mani";     
});

console.log(index);