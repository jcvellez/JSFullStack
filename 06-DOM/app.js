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
// let hacerClick= function () {
//     document.getElementById('header-title').textContent='Prueba de click';
//     //console.log('Usted ha hecho click');
// }
// document.getElementById('boton').addEventListener('click',hacerClick);

// document.getElementById('boton').addEventListener('click',);



//Aqui el code que llena la lista
let form = document.getElementById('formAgregar');
let lista = document.getElementById('items');
let filtro = document.getElementById('filtro');

//evento submit del formulario (evento,funcion)
form.addEventListener('submit', agregarItem);
//Evento click de la lista
lista.addEventListener('click', eliminarItem);
//Evento del teclado en el campo de filtro
filtro.addEventListener('keyup', filtarItems);


//Funcion para agregar un item a la lista 
function agregarItem(e) {
   e.preventDefault();
   //creamos el elemneto li
   var newItem = document.getElementById('item').value;
   var li = document.createElement('li');
   li.className = 'list-group-item';
   li.appendChild(document.createTextNode(newItem));
   //creamos el boton de eliminar
   let boton = document.createElement('button');
   boton.className = 'btn btn-danger btn-sm float-right eliminar';
   boton.appendChild(document.createTextNode('X'));

   li.appendChild(boton);

   lista.appendChild(li);
}

//Funcion para eliminar un item a la lista 
function eliminarItem(e) {
   if (e.target.classList.contains('eliminar')) {
      if (confirm('Quieres eliminar este elemento?')) {
         let li = e.target.parentElement;
         lista.removeChild(li);
      }
   }
}

function filtarItems(e) {
   let texto = e.target.value.toLowerCase();
   let items = lista.getElementsByTagName('li');
   Array.from(items).forEach(function (item) {
      //firstChild es xq es el primer elemnto del item el otro elemento es el boton
      let itemNombre = item.firstChild.textContent;
      if (itemNombre.toLowerCase().indexOf(texto) != -1) {
         item.style.display = 'block';
      } else {
         item.style.display = 'none';
      }
   });
}