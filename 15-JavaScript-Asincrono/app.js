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


// De CallBacks a Promesas
//metodo trae el arreglo completo
let getUsuariosIDs = new Promise((response, reject) => {
    setTimeout(() => {
        response(['101', '102', '103']);
    }, 1500);
});
//metodo devuleve un usuario
let getUsuario = userID => {
    return new Promise((resolve, reject) => {
        setTimeout((id) => {
            let usuario = {
                email: 'jcvellez@gmail.com',
                nombre: 'Juan Carlos'
            }
            resolve(`${id} - ${usuario.nombre} - ${usuario.email}`);
        }, 1500, userID);
    })
};
//metodo devuelve un permiso
let getPermisos = id => {
    return new Promise((resolve, reject) => {
        setTimeout((id) => {
            let permiso = ['admin', 'creador'];
            resolve(permiso[1]);
        }, 1500, id);
    })
};


//llamado principal
getUsuariosIDs
    .then(IDs => {
        console.log(IDs);
        return getUsuario(IDs[2]);
    })
    .then((usuario) => {
        console.log(usuario);
        return getPermisos(usuario.id);
    })
    .then((permisos)=>{
        console.log(permisos);
    })
    .catch(() => {
        console.log('Error');
    });


// ///Ejemplo del uso de promesas
// //Ejemplo 1
// let promesa = new Promise((resolve, reject) => {
//     if (false) {
//         resolve('Prueba exitosa');
//     } else {
//         reject('Prueba fallida');
//     }
// });

// promesa.then(response => {
//     console.log(response);
// }).catch(error => {
//     console.log(error);
// });


// //Ejemplo 2
// let miPromesa2a = Promise.resolve('Comida exitosa');
// let miPromesa2b = Promise.reject('Comida fallida');
// miPromesa2a.then(respuesta => console.log(respuesta));
// miPromesa2b.catch(error => console.log(error));


// //Ejemplo3
// let miPromesa2 = new Promise((resolve, reject) => {
//     if (true) {
//         setTimeout(() => {
//             resolve(4);
//         }, 2000);
//     } else {
//         setTimeout(() => {
//             reject('Hubo un error');
//         }, 2000);
//     }

// });

// miPromesa2.then( response => {
//     response *= 2;
//     console.log(response);
// }).catch( error => {
//     console.log(error);
// });