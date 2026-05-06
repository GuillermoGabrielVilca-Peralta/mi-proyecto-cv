function agregarArchivo() {
    const input = document.getElementById("nuevoArchivo");
    const lista = document.getElementById("lista-archivos");

    if (input.value !== "") {
        const li = document.createElement("li");
        li.textContent = input.value;
        lista.appendChild(li);

        input.value = "";
    }
}