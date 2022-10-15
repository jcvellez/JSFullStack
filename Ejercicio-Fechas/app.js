let fecha1 = new Date('December 02 2022 12:11:24');
console.log(fecha1.toString());
let fecha2 = new Date('December 02 2022 12:11:24');
console.log(fecha2.toString());

if (fecha1 > fecha2) {
    console.log('fecha1 es mayor');
}else if(fecha2 > fecha1){
    console.log('fecha2 es mayor');
}else{
    console.log('fechas son iguales');
} 