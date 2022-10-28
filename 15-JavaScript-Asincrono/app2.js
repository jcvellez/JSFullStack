let getClientesIDS = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(['001', '002', '003']);
    }, 1500);
});

let getCliente = clienteID => {
    return new Promise((resolve, reject) => {
        setTimeout((id) => {
            let cliente = {
                nombre: "Pepin"
            }
            resolve(`${id} - ${cliente.nombre}`)
        }, 1500, clienteID);
    })
};

let getSegmento = id => {
    return new Promise((resolve, reject) => {
        setTimeout((id) => {
            let segmento = ['pyme', 'advance', 'empresarial', 'corporativo'];
            resolve(segmento);
        }, 1500, id);
    })
};

let tipoCliente = id => {
    return new Promise((response, reject) => {
        if (id === 1) {
            setTimeout((id) => {
                response('aprobado');
            }, 1500);
        } else if (id === 2) {
            setTimeout((id) => {
                reject('reprobado');
            }, 1500, id);
        }

    })
};

let miPromesa2 = new Promise((resolve, reject) => {
    if (true) {
        setTimeout(() => {
            resolve('exito');
        }, 2000);
    } else {
        setTimeout(() => {
            reject('Hubo un error');
        }, 2000);
    }

});


getClientesIDS
    .then((Ids) => {
        console.log(Ids);
        return getCliente(Ids[1]);
    })
    .then((cliente) => {
        console.log(cliente);
        return getSegmento(cliente);
    }).then((segmento) => {
        console.log(segmento[3]);
        return miPromesa2;
    }).then((promesa) => {
        console.log(promesa);
        return tipoCliente(2);
    }).then((id) => {
        console.log(id);5
    }).catch((id)=>{
        console.log(id);
    });