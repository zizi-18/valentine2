let contadorEscapes = 0;

function yesAnswer() {
    window.location.href = "yes.html";
}

function moveButton() {
    contadorEscapes++;

    // Cambia la pregunta
    document.getElementById("preguntaPrincipal").innerText = "Come on, click Yes! 💕";

    // Actualiza el contador
    document.getElementById("mensajeEscapes").innerText = `Nice try! The No button escaped ${contadorEscapes} times! 👀`;

    // Mueve el botón
    const button = document.getElementById("noBtn");
    
    // Evitamos que se salga por los bordes de la pantalla
    const x = Math.random() * (window.innerWidth - button.offsetWidth - 20);
    const y = Math.random() * (window.innerHeight - button.offsetHeight - 20);

    button.style.position = "absolute";
    button.style.left = Math.max(10, x) + "px";
    button.style.top = Math.max(10, y) + "px";
}
