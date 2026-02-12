function yesAnswer() {
    window.location.href = "yes.html";
}

function moveButton() {
    const button = document.getElementById("noBtn");
    const x = Math.random() * (window.innerWidth - 100);
    const y = Math.random() * (window.innerHeight - 50);

    button.style.position = "absolute";
    button.style.left = x + "px";
    button.style.top = y + "px";
}
