// //console.log("Estamos en arays");
// let arreglo= new Array("lunes","martes","miercoles","jueves","viernes");

// console.log("longitud=>",arreglo.length);

let persona= ["Juank","Pedro","Luis"];

for (const iterator of persona) {
    setTimeout(() => {
        console.log(iterator);
    }, 3000);   
}