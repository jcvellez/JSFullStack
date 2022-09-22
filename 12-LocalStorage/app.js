localStorage.setItem("nameUser","Juank");
console.log(localStorage.getItem("nameUser"));
localStorage.setItem("ubicacion","Guayaquil");
console.log(`Mi ubicacion es: ${localStorage.getItem("ubicacion")}`);

localStorage.clear();
//console.log(`Mi ubicacion es: ${localStorage.getItem("ubicacion")}`);



//Notacion JSON
let obj= {
    nombre:"Juank",
    edad:"35"
}

let objJson= JSON.stringify(obj);
console.log(objJson);

localStorage.setItem("obj",objJson);
let valorObj= localStorage.getItem("obj");
console.log(`Mi objeto es => ${valorObj}`);