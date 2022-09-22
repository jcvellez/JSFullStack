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

let buscarIngrediente= function (ingredientes,titulo) {
    const index= ingredientes.findIndex(function (ing,index) {
        return ing.titulo === titulo;
    });
    return index;
}
// let index= ingredientes.findIndex(function(ing){
//     //console.log(ing);    
//     return ing.titulo === "mani";     
// });

// let obj= ingredientes[buscarIngrediente(ingredientes, 'chifle')];
// console.log(ingredientes.indexOf(obj));

// let filtrarIngredientes = ingredientes.filter(function(ing,index){
//       return ing.titulo.includes('fl');  
// }); 
// console.log(filtrarIngredientes);



//Uso de filter
// const paises = ['Ecuador', 'Colombia', 'Peru', 'España', 'Mexico'];
// const result = paises.filter(p => p.includes('o'));
// console.log(result);



//ordenamiento con metodo sort
console.log(ingredientes);

ingredientes.sort(function (a,b){
    if (a.titulo > b.titulo) {
        return 1;
    }
    if (a.titulo < b.titulo) {
        return -1;
    }
    return 0;
});

console.log(ingredientes);
