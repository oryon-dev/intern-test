const boton = document.querySelector("#dark-mode-btn");
const tarjeta = document.querySelector(".profile-card");

function cambiarModo() {
    tarjeta.classList.toggle("dark-theme");
}

boton.addEventListener("click", cambiarModo);