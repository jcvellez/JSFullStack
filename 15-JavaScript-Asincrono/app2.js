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

let getSegmento = id =>{
    return new Promise((resolve, reject) => {
        setTimeout((id) => {
            let segmento = ['pyme','advance','empresarial','corporativo'];
            resolve(segmento);
        }, 1500,id);
    })
};

getClientesIDS
    .then((Ids) => {
        console.log(Ids);
        return getCliente(Ids[1]);
    })
    .then((cliente) => {
        console.log(cliente);
        return getSegmento(cliente);
    }).then((segmento)=>{
        console.log(segmento[3]);
    }
    );