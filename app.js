// let peso1 = 150;
// let altura1 = 1.65;
// let peso2 = 180;
// let altura2 = 1.68;

// let IMC1 = peso1 / (altura1 * altura1);
// let IMC2 = peso2 / (altura2 * altura2);
// if (IMC1 > IMC2) {
//     console.log("El mayor peso es ",IMC1);
// } else {
//     console.log("El mayor peso es ",IMC2);
// }

// let edad=19;

// edad >=18? console.log("es mayor de edad"):console.log("no es mayor de edad");


// let Pablonota1= 14;
// let Pablonota2= 8;
// let Pablonota3= 16;

// let Marianota1= 12;
// let Marianota2= 18;
// let Marianota3= 10;

// let promedioPablo= (Pablonota1+Pablonota2+Pablonota3)/3;
// let promedioMaria= (Marianota1+Marianota2+Marianota3)/3;

// promedioPablo > promedioMaria ? console.log("Pablo tiene mayor promedio ",promedioPablo)                                
//                                 :
//                                 console.log("Maria tiene mayor promedio ",promedioMaria);


// promedioPablo > 13 ? console.log(" Pablo esta Aprobado",promedioPablo): console.log(" Pablo esta Reprobado",promedioPablo);
// promedioMaria > 13 ? console.log(" Maria esta Aprobado",promedioMaria): console.log(" Maria esta Reprobado",promedioMaria);

// let edad = (anio)=>{
//     return 2022 - anio
// }

// // edad();
// const fecha = new Date();
// console.log(fecha.getFullYear());

//Ejercicio de codificacion 4
// let calificacion = (nombre, resp_positivas) => {
//     if (resp_positivas >= 90 && resp_positivas <= 100) {
//         console.log(nombre, "tiene calificacion A");
//     } else if (resp_positivas >= 78 && resp_positivas <= 89) {
//         console.log(nombre, "tiene calificacion B");
//     } else if (resp_positivas >= 45 && resp_positivas <= 78) {
//         console.log(nombre, "tiene calificacion C");
//     } else if (resp_positivas < 45 && resp_positivas >= 0) {
//         console.log(nombre, "tiene calificacion D");
//     } else
//         console.log(nombre, "calificacion fuera de rango");

// }

// calificacion("Juank", 99);
// let persona2= new Object();
// persona2.nombre='Juank';
// persona2.apellido='Vellez';
// persona2['cargo']= 'Web Developer';

// console.log(persona2);

var persona = {    
    nombre:'Juank',
    apellido:'Vellez',
    gastos:['Futbol','Ingles','Programar'],
    trabajo:'Engeneer',
    esCasado: false,
    anionac: 1986, 
    edad:"",   
    devolverEdad: function(){
         this.edad = 2022- this.anionac;
    }    
}
persona.devolverEdad();
console.log(persona);