//Definicion de las clases
class Libro{
    constructor(titulo, autor, isbn){
        this.titulo = titulo;
        this.autor = autor;
        this.isbn = isbn;
    }
   
}

class UI{
    static mostrarLibros(){

    }   
    static agregarLibro(libro){

    }   
    static eliminarlibro(){

    }  
    static mostrarAlerta(mensaje, clasName){
        const div= document.createElement('div');
        div.className= `alert alert-${clasName}`;
        div.appendChild(document.createTextNode(mensaje));
        const container= document.querySelector('.container');
        const form= document.querySelector('#libro-form');
        container.insertBefore(div,form);
        setTimeout(() => document.querySelector('.alert').remove() , 3000);
    }
    static limpiarCampos(){

    }
}

class Datos{
    static traerLibros(){
        let libros;
        if (localStorage.getItem('libros') === null) {
            libros=[];
        }else{
            libros= JSON.parse(localStorage.getItem('libros'));
        }
        return libros;
    }
    static agregarLibro(libro){
        const libros= Datos.traerLibros();
        libros.push(libro);
        localStorage.setItem('libros',JSON.stringify(libros)); 
    }
    static removerLibro(isbn){

    }
}

//controlar el evento submit
document.querySelector('#libro-form').addEventListener('submit',(e)=>{
    e.preventDefault();
    //Obtener valores de los campos
    const titulo = document.querySelector('#titulo').value;
    const autor = document.querySelector('#autor').value;
    const ISBN = document.querySelector('#ISBN').value;

    if (titulo==='' || autor==='' || isbn==='') {
        UI.mostrarAlerta('Por favor ingrese todos los datos','danger');        
    }else{
        const libro= new Libro(titulo, autor, isbn);
        Datos.agregarLibro(libro);

    }
});