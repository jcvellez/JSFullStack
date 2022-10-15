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

let getUsuarios = () => {
    setTimeout(() => {
        let userIDs = ['101', '102', '103'];
        console.log(userIDs);
        setTimeout(id => {
            let user = {
                email: 'jcvellez@gmail.com',
                nombre: 'Juan Carlos'
            }
            console.log(`${id} - ${user.nombre} - ${user.email}`);
            setTimeout(idPermiso => {
                let permisos = ['admin', 'creador'];
                console.log(`${idPermiso} - ${permisos[0]}`);                
            }, 1500, userIDs[2]);
        }, 1500, userIDs[2]);
    }, 1500);
}

getUsuarios();