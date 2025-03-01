/** PROYECTO: Amigo Secreto  */

// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Array para almacenar los nombres de los amigos
let amigos = [];

// Función para agregar amigos a la lista
function agregarAmigo() {
    let input = document.getElementById("amigo");
    let nombreAmigo = input.value.trim();

    if (nombreAmigo === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }

    amigos.push(nombreAmigo);
    input.value = ""; // Limpiar el campo de entrada
    actualizarLista();
}

// Funcion para actualizar la lista de amigos
function actualizarLista()
{
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = "";
    let i;

    for(i=0; i<amigos.length; i++)
    {
        let li = document.createElement("li");
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}

// Funcion para sortear los amigos
function sortearAmigo()
{
    if(amigos.length === 0)
    {
        alert("No hay nombres en la lista, no se puede sortear.");
        return;
    }

    let indice = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indice];

    let resultado = document.getElementById('resultado');
    resultado.innerHTML =  `<li>El amigo secreto es: <strong>${amigoSorteado}</strong></li>`;

}
 

