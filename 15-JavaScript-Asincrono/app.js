//Javascript Asyncrono
// let segundo = () => {
//     setTimeout(() => {
//         console.log('Llamada a segundo');
//     }, 2000);
// }


// let primero = () => {
//     console.log('Inicio de primero');
//     segundo();    
//     console.log('Fin de primero');
// }

// primero();

///codigo GetUsuarios
// let getUsuarios = () => {
//     setTimeout(() => {
//         let userIDs = ['101', '102', '103'];
//         console.log(userIDs);
//         setTimeout(id => {
//             let user = {
//                 email: 'jcvellez@gmail.com',
//                 nombre: 'Juan Carlos'
//             }
//             console.log(`${id} - ${user.nombre} - ${user.email}`);
//             setTimeout(idPermiso => {
//                 let permisos = ['admin', 'creador'];
//                 console.log(`${idPermiso} - ${permisos[0]}`);                
//             }, 1500, userIDs[2]);
//         }, 1500, userIDs[2]);
//     }, 1500);
// }

// getUsuarios();


///Ejemplo del uso de promesas
//Ejemplo 1
let promesa = new Promise((resolve, reject) => {
    if (false) {
        resolve('Prueba exitosa');
    } else {
        reject('Prueba fallida');
    }
});

promesa.then(response => {
    console.log(response);
}).catch(error => {
    console.log(error);
});


//Ejemplo 2
let miPromesa = Promise.resolve('Comida');
miPromesa.then(respuesta => console.log(respuesta));


//Ejemplo3
let miPromesa2 = new Promise((resolve, reject) => {
    if (true) {
        setTimeout(() => {
            resolve(4);
        }, 2000);
    } else {
        setTimeout(() => {
            reject('Hubo un error');
        }, 2000);
    }

});

miPromesa2.then((response) => {
    response *= 2;
    console.log(response);
}).catch(error => {
    console.log(error);
});