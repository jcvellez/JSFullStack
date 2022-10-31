// Import the functions you need from the SDKs you need
//import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration


// Initialize Firebase
//const app = initializeApp(firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service

/*<li class="collection-item">
    <span>Tarea 1</span>
    <i class="material-icons secondary-content">delete</i>
    <a href="#modal1" class="modal-trigger secondary-content">
        <i class="material-icons">edit</i>
    </a>
</li>*/
let lista = document.getElementById('lista-tareas');
let form = document.getElementById('add-task-form');
let updateBtn= document.getElementById('updateBtn');
let updateID = null;
let newTitulo='';

let renderList = (doc) => {
    let li = document.createElement('li');
    li.className = 'collection-item';
    li.setAttribute('data-id', doc.id);

    let div = document.createElement('div');
    let titulo = document.createElement('span');
    titulo.textContent = doc.data().titulo;
    let enlace = document.createElement('a');
    enlace.href = '#modal1';
    enlace.className = 'modal-trigger secondary-content';

    let editBtn = document.createElement('i');
    editBtn.className = 'material-icons';
    editBtn.innerText = 'donut_large';

    let delBtn = document.createElement('i');
    delBtn.className = 'material-icons secondary-content';
    delBtn.innerText = 'delete';

    enlace.appendChild(editBtn);
    div.appendChild(titulo);
    div.appendChild(delBtn);
    div.appendChild(enlace);
    li.appendChild(div);

    delBtn.addEventListener('click', e => {
        let id = e.target.parentElement.parentElement.getAttribute('data-id');
        db.collection('tareas').doc(id).delete();
        console.log(id);
    });

    editBtn.addEventListener('click',e=>{
        updateID= e.target.parentElement.parentElement.parentElement.getAttribute('data-id');
        
    });

    lista.append(li);
}

updateBtn.addEventListener('click',e=>{
    newTitulo= document.getElementsByName('newTitle')[0].value;
    db.collection('tareas').doc(updateID).update({
        titulo: newTitulo
    })
    document.getElementsByName('newTitle')[0].value='';
});

form.addEventListener('submit', (e) => {
    e.preventDefault();
    db.collection('tareas').add({
        titulo: form.titulo.value
    })
    form.titulo.value = '';
})

db.collection('tareas').orderBy('titulo').onSnapshot(snapshot => {
    let cambios = snapshot.docChanges();
    cambios.forEach(cambio => {
        if (cambio.type == 'added') {
            renderList(cambio.doc);
        } else if (cambio.type == 'modified') {
            let li= lista.querySelector(`[data-id=${cambio.doc.id}]`);
            li.getElementsByTagName('span')[0].textContent= newTitulo; 
            newTitulo='';          
        } else if (cambio.type == 'removed') {
            let li= lista.querySelector(`[data-id=${cambio.doc.id}]`);
            lista.removeChild(li);
        }
    });
});