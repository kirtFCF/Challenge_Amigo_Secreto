// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaAmigos = [];
let contador = 1;

function agregarAmigo(){
    let nombre = document.getElementById("amigo").value.trim();
    if (nombre === ""){
        alert("Por favor, ingresa un nombre.");
    } else if (listaAmigos.includes(nombre)) {
        alert("El nombre ya está en la lista.");
    } else{
        listaAmigos.push(nombre);
    }
    console.log(listaAmigos);
    mostrarLista();
    limpiarLista();
}

function limpiarLista(){
    document.querySelector("#amigo").value = "";
}
function mostrarLista(){
    alert(`lista de amigos: ${listaAmigos.join(", ")}`);
    console.log(`lista de amigos: ${listaAmigos.join(", ")}`);
}

function sortearAmigo(){
    if (listaAmigos.length === 0){
        alert("no hay amigos para sortear");
    }else{
        let indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);
        let amigoSeleccionado = listaAmigos[indiceAleatorio];
        alert(`El amigo seleccionado es: ${amigoSeleccionado}, Usted a sorteado ${contador++} ${contador === 1 ? 'vez' : 'veces'}`);
    }
}
function cantidadDeSorteos(){
    if (listaAmigos.length === 0){
        alert("no hay amigos para sortear");
    }else{
        alert(`Cantidad de sorteos realizados: ${contador}`);
    }
}

