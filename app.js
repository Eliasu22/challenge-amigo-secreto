// Variables globales
let listaAmigos = [];
let listaNombresMostrados = document.getElementById("listaAmigos");
let listaNombresSorteados = [];
let nombreMostrado = document.getElementById("resultado");

// Función para agregar amigos a la lista
function agregarAmigo() {
    let nombreAmigo = document.getElementById("amigo").value.trim();
    let regex = /^[A-Za-zÁÉÍÓÚáéíóúñÑ\s]+$/; // Solo letras y espacios

    if (nombreAmigo === "") {
        alert("Por favor, inserte un nombre.");
        return;
    } else if (!regex.test(nombreAmigo)) {
        alert("El nombre solo puede contener letras y espacios.");
        return;
    } else if (listaAmigos.includes(nombreAmigo)) {
        alert("Este nombre ya ha sido ingresado.");
        return;
    }

    nombreAmigo = nombreAmigo.toLowerCase().replace(/\b\w/g, (char) => char.toUpperCase());
    listaAmigos.push(nombreAmigo);
    document.getElementById("amigo").value = "";
    actualizarLista();
}

// Función para actualizar la lista en pantalla
function actualizarLista() {
    listaNombresMostrados.innerHTML = "";
    listaAmigos.forEach((nombre) => {
        let li = document.createElement("li");
        li.textContent = nombre;
        listaNombresMostrados.appendChild(li);
    });
}

// Función para sortear amigos
function sortearAmigo() {
    if (listaAmigos.length === 0) {
        alert("No hay ningún nombre disponible.");
        return;
    } else if (listaNombresSorteados.length === listaAmigos.length) {
        alert("Todos los nombres han sido sorteados.");
        return;
    }

    let nombreSorteado = "";
    while (nombreSorteado === "" || listaNombresSorteados.includes(nombreSorteado)) {
        let indiceSorteado = Math.floor(Math.random() * listaAmigos.length);
        nombreSorteado = listaAmigos[indiceSorteado];
    }

    listaNombresSorteados.push(nombreSorteado);
    nombreMostrado.innerHTML = `<li>El amigo secreto es: <strong>${nombreSorteado}</strong></li>`;
}

// Función para reiniciar el sorteo
function reiniciarPrograma() {
    listaAmigos = [];
    listaNombresSorteados = [];
    nombreMostrado.innerHTML = "";
    actualizarLista();
}

