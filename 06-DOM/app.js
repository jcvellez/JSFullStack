// //Examinando el DOM
// //console.dir(document);

// var header = document.getElementById('main-header');
// var headertitle= document.getElementById('header-title');

// headertitle.textContent='Tiutlo de prueba';
// headertitle.innerText='Nuevo titulo';
// headertitle.innerHTML='<h5 id="header-title">Mi titulo en h5</h5>';
// console.log(header);

// let lista= document.getElementsByClassName('list-group-item');
// lista[0].textContent='telefonos android';
// console.log(lista[0]);

// //query selector
// var header= document.querySelector('#main-header');
// header.style.borderBottom='solid 4px #ccc';

// var input= document.querySelector('input');
// input.value='Hola';

// var submit = document.querySelector('input[type="submit"]');
// submit.value='Aceptar';

// var elemento= document.querySelector('.list-group-item');
// elemento.style.color='red';

//query selectorall
// var items = document.querySelectorAll('.list-group-item');
// items[1].style.color= 'red';

// var items = document.querySelectorAll('.list-group-item');
// items[3].style.color= 'green';

// var title= document.querySelectorAll('.title');
// title[1].textContent='Pruebas con queryselectorall';
//title[1].textContent='Prueba';

//pintar fondo de los impares
// var par = document.querySelectorAll('li:nth-child(even)');
// var impar = document.querySelectorAll('li:nth-child(odd)');
// for (const iterator of impar) {
//     iterator.style.backgroundColor='#8B95F2';
// }
// for (const iterator of par) {
//     iterator.style.backgroundColor='#D68DE7';
// }

//impar[0].style.backgroundColor = '#ccc';

//let itemList= document.querySelector('#items');

//children
//console.log(itemList.children);

//firstElementChild
// console.log(itemList.firstElementChild.textContent);
// itemList.firstElementChild.textContent='Microchips';


//Create elements
// let nuevoDiv= document.createElement('div');
// nuevoDiv.className='hola';
// nuevoDiv.id='div-hola';
// nuevoDiv.setAttribute('title','Bienvenido');
// nuevoDiv.textContent='Mi contenido'

// let nuevoNodoText= document.createTextNode('HolaMundoNode');
// nuevoDiv.appendChild(nuevoNodoText);
// console.log(nuevoDiv);

// //ahora los vamos a unir
// let contenedor= document.querySelector('.container');
// console.log(contenedor);

// let h1= document.querySelector('h1');
// console.log(h1);

// contenedor.insertBefore(nuevoDiv,h1);



//Events

let hacerClick= function () {
    document.getElementById('header-title').textContent='Prueba de click';
    //console.log('Usted ha hecho click');
}
document.getElementById('boton').addEventListener('click',hacerClick);

//document.getElementById('boton').addEventListener('click',);
