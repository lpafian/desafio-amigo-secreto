// app.js

// Seleccionar elementos del DOM
let inputNombre = document.getElementById('amigo');
let botonAdicionar = document.querySelector('.button-add');
let listaAmigos = document.getElementById('listaAmigos');
let resultado = document.getElementById('resultado');
let botonSortear = document.querySelector('.button-draw');

// Array para almacenar los amigos
let amigos = [];

// Función para agregar un amigo a la lista
function agregarAmigo() {
    let nombre = inputNombre.value.trim(); // Eliminar espacios en blanco

    // Validar si el nombre está vacío
    if (nombre === '' ) {
        alert('Por favor, ingresa un nombre válido.');
        return;
    }

    // Agregar el nombre al array de amigos
    amigos.push(nombre);
    
    // Actualizar la lista visual
    actualizarListaAmigos();

    // Limpiar el campo de entrada
    inputNombre.value = '';
}

// Función para actualizar la lista de amigos visualmente
function actualizarListaAmigos() {
    // Limpiar la lista visual actual
    listaAmigos.innerHTML = '';

    // Crear un elemento de lista para cada amigo
    amigos.forEach(amigo => {
        let li = document.createElement('li');
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}

// Función para sortear un amigo secreto aleatorio
function sortearAmigo() {
    if (amigos.length === 0) {
        alert('Por favor, añade al menos un amigo antes de realizar el sorteo.');
        return;
    }

    // Seleccionar un amigo aleatorio
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSecreto = amigos[indiceAleatorio];

    // Mostrar el resultado en la sección correspondiente
    resultado.innerHTML = `<li><strong>¡El amigo secreto es: ${amigoSecreto}!</strong></li>`;
}
