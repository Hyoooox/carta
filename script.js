function responder(respuesta) {
    var respuestaTexto = document.getElementById("respuesta");
    if (respuesta === "si") {
        respuestaTexto.textContent = "TE AMO MUCHO MI VIDA!!! MUAAAKKKK <3";
    } else {
        respuestaTexto.textContent = "¡Oh no! Quizás la próxima vez. Aún así, te amo mucho.";
    }
}
