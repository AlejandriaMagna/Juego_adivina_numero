document.addEventListener("DOMContentLoaded", function () {
    const resultado = document.getElementById("resultado"); // Elemento donde se mostrará el resultado
    const input = document.getElementById("numeroIntento"); // Campo de entrada para el intento del usuario
    const boton = document.getElementById("botonAdivinar"); // Botón para verificar el intento
    const botonReset = document.createElement("button"); // Crea un botón de reset dinámicamente
    botonReset.textContent = "Reiniciar"; // Texto del botón de reset
    botonReset.style.display = "none"; // Oculta el botón inicialmente
    document.body.appendChild(botonReset); // Agrega el botón al cuerpo del documento

    let numeroSecreto = Math.floor(Math.random() * 100) + 1; // Genera un número aleatorio entre 1 y 100
    let intentos = 0; // Contador de intentos

    function verificarIntento() {
        const intento = parseInt(input.value); // Convierte el valor ingresado a un número entero

        if (isNaN(intento)) { // Verifica si el valor ingresado no es un número válido
            resultado.textContent = "Por favor, ingresa un número válido."; // Muestra un mensaje de error
            return; // Sale de la función
        }

        intentos++; // Incrementa el contador de intentos

        if (intento === numeroSecreto) { // Verifica si el intento es igual al número secreto
            resultado.textContent = "¡Felicidades! Adivinaste el número"; // Mensaje de éxito
            finalizarJuego(); // Finaliza el juego
        } else if (intento < numeroSecreto) { // Verifica si el intento es menor que el número secreto
            resultado.textContent = "El número es más alto..."; // Mensaje indicando que el número es mayor
        } else { // Si el intento es mayor que el número secreto
            resultado.textContent = "El número es más bajo..."; // Mensaje indicando que el número es menor
        }

        if (intentos >= 3 && intento !== numeroSecreto) { // Si el usuario alcanza el límite de intentos
            resultado.textContent = `Lo siento, has alcanzado el límite de intentos. El número era ${numeroSecreto}.`; // Muestra el número correcto
            finalizarJuego(); // Finaliza el juego
        }
    }

    function finalizarJuego() {
        boton.disabled = true; // Deshabilita el botón de adivinar
        input.disabled = true; // Deshabilita el campo de entrada
        botonReset.style.display = "block"; // Muestra el botón de reset
    }

    function reiniciarJuego() {
        numeroSecreto = Math.floor(Math.random() * 100) + 1; // Genera un nuevo número secreto
        intentos = 0; // Reinicia el contador de intentos
        resultado.textContent = ""; // Limpia el mensaje de resultado
        input.value = ""; // Limpia el campo de entrada
        boton.disabled = false; // Habilita el botón de adivinar
        input.disabled = false; // Habilita el campo de entrada
        botonReset.style.display = "none"; // Oculta el botón de reset
    }

    boton.addEventListener("click", verificarIntento); // Ejecuta la función al hacer clic en el botón

    input.addEventListener("keyup", function (event) { // Ejecuta la función al presionar Enter en el campo de entrada
        if (event.key === "Enter") { // Verifica si la tecla presionada es Enter
            verificarIntento(); // Llama a la función
        }
    });

    botonReset.addEventListener("click", reiniciarJuego); // Ejecuta la función de reinicio al hacer clic en el botón de reset
});