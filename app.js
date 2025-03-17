let nombreAmigos = [];  // Lista de amigos
let sorteados = [];     // Lista de amigos sorteados

// Agrega un amigo a la lista
function agregarAmigo() {
    const input = document.getElementById('amigo');
    const nombre = input.value.trim();

    // Validar que el campo no esté vacío
    if (!nombre) {
        alert('Ingrese un nombre');
        return;
    }

    // Evitar nombres duplicados
    if (nombreAmigos.includes(nombre)) {
        alert('Ese nombre ya está en la lista');
        return;
    }

    // Agregar el nombre al array
    nombreAmigos.push(nombre);

    // Actualizar la lista en la interfaz
    actualizarLista();

    // Limpiar el campo de entrada
    input.value = '';
}

// Actualiza la lista de amigos en la interfaz
function actualizarLista() {
    const listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";

    if (nombreAmigos.length === 0) {
        listaAmigos.innerHTML = "<li>No hay amigos en la lista</li>";
        return;
    }

    nombreAmigos.forEach(nombre => {
        const li = document.createElement("li");
        li.textContent = nombre;
        listaAmigos.appendChild(li);
    });
}

// Realiza el sorteo de amigo secreto asegurando que nadie se asigne a sí mismo
function sortearAmigo() {
    if (nombreAmigos.length === 0) {
        alert('No hay amigos para sortear, por favor ingresa amigos');
        return;
    }

    // Generar un índice aleatorio
    let amigoSecreto = nombreAmigos[Math.floor(Math.random() * nombreAmigos.length)];

    // Verificar que el amigo no haya sido sorteado previamente
    while (sorteados.includes(amigoSecreto)) {
        amigoSecreto = nombreAmigos[Math.floor(Math.random() * nombreAmigos.length)];
    }

    // Agregar el amigo sorteado a la lista de sorteados
    sorteados.push(amigoSecreto);

    // Eliminar el amigo sorteado de la lista de amigos
    const index = nombreAmigos.indexOf(amigoSecreto);
    if (index !== -1) {
        nombreAmigos.splice(index, 1);
    }

    // Mostrar el resultado en la interfaz
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `El amigo secreto sorteado es: <strong>${amigoSecreto}</strong>`;

    // Si todos los amigos han sido sorteados
    if (sorteados.length === nombreAmigos.length) {
        alert('Todos los amigos han sido sorteados');
    }

    // Actualizar la lista de amigos en la interfaz
    actualizarLista();
}

 


